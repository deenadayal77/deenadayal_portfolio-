'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { ease, easeOut } from '@/lib/motion';
import Magnetic from './Magnetic';

const socials = [
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const activityFeed = [
  { time: '09:14', event: 'Lead enrichment pipeline — 2,340 records processed', status: 'Live' },
  { time: '08:47', event: 'SendGrid workflow dispatched — 1,100 contacts', status: 'Done' },
  { time: '08:02', event: 'n8n automation node updated — retry logic patched', status: 'Done' },
];

function lineIn(i: number, reduce: boolean | null) {
  return {
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease, delay: 0.18 + i * 0.11 },
  };
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center pt-28 pb-20"
    >
      <div className="shell w-full">
        <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-16">
          {/* Left column */}
          <div>
            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.08 }}
              className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="flex items-center gap-2 mono text-xs text-[var(--text-2)]">
                <span className="status-dot" aria-hidden />
                AI Workflow Engineer at Kipplo
              </span>
              <span className="hidden h-3 w-px bg-[var(--line-2)] sm:block" aria-hidden />
              <span className="mono text-xs text-[var(--accent-text)]">
                Open to opportunities
              </span>
            </motion.div>

            {/* Headline — line-by-line stagger */}
            <h1 aria-label="I build AI systems that turn manual work into reliable automation.">
              {[
                { text: 'I build AI systems', accent: false },
                { text: 'that turn manual work', accent: false },
                { text: null, accent: true },
              ].map((line, i) =>
                line.accent ? (
                  <span key={i} className="block overflow-hidden pb-[0.06em]">
                    <motion.span className="inline-block display-xl" {...lineIn(i, reduce)}>
                      into{' '}
                      <span className="text-[var(--accent-text)]">reliable automation.</span>
                    </motion.span>
                  </span>
                ) : (
                  <span key={i} className="block overflow-hidden pb-[0.06em]">
                    <motion.span className="inline-block display-xl" {...lineIn(i, reduce)}>
                      {line.text}
                    </motion.span>
                  </span>
                )
              )}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.52 }}
              className="lead mt-8 max-w-[44ch]"
            >
              Multi-model pipelines, LLM apps, and structured output that holds up in
              production &mdash; not just in a demo.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.66 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href={personalInfo.resumeUrl} download target="_blank" rel="noopener noreferrer" className="group btn-text text-sm">
                Download CV
                <span className="inline-block transition-transform duration-[180ms] ease-out group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <span className="h-4 w-px bg-[var(--line-2)]" aria-hidden />
              <a
                href="#work"
                className="text-sm text-[var(--text-2)] transition-colors duration-[180ms] hover:text-[var(--text)]"
              >
                See my work &darr;
              </a>
              <span className="flex items-center gap-1.5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Magnetic key={label} strength={0.45}>
                    <a
                      href={href}
                      target={label === 'Email' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </a>
                  </Magnetic>
                ))}
              </span>
            </motion.div>

            {/* Location strip */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.82 }}
              className="mono mt-8 text-xs text-[var(--text-3)]"
            >
              Bengaluru, Karnataka &middot; Available for freelance
            </motion.p>
          </div>

          {/* Right column — System Panel (Double-Bezel)
              Ambient glow behind it connects the panel to the brand accent.
              Scale from 0.96 — never 0, per STANDARDS. */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.88 }}
            className="double-bezel-outer"
            aria-label="Activity dashboard"
            style={{
              /* Accent-tinted ambient glow grounds the panel in space */
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(59,130,246,0.08), 0 40px 100px -30px rgba(59,130,246,0.14)',
            }}
          >
            <div className="double-bezel-inner">
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3.5">
                <span className="mono text-xs text-[var(--text-3)]">deena.dev / dashboard</span>
                <div className="flex items-center gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
              </div>

              {/* Activity feed */}
              <div>
                {activityFeed.map((row, i) => (
                  <div
                    key={i}
                    className="flex min-h-[54px] items-center gap-4 border-b border-[var(--line)] px-5 py-3.5 last:border-b-0"
                    style={{ transition: 'background-color 160ms ease' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--bg-3)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = '';
                    }}
                  >
                    <span className="mono shrink-0 text-xs text-[var(--text-3)] tabular-nums">
                      {row.time}
                    </span>
                    <p className="min-w-0 flex-1 text-xs text-[var(--text-2)] leading-snug">
                      {row.event}
                    </p>
                    <span
                      className={[
                        'chip shrink-0 text-[0.6rem]',
                        row.status === 'Live' ? 'chip-positive' : '',
                      ].join(' ')}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Panel footer */}
              <div className="flex items-center gap-2 px-5 py-3.5">
                <span className="status-dot" aria-hidden />
                <span className="mono text-xs text-[var(--text-3)]">Systems operational</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
