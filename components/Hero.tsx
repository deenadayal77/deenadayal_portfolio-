'use client';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block px-4 py-2 bg-white/5 border border-primary/30 rounded-full text-sm text-primary">
          ✨ Full-Stack Developer & AI Enthusiast
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Building <span className="gradient-text">Innovative Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          CSE Student at PESCE | ISTE President | Passionate about full-stack development, AI, and creating impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90">
            View Projects
            <ArrowRight size={20} className="ml-2" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20">
            Contact Me
          </a>
        </div>
        <div className="flex gap-6 justify-center">
          <a href={personalInfo.linkedin} target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50">
            <Linkedin size={20} className="text-white/70" />
          </a>
          <a href={personalInfo.github} target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50">
            <Github size={20} className="text-white/70" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50">
            <Mail size={20} className="text-white/70" />
          </a>
        </div>
      </div>
    </section>
  );
}
