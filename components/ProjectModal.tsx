'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { Project } from '@/lib/projects';
import ProjectDetail from './ProjectDetail';
import { modalSpring, easeOut } from '@/lib/motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => closeRef.current?.focus());
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
        >
          {/* Scrim — faster fade in than sheet (scrim is instant context) */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'rgba(9, 11, 17, 0.82)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
          />

          {/* Sheet
              Enter: modalSpring (feels weighted, intentional)
              y:20 not y:48 — large distance looks sluggish
              scale:0.97 not scale(0) — per STANDARDS, never scale(0)
              Exit: tween faster exit (system responding) */}
          <motion.div
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[24px] border border-[var(--line)] bg-[var(--bg-2)] shadow-[0_40px_120px_-54px_var(--shadow)] sm:rounded-[24px]"
            initial={{ opacity: 0, y: reduce ? 0 : 20, scale: reduce ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: reduce ? 0 : 14,
              scale: reduce ? 1 : 0.98,
              transition: { type: 'tween', ease: [0.4, 0, 0.2, 1], duration: 0.2 },
            }}
            transition={modalSpring}
          >
            {/* Modal header */}
            <div className="flex shrink-0 items-center justify-between border-b border-[var(--line)] bg-[var(--elevated)] px-6 py-4">
              <span
                className={`chip text-[0.62rem] ${project.status === 'Production' ? 'chip-positive' : 'chip-accent'}`}
              >
                {project.status}
              </span>
              <button
                ref={closeRef}
                onClick={onClose}
                className="icon-btn"
                aria-label="Close"
              >
                <X size={17} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="no-scrollbar overflow-y-auto px-6 py-8 sm:px-9">
              <ProjectDetail project={project} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
