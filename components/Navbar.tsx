'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import { ease } from '@/lib/motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');

  // solidify bar after scrolling past the hero fold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // active section highlight
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // lock body scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: reduce ? 0 : -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-[100]"
      >
        <nav
          className="shell flex items-center justify-between transition-all duration-300"
          style={{
            marginTop: scrolled ? 10 : 18,
          }}
        >
          <div
            className="flex w-full items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300"
            style={{
              borderColor: scrolled ? 'var(--line-2)' : 'transparent',
              background: scrolled ? 'color-mix(in srgb, var(--bg-2) 72%, transparent)' : 'transparent',
              backdropFilter: scrolled ? 'blur(14px)' : 'none',
              WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
            }}
          >
            {/* Wordmark */}
            <a href="#top" className="group flex items-center gap-2.5" aria-label="Home">
              <span className="signal-dot" />
              <span className="text-[1.05rem] font-semibold tracking-tight">
                deena<span className="accent-text">.</span>
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 md:flex">
              {links.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="relative rounded-full px-3.5 py-1.5 text-sm text-ink-2 transition-colors hover:text-ink"
                      style={{ color: isActive ? 'var(--text)' : undefined }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full"
                          style={{ background: 'color-mix(in srgb, var(--text) 8%, transparent)' }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="icon-btn !h-10 !w-10 !rounded-full"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                    className="flex"
                  >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.span>
                </AnimatePresence>
              </button>

              <a href="#contact" className="btn btn-accent hidden h-10 !min-h-0 px-4 text-sm sm:inline-flex">
                Let&apos;s talk
              </a>

              <button
                className="icon-btn !h-10 !w-10 !rounded-full md:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[99] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'color-mix(in srgb, var(--bg) 92%, transparent)', backdropFilter: 'blur(20px)' }}
          >
            <motion.ul
              className="flex h-full flex-col justify-center gap-2 px-8"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
            >
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.5, ease }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-2"
                  >
                    <span className="mono text-sm text-3">0{i + 1}</span>
                    <span className="display-lg text-[2.6rem]">{l.label}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
