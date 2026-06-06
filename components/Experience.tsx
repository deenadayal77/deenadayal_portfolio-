'use client';

import { experience } from '@/lib/data';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[var(--text-secondary)]">Journey through my professional roles and responsibilities</p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline Line */}
              <div className="absolute left-6 top-12 bottom-0 w-1 bg-gradient-to-b from-[var(--accent)] to-transparent" />

              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-14 h-14 bg-[var(--bg-secondary)] border-4 border-[var(--accent)] rounded-full flex items-center justify-center">
                <Briefcase size={24} className="text-[var(--accent)]" />
              </div>

              {/* Content */}
              <div className="ml-24 card p-8 rounded-xl border-2 group hover:border-[var(--accent)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                      {job.title}
                    </h3>
                    <p className="text-lg text-[var(--accent)] font-semibold mt-1">{job.company}</p>
                    <p className="text-sm text-[var(--text-tertiary)] flex items-center gap-1 mt-1">
                      <MapPin size={14} /> {job.location}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs rounded-full font-medium flex items-center gap-1">
                      <Calendar size={12} /> {job.period}
                    </span>
                    <span className="px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-xs rounded-full">
                      {job.type}
                    </span>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{job.description}</p>

                {/* Responsibilities */}
                <div className="flex flex-wrap gap-2">
                  {job.responsibilities.map((resp) => (
                    <span
                      key={resp}
                      className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs rounded-full border border-[var(--accent)]/20 font-medium"
                    >
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
