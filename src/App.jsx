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

          <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#25D366] text-white rounded-full shadow-xl overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
        </motion.a>

        {/* <motion.a
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
        </motion.a> */}

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
