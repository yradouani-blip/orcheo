import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { LogoStacked } from './Logo';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <LogoStacked className="mb-6 h-24" />
            <p className="text-sm text-text-2 max-w-sm leading-relaxed">
              Orcheo is the next-generation event management platform designed for 
              professionals who demand precision, scalability, and premium design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 md:gap-12 col-span-1 md:col-span-2">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] text-muted uppercase mb-6">Product</h4>
              <ul className="space-y-4">
                {['Features', 'Solutions', 'Ticketing', 'Networking'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-xs text-text-2 hover:text-emerald transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] text-muted uppercase mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contact@orcheo.com" className="text-xs text-text-2 hover:text-emerald transition-colors">contact@orcheo.com</a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-xs text-text-2 hover:text-emerald transition-colors">+1 (234) 567-890</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border">
          <span className="text-[11px] text-muted tracking-wider">
            <strong>Orcheo</strong> · 2026
          </span>
          <div className="flex gap-8">
            <a href="#" aria-label="Twitter" className="w-4 h-4 text-muted hover:text-emerald transition-colors">
              <Twitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-4 h-4 text-muted hover:text-emerald transition-colors">
              <Linkedin />
            </a>
            <a href="#" aria-label="Instagram" className="w-4 h-4 text-muted hover:text-emerald transition-colors">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
