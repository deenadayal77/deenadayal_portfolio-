'use client';

import { useReducedMotion } from 'framer-motion';

/**
 * Decorative node-graph that nods to Deena's automation/workflow work.
 * Static SVG hairlines + nodes; data "pulses" ride the edges via SMIL
 * <animateMotion> so they stay perfectly aligned to the scaled viewBox.
 * Node twinkle animates opacity only. Tiny element count → no jank.
 */

type P = [number, number];

const nodes: P[] = [
  [60, 120], [180, 60], [300, 140], [450, 80], [540, 180],
  [120, 260], [260, 300], [400, 250], [520, 340],
  [80, 420], [220, 470], [360, 420], [480, 500], [300, 560],
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 6], [3, 7],
  [4, 8], [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [7, 11], [8, 12],
  [9, 10], [10, 11], [11, 12], [10, 13], [11, 13],
];

// edges that carry a traveling pulse, with timing
const pulseEdges: { from: number; to: number; dur: number; begin: number }[] = [
  { from: 1, to: 6, dur: 3.2, begin: 0 },
  { from: 2, to: 3, dur: 3.6, begin: 0.8 },
  { from: 6, to: 7, dur: 3.0, begin: 1.4 },
  { from: 7, to: 11, dur: 3.8, begin: 0.4 },
  { from: 10, to: 13, dur: 3.4, begin: 2.0 },
];

const line = (a: P, b: P) => `M ${a[0]} ${a[1]} L ${b[0]} ${b[1]}`;

export default function SignalField() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-[0.55]"
        aria-hidden
      >
        <g stroke="var(--line-2)" strokeWidth="0.6">
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
          ))}
        </g>

        <g fill="var(--text-3)">
          {nodes.map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 3 === 0 ? 3 : 2}
              style={reduce ? undefined : { animation: `twinkle ${3 + (i % 4)}s ease-in-out ${i * 0.25}s infinite` }}
            />
          ))}
        </g>

        {/* accent anchor nodes */}
        <g fill="var(--accent)">
          {[2, 7, 10].map((i) => (
            <circle key={i} cx={nodes[i][0]} cy={nodes[i][1]} r={3.5} />
          ))}
        </g>

        {/* traveling data pulses (SMIL keeps them in viewBox space) */}
        {!reduce &&
          pulseEdges.map(({ from, to, dur, begin }, i) => (
            <circle key={i} r={2.6} fill="var(--accent)">
              <animateMotion
                dur={`${dur}s`}
                begin={`${begin}s`}
                repeatCount="indefinite"
                path={line(nodes[from], nodes[to])}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.45 0 0.55 1"
              />
              <animate
                attributeName="opacity"
                dur={`${dur}s`}
                begin={`${begin}s`}
                repeatCount="indefinite"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
              />
            </circle>
          ))}
      </svg>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
