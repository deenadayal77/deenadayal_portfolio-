'use client';

import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { ease } from '@/lib/motion';
import SignalField from './SignalField';
import Magnetic from './Magnetic';
import Marquee from './Marquee';
import Counter from './Counter';

const tools = ['n8n', 'Apollo API', 'FastAPI', 'React', 'Next.js', 'Gemini', 'Django', 'Python', 'LLMs', 'MongoDB', 'TypeScript', 'Automation'];

const socials = [
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const stats = [
  { v: 8,   suffix: '',   label: 'Projects' },
  { v: 100, suffix: 'K+', label: 'Tasks / day' },
  { v: 40,  suffix: '%',  label: 'Time saved' },
];

/* Line-by-line fade+rise: cleaner than word-by-word clip */
const lineIn = (i: number, reduce: boolean | null) => ({
  initial: { opacity: 0, y: reduce ? 0 : 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease, delay: 0.28 + i * 0.13 },
});

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-20 pt-28 sm:pt-32"
    >
      <SignalField />

      <div className="shell w-full">
        {/* ── Status bar ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-2">
            <span className="signal-dot" />
            AI Workflow Engineer &mdash; DemandNXT
          </span>
          <span
            className="hidden h-4 w-px bg-[var(--line-2)] sm:block"
            aria-hidden
          />
          <span className="mono text-xs font-medium uppercase tracking-wider accent-text">
            Open to opportunities
          </span>
        </motion.div>

        {/* ── Two-column grid ─────────────────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.68fr] lg:items-start">

          {/* Left — headline + sub + CTAs */}
          <div>
            <h1
              className="display-xl"
              aria-label="I build AI systems that turn manual work into reliable automation."
            >
              {[
                { text: 'I build AI systems', accent: false },
                { text: 'that turn manual work', accent: false },
                { text: 'into reliable automation.', accent: true },
              ].map((line, i) => (
                <span
                  key={i}
                  className="block overflow-hidden"
                  style={{ paddingBottom: '0.06em' }}
                >
                  <motion.span
                    className={`inline-block${line.accent ? ' accent-text' : ''}`}
                    {...lineIn(i, reduce)}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.72 }}
              className="lead mt-7 max-w-[44ch]"
            >
              Multi-model pipelines, LLM apps, and structured output
              that holds up in production &mdash; not just in a demo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.88 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.35}>
                <a href="#work" className="btn btn-accent" data-cursor="hover">
                  See my work
                  <ArrowRight size={17} />
                </a>
              </Magnetic>
              <Magnetic strength={0.35}>
                <a href="#contact" className="btn btn-ghost" data-cursor="hover">
                  Get in touch
                  <ArrowUpRight size={16} />
                </a>
              </Magnetic>
              <span className="ml-1 flex items-center gap-1.5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Magnetic key={label} strength={0.5}>
                    <a
                      href={href}
                      target={label === 'Email' ? undefined : '_blank'}
                      rel="noreferrer"
                      className="icon-btn"
                      aria-label={label}
                    >
                      <Icon size={17} />
                    </a>
                  </Magnetic>
                ))}
              </span>
            </motion.div>
          </div>

          {/* Right — identity + stats card */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 1.0 }}
            className="card overflow-hidden"
          >
            {/* Identity header */}
            <div className="border-b border-line px-5 py-4">
              <p className="font-semibold leading-snug">{personalInfo.name}</p>
              <p className="mt-0.5 text-sm text-2">
                Full-Stack Developer &amp; AI Workflow Engineer
              </p>
              <p className="mono mt-1.5 text-xs text-3">
                {personalInfo.location}
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-px bg-[var(--line)]">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-bg-2 px-3 py-5 text-center transition-colors duration-300 hover:bg-bg-3"
                >
                  <div className="text-2xl font-bold tabular-nums leading-none">
                    <Counter value={s.v} suffix={s.suffix} />
                  </div>
                  <p className="eyebrow mt-2">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Availability strip */}
            <div className="flex items-center gap-2.5 border-t border-line bg-[color-mix(in_srgb,var(--accent-soft)_55%,transparent)] px-5 py-3.5">
              <span className="signal-dot" />
              <span className="text-sm font-medium accent-text">
                Available for freelance work
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Ticker pinned to bottom ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.25 }}
        className="absolute inset-x-0 bottom-0 border-t border-line bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] py-3 backdrop-blur-md"
      >
        <Marquee>
          {tools.map((t) => (
            <span
              key={t}
              className="mono mx-6 inline-flex items-center gap-3 text-sm text-3"
            >
              {t}
              <span className="accent-text">/</span>
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
