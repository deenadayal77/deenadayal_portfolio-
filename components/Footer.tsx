'use client';

import { personalInfo } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    /*
      Slightly darker background differentiates footer from content above.
      The border-t provides the clean separation line.
    */
    <footer
      className="border-t border-[var(--line)]"
      style={{ background: 'var(--elevated)' }}
    >
      <div className="shell">
        <div className="flex flex-col items-center justify-between gap-5 py-12 sm:flex-row">
          {/* Left — copyright */}
          <div className="flex flex-col items-center gap-1.5 sm:items-start">
            <span className="text-[0.95rem] font-semibold tracking-tight">
              deena<span className="text-[var(--accent-text)]">.</span>
            </span>
            <p className="mono text-xs text-[var(--text-3)]">
              &copy; {year} Deena Dayal B K &middot; built with intent
            </p>
          </div>

          {/* Center — links */}
          <div className="flex items-center gap-1 mono text-xs text-[var(--text-3)]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-[180ms] hover:text-[var(--text-2)]"
            >
              GitHub
            </a>
            <span className="mx-2 opacity-40">&middot;</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-[180ms] hover:text-[var(--text-2)]"
            >
              LinkedIn
            </a>
            <span className="mx-2 opacity-40">&middot;</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="transition-colors duration-[180ms] hover:text-[var(--text-2)]"
            >
              Email
            </a>
          </div>

          {/* Right — back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-1.5 mono text-xs text-[var(--text-3)] transition-colors duration-[180ms] hover:text-[var(--accent-text)]"
            aria-label="Back to top"
          >
            <span
              className="inline-block"
              style={{ transition: 'transform 220ms var(--ease-out)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLSpanElement).style.transform = '';
              }}
            >
              &#8593;
            </span>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
