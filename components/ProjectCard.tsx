'use client';

import { Project } from '@/lib/projects';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  return (
    <div
      onClick={() => onOpenModal(project)}
      className="neon-border p-6 rounded-2xl bg-[var(--bg-secondary)]/50 cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-[var(--accent)]/10 group h-full flex flex-col justify-between"
      style={{
        animation: `slideInLeft 0.6s ease-out forwards`,
      }}
    >
      {/* Tag */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full">
          {project.status}
        </span>
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h3 className="text-2xl font-black text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-3">
          {project.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mt-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg border border-[var(--accent)]/20 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-[var(--accent)]/20">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors text-sm font-semibold"
          >
            <Github size={16} />
            Code
          </a>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(project);
            }}
            className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors text-sm font-semibold"
          >
            <ExternalLink size={16} />
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
