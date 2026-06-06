'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSlider from '@/components/ProjectsSlider';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSlider />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
