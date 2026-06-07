'use client';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for reaching out!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ background: `var(--accent)/10` }} />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">Let&apos;s collaborate on amazing projects</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-4 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">Get in Touch</h3>

            {/* Email */}
            <a href={`mailto:${personalInfo.email}`} className="group neon-border p-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-start gap-4">
              <div className="p-3 rounded-lg flex-shrink-0 transition-colors" style={{ background: `var(--accent)/10` }}>
                <Mail className="w-6 h-6" style={{ color: `var(--accent)` }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-[var(--text-primary)]">Email</h4>
                <p className="text-[var(--text-secondary)] text-sm group-hover:text-[var(--text-primary)] transition-colors">{personalInfo.email}</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href={personalInfo.linkedin} target="_blank" className="group neon-border p-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-start gap-4">
              <div className="p-3 rounded-lg flex-shrink-0 transition-colors" style={{ background: `var(--accent)/10` }}>
                <Linkedin className="w-6 h-6" style={{ color: `var(--accent)` }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-[var(--text-primary)]">LinkedIn</h4>
                <p className="text-[var(--text-secondary)] text-sm group-hover:text-[var(--text-primary)] transition-colors">deenadayal-b-k</p>
              </div>
            </a>

            {/* GitHub */}
            <a href={personalInfo.github} target="_blank" className="group neon-border p-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-start gap-4">
              <div className="p-3 rounded-lg flex-shrink-0 transition-colors" style={{ background: `var(--accent)/10` }}>
                <Github className="w-6 h-6" style={{ color: `var(--accent)` }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-[var(--text-primary)]">GitHub</h4>
                <p className="text-[var(--text-secondary)] text-sm group-hover:text-[var(--text-primary)] transition-colors">@deenadayal77</p>
              </div>
            </a>

            {/* Location */}
            <div className="neon-border p-6 rounded-xl flex items-start gap-4">
              <div className="p-3 rounded-lg flex-shrink-0" style={{ background: `var(--accent)/10` }}>
                <MapPin className="w-6 h-6" style={{ color: `var(--accent)` }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-[var(--text-primary)]">Location</h4>
                <p className="text-[var(--text-secondary)] text-sm">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-slide-in-right">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-4 py-3 neon-border rounded-lg outline-none transition-all duration-300 focus:scale-105"
              style={{
                background: `var(--bg-secondary)`,
                color: `var(--text-primary)`,
              }}
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-4 py-3 neon-border rounded-lg outline-none transition-all duration-300 focus:scale-105"
              style={{
                background: `var(--bg-secondary)`,
                color: `var(--text-primary)`,
              }}
            />

            {/* Subject Input */}
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              required
              className="w-full px-4 py-3 neon-border rounded-lg outline-none transition-all duration-300 focus:scale-105"
              style={{
                background: `var(--bg-secondary)`,
                color: `var(--text-primary)`,
              }}
            />

            {/* Message Textarea */}
            <textarea
              placeholder="Your message..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full px-4 py-3 neon-border rounded-lg outline-none resize-none transition-all duration-300 focus:scale-105"
              style={{
                background: `var(--bg-secondary)`,
                color: `var(--text-primary)`,
              }}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 font-bold rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 neon-border text-[var(--text-primary)]"
              style={{
                background: `var(--accent)`,
                color: `var(--bg-primary)`,
              }}
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
