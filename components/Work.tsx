'use client';

import { useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '@/lib/projects';
import { Reveal } from './Reveal';
import { rise, spring, easeOut } from '@/lib/motion';
import ProjectModal from './ProjectModal';

type Filter = 'All' | 'Automation' | 'Full-Stack' | 'AI / ML';

const AUTOMATION = ['n8n', 'Automation', 'Data Enrichment', 'Lead Processing', 'Email Marketing', 'Segmentation', 'Content Generation'];
const FULLSTACK = ['React', 'Django', 'Express', 'Node.js', 'FastAPI', 'MongoDB', 'TypeScript', 'JavaScript', 'Python'];
const AIML = ['LLM', 'NLP', 'AI', 'Machine Learning', 'GenAI', 'Gemini AI'];

function categoriesOf(p: Project): Filter[] {
  const set = new Set<Filter>();
  const tags = [...p.tags, ...p.techStack];
  if (tags.some((t) => AUTOMATION.includes(t))) set.add('Automation');
  if (tags.some((t) => FULLSTACK.includes(t))) set.add('Full-Stack');
  if (tags.some((t) => AIML.includes(t))) set.add('AI / ML');
  return [...set];
}

const filters: Filter[] = ['All', 'Automation', 'Full-Stack', 'AI / ML'];

const categoryGradients: Record<string, string> = {
  Automation: 'from-blue-900/60 to-slate-900/80',
  'Full-Stack': 'from-slate-900/60 to-emerald-900/40',
  'AI / ML': 'from-violet-900/50 to-slate-900/80',
  All: 'from-slate-800/60 to-blue-900/40',
};

function getProjectGradient(cats: Filter[]): string {
  if (cats.includes('Automation')) return categoryGradients['Automation'];
  if (cats.includes('AI / ML')) return categoryGradients['AI / ML'];
  if (cats.includes('Full-Stack')) return categoryGradients['Full-Stack'];
  return categoryGradients['All'];
}

interface ProjectRowProps {
  project: Project;
  cats: Filter[];
  index: number;
  onOpen: (p: Project) => void;
  onHoverStart: (p: Project, cats: Filter[]) => void;
  onHoverEnd: () => void;
}

function ProjectRow({ project, cats, index, onOpen, onHoverStart, onHoverEnd }: ProjectRowProps) {
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(project);
    }
  };

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.14 } }}
      transition={{ duration: 0.22, ease: easeOut, delay: index * 0.04 }}
      role="row"
    >
      <div
        className="group flex min-h-[76px] items-center gap-5 border-t border-[var(--line)] px-4 py-4 cursor-pointer rounded-lg"
        style={{ transition: 'background-color 160ms ease' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.03)';
          onHoverStart(project, cats);
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.backgroundColor = '';
          onHoverEnd();
        }}
        onClick={() => onOpen(project)}
        onKeyDown={handleKey}
        tabIndex={0}
        role="button"
        aria-label={`Open ${project.title} case study`}
      >
        {/* Index */}
        <span className="mono shrink-0 w-8 text-xs text-[var(--text-3)] tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Status chip */}
        <span className="hidden shrink-0 sm:block">
          <span className={`chip text-[0.62rem] ${project.status === 'Production' ? 'chip-positive' : 'chip-accent'}`}>
            {project.status}
          </span>
        </span>

        {/* Name + description */}
        <div className="min-w-0 flex-1">
          <p
            className="text-[1.0625rem] font-semibold leading-snug group-hover:text-[var(--accent-text)]"
            style={{ transition: 'color 160ms ease' }}
          >
            {project.title}
          </p>
          <p className="mt-0.5 truncate text-sm text-[var(--text-2)]">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        {/* Arrow — GPU transform only */}
        <span
          className="inline-block shrink-0 mono text-sm font-medium text-[var(--accent-text)] group-hover:translate-x-1"
          style={{ transition: 'transform 180ms var(--ease-out)' }}
        >
          Open &rarr;
        </span>
      </div>
    </motion.li>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const [preview, setPreview] = useState<{ project: Project; cats: Filter[] } | null>(null);

  const tagged = useMemo(
    () => projects.map((p) => ({ project: p, cats: categoriesOf(p) })),
    []
  );

  const visible = useMemo(
    () => (filter === 'All' ? tagged : tagged.filter((t) => t.cats.includes(filter))),
    [filter, tagged]
  );

  const handleHoverStart = useCallback((project: Project, cats: Filter[]) => {
    setPreview({ project, cats });
  }, []);

  const handleHoverEnd = useCallback(() => {
    setPreview(null);
  }, []);

  return (
    <section id="work" className="section">
      <div className="shell">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="kicker">Selected Work</span>
            </Reveal>
            <Reveal variants={rise} delay={0.05}>
              <h2 className="display-lg mt-4">
                Everything I&rsquo;ve <span className="text-[var(--accent-text)]">shipped.</span>
              </h2>
            </Reveal>
          </div>

          {/* Tab filter */}
          <Reveal variants={rise} delay={0.08}>
            <div className="tab-strip">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  data-active={filter === f}
                  className="tab-item relative"
                >
                  {f}
                  {filter === f && (
                    <motion.span
                      layoutId="work-tab-indicator"
                      className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-[var(--accent)]"
                      transition={spring}
                    />
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Project list */}
        <ul role="list">
          <AnimatePresence mode="popLayout">
            {visible.map(({ project, cats }, i) => (
              <ProjectRow
                key={project.id}
                project={project}
                cats={cats}
                index={i}
                onOpen={setSelected}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </AnimatePresence>
        </ul>

        <div className="border-t border-[var(--line)]" />
      </div>

      {/* Preview panel — desktop only */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="pointer-events-none fixed right-0 top-0 z-50 hidden h-screen w-[36vw] lg:flex flex-col justify-center px-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10, transition: { duration: 0.14, ease: 'easeIn' } }}
            transition={{ duration: 0.2, ease: easeOut }}
            aria-hidden
          >
            <div
              className={`rounded-2xl bg-gradient-to-br ${getProjectGradient(preview.cats)} border border-[var(--line)] h-[58vh] flex flex-col justify-end p-8`}
            >
              <span className="chip mb-4 w-fit" style={{ background: 'rgba(255,255,255,0.06)' }}>
                {preview.cats[0] ?? 'Project'}
              </span>
              <p className="display-lg text-[var(--text)] leading-tight max-w-[14ch]">
                {preview.project.title}
              </p>
              <p className="mt-3 text-sm text-[var(--text-2)] leading-relaxed max-w-[32ch]">
                {preview.project.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
