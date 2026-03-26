import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  return (
    <div className="bg-white min-h-screen text-dark selection:bg-accent selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />

      {/* Interactive Floating Buttons */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: "#003366" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-6 lg:bottom-8 lg:right-10 z-50 p-3 lg:p-4 bg-accent text-white rounded-full shadow-2xl transition-colors group"
          >
            <ArrowUp size={20} className="lg:w-6 lg:h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/919321137273"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 right-4 lg:bottom-28 lg:right-0 z-50 flex items-center group"
      >
        {/* Circle Icon */}
        <div className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl">
          <MessageCircle size={26} />
        </div>

        {/* Expanding Text */}
        <span className="ml-2 px-4 py-2 bg-[#25D366] text-white rounded-full shadow-2xl 
    max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 
    transition-all duration-500 overflow-hidden whitespace-nowrap font-bold text-sm">
          Chat on WhatsApp
        </span>
      </motion.a>

    </div>
  );
}

export default App;
