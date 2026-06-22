'use client';

import { useState, useEffect } from 'react';
import { Mail, Linkedin, MapPin, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Reveal } from './Reveal';
import { rise } from '@/lib/motion';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function getISTTime() {
  return new Date().toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'deenadayal-b-k',
    href: personalInfo.linkedin,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bengaluru, Karnataka, India',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [istTime, setIstTime] = useState(getISTTime);

  useEffect(() => {
    const id = setInterval(() => setIstTime(getISTTime()), 60_000);
    return () => clearInterval(id);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setErrorMsg('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection.');
      setState('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="shell">
        <Reveal>
          <span className="kicker">Contact</span>
        </Reveal>
        <Reveal variants={rise} delay={0.05}>
          <h2 className="display-lg mt-4 max-w-[14ch]">
            Start a <span className="text-[var(--accent-text)]">conversation.</span>
          </h2>
        </Reveal>
        <Reveal variants={rise} delay={0.1}>
          <p className="lead mt-5">
            Open to roles and collaborations in automation, full-stack, and applied AI.
          </p>
          <p className="mono mt-2.5 text-xs text-[var(--text-3)]">
            Usually within 24 hours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[5fr_7fr]">
          {/* Left — channels */}
          <Reveal variants={rise}>
            <div className="space-y-3">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div
                    className="group flex items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--bg-2)] px-5 py-4"
                    style={{ transition: 'border-color 180ms ease, background-color 180ms ease' }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = 'var(--line-2)';
                      el.style.backgroundColor = 'var(--bg-3)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = '';
                      el.style.backgroundColor = '';
                    }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--line)]"
                      style={{ background: 'var(--elevated)', transition: 'border-color 180ms ease' }}
                    >
                      <Icon size={16} className="text-[var(--text-2)]" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="eyebrow">{label}</p>
                      <p
                        className="mt-0.5 truncate text-sm font-medium"
                        style={{ color: href ? 'var(--text)' : 'var(--text-2)' }}
                      >
                        {value}
                      </p>
                    </div>
                    {href && (
                      <span
                        className="mono text-xs text-[var(--accent-text)] opacity-0 group-hover:opacity-100"
                        style={{ transition: 'opacity 180ms ease, transform 180ms var(--ease-out)' }}
                      >
                        &rarr;
                      </span>
                    )}
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={label === 'Email' ? undefined : '_blank'}
                    rel="noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}

              {/* Live timezone */}
              <div className="flex items-center gap-2 px-1 pt-2.5">
                <span className="status-dot shrink-0" aria-hidden />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={istTime}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="mono text-xs text-[var(--accent-text)]"
                  >
                    Bengaluru time: {istTime}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* Right — form card (Double-Bezel) */}
          <Reveal variants={rise} delay={0.05}>
            <div className="double-bezel-outer">
              <div className="double-bezel-inner">
                <AnimatePresence mode="wait">
                  {state === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.32 }}
                      className="flex min-h-[360px] flex-col items-center justify-center gap-4 p-8 text-center"
                    >
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-full"
                        style={{ background: 'var(--positive-soft)' }}
                      >
                        <Check size={24} className="text-[var(--positive)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--text)]">Message sent.</p>
                        <p className="mt-1 text-sm text-[var(--text-2)]">
                          I&rsquo;ll reply within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -6, transition: { duration: 0.16 } }}
                      /* p-7 uniformly — was p-6 sm:p-7 (inconsistent) */
                      className="p-7 space-y-5"
                      noValidate
                    >
                      {/* Name + Email */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <label htmlFor="contact-name" className="eyebrow">Name</label>
                          <input
                            id="contact-name"
                            name="name"
                            className="field"
                            placeholder="Your name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            disabled={state === 'submitting'}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="contact-email" className="eyebrow">Email</label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            className="field"
                            placeholder="your@email.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                            disabled={state === 'submitting'}
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-subject" className="eyebrow">Subject</label>
                        <input
                          id="contact-subject"
                          name="subject"
                          className="field"
                          placeholder="What's this about?"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          disabled={state === 'submitting'}
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-message" className="eyebrow">Message</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          className="field resize-none"
                          rows={5}
                          placeholder="What are you building?"
                          required
                          value={form.message}
                          onChange={handleChange}
                          disabled={state === 'submitting'}
                        />
                      </div>

                      {(errorMsg || state === 'error') && (
                        <p className="text-xs text-red-400" role="alert">
                          {errorMsg || 'Something went wrong.'}
                        </p>
                      )}

                      {/* Submit — matches .btn-accent shadow treatment */}
                      <button
                        type="submit"
                        disabled={state === 'submitting'}
                        className="w-full min-h-[44px] flex items-center justify-between rounded-[10px] px-5 active:scale-[0.97]"
                        style={{
                          background: 'var(--accent)',
                          transition: 'transform 120ms var(--ease-out), background-color 180ms ease, opacity 180ms ease',
                          opacity: state === 'submitting' ? 0.7 : 1,
                          boxShadow:
                            'inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px -4px rgba(59,130,246,0.5), 0 1px 3px rgba(0,0,8,0.3)',
                        }}
                      >
                        <span className="font-semibold text-white text-sm">
                          {state === 'submitting' ? 'Sending...' : 'Send message'}
                        </span>
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-full"
                          style={{ background: 'rgba(255,255,255,0.15)' }}
                        >
                          {state === 'submitting' ? (
                            <Loader2 size={13} className="text-white animate-spin" />
                          ) : (
                            <span className="text-white text-xs">&rarr;</span>
                          )}
                        </span>
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
