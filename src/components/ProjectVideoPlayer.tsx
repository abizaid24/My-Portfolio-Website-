'use client';

import { useState, useRef } from 'react';
import { Code2 } from 'lucide-react';
import { Project } from '@/data/profile';
import MuxVideo from '@/components/ui/MuxVideo';

interface ProjectVideoPlayerProps {
  project: Project;
  className?: string;
  autoPlayOnHover?: boolean;
}

export default function ProjectVideoPlayer({
  project,
  className = '',
  autoPlayOnHover = true,
}: ProjectVideoPlayerProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const hasMuxVideo = Boolean(project.muxPlaybackId);
  const hasLocalVideo = Boolean((project.video || project.videoUrl) && !videoError);
  const hasVideo = hasMuxVideo || hasLocalVideo;

  const handleMouseEnter = () => {
    if (!autoPlayOnHover || hasMuxVideo) return;
    if (hasLocalVideo && videoRef.current) {
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true);
      }).catch(() => {
        setVideoError(true);
      });
    }
  };

  const handleMouseLeave = () => {
    if (!autoPlayOnHover || hasMuxVideo) return;
    if (hasLocalVideo && videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  // Generate a procedural background gradient pattern based on project accent color & category
  const getVisualPattern = () => {
    switch (project.id) {
      case 'nutria-ai':
        return 'from-emerald-950 via-neutral-900 to-neutral-950 border-emerald-500/20';
      case 'airlynk-ai':
        return 'from-blue-950 via-neutral-900 to-neutral-950 border-blue-500/20';
      case 'taskflow-ai':
        return 'from-purple-950 via-neutral-900 to-neutral-950 border-purple-500/20';
      case 'khanaywala-ai':
        return 'from-rose-950 via-neutral-900 to-neutral-950 border-rose-500/20';
      default:
        return 'from-neutral-900 via-neutral-950 to-black border-neutral-800';
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${getVisualPattern()} border shadow-subtle transition-transform duration-700 ease-out group-hover:scale-[1.01] ${className}`}
    >
      {/* Background Micro Grid Motif */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Video Element if Video Exists */}
      {hasMuxVideo ? (
        <MuxVideo
          playbackId={project.muxPlaybackId as string}
          fallbackImage={project.image}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : hasLocalVideo ? (
        <video
          ref={videoRef}
          src={project.video || project.videoUrl || ''}
          poster={project.videoPoster || project.image}
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : null}

      {/* Fallback Editorial Poster / Graphic Container — only shown when there's no real
          video to display yet. Once a video exists, it should be the whole show, not
          have a fake code HUD layered on top of it. */}
      {!hasVideo && (
        <div className="relative z-10 w-full h-full p-5 sm:p-6 flex flex-col justify-between">
          {/* Top Tag Bar */}
          <div className="flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-[11px] font-mono font-medium border border-white/15">
              {project.category}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
              {project.highlightTag}
            </span>
          </div>

          {/* Center Code Architecture Card Motif */}
          <div className="my-auto py-3 font-mono text-xs text-neutral-300/90 bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
            <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 mb-1">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>architecture_spec.py</span>
            </div>
            <div className="truncate text-[12px] text-emerald-300 font-semibold mb-0.5">
              class {project.name.replace(/\s+/g, '')}Service(FastAPI):
            </div>
            <div className="truncate text-[10px] text-neutral-400">
              &nbsp;&nbsp;models: [{project.technologies.slice(0, 3).join(', ')}]
            </div>
          </div>

          {/* Bottom Role Indicator */}
          <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
            <span>{project.role}</span>
          </div>
        </div>
      )}
    </div>
  );
}
