'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useReducedMotion,
} from 'framer-motion';

/**
 * Custom cursor (desktop, fine-pointer only) + top scroll-progress bar.
 * Pointer position is fed into Framer motion values, which write directly
 * to `transform` — no React re-render per frame, no layout, 60fps.
 */
export default function SiteChrome() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);

  // raw pointer -> dot follows instantly, ring lags via spring
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  // scroll progress (0 -> 1), scaleX is composited
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest('a, button, [data-cursor="hover"], input, textarea'));
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, [reduce, x, y]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden />

      {enabled && (
        <>
          <motion.div
            className="cursor-dot"
            style={{ x, y }}
            animate={{ scale: down ? 0.6 : 1 }}
            transition={{ duration: 0.15 }}
            aria-hidden
          />
          <motion.div
            className="cursor-ring"
            style={{ x: ringX, y: ringY }}
            animate={{ scale: hovering ? 1.7 : down ? 0.8 : 1, opacity: hovering ? 0.9 : 0.55 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            aria-hidden
          />
        </>
      )}
    </>
  );
}
