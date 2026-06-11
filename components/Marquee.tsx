'use client';

import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

/**
 * Seamless infinite ticker. Content is duplicated and translated -50%
 * via a CSS keyframe (transform only) → smooth, pauses on hover.
 */
export default function Marquee({ children, reverse, className }: MarqueeProps) {
  return (
    <div className={`marquee-track overflow-hidden ${className ?? ''}`}>
      <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
