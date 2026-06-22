'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { rise, stagger, viewport } from '@/lib/motion';

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'span' | 'li' | 'ul' | 'header' | 'article';
}

/** Single element that rises into view once. */
export function Reveal({ children, variants = rise, className, delay = 0, as = 'div' }: RevealProps) {
  const Comp = motion[as] as typeof motion.div;

  // Merge the variant's own transition with the delay — do NOT pass only {delay}
  // because it would replace the variant's duration+ease with Framer defaults.
  const variantTransition = (variants?.show as Record<string, unknown>)?.transition as Record<string, unknown> | undefined;
  const mergedTransition = delay
    ? { ...(variantTransition ?? {}), delay }
    : undefined;

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={mergedTransition}
    >
      {children}
    </Comp>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  gap?: number;
  delayChildren?: number;
  as?: 'div' | 'section' | 'ul' | 'header';
}

/** Container that staggers its <Reveal> / motion children. */
export function Stagger({ children, className, gap = 0.06, delayChildren = 0, as = 'div' }: StaggerProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      variants={stagger(gap, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </Comp>
  );
}
