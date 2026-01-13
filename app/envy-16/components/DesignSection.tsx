'use client';

import { motion } from 'framer-motion';
import { Ruler, Weight, Palette, Sparkles, Layers } from 'lucide-react';
import { useState } from 'react';

export default function DesignSection() {
  const [activeView, setActiveView] = useState('front');

  const designFeatures = [
    {
      icon: <Ruler className="w-6 h-6" />,
      value: "1.59 cm",
      label: "Ultra Thin",
      description: "Sleek profile for maximum portability",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Weight className="w-6 h-6" />,
      value: "1.70 kg",
      label: "Lightweight",
      description: "Easy to carry anywhere",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      value: "CNC Milled",
      label: "Premium Build",
      description: "Aerospace-grade aluminum",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      value: "Matte Finish",
      label: "Elegant Texture",
      description: "Fingerprint resistant",
      color: "from-orange-500 to-amber-400"
    }
  ];

  const colorOptions = [
    {
      name: "Cool Silver",
      hex: "#E8E8E8",
      description: "Modern and sophisticated",
      available: true
    },
    {
      name: "Matte Gray",
      hex: "#5A5A5A",
      description: "Professional and timeless",
      available: true
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container-wide section-padding relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full border border-blue-200 mb-6">
            <Palette className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Premium Design</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crafted for
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-cyan-500 ml-3">
              Everyday Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect harmony of form and function with meticulously engineered design 
            that combines beauty with exceptional durability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Design Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* 3D View Toggle */}
            <div className="flex gap-2 mb-8">
              {['front', 'side', 'top'].map((view) => (
                <button
                  key={view}
                  onClick={() => setActiveView(view)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeView === view
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)} View
                </button>
              ))}
            </div>

            {/* Product Visualization */}
            <div className="relative bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square p-12">
                <div className="relative w-full h-full">
                  {/* Animated Product Render */}
                  <motion.div
                    key={activeView}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative w-3/4">
                      {/* Product Base */}
                      <div className="relative">
                        {/* Screen */}
                        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl border-8 border-gray-800 shadow-inner">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white opacity-90">ASUS</div>
                              <div className="text-sm text-gray-300 opacity-75">Vivobook S16</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Hinge */}
                        <div className="h-2 bg-gradient-to-r from-gray-700 to-gray-600"></div>
                        
                        {/* Base */}
                        <div className="h-8 bg-gradient-to-r from-gray-600 to-gray-500 rounded-b-2xl shadow-lg">
                          {/* Keyboard Glow */}
                          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-5/6 h-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Dimension Lines */}
              <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-blue-500/50 to-transparent">
                <div className="absolute -top-2 -right-8 text-xs text-white opacity-75">34.2cm</div>
              </div>
              <div className="absolute bottom-1/4 right-1/4 h-32 w-px bg-gradient-to-b from-cyan-500/50 to-transparent">
                <div className="absolute -bottom-8 -left-4 text-xs text-white opacity-75 rotate-90">24.1cm</div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-xl"
            >
              <div className="font-bold">ErgoLift Hinge</div>
              <div className="text-xs opacity-90">Improved Typing Comfort</div>
            </motion.div>
          </motion.div>

          {/* Design Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {designFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover-lift"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{feature.value}</div>
                  <div className="font-semibold text-gray-700 mb-2">{feature.label}</div>
                  <div className="text-sm text-gray-500">{feature.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Color Options */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Palette className="w-5 h-5 text-blue-600" />
                Color Variations
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {colorOptions.map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:border-gray-200 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-16 h-16 rounded-xl shadow-inner border border-gray-200"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-gray-900">{color.name}</div>
                          {color.available && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              Available
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{color.description}</p>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Design Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Design Philosophy</h4>
              <p className="text-gray-600 mb-4">
                Every curve, every angle, and every material choice in Vivobook S16 is meticulously 
                engineered to deliver both aesthetic beauty and functional excellence.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Minimalist Aesthetics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">Premium Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">User-Centric Design</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}