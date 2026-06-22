'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { certifications, achievements, skills } from '@/lib/data';
import { Reveal } from './Reveal';
import { rise, spring, easeOut, viewport } from '@/lib/motion';

/* ─── Tab data ────────────────────────────────────────────── */
type TabId = 'automation' | 'fullstack' | 'ai' | 'infra';

interface Tab {
  id: TabId;
  label: string;
  title: string;
  description: string;
  outcomes: string[];
  tools: string[];
  stats: [string, string][];
  svg: 'flow' | 'mesh' | 'none';
}

const tabs: Tab[] = [
  {
    id: 'automation',
    label: 'Automation',
    title: 'Workflow Automation',
    description:
      'n8n pipelines connecting CRMs, enrichment APIs, email systems, and databases without manual handoffs. Built to run at scale, unsupervised.',
    outcomes: [
      '→ 100K+ tasks processed daily without human intervention',
      '→ 40% reduction in time-to-launch for campaigns',
      '→ 95%+ pipeline success rate across all environments',
    ],
    tools: ['n8n', 'Apollo API', 'SendGrid', 'HTTP Requests', 'Webhooks', 'n8n Nodes'],
    stats: [['100K+', 'Tasks daily'], ['40%', 'Time saved']],
    svg: 'flow',
  },
  {
    id: 'fullstack',
    label: 'Full-Stack',
    title: 'Full-Stack Engineering',
    description:
      'FastAPI backends, Django apps, and MERN stack projects — from schema design through shipped UI. The full vertical, no handoffs needed.',
    outcomes: [
      '→ FastAPI backends wired to production React frontends',
      '→ MERN stack apps from blank canvas to live URL',
      '→ RESTful API design with auth, validation, error handling',
    ],
    tools: ['React', 'Next.js', 'FastAPI', 'Django', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Python'],
    stats: [['6', 'Apps shipped'], ['4', 'Stacks mastered']],
    svg: 'none',
  },
  {
    id: 'ai',
    label: 'Applied AI',
    title: 'Applied AI & LLMs',
    description:
      'Wiring language models to real data sources so they answer questions about your business, not just the training set. Prompt engineering, chaining, structured output.',
    outcomes: [
      '→ Medical report AI serving 500+ patients',
      '→ Multi-model pipelines with typed, verifiable output',
      '→ 90%+ intent accuracy in NLP systems',
    ],
    tools: ['Gemini AI', 'LLM Integration', 'NLP', 'Prompt Engineering', 'Machine Learning', 'OCR'],
    stats: [['500+', 'Users served'], ['3', 'Models chained']],
    svg: 'mesh',
  },
  {
    id: 'infra',
    label: 'Infrastructure',
    title: 'Cloud & Infrastructure',
    description:
      'Git-based workflows, cloud deployments on AWS and GCP, and local dev environments that stay out of the way.',
    outcomes: [
      '→ CI/CD pipelines for reliable deployments',
      '→ Cloud deployments across AWS and GCP',
      '→ Dev environment tooling that scales with the team',
    ],
    tools: ['Git', 'GitHub', 'AWS', 'GCP', 'VS Code', 'Anaconda', 'Docker'],
    stats: [['3', 'Cloud platforms'], ['5+', 'Years with Git']],
    svg: 'none',
  },
];

/* ─── Flow SVG ────────────────────────────────────────────── */
function FlowSvg() {
  const reduce = useReducedMotion();
  const edges = [
    'M8 22 L30 8', 'M8 22 L30 36', 'M30 8 L54 8', 'M30 36 L54 36',
    'M54 8 L66 22', 'M54 36 L66 22', 'M30 8 L54 36', 'M30 36 L54 8',
  ];
  const nodes: [number, number][] = [[8, 22], [30, 8], [30, 36], [54, 8], [54, 36], [66, 22]];

  return (
    <svg width="76" height="48" viewBox="0 0 76 48" fill="none" aria-hidden className="shrink-0 opacity-60">
      {edges.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--accent)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.5}
          initial={reduce ? { opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          /* Faster path draw: 0.9s (was 1.2s), tighter stagger 0.05 (was 0.06) */
          transition={{ duration: 0.9, ease: easeOut, delay: 0.08 + i * 0.05 }}
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy} r="3.5"
          fill="var(--accent)"
          initial={reduce ? { scale: 1 } : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: i === 0 || i === 5 ? 1 : 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.22, ease: easeOut, delay: 0.38 + i * 0.05 }}
        />
      ))}
    </svg>
  );
}

/* ─── Mesh SVG ────────────────────────────────────────────── */
function MeshSvg() {
  const reduce = useReducedMotion();
  const edges = [
    'M8 24 L30 8', 'M8 24 L30 40', 'M30 8 L58 24',
    'M30 40 L58 24', 'M30 8 L30 40', 'M8 24 L58 24',
  ];
  const nodes: [number, number][] = [[8, 24], [30, 8], [30, 40], [58, 24]];

  return (
    <svg width="68" height="50" viewBox="0 0 68 50" fill="none" aria-hidden className="shrink-0 opacity-60">
      {edges.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--accent)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.45}
          initial={reduce ? { opacity: 0.45 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.45 }}
          viewport={{ once: true }}
          /* Tighter: 0.85s (was 1.1s), stagger 0.06 (was 0.08) */
          transition={{ duration: 0.85, ease: easeOut, delay: 0.08 + i * 0.06 }}
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy} r="3.5"
          fill="var(--accent)"
          initial={reduce ? { scale: 1 } : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: i === 3 ? 1 : 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.22, ease: easeOut, delay: 0.34 + i * 0.06 }}
        />
      ))}
    </svg>
  );
}

