'use client';
import { ExternalLink, Github } from 'lucide-react';
import { featured } from '@/lib/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-white/60 text-lg mb-12">End-to-end solutions built with modern tech</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <div key={project.id} className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/60 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <a href={project.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 text-sm text-primary hover:text-primary/80">
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
