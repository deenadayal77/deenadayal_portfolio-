import type { Variants, Transition } from 'framer-motion';

/* ============================================================
   Motion system — Emil Kowalski standards.
   Animate transform + opacity ONLY.
   ============================================================ */

// ── Easing curves ────────────────────────────────────────────
// Strong expo-out: for scroll-reveal entrances
export const ease = [0.16, 1, 0.3, 1] as const;

// Strong ease-out: for UI interactions (dropdowns, hovers, tooltips)
// Starts faster than ease, lands crisply
export const easeOut = [0.23, 1, 0.32, 1] as const;

// Ease-in-out: for elements that are already visible and move on screen
export const easeInOut = [0.77, 0, 0.175, 1] as const;

// iOS drawer curve (Ionic): for drawers, sheets, panels sliding in
export const easeDrawer = [0.32, 0.72, 0, 1] as const;

// ── Springs ──────────────────────────────────────────────────
// Layout transitions (nav underline, tab indicator, filter pill)
export const spring: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 38,
  mass: 0.8,
};

// Softer spring: decorative mouse tracking (Magnetic)
export const softSpring: Transition = {
  type: 'spring',
  stiffness: 250,
  damping: 20,
};

// Modal spring: slightly springy so it feels alive, not mechanical
export const modalSpring: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 28,
  mass: 0.9,
};

// ── Stagger ──────────────────────────────────────────────────
// Keep stagger at 40–80ms per STANDARDS — longer feels slow
export const stagger = (staggerChildren = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

// ── Scroll-reveal variants ────────────────────────────────────
// y:12 not 20 — large travel looks floaty for a SaaS portfolio
// 500ms not 600ms — snappier without losing elegance
export const rise: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

// Tighter secondary reveals (body text, labels)
export const riseSmall: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease } },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease } },
};

// Clip-up for headlines — only use on rare/first-time elements
export const clipUp: Variants = {
  hidden: { opacity: 0, y: '110%' },
  show: { opacity: 1, y: '0%', transition: { duration: 0.75, ease } },
};

// Card entrance: barely visible scale — never scale(0)
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease },
  },
};

// ── Directional variants (tab content, side panels) ──────────
export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.28, ease: easeOut } },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.28, ease: easeOut } },
};

// Tab content switch: asymmetric — 180ms enter, 120ms exit
export const tabContent: Variants = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.18, ease: easeOut } },
  exit: { opacity: 0, x: -6, transition: { duration: 0.12, ease: easeOut } },
};

// ── Viewport config ───────────────────────────────────────────
// -8% fires reveals a bit before the element is fully in view — feels responsive
// (was -12%, which fired too late and felt like the page was lagging behind scroll)
export const viewport = { once: true, margin: '0px 0px -8% 0px' } as const;
