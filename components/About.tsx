'use client';
import { CheckCircle } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              I'm <span className="font-semibold">Deena Dayal B K</span>, a Computer Science Engineering student at PES College of Engineering, currently interning at Dhee Coding Labs.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              My work focuses on <span className="text-primary font-semibold">full-stack development</span>, generative AI integration, and building practical solutions that solve real problems.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              As <span className="text-primary font-semibold">ISTE President</span>, I've developed strong leadership skills through organizing events and leading student initiatives.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-sm text-white/60 mb-1">Current Role</p>
              <p className="font-semibold">Full-Stack Developer</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-sm text-white/60 mb-1">Location</p>
              <p className="font-semibold">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white/5 border border-white/10 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Why Work With Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Full-stack development across frontend & backend',
              'AI/ML integration expertise',
              'Proven leadership experience',
              'Strong problem-solving skills',
              'Passion for innovative solutions',
              'Collaborative team player',
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
