'use client';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow opacity-50" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow opacity-50 animation-delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="mb-8 inline-block animate-fade-in-up">
          <div className="px-4 py-2 glass-effect-sm text-sm text-primary font-medium flex items-center gap-2">
            <Sparkles size={16} />
            Full-Stack Developer & AI Enthusiast
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Building <span className="gradient-text">Innovative</span> Solutions
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          CSE Student at PESCE | ISTE President | Passionate about full-stack development, AI, and creating real impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-dark font-semibold rounded-xl hover:shadow-glow-lg transition-all duration-300 hover:scale-105 group"
          >
            View Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 glass-effect text-white font-semibold rounded-xl hover:border-primary/70 hover:bg-white/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect hover:border-primary/70 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover-glow rounded-lg"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-primary" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect hover:border-primary/70 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover-glow rounded-lg"
            aria-label="GitHub"
          >
            <Github size={20} className="text-primary" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 glass-effect hover:border-primary/70 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover-glow rounded-lg"
            aria-label="Email"
          >
            <Mail size={20} className="text-primary" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-primary text-sm font-mono">scroll down</div>
        </div>
      </div>
    </section>
  );
}
