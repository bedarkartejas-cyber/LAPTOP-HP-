"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    // Reduced padding from py-32 to py-12 to remove extra space
    <div className="relative bg-black text-white py-12 overflow-hidden selection:bg-[#ff006e] font-sans">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#ff006e]/5 blur-[100px] rounded-full pointer-events-none" />

      <section className="relative max-w-7xl mx-auto px-6">
        
        {/* REFINED MINIMALIST HEADER */}
        {/* Adjusted gap and removed border-b to tighten the layout further */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-20 pb-10">
          
          {/* Headline Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#ff006e]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-bold">
                Overview
              </span>
            </div>

            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.85] tracking-tighter italic">
              COOL, <br />
              <span className="text-zinc-800">UNINTERRUPTED</span> <br />
              GAMING
            </h2>
          </motion.div>

          {/* Description and CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="flex-1 lg:max-w-[420px] lg:pt-12"
          >
            <p className="text-[#a1a1aa] text-base lg:text-lg leading-relaxed font-normal tracking-tight mb-6">
              The <span className="text-white font-medium italic">OMEN 16</span> leverages Tempest Cooling 
              architecture to sustain maximum clock speeds across 
              high-wattage components.
            </p>

            <button className="group flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase hover:text-[#ff006e] transition-colors duration-300">
              <span className="relative">
                Shop Configs
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff006e] group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

      </section>

      {/* Subtle Bottom Aesthetic Detail moved closer */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />
    </div>
  );
}