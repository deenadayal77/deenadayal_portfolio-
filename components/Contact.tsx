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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
            <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30 mb-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-white/70 text-sm">{personalInfo.email}</p>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30 mb-4">
              <Linkedin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">LinkedIn</h4>
                <p className="text-white/70 text-sm">deenadayal-b-k</p>
              </div>
            </a>

            <a href={personalInfo.github} target="_blank" className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30 mb-4">
              <Github className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">GitHub</h4>
                <p className="text-white/70 text-sm">@deenadayal77</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-white/70 text-sm">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-primary outline-none" />
            <input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-primary outline-none" />
            <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-primary outline-none" />
            <textarea placeholder="Your message..." rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-primary outline-none resize-none" />
            <button type="submit" className="w-full px-6 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
