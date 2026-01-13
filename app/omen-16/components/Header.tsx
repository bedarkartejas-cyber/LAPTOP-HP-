'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OmenLogo = () => (
  <svg
    width="22"
    height="22"
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

const navigationItems = [
  { label: 'Shop', href: '/shop' },
  {
    label: 'Laptops',
    href: '/laptops',
    submenu: [
      { label: 'OMEN Series', href: '/laptops/omen' },
      { label: 'Victus Series', href: '/laptops/victus' },
      { label: 'Creator Series', href: '/laptops/creator' },
    ],
  },
  { label: 'Desktops', href: '/desktops' },
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
      {/* TOP BAR */}
      <div className="bg-black border-b border-zinc-900 text-zinc-400 text-xs">
        <div className="container mx-auto px-6 py-2 flex justify-between">
          <span className="uppercase tracking-widest">OMEN Gaming</span>
          <span className="text-[#ff006e]">Play Without Limits</span>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800'
            : 'bg-black'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <a href="/" className="flex items-center gap-3 group">
            <OmenLogo />
            <span className="text-xl font-black tracking-widest text-white group-hover:text-[#ff006e] transition">
              OMEN
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-1">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm text-zinc-300 hover:text-white flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4 opacity-70" />}
                </a>

                <AnimatePresence>
                  {activeSubmenu === item.label && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-zinc-950 border border-zinc-800 rounded-xl p-3"
                    >
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <Search className="hidden lg:block w-5 h-5 text-zinc-400" />
            <ShoppingCart className="w-5 h-5 text-zinc-400" />

            <button className="hidden lg:block px-5 py-2 text-xs font-black uppercase tracking-widest bg-[#ff006e] hover:bg-[#ff3385] transition">
              Account
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="lg:hidden bg-black border-t border-zinc-800"
            >
              <div className="px-6 py-6 space-y-3">
                {navigationItems.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-zinc-300 hover:text-white py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
