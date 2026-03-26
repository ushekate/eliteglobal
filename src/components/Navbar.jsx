import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Products & Services', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`hidden md:flex bg-primary border-b border-primary/10 py-2 px-12 justify-between items-center transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
        <div className="flex items-center gap-6 text-[11px] font-semibold uppercase tracking-widest text-white/90">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-accent" />
            <span className="text-[10px] font-black tracking-widest">+91 9321137273 / 9867368049 / 9152816514 / 9819127488</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={12} className="text-accent" />
            <span>sales@eliteglobalearthmoverindia.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/90">
          <MapPin size={12} className="text-accent" />
          <span>ISO 9001:2008 Certified</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4 border-b border-border' : 'bg-transparent'}`}>
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-11 h-11 flex items-center justify-center bg-primary rounded-xl shadow-md group-hover:scale-110 transition-transform">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7 text-white">
                <path d="M7 21v-4m0-14V3m0 0l-4 4m4-4l4 4M2 17h10M12 17l4-4m-4 4l4 4" />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-black tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}>Elite Global Earthmover</span>
            <span className="text-[10px] font-bold text-accent tracking-[.3em] -mt-1 uppercase">Equipments</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-[13px] font-bold uppercase tracking-wider transition-all relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full ${isScrolled ? 'text-dark' : 'text-primary hover:text-accent'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="px-7 py-2.5 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all hover:bg-accent hover:shadow-lg active:scale-95">
            GET A QUOTE
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className={`lg:hidden transition-colors ${isScrolled ? 'text-dark' : 'text-primary'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 text-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button className="mt-4 px-12 py-5 bg-primary text-white font-bold uppercase tracking-[.2em] rounded-xl shadow-xl">
          Get Quote
        </button>
      </div>
    </header>
  );
};
