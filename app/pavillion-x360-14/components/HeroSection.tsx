'use client';

import { motion } from 'framer-motion';
import { Play, Shield, Battery, Zap, Eye, Cpu } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Intel Core Ultra 7",
      description: "Series 2 Processor",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "16\" OLED Display",
      description: "144Hz Refresh Rate",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "20 Hours",
      description: "Battery Life",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Security",
      description: "Windows Hello",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "1.59 cm Thin",
      description: "Ultra Portable",
      color: "from-yellow-500 to-amber-400"
    }
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      </div>

      <div className="container-wide section-padding relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full border border-blue-200 mb-6">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-blue-700">New Arrival</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-gradient bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">
                  Redefining
                </span>
                <br />
                <span className="text-gray-900">Everyday Computing</span>
              </h1>
              
              <p className="text-xl text-gray-600 mt-8 mb-12 leading-relaxed max-w-2xl">
                Experience the perfect synergy of style and performance. The ASUS Vivobook S16 
                combines cutting-edge technology with elegant design for unparalleled productivity 
                and entertainment.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                    <div className={`relative p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl transition-all duration-300 group-hover:border-transparent group-hover:scale-105 group-hover:shadow-xl ${
                      hoveredFeature === index ? 'shadow-lg' : ''
                    }`}>
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-3`}>
                        {feature.icon}
                      </div>
                      <div className="font-bold text-gray-900">{feature.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
                >
                  <Play className="w-5 h-5" />
                  Watch Overview
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  Explore Features
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              {/* Floating Badges */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl shadow-xl z-10"
              >
                <div className="text-sm font-bold">#1 OLED</div>
                <div className="text-xs opacity-90">Worldwide Sales</div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-xl z-10"
              >
                <div className="text-sm font-bold">TÜV Certified</div>
                <div className="text-xs opacity-90">Eye Care</div>
              </motion.div>
              
              {/* Main Product Image */}
              <div className="relative bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square flex items-center justify-center p-12">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Laptop Frame */}
                    <div className="relative w-3/4">
                      {/* Screen */}
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl border-8 border-gray-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white mb-2">ASUS</div>
                            <div className="text-sm text-gray-300">Vivobook S16</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Base */}
                      <div className="h-4 bg-gradient-to-r from-gray-800 to-gray-700"></div>
                      <div className="h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-b-2xl"></div>
                      
                      {/* Keyboard */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}