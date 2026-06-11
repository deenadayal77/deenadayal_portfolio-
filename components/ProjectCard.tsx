'use client';

import { forwardRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/projects';
import { ease } from '@/lib/motion';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}

const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(function ProjectCard(
  { project, index, onOpen },
  ref
) {
  // cursor-follow spotlight: only writes CSS vars, no layout/repaint of children
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease }}
      onPointerMove={onMove}
      onClick={() => onOpen(project)}
      data-cursor="hover"
      className="card group flex cursor-pointer flex-col p-6 transition-transform duration-300 will-change-transform hover:-translate-y-1.5"
    >
      <div className="relative z-10 flex items-center justify-between">
        <span className="mono text-sm text-3">{String(index + 1).padStart(2, '0')}</span>
        <span className="chip chip-accent">
          <span className="signal-dot !h-1.5 !w-1.5" />
          {project.status}
        </span>
      </div>

      <h3 className="relative z-10 mt-5 text-2xl font-semibold leading-tight transition-colors group-hover:text-[var(--accent-text)]">
        {project.title}
      </h3>
      <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-2">{project.description}</p>

      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-between border-t border-line pt-4">
        <span className="mono text-xs text-3">{project.date}</span>
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-2 transition-colors hover:text-[var(--accent-text)]"
            aria-label="View source"
          >
            <Github size={17} />
          </a>
          <span className="flex items-center gap-1 text-sm text-2 transition-colors group-hover:text-[var(--accent-text)]">
            Case study
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
});

export default ProjectCard;
