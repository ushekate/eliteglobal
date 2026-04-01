import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'HOME', to: '/' },
    { name: 'ABOUT US', to: '/about' },
    { name: 'PRODUCTS & SERVICES', to: '#', hasDropdown: true },
    { name: 'OUR GALLERY', to: '/gallery' },
    { name: 'CONTACT US', to: '/contact' },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
          <Link to="/" className="flex items-center gap-3">
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
              <div key={link.name} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
                {link.hasDropdown ? (
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-1 hover:text-[#F9A825] transition-colors focus:outline-none"
                  >
                    {link.name}
                    <span className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className="hover:text-[#F9A825] transition-colors"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.hasDropdown && isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white shadow-xl rounded-lg py-4 border border-gray-100 z-50">
                    <Link
                      to="/products"
                      className="block px-6 py-3 hover:bg-orange-50 hover:text-[#F9A825] transition-colors text-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Products
                    </Link>
                    <Link
                      to="/services"
                      className="block px-6 py-3 hover:bg-orange-50 hover:text-[#F9A825] transition-colors text-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Services Offered
                    </Link>
                  </div>
                )}
              </div>
            ))}

            {/* Get A Quote Button */}
            <Link
              to="/contact"
              className="ml-4 px-8 py-3 bg-[#F9A825] hover:bg-orange-600 text-white font-bold text-sm rounded-lg transition-all active:scale-95"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[60] pt-20">
          <div className="flex flex-col items-center gap-8 text-xl font-semibold pt-10">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center gap-2 text-gray-800"
                    >
                      {link.name}
                      <span className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {isDropdownOpen && (
                      <div className="flex flex-col items-center gap-4 mt-4 text-lg">
                        <Link to="/products" onClick={() => { setIsDropdownOpen(false); setIsMobileMenuOpen(false); }} className="hover:text-[#F9A825]">
                          Products
                        </Link>
                        <Link to="/services" onClick={() => { setIsDropdownOpen(false); setIsMobileMenuOpen(false); }} className="hover:text-[#F9A825]">
                          Services Offered
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-[#F9A825] transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 px-12 py-4 bg-[#F9A825] text-white font-bold rounded-xl text-lg"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

