import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';        // ← This was missing!
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);   // ← Fixed: empty dependency array

  return (
    <div className="bg-white min-h-screen text-dark selection:bg-accent selection:text-white scroll-smooth">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
          </>
        } />
        
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />

      {/* Floating Buttons */}
      <div className="fixed z-50 bottom-5 right-4 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-10 flex flex-col items-end gap-3 lg:gap-4">
        
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919321137273"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-end group"
        >
          <span className="hidden lg:inline-block mr-3 px-4 py-2 bg-[#25D366] text-white rounded-full shadow-xl opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 whitespace-nowrap font-semibold text-sm">
            Chat on WhatsApp
          </span>
          <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#25D366] text-white rounded-full shadow-xl">
            <MessageCircle size={20} className="sm:size-[22px] lg:size-[26px]" />
          </div>
        </motion.a>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              whileHover={{ scale: 1.1, backgroundColor: "#003366" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-accent text-white rounded-full shadow-2xl transition-colors group"
            >
              <ArrowUp size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
