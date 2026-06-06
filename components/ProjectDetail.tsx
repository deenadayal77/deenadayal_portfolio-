'use client';

import { Project } from '@/lib/projects';
import { ChevronRight } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const sections = [
    { title: 'The Problem', content: project.problem },
    { title: 'What I Built', content: project.whatBuilt },
  ];

  return (
    <div className="space-y-12 max-h-[70vh] overflow-y-auto pr-4">
      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--accent)] uppercase">LIVE AT</span>
          <span className="text-[var(--text-secondary)]">Portfolio</span>
        </div>
        <h2 className="text-5xl font-black gradient-text">{project.title}</h2>
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-6 pt-4 text-sm">
          <div>
            <p className="text-[var(--text-tertiary)] uppercase text-xs">Date</p>
            <p className="text-white font-semibold">{project.date}</p>
          </div>
          <div>
            <p className="text-[var(--text-tertiary)] uppercase text-xs">Role</p>
            <p className="text-white font-semibold">{project.role}</p>
          </div>
          <div>
            <p className="text-[var(--text-tertiary)] uppercase text-xs">Status</p>
            <p className="text-[var(--accent)] font-semibold">{project.status}</p>
          </div>
        </div>
      </div>

      {/* Problem & What I Built */}
      {sections.map((section) => (
        <div key={section.title} className="space-y-3">
          <h3 className="text-2xl font-black uppercase tracking-wide">
            {section.title}
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {section.content}
          </p>
        </div>
      ))}

      {/* How it's wired (Tech Stack) */}
      <div className="space-y-4">
        <h3 className="text-2xl font-black uppercase tracking-wide">
          How It&apos;s Wired
        </h3>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 neon-border rounded-xl text-sm font-semibold bg-[var(--accent)]/5 hover:bg-[var(--accent)]/15 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Judgment Calls */}
      <div className="space-y-4">
        <h3 className="text-2xl font-black uppercase tracking-wide">
          The Judgment Calls
        </h3>
        <div className="space-y-4">
          {project.judgmentCalls.map((call, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-4 bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-lg hover:border-[var(--accent)]/50 transition-all"
            >
              <ChevronRight className="text-[var(--accent)] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[var(--accent)] mb-1">{call.title}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{call.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="space-y-3 pb-4">
        <h3 className="text-2xl font-black uppercase tracking-wide">
          What It Changed
        </h3>
        <div className="p-6 neon-border rounded-xl bg-[var(--accent)]/5">
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {project.impact}
          </p>
        </div>
      </div>
    </div>
  );
}
