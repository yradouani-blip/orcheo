import React, { useState, useEffect } from 'react';

function useTheme() {
  const [isLight, setIsLight] = useState(
    document.documentElement.classList.contains('light')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains('light'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return isLight;
}

/* ─────────────────────────────────────────────
   Shared constellation icon (10-node graph)
   Center at (60,60) inside a 120×120 viewBox
───────────────────────────────────────────── */
const ConstellationIcon = ({ filterId, colored = true }: { filterId: string; colored?: boolean }) => {
  const c = colored;
  return (
    <>
      <defs>
        <filter id={`${filterId}-a`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id={`${filterId}-b`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* spokes */}
      <line x1="60" y1="60" x2="61.67" y2="12" stroke={c?"#059467":"#059467"} strokeWidth="1.5" strokeOpacity="0.42" strokeLinecap="round"/>
      <line x1="60" y1="60" x2="91.1" y2="40.6" stroke={c?"#2563EB":"#2563EB"} strokeWidth="1.35" strokeOpacity="0.36" strokeLinecap="round"/>
      <line x1="60" y1="60" x2="75.9" y2="62.2" stroke={c?"#7C3AED":"#7C3AED"} strokeWidth="1.1" strokeOpacity="0.28" strokeLinecap="round"/>
      <line x1="60" y1="60" x2="87.9" y2="95.7" stroke={c?"#059467":"#059467"} strokeWidth="1.45" strokeOpacity="0.38" strokeLinecap="round"/>
      <line x1="60" y1="60" x2="57.8" y2="85.3" stroke={c?"#D97706":"#D97706"} strokeWidth="1.2" strokeOpacity="0.32" strokeLinecap="round"/>
      <line x1="60" y1="60" x2="27" y2="93" stroke={c?"#DC2626":"#DC2626"} strokeWidth="1.45" strokeOpacity="0.38" strokeLinecap="round"/>
      <line x1="60" y1="60" x2="41.7" y2="63.9" stroke={c?"#2563EB":"#2563EB"} strokeWidth="1.1" strokeOpacity="0.28" strokeLinecap="round"/>
      <line x1="60" y1="60" x2="26" y2="46.3" stroke={c?"#7C3AED":"#7C3AED"} strokeWidth="1.35" strokeOpacity="0.36" strokeLinecap="round"/>
      <line x1="60" y1="60" x2="53.1" y2="47.1" stroke={c?"#D97706":"#D97706"} strokeWidth="1.0" strokeOpacity="0.24" strokeLinecap="round"/>
      <line x1="60" y1="60" x2="72.7" y2="32.8" stroke={c?"#059467":"#059467"} strokeWidth="1.25" strokeOpacity="0.34" strokeLinecap="round"/>
      {/* perimeter ring */}
      <line x1="61.67" y1="12" x2="91.1" y2="40.6" stroke="#059467" strokeWidth="0.6" strokeOpacity="0.13"/>
      <line x1="91.1" y1="40.6" x2="75.9" y2="62.2" stroke="#2563EB" strokeWidth="0.6" strokeOpacity="0.1"/>
      <line x1="75.9" y1="62.2" x2="87.9" y2="95.7" stroke="#7C3AED" strokeWidth="0.6" strokeOpacity="0.12"/>
      <line x1="87.9" y1="95.7" x2="57.8" y2="85.3" stroke="#059467" strokeWidth="0.6" strokeOpacity="0.1"/>
      <line x1="57.8" y1="85.3" x2="27" y2="93" stroke="#D97706" strokeWidth="0.6" strokeOpacity="0.12"/>
      <line x1="27" y1="93" x2="41.7" y2="63.9" stroke="#DC2626" strokeWidth="0.6" strokeOpacity="0.1"/>
      <line x1="41.7" y1="63.9" x2="26" y2="46.3" stroke="#2563EB" strokeWidth="0.6" strokeOpacity="0.1"/>
      <line x1="26" y1="46.3" x2="53.1" y2="47.1" stroke="#7C3AED" strokeWidth="0.6" strokeOpacity="0.08"/>
      <line x1="53.1" y1="47.1" x2="72.7" y2="32.8" stroke="#D97706" strokeWidth="0.6" strokeOpacity="0.1"/>
      <line x1="72.7" y1="32.8" x2="61.67" y2="12" stroke="#059467" strokeWidth="0.6" strokeOpacity="0.13"/>
      {/* nodes */}
      <circle cx="61.67" cy="12" r="5" fill={c?"#059467":"#059467"} filter={`url(#${filterId}-b)`}/><circle cx="61.67" cy="12" r="2.5" fill="#fff" opacity="0.95"/>
      <circle cx="91.1" cy="40.6" r="4.5" fill={c?"#2563EB":"#2563EB"} filter={`url(#${filterId}-b)`}/><circle cx="91.1" cy="40.6" r="2" fill="#fff" opacity="0.95"/>
      <circle cx="75.9" cy="62.2" r="3" fill={c?"#7C3AED":"#7C3AED"} filter={`url(#${filterId}-b)`}/><circle cx="75.9" cy="62.2" r="1.3" fill="#fff" opacity="0.9"/>
      <circle cx="87.9" cy="95.7" r="5" fill={c?"#059467":"#059467"} filter={`url(#${filterId}-b)`}/><circle cx="87.9" cy="95.7" r="2.5" fill="#fff" opacity="0.95"/>
      <circle cx="57.8" cy="85.3" r="3.5" fill={c?"#D97706":"#D97706"} filter={`url(#${filterId}-b)`}/><circle cx="57.8" cy="85.3" r="1.5" fill="#fff" opacity="0.9"/>
      <circle cx="27" cy="93" r="5" fill={c?"#DC2626":"#DC2626"} filter={`url(#${filterId}-b)`}/><circle cx="27" cy="93" r="2.5" fill="#fff" opacity="0.95"/>
      <circle cx="41.7" cy="63.9" r="3" fill={c?"#2563EB":"#2563EB"} filter={`url(#${filterId}-b)`}/><circle cx="41.7" cy="63.9" r="1.3" fill="#fff" opacity="0.9"/>
      <circle cx="26" cy="46.3" r="4.5" fill={c?"#7C3AED":"#7C3AED"} filter={`url(#${filterId}-b)`}/><circle cx="26" cy="46.3" r="2" fill="#fff" opacity="0.95"/>
      <circle cx="53.1" cy="47.1" r="3" fill={c?"#D97706":"#D97706"} filter={`url(#${filterId}-b)`}/><circle cx="53.1" cy="47.1" r="1.3" fill="#fff" opacity="0.9"/>
      <circle cx="72.7" cy="32.8" r="3.5" fill={c?"#059467":"#059467"} filter={`url(#${filterId}-b)`}/><circle cx="72.7" cy="32.8" r="1.5" fill="#fff" opacity="0.9"/>
      {/* hub */}
      <circle cx="60" cy="60" r="16" fill="#059467" opacity="0.1"/>
      <circle cx="60" cy="60" r="10" fill="#059467" filter={`url(#${filterId}-a)`}/>
      <circle cx="60" cy="60" r="5" fill="#fff" opacity="0.95"/>
    </>
  );
};

/* ─────────────────────────────────────────────
   HORIZONTAL LOGO (for Header / Navbar)
   Matches design-kit "Primary Horizontal"
───────────────────────────────────────────── */
export const LogoHorizontal = ({ className = "h-16" }: { className?: string }) => {
  const isLight = useTheme();
  const textFill = isLight ? '#050709' : '#EEF0F6';
  const taglineFill = '#059467';
  const taglineOpacity = isLight ? 0.75 : 0.85;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 120"
      className={`${className} w-auto`}
    >
      {/* Constellation icon scaled to fit left side */}
      <g transform="translate(-2, 2)">
        <ConstellationIcon filterId="h-logo" />
      </g>
      {/* Wordmark */}
      <text x="126" y="70" fontFamily="'Instrument Sans', sans-serif" fontSize="42" fontWeight="700" letterSpacing="-2" fill={textFill}>orcheo</text>
      <text x="128" y="90" fontFamily="'Instrument Sans', sans-serif" fontSize="8.5" fontWeight="500" letterSpacing="3.5" fill={taglineFill} opacity={taglineOpacity}>ORCHESTRATE YOUR EVENTS</text>
    </svg>
  );
};

/* ─────────────────────────────────────────────
   STACKED LOGO (for Footer)
   Matches design-kit "Stacked · Dark"
───────────────────────────────────────────── */
export const LogoStacked = ({ className = "h-24" }: { className?: string }) => {
  const isLight = useTheme();
  const textFill = isLight ? '#050709' : '#EEF0F6';
  const taglineFill = '#059467';
  const taglineOpacity = isLight ? 0.75 : 0.8;

  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      {/* Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="h-[60%] w-auto">
        <ConstellationIcon filterId="s-logo" />
      </svg>
      {/* Text below */}
      <svg viewBox="0 0 200 52" className="h-[25%] w-auto">
        <text x="0" y="38" fontFamily="'Instrument Sans', sans-serif" fontSize="42" fontWeight="700" letterSpacing="-2" fill={textFill}>orcheo</text>
      </svg>
      <svg viewBox="0 0 240 14" className="h-[10%] w-auto">
        <text x="0" y="11" fontFamily="'Instrument Sans', sans-serif" fontSize="9" fontWeight="500" letterSpacing="3.5" fill={taglineFill} opacity={taglineOpacity}>ORCHESTRATE YOUR EVENTS</text>
      </svg>
    </div>
  );
};

// Backward compat
export const LogoFull = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <LogoHorizontal />
  </div>
);
