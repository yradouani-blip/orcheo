import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Constellations } from './Constellations';

export const DashboardPreview = () => {
  const [isLight, setIsLight] = useState(document.documentElement.classList.contains('light'));

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsLight(document.documentElement.classList.contains('light'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="intelligence" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border overflow-hidden">
      <Constellations />
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-6">Real-time <span className="italic text-emerald">Intelligence</span></h2>
        <p className="text-sm text-text-2 max-w-md">
          A premium back-office designed for high-stakes event management. 
          Monitor every scan, ticket, and session in real-time.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl aspect-[16/10] rounded-2xl border border-border3 shadow-2xl shadow-emerald/10 overflow-hidden bg-bg"
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {isLight ? (
              <motion.img 
                key="light"
                src="/assets/dash_light.png" 
                alt="Dashboard Light" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            ) : (
              <motion.img 
                key="dark"
                src="/assets/dash_dark.png" 
                alt="Dashboard Dark" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            )}
          </AnimatePresence>
        </div>
        
        {/* Overlay Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
};
