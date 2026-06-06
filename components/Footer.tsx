'use client';
import { Github, Linkedin, Mail, Heart, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">deena.</h3>
            <p className="text-white/60 text-sm leading-relaxed">{personalInfo.title}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Projects', 'Experience', 'Skills', 'About'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-primary text-sm transition-colors flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href={personalInfo.github} target="_blank" className="text-white/60 hover:text-primary text-sm transition-colors flex items-center gap-1 group">
                  GitHub
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" className="text-white/60 hover:text-primary text-sm transition-colors flex items-center gap-1 group">
                  LinkedIn
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="text-white/60 hover:text-primary text-sm transition-colors flex items-center gap-1 group">
                  Email
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                className="p-3 glass-effect rounded-lg hover:border-primary/70 hover:shadow-glow transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-primary" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                className="p-3 glass-effect rounded-lg hover:border-primary/70 hover:shadow-glow transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} className="text-primary" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 glass-effect rounded-lg hover:border-primary/70 hover:shadow-glow transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {year} {personalInfo.name}. All rights reserved.</p>
          <p className="text-white/60 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-primary animate-pulse" /> for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
