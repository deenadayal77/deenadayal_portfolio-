'use client';
import { Brain, Code2, Zap, MessageSquare } from 'lucide-react';
import { skills } from '@/lib/data';

const categories = [
  { title: 'AI & ML', icon: Brain, list: skills.ai_ml },
  { title: 'Programming', icon: Code2, list: skills.programming },
  { title: 'Frameworks', icon: Zap, list: [...skills.frontend, ...skills.backend.slice(0, 2)] },
  { title: 'Professional', icon: MessageSquare, list: skills.soft },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 hover:bg-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.list.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-white/70 text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
