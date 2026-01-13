"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductHeader() {
  return (
    <section className="relative w-full h-[600px] md:h-screen min-h-[500px] overflow-hidden bg-black">

      {/* Background Image — STATIC (NO ANIMATION) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/omen-16/hero-bg.avif"
          alt="OMEN 16 Gaming Laptop"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between py-12 px-6">

        {/* Top Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mt-8 md:mt-12"
        >
          <motion.p
            initial={{ letterSpacing: "0.6em" }}
            animate={{ letterSpacing: "0.3em" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-white text-sm md:text-lg font-bold uppercase mb-2"
          >
            OMEN 16
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] uppercase italic tracking-tighter"
          >
            Pressure Tested <br />
            Never Bested
          </motion.h1>
        </motion.div>

        {/* Bottom Spacer (logos removed, layout preserved) */}
        <div className="w-full max-w-7xl mb-4" />
      </div>
    </section>
  );
}
