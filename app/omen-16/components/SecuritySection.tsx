'use client';

import { motion } from 'framer-motion';
import { Hexagon, Info, ShieldCheck, Lock, Server, FileCheck } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="relative w-full bg-black py-24 overflow-hidden selection:bg-[#ff006e] font-sans">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Title, Description, and Features */}
          <div className="space-y-16">
            
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#ff006e]" />
                <span className="text-[11px] font-black text-[#ff006e] uppercase tracking-[0.5em] italic">
                  FORTIFIED CORE
                </span>
              </div>
              <h2 className="text-6xl md:text-7xl font-[1000] text-white uppercase italic leading-[0.85] tracking-tighter">
                UNMATCHED <br />
                <span className="text-zinc-800">SECURITY.</span>
              </h2>
              
              <div className="flex items-start gap-4 pt-4">
                 <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light tracking-tight italic">
                  Security is not an add-on, it's built-in. Our comprehensive security suite protects your data, applications, and infrastructure from end to end, ensuring compliance and peace of mind.
                </p>
              </div>
            </motion.div>

            {/* Feature List */}
            <div className="space-y-8">
              
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="w-5 h-5 text-[#ff006e]" />
                  <h3 className="text-2xl font-black text-white italic tracking-tight uppercase group-hover:text-[#ff006e] transition-colors">APPLICATION</h3>
                </div>
                <div className="pl-8 border-l border-zinc-800 group-hover:border-[#ff006e] transition-colors duration-300">
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Web Application Firewall</h4>
                  <p className="text-zinc-400 text-base leading-relaxed font-light">
                    A powerful WAF that intelligently filters and monitors HTTP traffic between your web application and the Internet, blocking malicious attacks like SQL injection and cross-site scripting.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Server className="w-5 h-5 text-[#ff006e]" />
                  <h3 className="text-2xl font-black text-white italic tracking-tight uppercase group-hover:text-[#ff006e] transition-colors">INFRASTRUCTURE</h3>
                </div>
                <div className="pl-8 border-l border-zinc-800 group-hover:border-[#ff006e] transition-colors duration-300">
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">DDoS Protection</h4>
                  <p className="text-zinc-400 text-base leading-relaxed font-light">
                    Advanced DDoS mitigation techniques that detect and mitigate distributed denial-of-service attacks in real-time, ensuring your services remain available and performant.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FileCheck className="w-5 h-5 text-[#ff006e]" />
                  <h3 className="text-2xl font-black text-white italic tracking-tight uppercase group-hover:text-[#ff006e] transition-colors">COMPLIANCE</h3>
                </div>
                <div className="pl-8 border-l border-zinc-800 group-hover:border-[#ff006e] transition-colors duration-300">
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">SOC 2 Type II, ISO 27001</h4>
                  <p className="text-zinc-400 text-base leading-relaxed font-light">
                    We adhere to the highest international standards for information security, providing you with the assurance that your data is managed with the utmost care and security.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* RIGHT COLUMN: Image (Border Removed) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-24 mt-8 lg:mt-0"
          >
            {/* Visual Flair/Glow behind image */}
            <div className="absolute -inset-4 bg-[#ff006e]/20 blur-3xl rounded-full opacity-20" />
            
            {/* Container: Removed 'border border-zinc-800 bg-zinc-900/50' to remove the frame */}
            <div className="relative rounded-sm overflow-hidden">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                 <div className="relative">
                    <Hexagon className="w-8 h-8 text-[#ff006e]" strokeWidth={2} />
                    <Info className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" strokeWidth={2.5} />
                 </div>
                 <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">SECURE PORT I/O</span>
              </div>

              {/* IMAGE */}
              <img 
                src="./images/omen-16/ports-esktop.avif" 
                alt="Security Illustration" 
                className="w-full h-auto object-cover relative z-10 opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Technical overlay at bottom of image */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                 <div className="flex items-center justify-between border-t border-zinc-700 pt-4">
                    <span className="text-white font-bold italic uppercase text-sm">Hardware Encryption</span>
                    <ShieldCheck className="w-5 h-5 text-[#ff006e]" />
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Background Detail Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}