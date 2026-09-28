'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'view' | 'open'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const cursorType = cursorTarget.getAttribute('data-cursor');
        if (cursorType === 'view') {
          setCursorVariant('view');
          return;
        }
        if (cursorType === 'open') {
          setCursorVariant('open');
          return;
        }
      }

      if (target.closest('a, button, [role="button"], input, select, textarea')) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const variants: Variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      height: 12,
      width: 12,
      backgroundColor: 'rgba(9, 9, 11, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      transition: { type: 'spring' as const, damping: 30, stiffness: 400, mass: 0.2 },
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: 'rgba(9, 9, 11, 0.15)',
      border: '1.5px solid rgba(9, 9, 11, 0.8)',
      backdropFilter: 'blur(2px)',
      transition: { type: 'spring' as const, damping: 25, stiffness: 350, mass: 0.2 },
    },
    view: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      height: 72,
      width: 72,
      backgroundColor: '#09090b',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: { type: 'spring' as const, damping: 25, stiffness: 350, mass: 0.2 },
    },
    open: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      height: 72,
      width: 72,
      backgroundColor: '#3b82f6',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      transition: { type: 'spring' as const, damping: 25, stiffness: 350, mass: 0.2 },
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full text-white font-medium text-xs tracking-wider uppercase select-none shadow-sm"
      variants={variants}
      animate={cursorVariant}
    >
      {cursorVariant === 'view' && <span>VIEW</span>}
      {cursorVariant === 'open' && <span>OPEN</span>}
    </motion.div>
  );
}
