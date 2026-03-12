import React from 'react';

export const Logo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="9" fill="#059467"/>
    <circle cx="60" cy="60" r="4.5" fill="#fff" opacity="0.95"/>
    <line x1="60" y1="60" x2="60" y2="17.8" stroke="#059467" strokeWidth="1.2" strokeOpacity="0.6"/>
    <line x1="60" y1="60" x2="92.3" y2="37.4" stroke="#2563EB" strokeWidth="1.2" strokeOpacity="0.5"/>
    <line x1="60" y1="60" x2="76.4" y2="83.4" stroke="#7C3AED" strokeWidth="1.2" strokeOpacity="0.5"/>
    <line x1="60" y1="60" x2="48.6" y2="102.7" stroke="#D97706" strokeWidth="1.2" strokeOpacity="0.5"/>
    <line x1="60" y1="60" x2="35" y2="66.7" stroke="#DC2626" strokeWidth="1.2" strokeOpacity="0.5"/>
    <line x1="60" y1="60" x2="29.4" y2="38.5" stroke="#059467" strokeWidth="1.2" strokeOpacity="0.5"/>
    <circle cx="60" cy="17.8" r="3" fill="#059467"/>
    <circle cx="92.3" cy="37.4" r="2.5" fill="#2563EB"/>
    <circle cx="76.4" cy="83.4" r="2" fill="#7C3AED"/>
    <circle cx="48.6" cy="102.7" r="3" fill="#D97706"/>
    <circle cx="35" cy="66.7" r="2" fill="#DC2626"/>
    <circle cx="29.4" cy="38.5" r="2.5" fill="#059467"/>
  </svg>
);

export const LogoFull = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <Logo className="w-8 h-8" />
    <div className="flex flex-col -space-y-1">
      <span className="text-xl font-bold tracking-tighter text-text">orcheo</span>
      <span className="text-[8px] font-bold tracking-[0.3em] text-emerald uppercase">Orchestrate your events</span>
    </div>
  </div>
);
