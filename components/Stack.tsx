'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Award, Medal } from 'lucide-react';
import { certifications, achievements } from '@/lib/data';
import { Reveal, Stagger } from './Reveal';
import { riseSmall, cardReveal, viewport, ease } from '@/lib/motion';

/* ─── Capability definitions ──────────────────────────────────── */
const capabilities = [
  {
    id: '01',
    title: 'Workflow Automation',
    description:
      'n8n pipelines connecting CRMs, enrichment APIs, email, and databases without manual handoffs. Built to run at scale, unsupervised.',
    featured: true,
    svg: 'flow' as const,
  },
  {
    id: '02',
    title: 'LLM Integration',
    description:
      'Wiring language models to real data sources so they answer questions about your business, not just the training set.',
  },
  {
    id: '03',
    title: 'Full-Stack AI Apps',
    description:
      'FastAPI backends, React and Next.js frontends, and the model layer that ties them together — shipped as one working system.',
  },
  {
    id: '04',
    title: 'Multi-model Pipelines',
    description:
      'Chaining models for structured, verifiable output. Voice, vision, and text into one usable, typed result.',
    svg: 'mesh' as const,
  },
  {
    id: '05',
    title: 'Production Reliability',
    description:
      'Output validation, error handling, and retry logic so systems keep running when a model decides to be creative.',
  },
];

/* ─── SVG: pipeline flow graph ────────────────────────────────── */
function FlowSvg() {
  const reduce = useReducedMotion();
  const edges = [
    'M8 22 L30 8',
    'M8 22 L30 36',
    'M30 8 L54 8',
    'M30 36 L54 36',
    'M54 8 L66 22',
    'M54 36 L66 22',
    'M30 8 L54 36',
    'M30 36 L54 8',
  ];
  const nodes: [number, number][] = [[8, 22], [30, 8], [30, 36], [54, 8], [54, 36], [66, 22]];

  return (
    <svg width="76" height="48" viewBox="0 0 76 48" fill="none" aria-hidden className="shrink-0">
      {edges.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--accent)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.38}
          initial={reduce ? { opacity: 0.38 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.38 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease, delay: 0.2 + i * 0.07 }}
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="3.5"
          fill="var(--accent)"
          initial={reduce ? { scale: 1 } : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: i === 0 || i === 5 ? 1 : 0.55 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.55 + i * 0.07 }}
        />
      ))}
    </svg>
  );
}

/* ─── SVG: neural mesh graph ──────────────────────────────────── */
function MeshSvg() {
  const reduce = useReducedMotion();
  const edges = [
    'M8 24 L30 8',
    'M8 24 L30 40',
    'M30 8 L58 24',
    'M30 40 L58 24',
    'M30 8 L30 40',
    'M8 24 L58 24',
  ];
  const nodes: [number, number][] = [[8, 24], [30, 8], [30, 40], [58, 24]];

  return (
    <svg width="68" height="50" viewBox="0 0 68 50" fill="none" aria-hidden className="shrink-0">
      {edges.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--accent)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.35}
          initial={reduce ? { opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease, delay: 0.2 + i * 0.09 }}
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="3.5"
          fill="var(--accent)"
          initial={reduce ? { scale: 1 } : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: i === 3 ? 1 : 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
        />
      ))}
    </svg>
  );
}

/* ─── Main component ──────────────────────────────────────────── */
export default function Stack() {
  const reduce = useReducedMotion();

  return (
    <section id="stack" className="section">
      <div className="shell">
        <Reveal>
          <span className="kicker">Capabilities</span>
        </Reveal>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="display-lg">
              What I <span className="accent-text">build.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-sm text-2">Framed by what ships — not what&rsquo;s on the resume.</p>
          </Reveal>
        </div>

        {/* ── Bento capability grid ─────────────────────────────── */}
        <motion.div
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {/* Featured card — spans 2 cols on lg */}
          <motion.div
            variants={cardReveal}
            whileHover={reduce ? {} : { y: -5, transition: { duration: 0.22, ease } }}
            className="card flex flex-col justify-between p-7 sm:col-span-2 lg:col-span-2"
            data-cursor="hover"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="mono text-xs text-3">{capabilities[0].id}</span>
              <FlowSvg />
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold accent-text">{capabilities[0].title}</h3>
              <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-2">
                {capabilities[0].description}
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardReveal}
            whileHover={reduce ? {} : { y: -5, transition: { duration: 0.22, ease } }}
            className="card flex flex-col justify-between p-6"
            data-cursor="hover"
          >
            <span className="mono text-xs text-3">{capabilities[1].id}</span>
            <div className="mt-8">
              <h3 className="font-semibold">{capabilities[1].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-2">{capabilities[1].description}</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardReveal}
            whileHover={reduce ? {} : { y: -5, transition: { duration: 0.22, ease } }}
            className="card flex flex-col justify-between p-6"
            data-cursor="hover"
          >
            <span className="mono text-xs text-3">{capabilities[2].id}</span>
            <div className="mt-8">
              <h3 className="font-semibold">{capabilities[2].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-2">{capabilities[2].description}</p>
            </div>
          </motion.div>

          {/* Card 4 — has mesh SVG */}
          <motion.div
            variants={cardReveal}
            whileHover={reduce ? {} : { y: -5, transition: { duration: 0.22, ease } }}
            className="card flex flex-col justify-between p-6"
            data-cursor="hover"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="mono text-xs text-3">{capabilities[3].id}</span>
              <MeshSvg />
            </div>
            <div className="mt-6">
              <h3 className="font-semibold">{capabilities[3].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-2">{capabilities[3].description}</p>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            variants={cardReveal}
            whileHover={reduce ? {} : { y: -5, transition: { duration: 0.22, ease } }}
            className="card flex flex-col justify-between p-6"
            data-cursor="hover"
          >
            <span className="mono text-xs text-3">{capabilities[4].id}</span>
            <div className="mt-8">
              <h3 className="font-semibold">{capabilities[4].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-2">{capabilities[4].description}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Certifications + Recognition ──────────────────────── */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Stagger className="card p-6" gap={0.08}>
            <Reveal variants={riseSmall}>
              <div className="mb-5 flex items-center gap-2.5">
                <Award size={17} className="accent-text" />
                <h3 className="font-semibold">Certifications</h3>
              </div>
            </Reveal>
            <div className="space-y-px overflow-hidden rounded-xl border border-line bg-line">
              {certifications.map((c) => (
                <Reveal key={c.title} variants={riseSmall}>
                  <div className="flex items-baseline justify-between gap-4 bg-bg-2 p-4 transition-colors duration-300 hover:bg-bg-3">
                    <div>
                      <p className="font-medium">{c.title}</p>
                      <p className="text-sm text-3">{c.issuer}</p>
                    </div>
                    <span className="mono text-xs text-3">{c.date}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Stagger>

          <Stagger className="card p-6" gap={0.08}>
            <Reveal variants={riseSmall}>
              <div className="mb-5 flex items-center gap-2.5">
                <Medal size={17} className="accent-text" />
                <h3 className="font-semibold">Recognition</h3>
              </div>
            </Reveal>
            <div className="space-y-px overflow-hidden rounded-xl border border-line bg-line">
              {achievements.map((a) => (
                <Reveal key={a.title} variants={riseSmall}>
                  <div className="bg-bg-2 p-4 transition-colors duration-300 hover:bg-bg-3">
                    <p className="font-medium">{a.title}</p>
                    <p className="text-sm text-3">
                      {a.issuer} &mdash; {a.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
