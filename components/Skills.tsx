'use client';
import { Brain, Code2, Zap, MessageSquare } from 'lucide-react';
import { skills } from '@/lib/data';

const categories = [
  { title: 'AI & ML', icon: Brain, list: skills.ai_ml, color: 'from-purple-500' },
  { title: 'Programming', icon: Code2, list: skills.programming, color: 'from-blue-500' },
  { title: 'Frameworks', icon: Zap, list: [...skills.frontend, ...skills.backend.slice(0, 2)], color: 'from-pink-500' },
  { title: 'Professional', icon: MessageSquare, list: skills.soft, color: 'from-green-500' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[var(--text-secondary)]">Expertise across AI, development, and professional competencies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="group neon-border p-6 rounded-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ background: `linear-gradient(to bottom right, var(--accent)/10, var(--accent)/5)` }} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg group-hover:transition-colors" style={{ background: `var(--accent)/10` }}>
                      <Icon className="w-6 h-6" style={{ color: `var(--accent)` }} />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{cat.title}</h3>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-3">
                    {cat.list.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 group/item">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover/item:scale-150 transition-transform" />
                        <span className="text-white/70 group-hover/item:text-white transition-colors text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
