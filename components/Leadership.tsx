'use client';
import { Users, Zap, Trophy, Award } from 'lucide-react';

const achievements = [
  { icon: Users, title: 'Organized Technical Events', desc: 'Led 50+ workshops and seminars' },
  { icon: Zap, title: 'Team Management', desc: 'Managed cross-functional teams' },
  { icon: Trophy, title: 'Student Engagement', desc: '500+ members impacted' },
  { icon: Award, title: 'Convention Leadership', desc: '800+ participant event' },
];

export default function Leadership() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-white/60 text-lg">ISTE President with proven track record in team leadership</p>
        </div>

        <div className="mb-16 glass-effect p-8 rounded-xl border-primary/30 hover:border-primary/70 transition-all duration-300 hover:shadow-glow">
          <h3 className="text-2xl font-bold mb-3 gradient-text">ISTE Student Chapter President</h3>
          <p className="text-white/70 leading-relaxed">Led technical initiatives and organized the 19th ISTE Karnataka State-Level Convention with 800+ participants, establishing a strong legacy of student engagement and innovation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="group glass-effect p-6 rounded-xl hover:border-primary/70 transition-all duration-300 hover:shadow-glow hover-lift">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
