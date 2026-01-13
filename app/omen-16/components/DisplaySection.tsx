'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function DisplaySection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax effect for the background image on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Staggered animation variants for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[600px] md:h-screen bg-black overflow-hidden selection:bg-[#ff006e]"
    >
      
      {/* 1. Immersive Visual Composite Background with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 h-[120%] -top-[10%]"
      >
        <Image 
          src="/images/omen-16/riot-desktop.avif" 
          alt="Riot Games Visual Composite" 
          fill 
          className="object-cover object-center lg:object-right scale-110 brightness-75"
          priority
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent md:w-3/4 lg:w-1/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </motion.div>

      {/* 2. Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl space-y-12"
        >
          
          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter max-w-2xl italic">
              AN OFFICIAL <br />
              <motion.span 
                initial={{ color: "#ffffff" }}
                whileInView={{ color: ["#ffffff", "#ff006e", "#ffffff"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
              >
                TECHNOLOGY PARTNER
              </motion.span> <br />
              OF RIOT GAMES
            </h2>
          </motion.div>

          {/* Brand Logo Alignment with Staggered Fade */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 md:gap-12 py-4"
          >
            {/* OMEN and HyperX Logos */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="h-8 md:h-12 w-48 md:w-64 relative grayscale brightness-200"
            >
               <Image 
                src="/images/omen-16/omen-hyper.png" 
                alt="OMEN and HyperX" 
                fill 
                className="object-contain"
              />
            </motion.div>

            {/* Vertical Divider */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: 40 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-[1px] bg-white/20 hidden sm:block" 
            />

            {/* Riot Games Logo */}
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
               <span className="text-white font-black text-xl md:text-3xl tracking-tighter uppercase">Riot Games</span>
            </motion.div>
          </motion.div>

          {/* Action Button with Hover Shimmer */}
          <motion.div
            variants={itemVariants}
            className="pt-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-4 bg-white text-black font-black text-[11px] uppercase tracking-[0.3em] overflow-hidden transition-all active:scale-95"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">EXPLORE</span>
              
              {/* Background Color Fill */}
              <div className="absolute inset-0 bg-[#ff006e] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

              {/* Shimmer Effect */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                className="absolute top-0 left-0 w-20 h-full bg-white/30 skew-x-12 z-20 pointer-events-none"
              />
              
              {/* Glow effect on hover */}
              <div className="absolute -bottom-2 -left-2 w-full h-full bg-gradient-to-r from-[#ff006e] via-orange-500 to-yellow-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

      {/* 3. Aesthetic Bottom Border Animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent origin-center" 
      />
    </section>
  );
}