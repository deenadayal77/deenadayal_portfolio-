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
  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={delay ? { delay } : undefined}
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
export function Stagger({ children, className, gap = 0.08, delayChildren = 0, as = 'div' }: StaggerProps) {
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
