'use client';

import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/lib/projects';

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="space-y-10">
      <header className="space-y-5">
        <h2 className="display-lg text-[clamp(2rem,5vw,3.25rem)]">{project.title}</h2>
        <p className="lead max-w-none text-base">{project.description}</p>

        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
          {[
            ['Date', project.date],
            ['Role', project.role],
            ['Status', project.status],
          ].map(([k, v]) => (
            <div key={k} className="bg-bg-2 px-4 py-3">
              <p className="eyebrow">{k}</p>
              <p className="mt-1 text-sm font-medium">{v}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost h-11 !min-h-0 text-sm" data-cursor="hover">
            <Github size={16} /> Source
          </a>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-accent h-11 !min-h-0 text-sm" data-cursor="hover">
              Live <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </header>

      <Block label="01 — The Problem">
        <p className="text-2">{project.problem}</p>
      </Block>

      <Block label="02 — What I Built">
        <p className="text-2">{project.whatBuilt}</p>
      </Block>

      <Block label="03 — How It's Wired">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </Block>

      <Block label="04 — The Judgment Calls">
        <div className="space-y-px overflow-hidden rounded-xl border border-line bg-line">
          {project.judgmentCalls.map((c) => (
            <div key={c.title} className="bg-bg-2 p-4">
              <h4 className="font-semibold accent-text">{c.title}</h4>
              <p className="mt-1 text-sm text-2">{c.description}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block label="05 — What It Changed">
        <div className="card bg-[var(--accent-soft)] p-5">
          <p className="font-medium">{project.impact}</p>
        </div>
      </Block>
    </div>
  );
}

interface ProjectDetailProps {
  project: Project;
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-line pt-6 sm:grid-cols-[140px_1fr] sm:gap-6">
      <h3 className="mono text-xs uppercase tracking-wider text-3">{label}</h3>
      <div className="leading-relaxed">{children}</div>
    </section>
  );
}
