'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { featured } from '@/lib/projects';

export default function ProjectsSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % featured.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + featured.length) % featured.length);
    setIsAutoPlay(false);
  };

  const getVisibleProjects = () => {
    return [
      featured[current],
      featured[(current + 1) % featured.length],
      featured[(current + 2) % featured.length],
    ];
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">Showcasing my best work across full-stack and AI</p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {getVisibleProjects().map((project, idx) => (
              <div
                key={project.id}
                className="card group border-2 h-96 flex flex-col justify-between cursor-pointer hover:scale-105"
                style={{
                  animation: `slideInLeft 0.6s ease-out forwards`,
                  animationDelay: `${idx * 100}ms`,
                }}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <div>
                  <div className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/30">
                    Featured
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-light)] font-semibold transition-colors duration-300"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {featured.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrent(idx);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? 'w-8 bg-[var(--accent)]'
                      : 'w-2 bg-[var(--accent)]/40 hover:bg-[var(--accent)]/60'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] transition-all duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} className="text-[var(--text-primary)]" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] transition-all duration-300"
                aria-label="Next project"
              >
                <ChevronRight size={20} className="text-[var(--text-primary)]" />
              </button>
            </div>
          </div>

          {/* Auto-play indicator */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[var(--text-tertiary)]">
              {isAutoPlay ? '⏸ Pause · ' : '▶ Resume · '}
              <span className="text-[var(--accent)]">{current + 1}</span>
              {' / '}
              <span>{featured.length}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
