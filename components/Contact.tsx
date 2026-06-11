'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Check, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Reveal } from './Reveal';
import { rise } from '@/lib/motion';
import Magnetic from './Magnetic';

const channels = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'deenadayal-b-k', href: personalInfo.linkedin },
  { icon: Github, label: 'GitHub', value: '@deenadayal77', href: personalInfo.github },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="shell">
        <Reveal>
          <span className="kicker">Contact</span>
        </Reveal>
        <Reveal variants={rise} delay={0.05}>
          <h2 className="display-lg mt-5 max-w-[14ch]">
            Let&apos;s build something that <span className="accent-text">lasts.</span>
          </h2>
        </Reveal>
        <Reveal variants={rise} delay={0.1}>
          <p className="lead mt-5 text-base">
            Open to roles and collaborations in automation, full-stack, and applied AI.
            The fastest way to reach me is email.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* channels */}
          <Reveal variants={rise}>
            <div className="overflow-hidden rounded-2xl border border-line">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="group flex items-center gap-4 border-b border-line bg-bg-2 px-5 py-4 transition-colors last:border-b-0 hover:bg-bg-3">
                    <span className="icon-btn !h-10 !w-10 shrink-0">
                      <Icon size={17} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="eyebrow">{label}</p>
                      <p className="truncate text-sm font-medium">{value}</p>
                    </div>
                    {href && (
                      <ArrowUpRight
                        size={17}
                        className="text-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent-text)]"
                      />
                    )}
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" data-cursor="hover">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </Reveal>

          {/* form */}
          <Reveal variants={rise} delay={0.05}>
            <form onSubmit={submit} className="card space-y-4 p-6 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="field"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="field"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <textarea
                className="field resize-none"
                rows={5}
                placeholder="What are you building?"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <Magnetic strength={0.25}>
                <button type="submit" className="btn btn-accent w-full" data-cursor="hover">
                  <AnimatePresence mode="wait" initial={false}>
                    {sent ? (
                      <motion.span key="sent" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-center gap-2">
                        <Check size={18} /> Opening your mail client…
                      </motion.span>
                    ) : (
                      <motion.span key="send" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-center gap-2">
                        <Send size={17} /> Send message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
