'use client';

import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experience } from '@/lib/data';
import { Reveal } from './Reveal';
import { rise } from '@/lib/motion';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.5 });

  return (
    <section id="experience" className="section">
      <div className="shell">
        <Reveal>
          <span className="kicker">Trajectory</span>
        </Reveal>
        <Reveal variants={rise} delay={0.05}>
          <h2 className="display-lg mt-5">
            Where I&apos;ve <span className="accent-text">been.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-14 pl-8 sm:pl-10">
          {/* rail */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-line sm:left-[7px]" />
          <motion.div
            className="absolute left-[5px] top-2 bottom-2 w-px origin-top bg-[var(--accent)] sm:left-[7px]"
            style={{ scaleY }}
          />

          <div className="space-y-14">
            {experience.map((job) => (
              <Reveal key={job.id} variants={rise}>
                <div className="relative">
                  {/* dot */}
                  <span className="absolute -left-8 top-1.5 flex h-3 w-3 items-center justify-center sm:-left-10">
                    <span className="signal-dot" />
                  </span>

                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="mono text-xs text-3">{job.period}</span>
                    <span className="chip w-fit">{job.type}</span>
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight">{job.title}</h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="font-medium accent-text">{job.company}</span>
                    <span className="flex items-center gap-1 text-3">
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-2">{job.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.responsibilities.map((r) => (
                      <span key={r} className="chip">{r}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
