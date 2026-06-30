'use client';

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: personalInfo.github },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--line)]"
      style={{ background: 'var(--elevated)' }}
    >
      <div className="shell">
        {/* Main footer grid */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <circle cx="12" cy="12" r="11" stroke="var(--accent)" strokeWidth="1.2" />
                <circle cx="12" cy="12" r="11" fill="var(--accent-soft)" />
                <text
                  x="12"
                  y="16.5"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="var(--accent-text)"
                  fontFamily="inherit"
                  letterSpacing="-0.3"
                >
                  DK
                </text>
              </svg>
              <span className="text-[0.95rem] font-semibold tracking-tight">
                Deenadayal B K
              </span>
            </div>
            <p className="mono text-xs text-[var(--text-3)]">AI Workflow Engineer</p>
            <p className="text-sm text-[var(--text-2)] leading-relaxed max-w-[28ch]">
              Building AI-powered automation that turns manual work into reliable, scalable systems.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="eyebrow mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[var(--text-2)] transition-colors duration-[180ms] hover:text-[var(--text)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === 'Email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-[var(--text-2)] transition-colors duration-[180ms] hover:text-[var(--text)]"
                  >
                    <Icon size={14} className="shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] py-6 sm:flex-row">
          <p className="mono text-xs text-[var(--text-3)]">
            &copy; {year} Deenadayal B K. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-1.5 mono text-xs text-[var(--text-3)] transition-colors duration-[180ms] hover:text-[var(--accent-text)]"
            aria-label="Back to top"
          >
            <ArrowUp
              size={12}
              className="transition-transform duration-[220ms] group-hover:-translate-y-0.5"
            />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
