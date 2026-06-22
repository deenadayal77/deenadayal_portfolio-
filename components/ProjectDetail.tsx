'use client';

import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/lib/projects';

interface ProjectDetailProps {
  project: Project;
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-[var(--line)] pt-7 sm:grid-cols-[148px_1fr] sm:gap-8">
      <h3 className="mono text-xs uppercase tracking-wider text-[var(--text-3)] pt-0.5">{label}</h3>
      <div className="leading-relaxed">{children}</div>
    </section>
  );
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="space-y-10">
      <header className="space-y-6">
        <h2 className="display-lg">{project.title}</h2>
        <p className="text-[var(--text-2)] text-[1.0625rem] leading-relaxed max-w-[52ch]">
          {project.description}
        </p>

        {/* Meta grid */}
        <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
          {[
            ['Date', project.date],
            ['Role', project.role],
            ['Status', project.status],
          ].map(([k, v]) => (
            <div
              key={k}
              className="bg-[var(--bg-2)] px-4 py-3.5"
              style={{ transition: 'background-color 160ms ease' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--bg-3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = '';
              }}
            >
              <p className="eyebrow">{k}</p>
              <p className="mt-1.5 text-sm font-medium text-[var(--text)]">{v}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost h-10 !min-h-0 text-sm"
          >
            <Github size={15} /> Source
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent h-10 !min-h-0 text-sm"
            >
              Live <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </header>

      <Block label="01 — Problem">
        <p className="text-[var(--text-2)] leading-relaxed">{project.problem}</p>
      </Block>

      <Block label="02 — What I Built">
        <p className="text-[var(--text-2)] leading-relaxed">{project.whatBuilt}</p>
      </Block>

      <Block label="03 — How It's Wired">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </Block>

      <Block label="04 — Judgment Calls">
        <div className="space-y-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)]">
          {project.judgmentCalls.map((c) => (
            <div
              key={c.title}
              className="bg-[var(--bg-2)] p-4"
              style={{ transition: 'background-color 160ms ease' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--bg-3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = '';
              }}
            >
              <h4 className="text-sm font-semibold text-[var(--accent-text)]">{c.title}</h4>
              <p className="mt-1.5 text-sm text-[var(--text-2)] leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block label="05 — What Changed">
        <div
          className="rounded-xl border p-5"
          style={{
            background: 'rgba(59,130,246,0.06)',
            borderColor: 'rgba(59,130,246,0.18)',
          }}
        >
          <p className="text-[var(--text)] leading-relaxed font-medium">{project.impact}</p>
        </div>
      </Block>
    </div>
  );
}
