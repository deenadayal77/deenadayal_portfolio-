'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function PageContent() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsGrid />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
