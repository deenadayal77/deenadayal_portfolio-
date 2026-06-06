'use client';

import { Project } from '@/lib/projects';
import { X } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: 'fadeInUp 0.3s ease-out' }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl bg-[var(--bg-secondary)] neon-border rounded-2xl p-8 max-h-[90vh] overflow-hidden"
        style={{ animation: 'slideInFromBottom 0.4s ease-out' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-[var(--accent)]/20 rounded-lg transition-all"
          aria-label="Close modal"
        >
          <X size={24} className="text-[var(--accent)]" />
        </button>

        {/* Content */}
        <ProjectDetail project={project} />
      </div>
    </div>
  );
}
