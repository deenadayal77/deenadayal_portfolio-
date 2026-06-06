'use client';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">deena</h3>
            <p className="text-white/60 text-sm">{personalInfo.title}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Projects', 'Experience', 'Skills', 'About'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-primary text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href={personalInfo.github} target="_blank" className="text-white/60 hover:text-primary text-sm">GitHub</a></li>
              <li><a href={personalInfo.linkedin} target="_blank" className="text-white/60 hover:text-primary text-sm">LinkedIn</a></li>
              <li><a href={`mailto:${personalInfo.email}`} className="text-white/60 hover:text-primary text-sm">Email</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-3">
              <a href={personalInfo.linkedin} target="_blank" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg">
                <Linkedin size={18} className="text-white/70" />
              </a>
              <a href={personalInfo.github} target="_blank" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg">
                <Github size={18} className="text-white/70" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg">
                <Mail size={18} className="text-white/70" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 my-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">© {year} {personalInfo.name}. All rights reserved.</p>
          <p className="text-white/60 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-primary" /> for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
