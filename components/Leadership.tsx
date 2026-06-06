'use client';
import { Users, Zap, Trophy, Award } from 'lucide-react';

const achievements = [
  { icon: Users, title: 'Organized Technical Events', desc: 'Led technical workshops and seminars' },
  { icon: Zap, title: 'Team Management', desc: 'Managed cross-functional teams' },
  { icon: Trophy, title: 'Student Engagement', desc: 'Mentored junior members' },
  { icon: Award, title: 'Convention Leadership', desc: 'Led 800+ participant event' },
];

export default function Leadership() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Leadership & <span className="gradient-text">Impact</span>
        </h2>
        <p className="text-white/60 text-lg mb-12">ISTE President with proven track record</p>

        <div className="mb-16 p-8 bg-white/5 border border-primary/20 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">ISTE Student Chapter President</h3>
          <p className="text-white/70">Led technical initiatives and organized 19th ISTE Karnataka Convention with 800+ participants.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
