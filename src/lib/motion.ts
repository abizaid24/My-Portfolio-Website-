import { Variants } from 'framer-motion';

// Motion Duration Tokens
export const DURATION = {
  FAST: 0.18,
  MEDIUM: 0.35,
  SLOW: 0.65,
  HERO: 0.85,
};

// Custom Studio Cubic Bezier Easing
export const EASE = [0.16, 1, 0.3, 1] as const;

// Stagger Container Variant
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Fade Up Item Variant
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.SLOW,
      ease: EASE,
    },
  },
};

// Hero Stagger Timeline Items
export const heroItemVariants = (delaySeconds: number): Variants => ({
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.HERO,
      ease: EASE,
      delay: delaySeconds,
    },
  },
});

export const heroTextRevealLeft: Variants = {
  hidden: { opacity: 0, y: -30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: EASE,
      delay: 0.3, // 300ms — top name reveals first, behind the portrait
    },
  },
};

export const heroTextRevealRight: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: EASE,
      delay: 0.9, // 900ms — bottom name pops in front, on top of the portrait, last
    },
  },
};

// Bottom-to-top reveal: a clip-path wipe uncovers the portrait from the
// bottom edge upward. Opacity resolves quickly so the image is already
// visible while the wipe keeps climbing for another second — that overlap
// is what actually reads as the picture "growing" into place, rather than
// the whole thing just fading in at once.
export const heroPortraitVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 1.02,
    clipPath: 'inset(100% 0% 0% 0%)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      opacity: { duration: 0.45, ease: 'easeOut', delay: 0.6 },
      y: { duration: 1.5, ease: EASE, delay: 0.6 },
      scale: { duration: 1.5, ease: EASE, delay: 0.6 },
      clipPath: { duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.6 },
    },
  },
};
