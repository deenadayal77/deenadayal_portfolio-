'use client';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Zap } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-20 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Top Badge */}
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <div className="glass-effect px-6 py-3 flex items-center gap-2 border-cyan-400/30">
            <Sparkles size={18} className="text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome to my creative space
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="gradient-text">Build</span>
              <span className="block text-white">Something</span>
              <span className="text-cyan-300">Awesome</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              I&apos;m a full-stack developer & AI enthusiast building innovative solutions. Currently at DemandNXT, leading ISTE, and exploring the frontiers of AI.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="glass-effect p-4 border-cyan-400/20">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="glass-effect p-4 border-cyan-400/20">
                <div className="text-2xl font-bold gradient-text">800+</div>
                <div className="text-xs text-gray-400">Engaged</div>
              </div>
              <div className="glass-effect p-4 border-cyan-400/20">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-xs text-gray-400">Skills</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-primary text-slate-950 font-bold rounded-xl hover:shadow-glow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2"
              >
                <Code2 size={20} />
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass-effect text-white font-bold rounded-xl border-cyan-400/40 hover:border-cyan-400/80 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                className="p-4 glass-effect hover:border-cyan-400/80 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110 rounded-xl border-cyan-400/30"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-cyan-400" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                className="p-4 glass-effect hover:border-cyan-400/80 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110 rounded-xl border-cyan-400/30"
                aria-label="GitHub"
              >
                <Github size={24} className="text-cyan-400" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-4 glass-effect hover:border-cyan-400/80 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110 rounded-xl border-cyan-400/30"
                aria-label="Email"
              >
                <Mail size={24} className="text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hidden md:flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full aspect-square">
              {/* Animated Card Stack */}
              <div className="absolute inset-0 glass-effect rounded-2xl border-cyan-400/30 transform rotate-3 hover:rotate-6 transition-transform duration-300" />
              <div className="absolute inset-0 glass-effect rounded-2xl border-cyan-400/40 transform -rotate-3 hover:-rotate-6 transition-transform duration-300" style={{ top: '-10px', left: '-10px' }} />

              <div className="absolute inset-0 glass-effect rounded-2xl border-cyan-400/50 flex flex-col items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 animate-glow" />
                <div className="relative z-10 text-center">
                  <Zap className="w-20 h-20 text-cyan-400 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Full Stack</h3>
                  <p className="text-gray-300 text-sm">React • Python • AI • Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-cyan-400 text-sm font-mono font-bold">↓ Scroll to explore</div>
        </div>
      </div>
    </section>
  );
}
