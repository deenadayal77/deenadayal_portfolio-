'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { experience } from '@/lib/data';
import { Reveal } from './Reveal';
import { rise, spring } from '@/lib/motion';

function EntryDot({ inView }: { inView: boolean }) {
  return (
    <motion.span
      className="absolute -left-[23px] top-1.5 sm:-left-[27px]"
      animate={{
        scale: inView ? 1.3 : 1,
        borderColor: inView ? 'var(--accent)' : 'var(--text-3)',
        backgroundColor: inView ? 'var(--accent-soft)' : 'var(--bg-2)',
      }}
      transition={spring}
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--bg-2)',
        border: '1.5px solid var(--text-3)',
        display: 'block',
      }}
    />
  );
}

function ExperienceEntry({ job }: { job: typeof experience[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-20% 0px -40% 0px' });

  return (
    <div ref={ref} className="relative">
      <EntryDot inView={inView} />

      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
        <span className="mono text-xs text-[var(--text-3)]">{job.period}</span>
        <span className="chip w-fit">{job.type}</span>
      </div>

      <h3 className="mt-3 text-xl font-semibold leading-tight text-[var(--text)]">
        {job.title}
      </h3>
      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <span className="font-medium text-[var(--accent-text)]">{job.company}</span>
        <span className="text-[var(--text-3)]">&middot;</span>
        <span className="text-[var(--text-3)]">{job.location}</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[var(--text-2)] max-w-[56ch]">
        {job.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.responsibilities.map((r) => (
          <span key={r} className="chip">{r}</span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 70%', 'end 60%'],
  });
  /* Tighter spring than default — the rail progress should feel immediate */
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.5 });

  return (
    <section id="experience" className="section">
      <div className="shell">
        <Reveal>
          <span className="kicker">Timeline</span>
        </Reveal>
        <Reveal variants={rise} delay={0.05}>
          <h2 className="display-lg mt-4">
            Where I&rsquo;ve <span className="text-[var(--accent-text)]">built.</span>
          </h2>
        </Reveal>

        <div ref={railRef} className="relative mt-14 pl-7 sm:pl-9">
          {/* Rail background — slightly wider than 1px for visibility on dark bg */}
          <div
            className="absolute left-[4px] top-0 bottom-0 sm:left-[5px]"
            style={{ width: '1.5px', background: 'var(--line-2)' }}
          />
          {/* Rail progress — accent fill, same width */}
          <motion.div
            className="absolute left-[4px] top-0 bottom-0 origin-top sm:left-[5px]"
            style={{ width: '1.5px', background: 'var(--accent)', scaleY }}
          />

          {/* NOW label */}
          <div className="absolute -left-0.5 -top-6 flex items-center gap-2">
            <span className="mono text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--accent-text)]">
              Now
            </span>
          </div>

          {/* More breathing room between entries */}
          <div className="space-y-16">
            {experience.map((job) => (
              <Reveal key={job.id} variants={rise}>
                <ExperienceEntry job={job} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
