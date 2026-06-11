'use client';

import { Award, Medal } from 'lucide-react';
import { skills, certifications, achievements } from '@/lib/data';
import { Reveal, Stagger } from './Reveal';
import { rise, riseSmall } from '@/lib/motion';

const groups: { label: string; items: string[] }[] = [
  { label: 'AI / ML', items: skills.ai_ml },
  { label: 'Languages', items: skills.programming },
  { label: 'Frontend', items: skills.frontend },
  { label: 'Backend', items: skills.backend },
  { label: 'Data', items: skills.databases },
  { label: 'Tooling', items: skills.tools },
];

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="shell">
        <Reveal>
          <span className="kicker">Capabilities</span>
        </Reveal>
        <Reveal variants={rise} delay={0.05}>
          <h2 className="display-lg mt-5">
            The <span className="accent-text">stack.</span>
          </h2>
        </Reveal>

        {/* capability index */}
        <div className="mt-12 border-t border-line">
          {groups.map((g) => (
            <Reveal key={g.label} variants={riseSmall}>
              <div className="grid items-center gap-3 border-b border-line py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                <span className="mono text-sm uppercase tracking-wider text-3">{g.label}</span>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="chip" data-cursor="hover">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* credentials + recognition */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Stagger className="card p-6" gap={0.08}>
            <Reveal variants={riseSmall}>
              <div className="mb-5 flex items-center gap-2.5">
                <Award size={18} className="accent-text" />
                <h3 className="font-semibold">Certifications</h3>
              </div>
            </Reveal>
            <div className="space-y-px overflow-hidden rounded-xl border border-line bg-line">
              {certifications.map((c) => (
                <Reveal key={c.title} variants={riseSmall}>
                  <div className="flex items-baseline justify-between gap-4 bg-bg-2 p-4">
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
                <Medal size={18} className="accent-text" />
                <h3 className="font-semibold">Recognition</h3>
              </div>
            </Reveal>
            <div className="space-y-px overflow-hidden rounded-xl border border-line bg-line">
              {achievements.map((a) => (
                <Reveal key={a.title} variants={riseSmall}>
                  <div className="bg-bg-2 p-4">
                    <p className="font-medium">{a.title}</p>
                    <p className="text-sm text-3">{a.issuer} · {a.description}</p>
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
