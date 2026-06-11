'use client';

import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line">
      <div className="shell py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="signal-dot" />
              <span className="text-2xl font-semibold tracking-tight">
                deena<span className="accent-text">.</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-2">{personalInfo.title}</p>
            <p className="mono mt-3 text-xs text-3">{personalInfo.location}</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="link-underline text-sm text-2 hover:text-ink" data-cursor="hover">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" className="icon-btn" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="mono text-xs text-3">© {year} {personalInfo.name} — built with intent.</p>
          <a href="#top" className="group flex items-center gap-2 text-sm text-2 hover:text-ink" data-cursor="hover">
            Back to top
            <span className="icon-btn !h-9 !w-9 transition-transform group-hover:-translate-y-0.5">
              <ArrowUp size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
