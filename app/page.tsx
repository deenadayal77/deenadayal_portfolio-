'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Leadership from '@/components/Leadership';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Leadership />
      <Skills />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
