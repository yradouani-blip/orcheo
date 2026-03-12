import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden border-b border-border px-6 md:px-12 py-20">
      <div className="hero-bg absolute inset-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        <h1 className="font-sans text-5xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
          Orchestrate <span className="italic text-emerald">Unforgettable</span><br />
          Event Experiences
        </h1>
        
        <p className="text-base md:text-lg text-text-2 tracking-wide max-w-2xl leading-relaxed mb-12">
          The all-in-one event management platform for high-stakes gatherings. 
          From smart ticketing to real-time analytics, Orcheo handles the complexity 
          so you can focus on the connection.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-12 border-t border-border/50 w-full">
          <Stat target={2} suffix="M+" label="Tickets Scanned" color="text-emerald" />
          <Stat target={50} suffix="k+" label="Events Hosted" color="text-indigo-light" />
          <Stat target={100} suffix="+" label="Countries" color="text-violet-light" />
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
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 1,
        restDelta: 0.001
      });
    }
  }, [isInView, count, target]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className={`text-xl md:text-2xl font-bold tracking-tight ${color} flex items-baseline`}>
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted mt-2">
        {label}
      </span>
    </div>
  );
};
