import React from 'react';
import './Constellations.css';

export const Constellations = () => {
  return (
    <>
      <svg className="hero-constellation-top-left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hero-glow-1" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="50" y1="50" x2="80" y2="20" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="50" y1="50" x2="100" y2="60" stroke="#7C3AED" strokeWidth="1.2" strokeOpacity="0.35" />
        <line x1="50" y1="50" x2="60" y2="100" stroke="#D97706" strokeWidth="1.3" strokeOpacity="0.4" />
        <circle cx="50" cy="50" r="6" fill="#059467" filter="url(#hero-glow-1)" /><circle cx="50" cy="50" r="3" fill="#fff" opacity="0.9" />
        <circle cx="80" cy="20" r="3.5" fill="#2563EB" filter="url(#hero-glow-1)" /><circle cx="80" cy="20" r="1.5" fill="#fff" opacity="0.85" />
        <circle cx="100" cy="60" r="3" fill="#7C3AED" filter="url(#hero-glow-1)" /><circle cx="100" cy="60" r="1.2" fill="#fff" opacity="0.8" />
        <circle cx="60" cy="100" r="3.5" fill="#D97706" filter="url(#hero-glow-1)" /><circle cx="60" cy="100" r="1.5" fill="#fff" opacity="0.85" />
      </svg>

      <svg className="hero-constellation-top-right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hero-glow-2" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="150" y1="50" x2="120" y2="30" stroke="#DC2626" strokeWidth="1.4" strokeOpacity="0.38" />
        <line x1="150" y1="50" x2="100" y2="80" stroke="#0891B2" strokeWidth="1.2" strokeOpacity="0.35" />
        <line x1="150" y1="50" x2="180" y2="100" stroke="#059467" strokeWidth="1.3" strokeOpacity="0.4" />
        <circle cx="150" cy="50" r="6" fill="#10B981" filter="url(#hero-glow-2)" /><circle cx="150" cy="50" r="3" fill="#fff" opacity="0.9" />
        <circle cx="120" cy="30" r="3.5" fill="#DC2626" filter="url(#hero-glow-2)" /><circle cx="120" cy="30" r="1.5" fill="#fff" opacity="0.85" />
        <circle cx="100" cy="80" r="3" fill="#0891B2" filter="url(#hero-glow-2)" /><circle cx="100" cy="80" r="1.2" fill="#fff" opacity="0.8" />
        <circle cx="180" cy="100" r="3.5" fill="#059467" filter="url(#hero-glow-2)" /><circle cx="180" cy="100" r="1.5" fill="#fff" opacity="0.85" />
      </svg>

      <svg className="hero-constellation-bottom-left" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hero-glow-3" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="40" y1="80" x2="70" y2="50" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="40" y1="80" x2="80" y2="120" stroke="#2563EB" strokeWidth="1.1" strokeOpacity="0.3" />
        <line x1="40" y1="80" x2="30" y2="130" stroke="#059467" strokeWidth="0.9" strokeOpacity="0.3" />
        <line x1="70" y1="50" x2="80" y2="120" stroke="#7C3AED" strokeWidth="0.6" strokeOpacity="0.18" />
        <circle cx="40" cy="80" r="4" fill="#7C3AED" filter="url(#hero-glow-3)" /><circle cx="40" cy="80" r="2" fill="#fff" opacity="0.85" />
        <circle cx="70" cy="50" r="2.5" fill="#7C3AED" filter="url(#hero-glow-3)" /><circle cx="70" cy="50" r="1" fill="#fff" opacity="0.8" />
        <circle cx="80" cy="120" r="2.5" fill="#2563EB" filter="url(#hero-glow-3)" /><circle cx="80" cy="120" r="1" fill="#fff" opacity="0.8" />
        <circle cx="30" cy="130" r="2" fill="#059467" filter="url(#hero-glow-3)" /><circle cx="30" cy="130" r="0.8" fill="#fff" opacity="0.75" />
      </svg>

      <svg className="hero-constellation-bottom-right" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hero-glow-4" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="120" y1="80" x2="90" y2="50" stroke="#D97706" strokeWidth="1" strokeOpacity="0.32" />
        <line x1="120" y1="80" x2="80" y2="110" stroke="#DC2626" strokeWidth="1.1" strokeOpacity="0.3" />
        <line x1="120" y1="80" x2="130" y2="130" stroke="#0891B2" strokeWidth="0.9" strokeOpacity="0.28" />
        <line x1="90" y1="50" x2="130" y2="130" stroke="#D97706" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="120" cy="80" r="4" fill="#D97706" filter="url(#hero-glow-4)" /><circle cx="120" cy="80" r="2" fill="#fff" opacity="0.85" />
        <circle cx="90" cy="50" r="2.5" fill="#D97706" filter="url(#hero-glow-4)" /><circle cx="90" cy="50" r="1" fill="#fff" opacity="0.8" />
        <circle cx="80" cy="110" r="2.5" fill="#DC2626" filter="url(#hero-glow-4)" /><circle cx="80" cy="110" r="1" fill="#fff" opacity="0.8" />
        <circle cx="130" cy="130" r="2" fill="#0891B2" filter="url(#hero-glow-4)" /><circle cx="130" cy="130" r="0.8" fill="#fff" opacity="0.75" />
      </svg>

      <svg className="hero-constellation-middle-left" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hero-glow-5" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="30" y1="40" x2="60" y2="20" stroke="#2563EB" strokeWidth="0.8" strokeOpacity="0.28" />
        <line x1="30" y1="40" x2="50" y2="80" stroke="#059467" strokeWidth="0.85" strokeOpacity="0.32" />
        <circle cx="30" cy="40" r="3.5" fill="#2563EB" filter="url(#hero-glow-5)" /><circle cx="30" cy="40" r="1.5" fill="#fff" opacity="0.82" />
        <circle cx="60" cy="20" r="2" fill="#2563EB" filter="url(#hero-glow-5)" /><circle cx="60" cy="20" r="0.8" fill="#fff" opacity="0.78" />
        <circle cx="50" cy="80" r="2.2" fill="#059467" filter="url(#hero-glow-5)" /><circle cx="50" cy="80" r="0.9" fill="#fff" opacity="0.8" />
      </svg>

      <svg className="hero-constellation-middle-right" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hero-glow-6" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="110" y1="40" x2="80" y2="20" stroke="#DC2626" strokeWidth="0.8" strokeOpacity="0.28" />
        <line x1="110" y1="40" x2="90" y2="80" stroke="#7C3AED" strokeWidth="0.85" strokeOpacity="0.3" />
        <circle cx="110" cy="40" r="3.5" fill="#DC2626" filter="url(#hero-glow-6)" /><circle cx="110" cy="40" r="1.5" fill="#fff" opacity="0.82" />
        <circle cx="80" cy="20" r="2" fill="#DC2626" filter="url(#hero-glow-6)" /><circle cx="80" cy="20" r="0.8" fill="#fff" opacity="0.78" />
        <circle cx="90" cy="80" r="2.2" fill="#7C3AED" filter="url(#hero-glow-6)" /><circle cx="90" cy="80" r="0.9" fill="#fff" opacity="0.8" />
      </svg>

      <svg className="hero-constellation-center-left" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hero-glow-7" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="35" y1="70" x2="65" y2="40" stroke="#0891B2" strokeWidth="0.85" strokeOpacity="0.3" />
        <line x1="35" y1="70" x2="55" y2="110" stroke="#D97706" strokeWidth="0.8" strokeOpacity="0.28" />
        <line x1="65" y1="40" x2="55" y2="110" stroke="#0891B2" strokeWidth="0.6" strokeOpacity="0.2" />
        <line x1="35" y1="70" x2="20" y2="90" stroke="#D97706" strokeWidth="0.75" strokeOpacity="0.25" />
        <circle cx="35" cy="70" r="3.2" fill="#0891B2" filter="url(#hero-glow-7)" /><circle cx="35" cy="70" r="1.4" fill="#fff" opacity="0.8" />
        <circle cx="65" cy="40" r="2" fill="#0891B2" filter="url(#hero-glow-7)" /><circle cx="65" cy="40" r="0.8" fill="#fff" opacity="0.75" />
        <circle cx="55" cy="110" r="2.2" fill="#D97706" filter="url(#hero-glow-7)" /><circle cx="55" cy="110" r="0.9" fill="#fff" opacity="0.78" />
        <circle cx="20" cy="90" r="2" fill="#D97706" filter="url(#hero-glow-7)" /><circle cx="20" cy="90" r="0.8" fill="#fff" opacity="0.75" />
      </svg>

      <svg className="hero-constellation-center-right" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hero-glow-8" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="110" y1="70" x2="75" y2="40" stroke="#10B981" strokeWidth="0.85" strokeOpacity="0.3" />
        <line x1="110" y1="70" x2="85" y2="110" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.28" />
        <line x1="110" y1="70" x2="130" y2="50" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.25" />
        <circle cx="110" cy="70" r="3.2" fill="#10B981" filter="url(#hero-glow-8)" /><circle cx="110" cy="70" r="1.4" fill="#fff" opacity="0.8" />
        <circle cx="75" cy="40" r="2" fill="#10B981" filter="url(#hero-glow-8)" /><circle cx="75" cy="40" r="0.8" fill="#fff" opacity="0.75" />
        <circle cx="85" cy="110" r="2.2" fill="#7C3AED" filter="url(#hero-glow-8)" /><circle cx="85" cy="110" r="0.9" fill="#fff" opacity="0.78" />
        <circle cx="130" cy="50" r="2" fill="#10B981" filter="url(#hero-glow-8)" /><circle cx="130" cy="50" r="0.8" fill="#fff" opacity="0.75" />
      </svg>

      <svg className="hero-constellation-top-center" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hero-glow-9" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="60" y1="30" x2="85" y2="15" stroke="#DC2626" strokeWidth="0.8" strokeOpacity="0.25" />
        <line x1="60" y1="30" x2="70" y2="65" stroke="#2563EB" strokeWidth="0.75" strokeOpacity="0.25" />
        <circle cx="60" cy="30" r="3" fill="#DC2626" filter="url(#hero-glow-9)" /><circle cx="60" cy="30" r="1.3" fill="#fff" opacity="0.78" />
        <circle cx="85" cy="15" r="1.8" fill="#DC2626" filter="url(#hero-glow-9)" /><circle cx="85" cy="15" r="0.7" fill="#fff" opacity="0.73" />
        <circle cx="70" cy="65" r="2" fill="#2563EB" filter="url(#hero-glow-9)" /><circle cx="70" cy="65" r="0.8" fill="#fff" opacity="0.75" />
      </svg>

      <svg className="hero-constellation-bottom-center" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hero-glow-10" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="60" y1="90" x2="85" y2="105" stroke="#059467" strokeWidth="0.8" strokeOpacity="0.25" />
        <line x1="60" y1="90" x2="70" y2="55" stroke="#0891B2" strokeWidth="0.75" strokeOpacity="0.25" />
        <line x1="60" y1="90" x2="35" y2="75" stroke="#059467" strokeWidth="0.7" strokeOpacity="0.22" />
        <line x1="60" y1="90" x2="45" y2="110" stroke="#0891B2" strokeWidth="0.75" strokeOpacity="0.23" />
        <line x1="85" y1="105" x2="45" y2="110" stroke="#059467" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="60" cy="90" r="3" fill="#059467" filter="url(#hero-glow-10)" /><circle cx="60" cy="90" r="1.3" fill="#fff" opacity="0.78" />
        <circle cx="85" cy="105" r="1.8" fill="#059467" filter="url(#hero-glow-10)" /><circle cx="85" cy="105" r="0.7" fill="#fff" opacity="0.73" />
        <circle cx="70" cy="55" r="2" fill="#0891B2" filter="url(#hero-glow-10)" /><circle cx="70" cy="55" r="0.8" fill="#fff" opacity="0.75" />
        <circle cx="35" cy="75" r="1.8" fill="#059467" filter="url(#hero-glow-10)" /><circle cx="35" cy="75" r="0.7" fill="#fff" opacity="0.72" />
        <circle cx="45" cy="110" r="1.8" fill="#0891B2" filter="url(#hero-glow-10)" /><circle cx="45" cy="110" r="0.7" fill="#fff" opacity="0.72" />
      </svg>
    </>
  );
};