/* ─── Main component ──────────────────────────────────────── */
export default function Stack() {
  const [activeId, setActiveId] = useState<TabId>('automation');
  const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];

  const inventoryColumns = [
    { label: 'Languages', items: skills.programming },
    { label: 'Frontend', items: skills.frontend },
    { label: 'Backend', items: skills.backend },
    { label: 'AI / ML', items: skills.ai_ml },
  ];

  return (
    <section id="stack" className="section">
      <div className="shell">
        <Reveal>
          <span className="kicker">Capabilities</span>
        </Reveal>
        <Reveal variants={rise} delay={0.04}>
          <h2 className="display-lg mt-4">
            What I <span className="text-[var(--accent-text)]">build.</span>
          </h2>
        </Reveal>

        {/* Zone 1 — Tabbed capability explorer */}
        <div className="mt-10">
          {/* Tab strip — spring underline indicator */}
          <div className="tab-strip">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                data-active={activeId === tab.id}
                className="tab-item relative"
              >
                {tab.label}
                {activeId === tab.id && (
                  <motion.span
                    layoutId="stack-tab"
                    className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-[var(--accent)]"
                    transition={spring}
                  />
                )}
              </button>
            ))}
          </div>

          {/*
            Tab content — asymmetric timing:
            Enter: 0.18s ease-out (slightly slower — content is being read)
            Exit: 0.12s — faster exit so incoming content doesn't wait
            x:8/-8 is GPU transform, not left/right (no layout)
          */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6, transition: { duration: 0.12, ease: 'easeIn' } }}
              transition={{ duration: 0.18, ease: easeOut }}
              className="mt-8 grid gap-10 lg:grid-cols-2"
            >
              {/* Left — description + outcomes */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold leading-tight">
                    {activeTab.title}
                  </h3>
                  {activeTab.svg === 'flow' && <FlowSvg />}
                  {activeTab.svg === 'mesh' && <MeshSvg />}
                </div>
                <p className="mt-4 text-[var(--text-2)] leading-relaxed">
                  {activeTab.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {activeTab.outcomes.map((o) => (
                    <li key={o} className="text-sm text-[var(--text-2)] leading-relaxed">
                      <span className="text-[var(--accent-text)] mr-1">{o.slice(0, 1)}</span>
                      {o.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — tools + stats */}
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <p className="eyebrow mb-3">Tools used</p>
                  <div className="flex flex-wrap gap-2">
                    {activeTab.tools.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)]">
                  {activeTab.stats.map(([num, label]) => (
                    <div
                      key={label}
                      className="bg-[var(--bg-2)] px-5 py-5"
                      style={{ transition: 'background-color 160ms ease' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--bg-3)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = '';
                      }}
                    >
                      <p className="mono text-3xl font-bold text-[var(--text)] tabular-nums">{num}</p>
                      <p className="eyebrow mt-2">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Zone 2 — Tech inventory grid */}
        <div className="mt-20 border-t border-[var(--line)] pt-14">
          <Reveal>
            <p className="eyebrow mb-8">Full tech inventory</p>
          </Reveal>
          <motion.div
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
            /* stagger 0.06 matches Reveal default — tighter than old 0.06 */
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } } }}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {inventoryColumns.map((col) => (
              <motion.div
                key={col.label}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: easeOut } },
                }}
              >
                <p className="eyebrow mb-3">{col.label}</p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--text-2)] leading-[2]">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Zone 3 — Credentials */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Reveal variants={rise}>
            <div className="card p-6">
              <h3 className="font-semibold mb-5">Certifications</h3>
              <div className="space-y-px overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--line)]">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="flex items-baseline justify-between gap-4 bg-[var(--bg-2)] px-4 py-3.5"
                    style={{ transition: 'background-color 160ms ease' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--bg-3)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = '';
                    }}
                  >
                    <div>
                      <p className="text-sm font-medium text-[var(--text)]">{c.title}</p>
                      <p className="mono text-xs text-[var(--text-3)] mt-0.5">{c.issuer}</p>
                    </div>
                    <span className="mono text-xs text-[var(--text-3)] shrink-0">{c.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variants={rise}>
            <div className="card p-6">
              <h3 className="font-semibold mb-5">Recognition</h3>
              <div className="space-y-px overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--line)]">
                {achievements.map((a) => (
                  <div
                    key={a.title}
                    className="bg-[var(--bg-2)] px-4 py-3.5"
                    style={{ transition: 'background-color 160ms ease' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--bg-3)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = '';
                    }}
                  >
                    <p className="text-sm font-medium text-[var(--text)]">{a.title}</p>
                    <p className="mono text-xs text-[var(--text-3)] mt-0.5">
                      {a.issuer} &mdash; {a.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
