'use client';

import type { Project } from '@/lib/projects';

interface ProjectRowProps {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
  isHovered?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export default function ProjectCard({ project, index, onOpen, onHoverStart, onHoverEnd }: ProjectRowProps) {
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(project);
    }
  };

  return (
    <div
      className="group flex min-h-[76px] items-center gap-5 border-t border-[var(--line)] px-4 py-4 cursor-pointer rounded-lg"
      style={{ transition: 'background-color 160ms ease' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.03)';
        onHoverStart?.();
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = '';
        onHoverEnd?.();
      }}
      onClick={() => onOpen(project)}
      onKeyDown={handleKey}
      tabIndex={0}
      role="button"
      aria-label={`Open ${project.title} case study`}
    >
      <span className="mono shrink-0 w-8 text-xs text-[var(--text-3)] tabular-nums">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="hidden shrink-0 sm:block">
        <span className={`chip text-[0.62rem] ${project.status === 'Production' ? 'chip-positive' : 'chip-accent'}`}>
          {project.status}
        </span>
      </span>
      <div className="min-w-0 flex-1">
        <p
          className="text-[1.0625rem] font-semibold leading-snug group-hover:text-[var(--accent-text)]"
          style={{ transition: 'color 160ms ease' }}
        >
          {project.title}
        </p>
        <p className="mt-0.5 truncate text-sm text-[var(--text-2)]">{project.description}</p>
      </div>
      <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
        {project.tags.slice(0, 3).map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
      <span
        className="inline-block shrink-0 mono text-sm font-medium text-[var(--accent-text)] group-hover:translate-x-1"
        style={{ transition: 'transform 180ms var(--ease-out)' }}
      >
        Open &rarr;
      </span>
    </div>
  );
}
