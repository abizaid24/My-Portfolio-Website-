'use client';

import { useEffect, useRef, useState } from 'react';

interface MuxVideoProps {
  playbackId: string;
  className?: string;
  /** Shown instead of a dead black box if the Mux stream can't be loaded
   *  (wrong/expired playback ID, asset not public, transient outage, etc.). */
  fallbackImage?: string;
}

/**
 * Renders a Mux-hosted video as a plain <video> element with no player
 * chrome. hls.js is tried FIRST on every browser (it works correctly on
 * Chrome, Firefox, Edge, and desktop Safari via MediaSource Extensions);
 * native <video src="...m3u8"> is only used as a fallback when hls.js
 * reports it isn't supported (mainly iOS Safari, where Apple restricts MSE).
 *
 * Checking `video.canPlayType('application/vnd.apple.mpegurl')` FIRST — the
 * more commonly-seen pattern online — is a real bug: some Chromium builds
 * return a truthy "maybe" for that query without actually being able to
 * demux an HLS manifest, so the browser takes the native path, fails, and
 * throws a MEDIA_ERR_SRC_NOT_SUPPORTED error. That's exactly what showed up
 * in the console. Trying hls.js first avoids it entirely.
 *
 * Failure handling: hls.js fatal errors are split into network/media errors
 * (recoverable — retried in place per Mux/hls.js guidance) vs everything
 * else (unrecoverable — e.g. a bad/expired playback ID, or the asset isn't
 * public). Only after an unrecoverable error, or after one failed retry, do
 * we fall back to a static image so the slot never just goes black.
 */
export default function MuxVideo({ playbackId, className = '', fallbackImage }: MuxVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !playbackId) return;

    setFailed(false);

    let hls: import('hls.js').default | null = null;
    let cancelled = false;
    let recoveryAttempted = false;
    const src = `https://stream.mux.com/${playbackId}.m3u8`;

    const tryPlay = () => {
      video.play().catch((err) => {
        // Autoplay can be legitimately blocked before any user interaction
        // with the page at all — the poster just stays visible until then.
        console.warn(`[MuxVideo] autoplay didn't start for ${playbackId}:`, err?.message || err);
      });
    };

    const giveUp = () => {
      if (!cancelled) setFailed(true);
    };

    import('hls.js')
      .then(({ default: Hls }) => {
        if (cancelled) return;

        if (Hls.isSupported()) {
          hls = new Hls({ enableWorker: true });
          hls.on(Hls.Events.ERROR, (_event, data) => {
            console.error(`[MuxVideo] HLS error for ${playbackId}:`, data.type, data.details, data.fatal ? '(fatal)' : '');
            if (!data.fatal) return;

            // One recovery attempt for genuinely transient issues, per
            // hls.js's own recommended pattern — a network hiccup or a
            // decoder hiccup shouldn't permanently kill the player.
            if (!recoveryAttempted && (data.type === Hls.ErrorTypes.NETWORK_ERROR || data.type === Hls.ErrorTypes.MEDIA_ERROR)) {
              recoveryAttempted = true;
              if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                hls?.startLoad();
              } else {
                hls?.recoverMediaError();
              }
              return;
            }

            // Anything else fatal (or a repeat failure) means this
            // playback ID isn't playable right now — stop and fall back.
            hls?.destroy();
            giveUp();
          });
          hls.on(Hls.Events.MANIFEST_PARSED, tryPlay);
          hls.loadSource(src);
          hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          // iOS Safari and similar: hls.js/MSE unsupported, use native HLS.
          video.src = src;
          video.addEventListener('loadedmetadata', tryPlay, { once: true });
          video.addEventListener('error', () => {
            console.error(`[MuxVideo] native <video> failed to load ${playbackId}`, video.error);
            giveUp();
          });
        } else {
          console.error(`[MuxVideo] no HLS playback method available for ${playbackId} in this browser`);
          giveUp();
        }
      })
      .catch((err) => {
        console.error('[MuxVideo] failed to load hls.js library:', err);
        giveUp();
      });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [playbackId]);

  if (failed) {
    // Graceful degrade: the project's own screenshot instead of a dead
    // black box. If no fallback was supplied, the Mux poster is still the
    // last resort (it may itself 404 if the asset is truly gone).
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={fallbackImage || `https://image.mux.com/${playbackId}/thumbnail.jpg?width=900&fit_mode=preserve`}
        alt=""
        className={className}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload="auto"
      poster={`https://image.mux.com/${playbackId}/thumbnail.jpg?width=900&fit_mode=preserve`}
    />
  );
}
