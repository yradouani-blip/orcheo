import React, { useState, useEffect } from 'react';
import { LogoFull } from './Logo';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border h-[52px] px-6 md:px-12 flex items-center justify-between">
      <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity">
        <LogoFull />
      </button>
      
      <div className="hidden md:flex items-center gap-1">
        {[
          { name: 'Features', id: 'features' },
          { name: 'Intelligence', id: 'intelligence' },
          { name: 'Download', id: 'download' },
          { name: 'Contact', id: 'contact' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted hover:text-text hover:bg-border px-3.5 py-1.5 rounded-md transition-all whitespace-nowrap"
          >
            {item.name}
          </a>
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
          href="#contact"
          className="text-[11px] font-bold tracking-[0.2em] uppercase bg-emerald text-white px-5 py-1.5 rounded-xl hover:bg-emerald-light transition-all inline-flex items-center justify-center"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};
