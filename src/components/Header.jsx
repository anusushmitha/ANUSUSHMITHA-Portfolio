import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ isDark, setIsDark }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Keep visible near the top of the page
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-500 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="backdrop-blur-md bg-ivory-100/80 dark:bg-charcoal-900/80 border-b border-charcoal-800/10 dark:border-ivory-100/10 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
            {/* Logo / Monogram */}
            <a
              href="#"
              className="group flex items-center gap-3 font-mono text-xs tracking-micro uppercase text-charcoal-800 dark:text-ivory-100 focus:outline-none"
              aria-label="Anu Sushmitha S - Back to top"
            >
              <span className="w-2 h-2 rounded-full bg-champagne group-hover:scale-125 transition-transform duration-300"></span>
              <span className="font-medium">Anu Sushmitha S</span>
              <span className="hidden sm:inline text-charcoal-400 dark:text-charcoal-500 font-light">/ AI · DS</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-mono uppercase tracking-micro" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="editorial-link text-charcoal-600 hover:text-charcoal-900 dark:text-charcoal-400 dark:hover:text-ivory-100 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Controls: Dark Mode Toggle & Mobile Menu Trigger */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Light / Dark Mode Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-charcoal-600 hover:text-charcoal-900 dark:text-charcoal-400 dark:hover:text-ivory-100 px-2.5 py-1.5 border border-charcoal-800/10 dark:border-ivory-100/10 hover:border-champagne dark:hover:border-champagne transition-colors focus:outline-none"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
                <span className="text-[11px]">{isDark ? 'LIGHT' : 'DARK'}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 -mr-2 text-charcoal-700 dark:text-ivory-100 focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`h-px w-full bg-current transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`h-px w-full bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`h-px w-full bg-current transform transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden bg-ivory-100/95 dark:bg-charcoal-900/95 backdrop-blur-xl pt-24 px-8 pb-10 flex flex-col justify-between"
          >
            <div className="space-y-6 pt-6">
              <span className="block font-mono text-[10px] tracking-micro uppercase text-champagne">
                Navigation
              </span>
              <nav className="flex flex-col space-y-5">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl font-light text-charcoal-800 dark:text-ivory-100 flex items-center justify-between border-b border-charcoal-800/10 dark:border-ivory-100/10 pb-4"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-charcoal-400">0{idx + 1}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-charcoal-800/10 dark:border-ivory-100/10 text-xs font-mono space-y-2">
              <span className="block text-charcoal-400 dark:text-charcoal-500 uppercase tracking-micro text-[10px]">
                Direct Contact
              </span>
              <p className="text-charcoal-700 dark:text-charcoal-300">sanushusmitha@gmail.com</p>
              <p className="text-charcoal-500 dark:text-charcoal-400">+91 98418 46914</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
