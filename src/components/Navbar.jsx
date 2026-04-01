import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', to: '/' },
    { name: 'ABOUT US', to: '/about' },
    { name: 'PRODUCTS & SERVICES', hasDropdown: true },
    { name: 'OUR GALLERY', to: '/gallery' },
    { name: 'CONTACT US', to: '/contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className={`hidden md:flex bg-[#F9A825] py-2 px-6 lg:px-12 text-white text-sm transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-11'}`}>
        <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start w-full">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span className="font-medium">+91 93211 37273 / +91 98673 68049 / +91 91528 16514 / +91 98191 27488</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>sales@eliteglobalearthmover.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b">
        <div className="px-6 lg:px-12 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
            <div className="w-12 h-12 bg-[#F9A825] rounded-xl flex items-center justify-center">
              <span className="text-white text-4xl font-black tracking-tighter">M</span>
            </div>
            <div className="leading-none">
              <div className="text-2xl font-black text-[#F9A825] tracking-tight">Markable</div>
              <div className="text-[10px] font-bold text-gray-700 tracking-[2px] uppercase -mt-1">Equipments</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold uppercase tracking-widest">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-1 hover:text-[#F9A825] transition-colors"
                  >
                    {link.name}
                    <span className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                ) : (
                  <Link to={link.to} className="hover:text-[#F9A825]" onClick={closeAll}>
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.hasDropdown && isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white shadow-xl rounded-lg py-4 border z-50">
                    <Link to="/products" className="block px-6 py-3 hover:bg-orange-50 hover:text-[#F9A825]" onClick={closeAll}>
                      Products
                    </Link>
                    <Link to="/services" className="block px-6 py-3 hover:bg-orange-50 hover:text-[#F9A825]" onClick={closeAll}>
                      Services Offered
                    </Link>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="ml-4 px-8 py-3 bg-[#F9A825] hover:bg-orange-600 text-white font-bold text-sm rounded-lg transition-all"
              onClick={closeAll}
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-800 p-2"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Modern Mobile Sidebar Menu (Slide from Right) */}
      <div className={`fixed inset-0 bg-black/50 z-[70] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
           onClick={closeAll}>
        <div 
          className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-b from-primary via-accent-900 to-accent text-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-[#F9A825] text-3xl font-black">M</span>
              </div>
              <div>
                <div className="font-bold text-xl tracking-tight">Markable</div>
                <div className="text-xs tracking-widest opacity-75">EQUIPMENTS</div>
              </div>
            </div>
            <button onClick={closeAll} className="text-white hover:bg-white/20 p-2 rounded-full transition">
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-8 flex flex-col text-lg font-medium">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center justify-between w-full py-4 border-b border-white/10 hover:bg-white/10 px-4 rounded-xl transition"
                    >
                      {link.name}
                      <span className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    {isDropdownOpen && (
                      <div className="pl-8 pr-4 py-3 flex flex-col gap-3 text-base">
                        <Link to="/products" onClick={closeAll} className="py-2 hover:text-yellow-200 transition">
                          Products
                        </Link>
                        <Link to="/services" onClick={closeAll} className="py-2 hover:text-yellow-200 transition">
                          Services Offered
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.to}
                    onClick={closeAll}
                    className={`block py-4 px-4 border-b border-white/10 hover:bg-white/10 rounded-xl transition ${location.pathname === link.to ? 'bg-white/20 font-bold' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Get A Quote Button */}
            <Link
              to="/contact"
              onClick={closeAll}
              className="mt-10 mx-auto block w-full max-w-[240px] text-center py-4 bg-white text-purple-600 font-bold rounded-2xl hover:bg-yellow-300 hover:text-purple-700 transition-all active:scale-95"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Optional Bottom Avatar / Decor */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
              {/* You can add your anime-style illustration here if needed */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

