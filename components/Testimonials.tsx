'use client';

import { testimonials } from '@/lib/data';
import { Reveal, Stagger } from './Reveal';
import { rise, riseSmall } from '@/lib/motion';

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section">
      <div className="shell">
        <Reveal>
          <span className="kicker">Social Proof</span>
        </Reveal>
        <Reveal variants={rise} delay={0.05}>
          <h2 className="display-lg mt-4">
            Trusted by people who <span className="text-[var(--accent-text)]">ship.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-2" gap={0.07}>
          {testimonials.map((t) => (
            <Reveal key={t.id} variants={riseSmall}>
              <div
                className="group relative double-bezel-outer"
                style={{ transition: 'box-shadow 280ms ease' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 0 0 1px rgba(59,130,246,0.12), 0 24px 64px -24px rgba(59,130,246,0.14)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '';
                }}
              >
                <div className="double-bezel-inner p-8">
                  {/* Decorative quotemark — lower opacity for subtlety */}
                  <span
                    className="pointer-events-none absolute right-7 top-6 select-none text-[4.5rem] leading-none font-serif"
                    style={{ color: 'rgba(59, 130, 246, 0.07)' }}
                    aria-hidden
                  >
                    &ldquo;
                  </span>

                  {/* Quote */}
                  <blockquote className="relative text-[1.05rem] leading-relaxed text-[var(--text)] pr-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <div className="mt-7 flex items-center gap-3 border-t border-[var(--line)] pt-5">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line-2)]"
                      style={{ background: 'var(--bg-3)' }}
                      aria-hidden
                    >
                      <span className="mono text-[0.67rem] font-semibold text-[var(--text-2)]">
                        {t.avatarInitials}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text)]">{t.name}</p>
                      <p className="text-xs text-[var(--text-2)]">
                        {t.title},{' '}
                        <span className="text-[var(--accent-text)]">{t.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {testimonials.length === 1 && (
            <Reveal variants={riseSmall}>
              <div className="double-bezel-outer opacity-30">
                <div className="double-bezel-inner flex min-h-[220px] flex-col items-center justify-center p-8 text-center">
                  <p className="mono text-xs text-[var(--text-3)]">More to come</p>
                </div>
              </div>
            </Reveal>
          )}
        </Stagger>
      </div>
    </section>
  );
}
