'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ChevronLeft, ChevronRight, Check, Maximize2 } from 'lucide-react';

const productImages = [
  { id: 1, src: '/images/gallery/front.jpg', alt: 'Front view with Copilot key visible', category: 'front' },
  { id: 2, src: '/images/gallery/side.jpg', alt: 'Ultra-thin side profile', category: 'side' },
  { id: 3, src: '/images/gallery/keyboard.jpg', alt: 'Backlit keyboard with numeric pad', category: 'keyboard' },
  { id: 4, src: '/images/gallery/display.jpg', alt: '16-inch OLED display', category: 'display' },
  { id: 5, src: '/images/gallery/ports.jpg', alt: 'Connectivity ports', category: 'ports' },
];

const colors = [
  { id: 1, name: 'Cool Silver', hex: '#E8E8E8', available: true },
  { id: 2, name: 'Matte Gray', hex: '#5A5A5A', available: true },
  { id: 3, name: 'Midnight Blue', hex: '#1E3A5F', available: false, comingSoon: true },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
    setZoomLevel(1);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-cyan-500">
              Visual Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore every angle of the beautifully crafted Vivobook S16
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Thumbnails - Vertical on desktop */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible py-2">
              {productImages.map((img, index) => (
                <motion.button
                  key={img.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedImage(index);
                    setZoomLevel(1);
                  }}
                  className={`flex-shrink-0 relative group ${
                    selectedImage === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                  }`}
                >
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Img {index + 1}</div>
                  </div>
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-blue-500/20 rounded-xl"></div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square flex items-center justify-center p-8">
                <motion.div
                  animate={{ scale: zoomLevel }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-full max-w-2xl mx-auto"
                >
                  {/* Product Visualization */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-8 border-gray-800 shadow-2xl">
                      {/* Screen Content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2 opacity-90">ASUS</div>
                          <div className="text-lg text-gray-300 opacity-75">Vivobook S16</div>
                          <div className="text-sm text-gray-400 mt-4 opacity-60">16" OLED Display</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Keyboard Glow */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-16 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl"></div>
                  </div>
                </motion.div>
              </div>

              {/* Image Controls */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <button
                  onClick={prevImage}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={zoomOut}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium"
                    disabled={zoomLevel <= 1}
                  >
                    -
                  </button>
                  <span className="text-sm text-gray-600 w-16 text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={zoomIn}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium"
                    disabled={zoomLevel >= 3}
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Maximize2 className="w-5 h-5 text-gray-700" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm">
                {selectedImage + 1} / {productImages.length}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></span>
                Available Colors
              </h3>
              <div className="flex gap-4">
                {colors.map((color, index) => (
                  <motion.button
                    key={color.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedColor(index)}
                    disabled={!color.available}
                    className={`flex flex-col items-center gap-3 group ${
                      !color.available ? 'opacity-50' : ''
                    }`}
                  >
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-2xl border-4 transition-all ${
                          selectedColor === index
                            ? 'border-blue-500 shadow-lg shadow-blue-500/30'
                            : 'border-gray-200 group-hover:border-gray-300'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                      {selectedColor === index && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                      {color.comingSoon && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full">
                          Soon
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">{color.name}</div>
                      {color.comingSoon ? (
                        <div className="text-xs text-gray-500">Coming Soon</div>
                      ) : (
                        <div className="text-xs text-green-600 font-medium">In Stock</div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications Panel */}
          <div className="lg:col-span-4 order-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-100 p-8 sticky top-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Specifications
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
              </h3>
              
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">Based on 89 reviews</div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    4.4
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="space-y-4">
                  {[
                    { label: 'Processor', value: 'Intel Core Ultra 7', icon: '⚡' },
                    { label: 'Display', value: '16" FHD+ OLED', icon: '🖥️' },
                    { label: 'Memory', value: '16GB DDR5', icon: '💾' },
                    { label: 'Storage', value: '512GB PCIe 4.0 SSD', icon: '💿' },
                    { label: 'Battery', value: 'Up to 20 hours', icon: '🔋' },
                  ].map((spec, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{spec.icon}</span>
                        <span className="text-gray-700">{spec.label}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Price Card */}
                <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl text-white">
                  <div className="text-sm opacity-90 mb-2">Special Offer</div>
                  <div className="text-4xl font-bold mb-1">₹65,990</div>
                  <div className="text-lg opacity-90 line-through mb-4">₹86,990</div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm">You save</div>
                    <div className="px-3 py-1 bg-white/20 rounded-full font-bold">₹21,000</div>
                  </div>
                  <button className="w-full py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                    Customize & Buy
                  </button>
                </div>

                {/* Compare Button */}
                <button className="w-full py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <span>Compare with other models</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}