import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DashboardPreview } from './components/DashboardPreview';
import { AppDownload } from './components/AppDownload';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col selection:bg-emerald/30 selection:text-emerald-light">
        <Navbar />
        <ScrollToTop />
        
        <main className="flex-1">
          <Hero />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Features />
            <DashboardPreview />
            <AppDownload />
            <ContactForm />
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </AnimatePresence>
  );
}
