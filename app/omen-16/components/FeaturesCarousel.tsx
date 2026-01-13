'use client';

import { motion } from "framer-motion";

export default function FeaturesCarousel() {
  return (
    <section className="relative w-full h-[500px] md:h-screen bg-black overflow-hidden">
      {/* Main Video Container 
          - w-full h-full ensures it fills the entire section
      */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full h-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Make sure your video is saved exactly at this path:
              public/images/omen-16/omen16.mp4 
          */}
          <source src="/images/omen-16/omen16.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Premium Overlay 
            - Optional: Subtle darkening to blend with the rest of your black theme
        */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </motion.div>
    </section>
  );
}