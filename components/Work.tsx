'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '@/lib/projects';
import { Reveal } from './Reveal';
import { rise } from '@/lib/motion';
import ProjectCard from './ProjectCard';
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

export default function Work() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const tagged = useMemo(
    () => projects.map((p) => ({ project: p, cats: categoriesOf(p) })),
    []
  );

  const visible = useMemo(
    () => (filter === 'All' ? tagged : tagged.filter((t) => t.cats.includes(filter))),
    [filter, tagged]
  );

  return (
    <section id="work" className="section">
      <div className="shell">
        <div className="flex flex-col gap-8 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="kicker">Selected Work</span>
            </Reveal>
            <Reveal variants={rise} delay={0.05}>
              <h2 className="display-lg mt-5">
                Things I&apos;ve <span className="accent-text">shipped.</span>
              </h2>
            </Reveal>
            <Reveal variants={rise} delay={0.1}>
              <p className="lead mt-4 text-base">
                Every card opens a short case study — the problem, what I built, the judgment
                calls, and what changed.
              </p>
            </Reveal>
          </div>

          {/* filters */}
          <Reveal variants={rise} delay={0.1}>
            <div className="flex flex-wrap gap-1.5">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  data-cursor="hover"
                  className="relative rounded-full px-4 py-2 text-sm transition-colors"
                  style={{ color: filter === f ? 'var(--accent-ink)' : 'var(--text-2)' }}
                >
                  {filter === f && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{ background: 'var(--accent)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map(({ project }, i) => (
              <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
