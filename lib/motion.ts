import type { Variants, Transition } from 'framer-motion';

/* ============================================================
   Centralized motion system.
   Everything animates transform + opacity ONLY so the compositor
   can run it on the GPU at 60fps with no layout thrash.
   ============================================================ */

// Smooth "expo-out" curve for entrances
export const ease = [0.16, 1, 0.3, 1] as const;

// Spring used for interactive / layout motion
export const spring: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 32,
  mass: 0.9,
};

export const softSpring: Transition = {
  type: 'spring',
  stiffness: 170,
  damping: 26,
};

// Container that staggers its children into view
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

// Standard rise-in reveal
export const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const riseSmall: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};

// Per-word/char clip reveal for headlines
export const clipUp: Variants = {
  hidden: { opacity: 0, y: '110%' },
  show: { opacity: 1, y: '0%', transition: { duration: 0.9, ease } },
};

// Shared viewport config — fire once, a little before fully in view
export const viewport = { once: true, margin: '0px 0px -12% 0px' } as const;
