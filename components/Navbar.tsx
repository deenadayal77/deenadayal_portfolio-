'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { easeOut, easeDrawer, spring } from '@/lib/motion';

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#stack', id: 'stack' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const sectionLabels: Record<string, string> = {
  about: '01',
  work: '02',
  experience: '03',
  stack: '04',
  contact: '05',
};

export default function Navbar() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [sectionNum, setSectionNum] = useState('01');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
            setSectionNum(sectionLabels[e.target.id] ?? '01');
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: reduce ? 0 : -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: easeOut, delay: 0.08 }}
        className="fixed inset-x-0 top-0 z-[100] flex justify-center pt-4 px-4"
      >
        <nav
          className={[
            'flex w-full max-w-5xl items-center justify-between px-5 py-2.5 rounded-2xl',
            scrolled
              ? 'bg-[rgba(13,17,23,0.88)] backdrop-blur-xl border border-[var(--line-2)] shadow-[0_8px_32px_rgba(0,0,8,0.48)]'
              : 'bg-transparent border border-transparent',
          ].join(' ')}
          style={{
            transition: 'background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease, backdrop-filter 300ms ease',
          }}
        >
          {/* Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-2 text-[1.05rem] font-semibold tracking-tight"
            aria-label="Home"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
              style={{ flexShrink: 0 }}
            >
              {/* Circle container */}
              <circle cx="12" cy="12" r="11" fill="var(--accent-soft)" />
              <circle cx="12" cy="12" r="11" stroke="var(--accent)" strokeWidth="1.2" />
              {/* Brand mark — branching pipeline: one source node splits to two outputs */}
              <line x1="12" y1="8.5" x2="8.5" y2="15.5" stroke="var(--accent)" strokeWidth="1.15" strokeLinecap="round" />
              <line x1="12" y1="8.5" x2="15.5" y2="15.5" stroke="var(--accent)" strokeWidth="1.15" strokeLinecap="round" />
              <circle cx="12" cy="8.5" r="1.6" fill="var(--accent-text)" />
              <circle cx="8.5" cy="15.5" r="1.4" fill="var(--accent)" />
              <circle cx="15.5" cy="15.5" r="1.4" fill="var(--accent)" />
            </svg>
            Deenadayal B K
          </a>

          {/* Desktop nav links */}
          <ul className="hidden items-center md:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="relative flex items-center px-3.5 py-2 text-[0.84rem] font-medium transition-colors duration-[180ms] ease-out"
                    style={{ color: isActive ? 'var(--text)' : 'var(--text-2)' }}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-[var(--accent)]"
                        transition={spring}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 md:flex">
              <span className="h-3 w-px bg-[var(--line-2)]" aria-hidden />
              <span className="mono text-[0.7rem] text-[var(--text-3)] tabular-nums">
                {sectionNum} / 05
              </span>
            </span>
            {/* "Let's talk" as a subtle ghost-mini-button for emphasis */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-[var(--line-2)] px-3 py-1.5 text-[0.8rem] font-medium text-[var(--accent-text)]"
              style={{
                background: 'var(--accent-soft)',
                transition: 'border-color 180ms ease, background-color 180ms ease, color 180ms ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = 'rgba(59,130,246,0.4)';
                el.style.backgroundColor = 'rgba(59,130,246,0.14)';
                el.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = '';
                el.style.backgroundColor = '';
                el.style.color = '';
              }}
            >
              Let&apos;s talk <span aria-hidden>&rarr;</span>
            </a>
            <button
              className="icon-btn md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile bottom sheet */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[98] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{ background: 'rgba(0,0,8,0.65)', backdropFilter: 'blur(4px)' }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed inset-x-0 bottom-0 z-[99] md:hidden"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{
                y: '100%',
                transition: { type: 'tween', ease: [0.4, 0, 0.2, 1], duration: 0.26 },
              }}
              transition={{ type: 'tween', ease: easeDrawer, duration: 0.42 }}
            >
              <div
                className="rounded-t-[20px] border-t border-[var(--line-2)] px-6 pb-10 pt-6"
                style={{ background: 'var(--bg-2)' }}
              >
                <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[var(--line-2)]" />
                <ul className="space-y-1">
                  {links.map((l, i) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-xl px-4 py-3.5"
                        style={{
                          color: active === l.id ? 'var(--text)' : 'var(--text-2)',
                          transition: 'background-color 150ms ease, color 150ms ease',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--bg-3)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '';
                        }}
                      >
                        <span className="text-xl font-semibold">{l.label}</span>
                        <span className="mono text-xs text-[var(--text-3)]">0{i + 1}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-[var(--line)] pt-5">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn btn-accent w-full justify-center"
                  >
                    Let&apos;s talk &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
