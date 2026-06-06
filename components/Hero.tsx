'use client';

import { ArrowRight, Github, Linkedin, Mail, Code2, Zap } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Neon animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated neon orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(90deg, var(--accent) 1px, transparent 1px), linear-gradient(0deg, var(--accent) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Premium Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Neon tag */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border-2 border-[var(--accent)]/50 bg-[var(--accent)]/5 neon-border">
                <Zap size={16} className="text-[var(--accent)] animate-pulse" />
                <span className="text-sm font-bold text-[var(--accent)]">AVAILABLE FOR HIRE</span>
              </div>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-4">
                <span className="text-white">Creative</span>
                <br />
                <span className="gradient-text">Full-Stack</span>
                <br />
                <span className="text-white">Developer</span>
              </h1>
              <p className="text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed">
                I craft beautiful, performant web experiences with cutting-edge AI integration. Transforming ideas into innovative digital solutions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '10+', label: 'Projects' },
                { value: '5+', label: 'Tech Stack' },
                { value: '800+', label: 'Impact' },
              ].map((stat) => (
                <div key={stat.label} className="group neon-border p-4 rounded-xl bg-[var(--accent)]/5 cursor-pointer hover:bg-[var(--accent)]/10 transition-all">
                  <div className="text-3xl font-black text-[var(--accent)]">{stat.value}</div>
                  <p className="text-xs text-[var(--text-tertiary)] mt-2 group-hover:text-[var(--text-secondary)] transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-bold rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 neon-border"
              >
                <Zap size={20} />
                View Work
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 neon-border rounded-xl font-bold hover:bg-[var(--accent)]/10 transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  className="p-4 neon-border rounded-xl hover:scale-110 hover:bg-[var(--accent)]/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} className="text-[var(--accent)]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden md:flex justify-center items-center animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-80 h-80">
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/20 p-[2px]">
                <div className="absolute inset-0 bg-[var(--bg-primary)] rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <Code2 size={100} className="text-[var(--accent)]/30 mb-4 mx-auto" />
                    <h3 className="text-3xl font-black gradient-text">Full Stack</h3>
                    <p className="text-sm text-[var(--text-tertiary)] mt-2">React • Python • AI</p>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 neon-border blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-[var(--accent)] text-sm font-bold">⬇ SCROLL TO EXPLORE</div>
        </div>
      </div>
    </section>
  );
}
