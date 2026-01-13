'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Zap, Shield, Battery, Eye, Cpu, Palette } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "More Intelligent",
    subtitle: "AI-Powered Productivity",
    description: "Dedicated Copilot key for instant access to Microsoft Copilot, your intelligent AI companion for enhanced productivity.",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-blue-600 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    image: "intelligent",
    stats: [
      { label: "AI Processor", value: "Intel Core Ultra 7" },
      { label: "Copilot Key", value: "Instant Access" },
      { label: "AI Features", value: "Smart Optimization" }
    ]
  },
  {
    id: 2,
    title: "More Productive",
    subtitle: "All-Day Performance",
    description: "With up to 20 hours of battery life, stay productive from morning to night without interruption.",
    icon: <Battery className="w-8 h-8" />,
    color: "from-green-600 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    image: "productive",
    stats: [
      { label: "Battery Life", value: "Up to 20 hrs" },
      { label: "Fast Charge", value: "60% in 49 mins" },
      { label: "Performance", value: "35W TDP" }
    ]
  },
  {
    id: 3,
    title: "More Secure",
    subtitle: "Advanced Protection",
    description: "Windows Hello facial recognition with IR camera and physical webcam shutter for complete privacy control.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-purple-600 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    image: "secure",
    stats: [
      { label: "Windows Hello", value: "Face Recognition" },
      { label: "IR Camera", value: "Secure Login" },
      { label: "Privacy Shutter", value: "Physical Cover" }
    ]
  },
  {
    id: 4,
    title: "More Stylish",
    subtitle: "Premium Design",
    description: "Trendy and chic with harmonious color palette and metallic finish — your stylish everyday companion.",
    icon: <Palette className="w-8 h-8" />,
    color: "from-orange-600 to-amber-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
    image: "stylish",
    stats: [
      { label: "Thickness", value: "1.59 cm" },
      { label: "Weight", value: "1.70 kg" },
      { label: "Colors", value: "2 Options" }
    ]
  },
  {
    id: 5,
    title: "More Immersive",
    subtitle: "Stunning Display",
    description: "16:10 FHD+ OLED or 144Hz IPS display with vibrant colors and smooth visuals for ultimate immersion.",
    icon: <Eye className="w-8 h-8" />,
    color: "from-red-600 to-rose-500",
    bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
    image: "immersive",
    stats: [
      { label: "Display", value: "16\" OLED/IPS" },
      { label: "Refresh Rate", value: "Up to 144Hz" },
      { label: "Color Gamut", value: "100% DCI-P3" }
    ]
  }
];

export default function FeaturesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white"></div>
      
      <div className="container-wide section-padding relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full border border-blue-200 mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Key Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need in
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-cyan-500 ml-3">
              One Device
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make Vivobook S16 your perfect companion for work, creativity, and entertainment.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                initial={{ 
                  opacity: 0,
                  x: direction > 0 ? 100 : -100 
                }}
                animate={{ 
                  opacity: 1,
                  x: 0 
                }}
                exit={{ 
                  opacity: 0,
                  x: direction > 0 ? -100 : 100 
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${slides[currentSlide].bgColor}`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                <div className="h-full flex flex-col lg:flex-row">
                  {/* Content Side */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="max-w-lg"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${slides[currentSlide].color} text-white`}>
                          {slides[currentSlide].icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">{slides[currentSlide].subtitle}</div>
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {slides[currentSlide].title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-8">
                        {slides[currentSlide].description}
                      </p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {slides[currentSlide].stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50"
                          >
                            <div className={`text-2xl font-bold bg-gradient-to-br ${slides[currentSlide].color} bg-clip-text text-transparent`}>
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all">
                        Learn More →
                      </button>
                    </motion.div>
                  </div>
                  
                  {/* Visual Side */}
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative w-full max-w-md">
                        {/* Product Visualization */}
                        <div className="relative">
                          <div className="aspect-square bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl border border-white/30 shadow-2xl"></div>
                          
                          {/* Floating Elements */}
                          <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl border border-white/30 backdrop-blur-sm"
                          ></motion.div>
                          
                          <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                            className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-2xl border border-white/30 backdrop-blur-sm"
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-gradient-to-r from-blue-600 to-cyan-500' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                >
                  {index === currentSlide && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                    />
                  )}
                </button>
              ))}
            </div>
            
            {/* Play/Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="ml-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}