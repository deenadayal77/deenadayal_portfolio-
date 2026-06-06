'use client';

import { Briefcase, Award, Users, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I&apos;m Deena Dayal B K, a Computer Science Engineering student at PES College of Engineering with a passion for building innovative solutions using AI and full-stack technologies.
            </p>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Currently working as a Python Full-Stack Developer at Dhee Coding Labs, where I focus on generative AI integration and backend API development. I have hands-on experience with modern web technologies and machine learning applications.
            </p>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              As the President of ISTE Student Chapter, I&apos;ve developed strong leadership and project management skills by organizing large-scale technical events and mentoring peers. My goal is to create impactful products that solve real-world problems.
            </p>

            {/* Quick Facts */}
            <div className="pt-6">
              <p className="text-sm text-[var(--text-tertiary)] font-semibold mb-4">HIGHLIGHTS</p>
              <ul className="space-y-3">
                {[
                  '🎓 CS Engineering @ PES College (2022-2026)',
                  '🏢 Python Developer @ Dhee Coding Labs',
                  '👥 ISTE President with 500+ member engagement',
                  '🚀 10+ projects in full-stack and AI domains',
                ].map((item) => (
                  <li key={item} className="text-[var(--text-secondary)] flex items-start gap-3">
                    <span className="flex-shrink-0">{item.split(' ')[0]}</span>
                    <span>{item.substring(item.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="space-y-4 animate-slide-in-right">
            {[
              {
                icon: Briefcase,
                title: 'Experience',
                description: 'Python full-stack with GenAI at Dhee Coding Labs',
              },
              {
                icon: Users,
                title: 'Leadership',
                description: 'ISTE President organizing 800+ participant events',
              },
              {
                icon: Award,
                title: 'Achievements',
                description: 'Runner-up in hackathons and technical competitions',
              },
              {
                icon: Sparkles,
                title: 'Passion',
                description: 'Building AI-powered solutions that create impact',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="card group p-6 rounded-xl border-2 transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-lg bg-[var(--accent)]/10 group-hover:bg-[var(--accent)]/20 transition-colors flex-shrink-0">
                      <Icon size={24} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Preview */}
        <div className="grid md:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {[
            { label: 'Languages', skills: 'Python, JavaScript, C, C++' },
            { label: 'Frontend', skills: 'React, Next.js, Tailwind CSS' },
            { label: 'Backend', skills: 'FastAPI, Django, Node.js' },
          ].map((group) => (
            <div key={group.label} className="card p-6 rounded-xl">
              <h4 className="font-bold text-[var(--text-primary)] mb-2">{group.label}</h4>
              <p className="text-sm text-[var(--text-secondary)]">{group.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
