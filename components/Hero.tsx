'use client';

import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { ease, clipUp } from '@/lib/motion';
import SignalField from './SignalField';
import Magnetic from './Magnetic';
import Marquee from './Marquee';
import Counter from './Counter';

const headline = ['I', 'build', 'AI', 'systems', 'that', 'turn', 'manual', 'work', 'into'];
const tools = ['n8n', 'Apollo API', 'FastAPI', 'React', 'Next.js', 'Gemini', 'Django', 'Python', 'LLMs', 'MongoDB', 'TypeScript', 'Automation'];

const socials = [
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32">
      <SignalField />

      <div className="shell w-full">
        {/* status row */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5"
        >
          <span className="kicker">AI Workflow Engineer</span>
          <span className="mono flex items-center gap-2.5 text-xs text-3">
            <span className="signal-dot" />
            Available for work - {personalInfo.location.split(',')[0]}
          </span>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.82fr] lg:items-end">
          {/* headline block */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mb-5 inline-flex items-center gap-2 rounded-[14px] border border-line bg-[color-mix(in_srgb,var(--elevated)_58%,transparent)] px-3 py-2 text-sm text-2 shadow-[0_18px_55px_-42px_var(--shadow)] backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-warm)]" />
              Building workflow systems for teams that need fewer handoffs.
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mono mb-5 text-sm text-2"
            >
              {personalInfo.name}
            </motion.p>

            <h1 className="display-xl max-w-[16ch]">
              <motion.span
                className="block"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.055, delayChildren: 0.25 } } }}
              >
                {headline.map((w, i) => (
                  <span key={i} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
                    <motion.span className="inline-block" variants={clipUp}>
                      {w}
                    </motion.span>
                  </span>
                ))}
              </motion.span>
              <span className="block overflow-hidden">
                <motion.span
                  className="inline-block accent-text"
                  initial={{ y: reduce ? 0 : '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease, delay: 0.75 }}
                >
                  reliable automation.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.95 }}
              className="lead mt-6 max-w-[49ch]"
            >
              Multi-model pipelines, LLM apps, and structured output that holds up
              in production — not just in a demo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.1 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.4}>
                <a href="#work" className="btn btn-accent" data-cursor="hover">
                  View selected work
                  <ArrowDownRight size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a href="#contact" className="btn btn-ghost" data-cursor="hover">
                  Get in touch
                </a>
              </Magnetic>

              <div className="ml-0 flex items-center gap-2 sm:ml-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Magnetic key={label} strength={0.5}>
                    <a
                      href={href}
                      target={label === 'Email' ? undefined : '_blank'}
                      rel="noreferrer"
                      className="icon-btn"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </div>

          {/* metadata / stats column */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.2 }}
            className="card grid grid-cols-3 gap-px overflow-hidden bg-line p-0 lg:grid-cols-1"
          >
            {[
              { v: 8, suffix: '', label: 'Projects shipped' },
              { v: 100, suffix: 'K+', label: 'Tasks automated / day' },
              { v: 40, suffix: '%', label: 'Avg. time reclaimed' },
            ].map((s) => (
              <div key={s.label} className="bg-bg-2 p-5 transition-colors duration-300 hover:bg-bg-3 sm:p-6">
                <div className="display-lg text-[2.35rem] leading-none tabular-nums sm:text-[2.75rem]">
                  <Counter value={s.v} suffix={s.suffix} />
                </div>
                <p className="eyebrow mt-2.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ticker pinned to bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.35 }}
        className="absolute inset-x-0 bottom-0 border-t border-line bg-[color-mix(in_srgb,var(--bg)_78%,transparent)] py-3 backdrop-blur-md"
      >
        <Marquee>
          {tools.map((t) => (
            <span key={t} className="mono mx-6 inline-flex items-center gap-3 text-sm text-3">
              {t}
              <span className="accent-text">/</span>
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
