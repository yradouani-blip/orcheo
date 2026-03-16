import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { Constellations } from './Constellations';

export const Hero = () => {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center overflow-hidden border-b border-border px-6 md:px-12 py-24 w-full max-w-7xl mx-auto min-h-[calc(100vh-80px)]">
      <Constellations />
      <div className="hero-bg absolute inset-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
      >
        <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] md:leading-[0.95] mb-8">
          Orchestrate <span className="italic text-emerald">Unforgettable</span><br className="hidden md:block" />
          Event Experiences
        </h1>
        
        <p className="text-sm md:text-base text-text-2 tracking-wide max-w-xl leading-relaxed mb-12">
          The all-in-one event management platform for high-stakes gatherings. 
          From smart ticketing to real-time analytics, Orcheo handles the complexity 
          so you can focus on the connection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-border/50 w-full">
          <Stat target={2} suffix="M+" label="Tickets Scanned" color="text-emerald" />
          <Stat target={50} suffix="k+" label="Events Hosted" color="text-indigo-light" />
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex justify-center">
            <Stat target={100} suffix="+" label="Countries" color="text-violet-light" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Stat = ({ target, suffix, label, color }: { target: number; suffix: string; label: string; color: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, target, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, count, target]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className={`text-2xl md:text-3xl font-bold tracking-tight ${color} flex items-baseline`}>
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-text-2 mt-2">
        {label}
      </span>
    </div>
  );
};
