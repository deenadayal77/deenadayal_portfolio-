'use client';
import { Award } from 'lucide-react';
import { certifications, achievements } from '@/lib/data';

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Certifications</span>
        </h2>

        <div className="space-y-6 mt-12">
          {certifications.map((cert, i) => (
            <div key={i} className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30 flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0"><Award className="w-6 h-6" /></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <p className="text-primary text-sm font-semibold mb-2">{cert.issuer}</p>
                <p className="text-white/60 text-xs">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-16 mb-6">Achievements</h3>
        <div className="space-y-4">
          {achievements.map((ach, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30 flex items-start gap-4">
              <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold">{ach.title}</h4>
                <p className="text-primary text-sm font-semibold mb-1">{ach.issuer}</p>
                <p className="text-white/70 text-sm">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
