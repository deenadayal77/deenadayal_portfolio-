'use client';

import { Workflow, Layers, BrainCircuit } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { Reveal, Stagger } from './Reveal';
import { rise, riseSmall } from '@/lib/motion';

const facts = [
  ['Role', 'AI Workflow Engineer'],
  ['Based in', personalInfo.location.split(',').slice(0, 2).join(', ')],
  ['Education', 'CSE · PES College of Engineering'],
  ['Currently', 'Automation @ DemandNXT'],
  ['Leadership', 'President · ISTE Student Chapter'],
];

const pillars = [
  { icon: Workflow, title: 'Automation', body: 'n8n & API workflows that move data reliably between tools at scale.' },
  { icon: Layers, title: 'Full-Stack', body: 'FastAPI, Django & MERN apps from schema design to shipped UI.' },
  { icon: BrainCircuit, title: 'Applied AI', body: 'LLM integration, prompt engineering & NLP wired into real products.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <Reveal>
          <span className="kicker">About</span>
        </Reveal>

        <div className="mt-10 grid gap-x-16 gap-y-12 lg:grid-cols-[1.5fr_1fr]">
          {/* statement */}
          <div>
            <Reveal variants={rise}>
              <p className="display-lg text-[clamp(1.7rem,3.4vw,2.9rem)] leading-[1.08]">
                I&apos;m a CS engineer who likes the unglamorous part of software —
                making systems <span className="accent-text">talk to each other</span> and
                keep working when no one&apos;s watching.
              </p>
            </Reveal>

            <Stagger className="mt-8 space-y-5 text-2" gap={0.12}>
              <Reveal variants={riseSmall}>
                <p>
                  Today I design AI-powered workflow systems at DemandNXT — reducing manual
                  operations, improving lead quality, and connecting business tools through
                  automation that&apos;s built to be resilient, not just clever.
                </p>
              </Reveal>
              <Reveal variants={riseSmall}>
                <p>
                  Before that I built full-stack products with generative AI features at Dhee
                  Coding Labs, and as President of the ISTE Student Chapter I led teams and ran
                  the 19th ISTE Karnataka Convention for 800+ participants.
                </p>
              </Reveal>
            </Stagger>

            {/* pillars */}
            <Stagger className="mt-12 grid gap-4 sm:grid-cols-3" gap={0.1}>
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} variants={rise}>
                    <div className="card h-full p-5" data-cursor="hover">
                      <Icon size={22} className="accent-text" />
                      <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                      <p className="mt-1.5 text-sm text-2">{p.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </Stagger>
          </div>

          {/* spec sheet */}
          <Reveal variants={rise}>
            <div className="card overflow-hidden">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <span className="eyebrow">Profile</span>
                <span className="mono text-xs text-3">v2026</span>
              </div>
              <dl className="divide-y divide-[var(--line)]">
                {facts.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                    <dt className="mono text-xs uppercase tracking-wider text-3">{k}</dt>
                    <dd className="text-right text-sm font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
