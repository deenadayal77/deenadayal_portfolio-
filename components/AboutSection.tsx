'use client';

import { personalInfo } from '@/lib/data';
import { Reveal, Stagger } from './Reveal';
import { rise, riseSmall } from '@/lib/motion';

const facts = [
  ['Role', 'AI Workflow Engineer'],
  ['Company', 'DemandNXT'],
  ['Based in', 'Bengaluru, Karnataka'],
  ['Education', 'CSE — PES College of Engineering'],
  ['Leadership', 'President, ISTE Student Chapter'],
  ['Status', 'Open to opportunities'],
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <Reveal>
          <span className="kicker">About</span>
        </Reveal>

        {/* 3:2 is a cleaner proportion than 1.4:0.9 — same ratio, legible fraction */}
        <div className="mt-10 grid gap-y-12 gap-x-14 lg:grid-cols-[3fr_2fr]">
          {/* Left — manifesto + bio */}
          <div>
            <Reveal variants={rise}>
              <p className="display-lg max-w-[26ch]">
                I&rsquo;m a CS engineer who likes the unglamorous part of software &mdash;
                making systems{' '}
                <span className="text-[var(--accent-text)]">talk to each other</span> and
                keep working when no one&rsquo;s watching.
              </p>
            </Reveal>

            <Stagger className="mt-9 space-y-6" gap={0.08}>
              <Reveal variants={riseSmall}>
                <p className="text-[var(--text-2)] leading-relaxed max-w-[52ch]">
                  Today I design AI-powered workflow systems at DemandNXT &mdash; reducing
                  manual operations, improving lead quality, and connecting business tools
                  through automation that&rsquo;s built to be resilient, not just clever.
                </p>
              </Reveal>
              <Reveal variants={riseSmall}>
                <p className="text-[var(--text-2)] leading-relaxed max-w-[52ch]">
                  Before that I built full-stack products with generative AI features at Dhee
                  Coding Labs, and as President of the ISTE Student Chapter I led teams and ran
                  the 19th ISTE Karnataka Convention for 800+ participants.
                </p>
              </Reveal>
            </Stagger>

            <Reveal variants={riseSmall}>
              <hr className="hr mt-9" />
              <div className="mt-5 flex items-center gap-2.5">
                <span className="status-dot" aria-hidden />
                <span className="mono text-xs text-[var(--text-3)]">
                  DemandNXT &middot; AI Workflow Engineer &middot; Mar 2026 – Present
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right — profile spec card (Double-Bezel) */}
          <Reveal variants={rise}>
            <div className="double-bezel-outer">
              <div className="double-bezel-inner">
                {/* Card header */}
                <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
                  <span className="eyebrow">Profile</span>
                  <span className="mono text-xs text-[var(--accent-text)]">v2026.06</span>
                </div>

                {/* Spec rows */}
                <dl className="divide-y divide-[var(--line)]">
                  {facts.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between gap-4 px-5 py-[0.9375rem]"
                      style={{ transition: 'background-color 160ms ease' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--bg-3)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = '';
                      }}
                    >
                      <dt className="mono text-[0.67rem] uppercase tracking-wider text-[var(--text-3)] shrink-0">
                        {k}
                      </dt>
                      <dd
                        className="text-right text-[0.84rem] font-medium"
                        style={{ color: k === 'Status' ? 'var(--accent-text)' : 'var(--text)' }}
                      >
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Footer social links */}
                <div className="flex items-center gap-1 border-t border-[var(--line)] px-5 py-4 mono text-xs text-[var(--text-3)]">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-[180ms] hover:text-[var(--text-2)]"
                  >
                    GitHub
                  </a>
                  <span className="mx-2 opacity-40">&middot;</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-[180ms] hover:text-[var(--text-2)]"
                  >
                    LinkedIn
                  </a>
                  <span className="mx-2 opacity-40">&middot;</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="transition-colors duration-[180ms] hover:text-[var(--text-2)]"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
