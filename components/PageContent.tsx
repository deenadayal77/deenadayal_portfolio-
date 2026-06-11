'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SiteChrome from '@/components/SiteChrome';

export default function PageContent() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <SiteChrome />
      <Navbar />
      <main id="content">
        <Hero />
        <AboutSection />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
