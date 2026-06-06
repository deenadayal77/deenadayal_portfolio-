'use client';
import { experience } from '@/lib/data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <div className="space-y-8 mt-12">
          {experience.map((job, index) => (
            <div key={job.id} className="relative ml-20 p-6 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30">
              <div className="absolute -left-12 -top-12 w-12 h-12 bg-dark border-2 border-primary rounded-full flex items-center justify-center text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-primary text-sm font-semibold">{job.company}</p>
                  <p className="text-white/50 text-xs">{job.location}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{job.period}</span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">{job.type}</span>
                </div>
              </div>
              <p className="text-white/70 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.responsibilities.map((resp) => (
                  <span key={resp} className="px-3 py-1 bg-surface border border-white/10 text-white/70 text-xs rounded-full">
                    {resp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
