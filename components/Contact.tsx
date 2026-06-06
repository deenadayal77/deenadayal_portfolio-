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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/60 text-lg">Let&apos;s collaborate on amazing projects</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

            <a href={`mailto:${personalInfo.email}`} className="group glass-effect p-6 rounded-xl hover:border-primary/70 transition-all duration-300 hover:shadow-glow flex items-start gap-4 hover-lift">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors">{personalInfo.email}</p>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" className="group glass-effect p-6 rounded-xl hover:border-primary/70 transition-all duration-300 hover:shadow-glow flex items-start gap-4 hover-lift">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">LinkedIn</h4>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors">deenadayal-b-k</p>
              </div>
            </a>

            <a href={personalInfo.github} target="_blank" className="group glass-effect p-6 rounded-xl hover:border-primary/70 transition-all duration-300 hover:shadow-glow flex items-start gap-4 hover-lift">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">GitHub</h4>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors">@deenadayal77</p>
              </div>
            </a>

            <div className="glass-effect p-6 rounded-xl flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-white/70 text-sm">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-white/40 focus:border-primary focus:shadow-glow outline-none transition-all"
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-white/40 focus:border-primary focus:shadow-glow outline-none transition-all"
            />
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              required
              className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-white/40 focus:border-primary focus:shadow-glow outline-none transition-all"
            />
            <textarea
              placeholder="Your message..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-white/40 focus:border-primary focus:shadow-glow outline-none resize-none transition-all"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-primary text-dark font-semibold rounded-xl hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
