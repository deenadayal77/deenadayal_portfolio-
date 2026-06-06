'use client';

import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/theme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navLinks = ['About', 'Projects', 'Experience', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect rounded-none border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity duration-300">
            Deena.dev
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 rounded-lg hover:bg-[var(--bg-tertiary)]"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--bg-secondary)] border border-[var(--border)] transition-all duration-300 flex items-center justify-center"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-[var(--accent)]" />
              ) : (
                <Moon size={20} className="text-[var(--accent)]" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--bg-secondary)] border border-[var(--border)] transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="py-4 space-y-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] rounded-lg transition-colors duration-300 hover:bg-[var(--bg-tertiary)]"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
