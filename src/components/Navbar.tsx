import React, { useState, useEffect } from 'react';
import { LogoHorizontal } from './Logo';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isLight, setIsLight] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Disable all transitions during theme switch so everything flips at once
    document.documentElement.classList.add('switching-theme');
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    // Re-enable transitions after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove('switching-theme');
      });
    });
  }, [isLight]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Features', id: 'features' },
    { name: 'Dashboard', id: 'intelligence' },
    { name: 'Download', id: 'download' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border h-[80px] px-6 md:px-12 flex items-center justify-between">
      <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity">
        <LogoHorizontal className="h-14" />
      </button>
      
      <div className="hidden md:flex items-center gap-2">
        {navLinks.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted hover:text-text hover:bg-border px-3.5 py-1.5 rounded-md transition-all whitespace-nowrap cursor-pointer"
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsLight(!isLight)}
          className="p-2 rounded-xl bg-s2 border border-border text-text-2 hover:text-emerald transition-all"
          aria-label="Toggle theme"
        >
          {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
        <a 
          href="https://scan-event.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex text-[11px] font-bold tracking-[0.2em] uppercase bg-emerald text-white px-5 py-2 rounded-xl hover:bg-emerald-light shadow-md shadow-emerald/20 hover:shadow-lg hover:shadow-emerald/30 transition-all items-center justify-center"
        >
          Get Started
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl bg-s2 border border-border text-text-2 hover:text-emerald transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[80px] left-0 right-0 bg-bg border-b border-border shadow-2xl md:hidden z-40 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[12px] font-bold tracking-[0.2em] uppercase text-muted hover:text-text hover:bg-border/50 px-4 py-3 rounded-xl transition-all text-left w-full"
                >
                  {item.name}
                </button>
              ))}
              <div className="h-px bg-border my-2" />
              <a 
                href="https://scan-event.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-bold tracking-[0.2em] uppercase bg-emerald text-white px-6 py-4 rounded-xl hover:bg-emerald-light shadow-md shadow-emerald/20 transition-all text-center w-full"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
