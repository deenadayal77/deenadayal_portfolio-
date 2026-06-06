'use client';

import { ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            {/* Name & Title */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-black mb-3 leading-tight">
                <span className="gradient-text">Deena Dayal</span>
              </h1>
              <p className="text-2xl font-semibold text-[var(--text-secondary)] mb-3">
                Full-Stack Developer & AI Engineer
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30">
                  @ DemandNXT
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30">
                  ISTE President
                </span>
              </div>
            </div>

            {/* About */}
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
              Building innovative AI-powered solutions and full-stack applications. CSE student at PES College with industry experience in AI workflows and automation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { number: '10+', label: 'Projects' },
                { number: '5+', label: 'Technologies' },
                { number: '800+', label: 'Engaged' },
              ].map((stat) => (
                <div key={stat.label} className="card">
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <p className="text-xs text-[var(--text-tertiary)] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="group px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Code2 size={20} />
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 card font-bold rounded-xl hover:border-[var(--accent)] text-center"
              >
                Get in Touch
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-3 card rounded-xl hover:border-[var(--accent)] transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} className="text-[var(--accent)]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden md:flex justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 glass-effect rounded-3xl border-2 border-[var(--accent)]/30" />
              <div className="absolute inset-2 glass-effect rounded-3xl border border-[var(--accent)]/20 flex flex-col items-center justify-center p-8">
                <Code2 size={80} className="text-[var(--accent)]/40 mb-4" />
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Full Stack</h3>
                <p className="text-sm text-[var(--text-secondary)] text-center">React • Python • AI • Cloud</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <p className="text-sm text-[var(--text-tertiary)] text-center">↓ Explore my work</p>
        </div>
      </div>
    </section>
  );
}
