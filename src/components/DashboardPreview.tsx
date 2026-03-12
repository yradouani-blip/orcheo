import React from 'react';
import { motion } from 'motion/react';

export const DashboardPreview = () => {
  return (
    <section id="intelligence" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border overflow-hidden">
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
        className="relative mx-auto max-w-5xl aspect-video bg-black rounded-2xl border border-border3 shadow-2xl shadow-emerald/10 overflow-hidden"
      >
        {/* Mock Dashboard UI */}
        <div className="absolute inset-0 flex">
          {/* Sidebar */}
          <div className="w-16 md:w-48 border-r border-border h-full bg-s1 p-4 hidden sm:block">
            <div className="w-8 h-8 bg-emerald/20 rounded-lg mb-8" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-2 bg-border2 rounded w-full opacity-50" />
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-6 md:p-10 space-y-8">
            <div className="flex justify-between items-center">
              <div className="h-4 bg-border2 rounded w-32" />
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-border2" />
                <div className="w-8 h-8 rounded-full bg-border2" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-24 bg-s2 border border-border rounded-xl p-4">
                  <div className="h-2 bg-border3 rounded w-1/2 mb-4" />
                  <div className="h-6 bg-emerald/20 rounded w-3/4" />
                </div>
              ))}
            </div>
            
            <div className="h-48 bg-s2 border border-border rounded-xl p-6 relative">
              <div className="absolute inset-x-6 bottom-6 flex items-end gap-1 h-32">
                {[40, 70, 45, 90, 65, 80, 55, 85, 40, 75, 95, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 0.8 }}
                    className="flex-1 bg-emerald/40 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
};
