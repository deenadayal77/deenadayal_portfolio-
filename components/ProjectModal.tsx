'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/lib/projects';
import ProjectDetail from './ProjectDetail';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center sm:p-6">
          <motion.div
            className="absolute inset-0"
            style={{ background: 'color-mix(in srgb, var(--bg) 78%, rgba(0,0,0,0.55))', backdropFilter: 'blur(16px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[24px] border border-line bg-bg-2 shadow-[0_34px_120px_-54px_var(--shadow)] sm:rounded-[24px]"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          >
            <div className="flex items-center justify-between border-b border-line bg-[color-mix(in_srgb,var(--elevated)_72%,transparent)] px-6 py-4">
              <span className="chip chip-accent">{project.status}</span>
              <button onClick={onClose} className="icon-btn !h-10 !w-10" aria-label="Close">
                <X size={18} />
              </button>
            </div>
            <div className="no-scrollbar overflow-y-auto px-6 py-8 sm:px-9">
              <ProjectDetail project={project} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
