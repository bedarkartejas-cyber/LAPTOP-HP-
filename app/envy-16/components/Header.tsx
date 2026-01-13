'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  { label: 'Shop', href: '/shop', mega: true },
  { label: 'Laptops', href: '/laptops', submenu: [
    { label: 'Vivobook Series', href: '/laptops/vivobook' },
    { label: 'Zenbook Series', href: '/laptops/zenbook' },
    { label: 'ExpertBook Series', href: '/laptops/expertbook' },
    { label: 'ROG Series', href: '/laptops/rog' },
  ]},
  { label: 'Desktops & Displays', href: '/desktops' },
  { label: 'Components', href: '/components' },
  { label: 'Networking', href: '/networking' },
  { label: 'Accessories', href: '/accessories' },
  { label: 'Business', href: '/business' },
  { label: 'Support', href: '/support' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-sm">
        <div className="container-wide section-padding">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-6">
              <a href="https://rog.asus.com" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                <span className="font-semibold">ROG</span>
                <span className="text-xs opacity-75">Gaming</span>
              </a>
              <a href="https://www.asus.com/ProArt" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                <span className="font-semibold">ProArt</span>
                <span className="text-xs opacity-75">Creators</span>
              </a>
              <a href="https://iot.asus.com" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                <span className="font-semibold">AIoT</span>
                <span className="text-xs opacity-75">Solutions</span>
              </a>
            </div>
            <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-xs font-medium transition-all">
              Explore Gaming →
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-xl py-2' : 'bg-white py-4'
      }`}>
        <div className="container-wide section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-12">
              <a href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <span className="relative text-2xl font-bold text-blue-700 tracking-tighter">ASUS</span>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <a
                      href={item.href}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm rounded-lg hover:bg-blue-50 transition-all group"
                    >
                      <span>{item.label}</span>
                      {item.submenu && (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      )}
                    </a>

                    {/* Submenu Dropdown */}
                    <AnimatePresence>
                      {activeSubmenu === item.label && item.submenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 p-3"
                        >
                          {item.submenu.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all mb-1 last:mb-0"
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
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              
              <button className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              
              <button className="hidden lg:flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                My Account
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container-wide section-padding py-6">
                <div className="space-y-1">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  <button className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium">
                    My Account
                  </button>
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      placeholder="Search ASUS.com"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="p-2 bg-gray-100 rounded-lg">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}