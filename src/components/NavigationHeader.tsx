'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaCalendarAlt } from 'react-icons/fa';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const navItems: NavItem[] = [
    { id: 'home', label: 'דף הבית', href: '#' },
    { id: 'services', label: 'שירותים', href: '#services' },
    { id: 'gallery', label: 'גלריה', href: '#gallery' },
    { id: 'about', label: 'אודות', href: '#about' },
    { id: 'faq', label: 'שאלות נפוצות', href: '#faq' },
    { id: 'contact', label: 'צור קשר', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (id: string) => {
    setActiveItem(id);
    setIsOpen(false);
  };

  return (
    <header
      id="header"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="relative h-12 w-12 overflow-hidden rounded-full mr-3">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt="מספרה דלתא לוגו"
                  className="object-cover h-full w-full"
                />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">
                מספרה דלתא
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            <ul className="flex items-center space-x-6 space-x-reverse">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleNavItemClick(item.id)}
                    className={`relative px-2 py-4 text-base font-medium transition-colors duration-200 hover:text-[#588C7E] ${
                      activeItem === item.id
                        ? 'text-[#588C7E] font-semibold'
                        : 'text-gray-700'
                    }`}
                    aria-current={activeItem === item.id ? 'page' : undefined}
                  >
                    {item.label}
                    {activeItem === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#588C7E]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-5 py-2.5 rounded-lg bg-[#588C7E] text-white font-medium shadow-[0_4px_10px_rgba(88,140,126,0.3)] transition-all hover:shadow-[0_6px_15px_rgba(88,140,126,0.4)] focus:outline-none focus:ring-2 focus:ring-[#588C7E] focus:ring-opacity-50"
            >
              <FaCalendarAlt className="ml-2" />
              <span>קבע תור עכשיו</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-[#588C7E] focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              <span className="sr-only">{isOpen ? 'סגור תפריט' : 'פתח תפריט'}</span>
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white/90 backdrop-blur-lg px-4 pt-2 pb-6 shadow-lg"
            >
              <nav className="flex flex-col space-y-4">
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={() => handleNavItemClick(item.id)}
                        className={`block px-3 py-2 text-right rounded-md text-base font-medium transition-colors duration-200 ${
                          activeItem === item.id
                            ? 'bg-[#588C7E]/10 text-[#588C7E] font-semibold'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-current={activeItem === item.id ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-2 mt-2 border-t border-gray-200">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center px-5 py-3 rounded-lg bg-[#588C7E] text-white font-medium shadow-[0_4px_10px_rgba(88,140,126,0.3)] transition-all"
                  >
                    <FaCalendarAlt className="ml-2" />
                    <span>קבע תור עכשיו</span>
                  </motion.button>
                  
                  <a
                    href="tel:+972123456789"
                    className="mt-3 w-full flex items-center justify-center px-5 py-3 rounded-lg bg-white text-[#588C7E] font-medium border border-[#588C7E] transition-all"
                  >
                    <FaPhone className="ml-2" />
                    <span>התקשר אלינו</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;