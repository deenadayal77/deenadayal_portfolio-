'use client';

import { experience } from '@/lib/data';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">Building products and leading teams</p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-[27px] top-20 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/50 to-transparent" />
              )}

              {/* Timeline Dot with Neon Glow */}
              <div className="absolute left-0 top-0 w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 bg-[var(--accent)]/20 rounded-full blur-lg animate-pulse" />
                <div className="relative w-14 h-14 neon-border rounded-full flex items-center justify-center bg-[var(--bg-secondary)]">
                  <Briefcase size={20} className="text-[var(--accent)]" />
                </div>
              </div>

              {/* Content Card */}
              <div className="ml-28 neon-border p-6 rounded-2xl bg-[var(--bg-secondary)]/40 backdrop-blur-sm group hover:bg-[var(--bg-secondary)]/60 transition-all duration-300 cursor-pointer">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-[var(--accent)] font-bold text-lg">{job.company}</p>
                      <p className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                        <MapPin size={14} className="text-[var(--accent)]" />
                        {job.location}
                      </p>
                    </div>
                  </div>

                  {/* Period & Type */}
                  <div className="flex flex-wrap gap-2">
                    <span className="neon-border px-3 py-1 rounded-lg text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/10 flex items-center gap-1">
                      <Calendar size={12} />
                      {job.period}
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-bold text-white bg-[var(--accent)]/20 border border-[var(--accent)]/30">
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-sm md:text-base">
                  {job.description}
                </p>

                {/* Responsibilities - Neon Badges */}
                <div className="flex flex-wrap gap-2">
                  {job.responsibilities.map((resp, idx) => (
                    <span
                      key={resp}
                      className="neon-border px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--accent)] bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 transition-all flex items-center gap-1"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <ArrowRight size={12} className="opacity-50" />
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
