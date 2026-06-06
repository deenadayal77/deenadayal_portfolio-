'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold gradient-text">deena</a>
          <div className="hidden md:flex items-center space-x-8">
            {['Projects', 'Experience', 'Skills', 'About', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-white/70 hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            {['Projects', 'Experience', 'Skills', 'About', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block px-4 py-2 text-sm text-white/70 hover:text-primary" onClick={() => setIsOpen(false)}>
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
