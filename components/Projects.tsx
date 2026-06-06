'use client';
import { Github, ArrowUpRight, Zap } from 'lucide-react';
import { featured } from '@/lib/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Featured</span>
            <span className="block text-white">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">End-to-end solutions showcasing full-stack development and AI integration</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className="group relative h-96 rounded-2xl overflow-hidden border-2 border-cyan-400/30 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-glow-lg cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 group-hover:from-cyan-500/10 group-hover:via-slate-800 group-hover:to-blue-500/10 transition-all duration-300" />

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                {/* Top */}
                <div>
                  <div className="inline-block mb-4 p-3 bg-cyan-400/20 rounded-xl border border-cyan-400/40 group-hover:bg-cyan-400/40 transition-all duration-300">
                    <Zap size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{project.description}</p>
                </div>

                {/* Bottom */}
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full font-mono border border-cyan-400/40">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                  >
                    View Code
                    <ArrowUpRight size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
