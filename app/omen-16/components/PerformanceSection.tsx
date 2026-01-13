'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function PerformanceSection() {
  return (
    <section className="relative w-full bg-black py-24 overflow-hidden selection:bg-[#ff006e] font-sans">
      
      {/* 1. UNLEASHED MODE TEXT CONTENT */}
      <div className="container mx-auto px-6 relative z-10 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Title and Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#ff006e]" />
              <span className="text-[11px] font-black text-[#ff006e] uppercase tracking-[0.5em] italic">
                UNLEASHED MODE
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-[1000] text-white uppercase italic leading-[0.85] tracking-tighter">
              POWER YOU <br />
              <span className="text-zinc-800">CONTROL</span>
            </h2>
          </motion.div>

          {/* Right Side: Unleashed Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8 lg:pt-16"
          >
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light tracking-tight italic">
              While the raw output of these new CPU and GPUs are already great, we knew we could push them even further. 
              Introducing <span className="text-white font-medium">Unleashed Mode</span>, a new performance feature in 
              OMEN Gaming Hub that allows you to manually “overclock” your components up to a whopping 170W TPP 
              without having to touch the BIOS.
            </p>
            
            <div className="flex items-start gap-4 p-6 bg-zinc-900/40 border-l-2 border-[#ff006e] backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6 text-[#ff006e] mt-1 flex-shrink-0" />
              <p className="text-zinc-500 text-sm leading-relaxed">
                Rest assured that we included measures to prohibit permanent damage to your device, 
                so stop capping your performance and start unleashing it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. ZEN 5 MULTITASKING SECTION */}
      {/* Added margin-top to separate from the previous section since the image is gone */}
      <div className="relative w-full py-32 border-t border-zinc-900 mt-12">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em]">
                  MULTITASKING MASTERY
                </span>
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">
                  UNLOCK TRANSFORMATIONAL <br />
                  <span className="text-[#ff006e]">AI EXPERIENCES</span>
                </h3>
              </div>
              
              <div className="border-l border-zinc-800 pl-8">
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  Up to 12 high performance “Zen 5” cores get you lightning-fast performance for powerful 
                  multitasking, productivity, and content creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Transition Detail */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />
    </section>
  );
}