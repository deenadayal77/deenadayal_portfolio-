'use client';

import { useState } from 'react';
import { Project, featured } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            Click any project to explore the problem, solution, and tech decisions
          </p>
        </div>

        {/* Grid: 3 desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
