import Image from 'next/image';
import { ReactNode } from 'react';

interface IPhoneFrameProps {
  children: ReactNode;
  className?: string;
}

// Screen cutout, measured directly off the frame photo's own transparent
// pixels (flood-fill from the screen center out to the bezel edge on every
// side), not eyeballed — so content lines up with the real glass edge at
// any render size instead of drifting on a hand-guessed CSS bezel.
// Horizontal and vertical corner radius are kept separate (4.4% of width,
// 2.0% of height) because the screen itself is far taller than it is wide —
// a single percentage would stretch the corners into ellipses.
const SCREEN_INSET = { top: '2.122%', bottom: '2.122%', left: '5.128%', right: '5.128%' };
const SCREEN_RADIUS = '4.4% / 2%';

/**
 * Real iPhone mockup photograph used as the frame, overlaid on top of the
 * screen content — instead of a hand-built CSS bezel (buttons, Dynamic
 * Island, gradient "metal" all drawn with divs). The photo already has a
 * true transparent screen cutout, so it sits at z-20 above the content and
 * nothing needs to be redrawn: real bezel curvature, buttons, camera and
 * Dynamic Island all come from the asset itself.
 */
export default function IPhoneFrame({ children, className = '' }: IPhoneFrameProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ aspectRatio: '507 / 1037' }}>
      {/* Screen content, clipped exactly to the photo's real cutout */}
      <div
        className="absolute overflow-hidden bg-black"
        style={{ ...SCREEN_INSET, borderRadius: SCREEN_RADIUS }}
      >
        {children}
      </div>

      {/* Real iPhone frame photo on top — bezel, buttons, camera, Dynamic Island */}
      <Image
        src="/images/mockups/iphone-frame.png"
        alt=""
        fill
        sizes="(max-width: 640px) 260px, 320px"
        className="absolute inset-0 z-20 pointer-events-none select-none"
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
