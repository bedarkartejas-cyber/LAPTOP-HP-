'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Define the type for navigation items
type NavItem = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[]; // Optional submenu property
};

const OmenLogo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#ff006e]"
  >
    <path
      d="M12 2L22 12L12 22L2 12L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// 2. Apply the type to the array
const navigationItems: NavItem[] = [
  { label: 'Specifications', href: '/specs' },
  { label: 'Displays', href: '/displays' },
  { label: 'Accessories', href: '/accessories' },
  { label: 'Support', href: '/support' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* PREMIUM TOP BAR */}
      <div className="bg-black border-b border-zinc-900 text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <span className="hover:text-white transition-colors cursor-default">OMEN Gaming Ecosystem</span>
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-[#ff006e]" />
            <span className="text-white italic">Play Without Limits</span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled || isMenuOpen
            ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800'
            : 'bg-black border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <a href="/" className="flex items-center gap-4 group relative z-50">
            <div className="relative">
                <div className="absolute inset-0 bg-[#ff006e] blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <OmenLogo />
            </div>
            <span className="text-2xl font-[1000] tracking-tighter text-white italic group-hover:text-[#ff006e] transition-colors duration-300">
              OMEN
            </span>
          </a>

          {/* DESKTOP NAV - PREMIUM TYPOGRAPHY */}
          <nav className="hidden lg:flex gap-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={item.href}
                  className="relative px-2 py-2 text-xs font-black italic uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  {item.label}
                  {/* Hover Underline Effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff006e] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              </div>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-6 relative z-50">
            
            {/* PREMIUM BUTTON */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden lg:block group relative px-8 py-3 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] italic overflow-hidden transition-all"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">COMPARE SPECS</span>
              
              {/* Background Color Fill */}
              <div className="absolute inset-0 bg-[#ff006e] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

              {/* Shimmer Effect */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                className="absolute top-0 left-0 w-10 h-full bg-white/40 skew-x-12 z-20 pointer-events-none"
              />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 border border-zinc-800 bg-zinc-900/50 rounded-full flex items-center justify-center text-white hover:bg-[#ff006e] hover:border-[#ff006e] transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* FULL SCREEN MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-[73px] z-40 bg-black/95 backdrop-blur-xl border-t border-zinc-800 lg:hidden flex flex-col"
            >
              <div className="flex-1 flex flex-col justify-center px-8 space-y-8">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-4xl font-[1000] italic text-zinc-500 hover:text-white hover:pl-4 transition-all duration-300 uppercase tracking-tighter"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              
              <div className="p-8 border-t border-zinc-800">
                <button className="w-full py-4 bg-[#ff006e] text-white font-black italic uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300">
                  COMPARE SPECS
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}