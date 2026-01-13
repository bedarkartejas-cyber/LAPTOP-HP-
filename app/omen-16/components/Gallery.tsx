'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="relative w-full bg-black py-12 overflow-hidden selection:bg-[#ff006e] font-sans">
      
      {/* Ambient Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff006e]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. RGB KEYBOARD SECTION */}
      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Keyboard Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-video lg:aspect-square overflow-hidden group">
              <Image 
                src="/images/omen-16/keyboard .avif" 
                alt="OMEN 16 RGB Keyboard" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 right-4 w-12 h-12 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-8 h-[1.5px] bg-orange-500" />
                <div className="absolute bottom-0 right-0 w-[1.5px] h-8 bg-orange-500" />
              </div>
            </div>
          </motion.div>

          {/* Keyboard Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-[#ff006e] uppercase tracking-[0.5em] italic">
                  RGB Personalization
                </span>
                <span className="h-[1px] w-8 bg-zinc-900" />
              </div>
              <h2 className="text-5xl md:text-7xl font-[1000] text-white uppercase italic leading-none tracking-tighter">
                LIGHT <br />
                <span className="text-zinc-800">IT UP</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 max-w-lg"
            >
              <p className="text-zinc-400 text-base leading-relaxed font-light tracking-tight">
                Fully customize your <span className="text-white font-medium italic">4-zone RGB keyboard</span> with Light Studio within OMEN Gaming Hub.
              </p>
              
              <div className="flex items-center gap-8 opacity-60">
                <Image src="/images/omen-16/omen-hyper.png" alt="Partners" width={120} height={18} className="grayscale brightness-200" />
                <div className="flex flex-col border-l border-zinc-800 pl-4">
                  <span className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.3em]">Powered By</span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Light Studio</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. OMEN TEMPEST COOLING SECTION */}
      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.5em] italic">
                  Thermal Engineering
                </span>
                <span className="h-[1px] w-8 bg-zinc-900" />
              </div>
              <h2 className="text-5xl md:text-7xl font-[1000] text-white uppercase italic leading-none tracking-tighter">
                OMEN <br />
                <span className="text-zinc-800 uppercase">Tempest Cooling</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 max-w-xl"
            >
              <p className="text-zinc-400 text-base leading-relaxed font-light tracking-tight">
                The design philosophy is simple: maximize heat dissipation and reduce performance drop-off so gamers can maintain peak performance for their entire session.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-zinc-900 pt-6">
                <div className="space-y-1">
                   <p className="text-white text-2xl font-black italic tracking-tighter">1.5X</p>
                   <p className="text-[9px] text-zinc-500 uppercase tracking-widest">More Airflow <br />Gen-over-Gen</p>
                </div>
                <div className="space-y-1">
                   <p className="text-cyan-400 text-2xl font-black italic tracking-tighter">-9° C</p>
                   <p className="text-[9px] text-zinc-500 uppercase tracking-widest">Surface Temp <br />Reduction</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-video lg:aspect-square overflow-hidden group">
              <Image 
                src="/images/omen-16/image-2.avif" 
                alt="Tempest Cooling Architecture" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. FULL WIDTH RYZEN AI SECTION */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative w-full aspect-[21/9] min-h-[300px] border-t border-zinc-900"
      >
        <Image 
          src="/images/omen-16/Ryzen_AI.jpg" 
          alt="AMD Ryzen AI" 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        
        <div className="absolute bottom-6 left-6 z-10 flex items-center gap-4">
          <div className="h-[1px] w-8 bg-[#ff006e]" />
          <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">
            AMD RYZEN AI 300 SERIES
          </span>
        </div>
      </motion.div>

    </section>
  );
}