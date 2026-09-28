'use client';

import { useEffect, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    let rafId: number;

    // Dynamic import keeps Lenis out of the initial server/edge bundle,
    // preventing the ChunkLoadError in Next.js dev mode.
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);

      // Cleanup on unmount
      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
