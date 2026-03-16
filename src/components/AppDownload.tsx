import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Download, Apple, Play } from 'lucide-react';
import { Constellations } from './Constellations';

export const AppDownload = () => {
  return (
    <section id="download" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <Constellations />
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Your event, <span className="italic text-emerald">in their pocket.</span>
        </h2>
        <p className="text-sm text-text-2 max-w-xl">
          Give your participants a seamless mobile experience. From instant check-ins to personalized agendas 
          and real-time networking, the Orcheo app is the ultimate companion for any event.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full"
        >
          <div className="flex flex-col items-center lg:items-start gap-6 max-w-md">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold tracking-tight mb-3">Get the Mobile App</h3>
              <p className="text-sm text-text-2 mb-6">
                Access your tickets, view the agenda, and network with other attendees directly from your phone.
              </p>
            </div>
            
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 w-full">
              <button className="group flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-50 transition-all border border-black/5 shadow-sm">
                <AppleIcon className="h-6 w-auto" />
                <div className="text-left">
                  <div className="text-[9px] uppercase font-bold tracking-[0.1em] opacity-60 leading-none mb-1">Download on the</div>
                  <div className="text-base font-bold leading-none">App Store</div>
                </div>
              </button>
              <button className="group flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-50 transition-all border border-black/5 shadow-sm">
                <PlayIcon className="h-5 w-auto" />
                <div className="text-left">
                  <div className="text-[9px] uppercase font-bold tracking-[0.1em] opacity-60 leading-none mb-1">Get it on</div>
                  <div className="text-base font-bold leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="relative z-10 bg-s1 border border-border p-6 rounded-[32px] shadow-2xl shadow-emerald/5">
              <div className="bg-white p-4 rounded-[24px] mb-4">
                {/* Mock QR Code */}
                <div className="w-36 h-36 bg-white flex items-center justify-center relative">
                  <div className="grid grid-cols-6 gap-1 w-full h-full opacity-90">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className={`rounded-sm ${Math.random() > 0.4 ? 'bg-black' : 'bg-transparent'}`} />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white border-4 border-white rounded-lg shadow-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-emerald rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-text">Scan to Download</p>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-indigo/5 blur-[80px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet/5 blur-[60px] -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 58.9-34.1c18-10.3 25.5-30.3 17.1-48.3-2.3-5.1-7.1-9.3-17.1-12.5zM104.6 499l220.7-127.3-60.1-60.1L104.6 499z" />
  </svg>
);
