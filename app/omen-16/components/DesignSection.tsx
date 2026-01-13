'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu, Zap } from 'lucide-react'; 

export default function DesignSection() {
  const gpuFeatures = [
    {
      title: "DLSS 4",
      tag: "AI Powered",
      description: "DLSS 4 massively increases performance and improves image quality for top games using the power of AI. Using a new frame generation model that's 40% faster and uses 30% less VRAM, DLSS 4 only needs to run once to generate multiple frames. This is made possible with 5th generation Tensor Cores.",
      image: "/images/omen-16/card-1.avif"
    },
    {
      title: "Neural Shaders",
      tag: "Next-Gen Tech",
      description: "RTX's new Neural Shaders can compress textures by up to 7x, greatly reducing stress on the GPU, while simultaneously producing cinematic-quality textures and advanced lighting in your games.",
      image: "/images/omen-16/card-2.avif"
    },
    {
      title: "Reflex 2",
      tag: "Ultra Low Latency",
      description: "Reflex technologies optimize the graphics pipeline for ultimate responsiveness, providing faster target acquisition and quicker reaction times. Reflex 2 introduces Frame Warp, further reducing latency.",
      image: "/images/omen-16/card-3.avif"
    }
  ];

  const performanceStats = [
    {
      title: "Up to an NVIDIA® RTX™ 5070",
      detail: "Laptop GPU w/ DLSS4 and Reflex 2",
      icon: <Zap className="w-8 h-8 text-[#ff006e]" />
    },
    {
      title: "Up to an AMD Ryzen™ AI 9 H 365",
      detail: "10 Cores and 20 Threads",
      icon: <Cpu className="w-8 h-8 text-[#ff006e]" />
    },
    {
      title: "Up to 32GB DDR5 w/",
      detail: "2 Upgradeable Slots",
      icon: <div className="w-8 h-8 flex items-center justify-center border-2 border-[#ff006e] rounded text-[10px] font-bold text-[#ff006e]">RAM</div>
    }
  ];

  return (
    <section className="relative bg-black text-white pt-16 overflow-hidden selection:bg-[#ff006e]">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/grid.svg')] bg-repeat" />

      <div className="relative container mx-auto px-6">
        {/* NVIDIA GPU Features Section - Tightened margins */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#ff006e]" />
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.5em]">
                Architecture: Blackwell
              </span>
            </div>
            <h2 className="text-7xl md:text-9xl font-black uppercase italic leading-[0.8] tracking-tighter">
              GAME<br /><span className="text-zinc-800">CHANGER</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-12"
          >
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-normal tracking-tight max-w-xl italic border-l-2 border-zinc-800 pl-8">
              Powered by NVIDIA&apos;s new Blackwell architecture, GeForce RTX™ 50 Series Laptop GPUs bring game-changing performance to gamers. Multiply performance like never before with DLSS 4 and Reflex 2.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 mb-16">
          {gpuFeatures.map((feature, index) => (
            <div key={index} className="group relative bg-black p-8 transition-colors duration-500 hover:bg-zinc-950">
              <div className="relative aspect-video overflow-hidden mb-6">
                <Image src={feature.image} alt={feature.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black text-[#ff006e] uppercase tracking-[0.3em]">{feature.tag}</span>
                  <div className="h-[1px] w-8 bg-zinc-800 group-hover:bg-[#ff006e] transition-colors" />
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-normal tracking-wide group-hover:text-zinc-300 transition-colors italic">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- PERFORMANCE SECTION --- */}
        <div className="max-w-6xl mx-auto text-center space-y-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
             <div className="flex items-center justify-center gap-2">
                <div className="h-[1px] w-8 bg-[#ff006e]" />
                <span className="text-[10px] font-black text-[#ff006e] uppercase tracking-[0.5em]">Performance</span>
                <div className="h-[1px] w-8 bg-[#ff006e]" />
             </div>
             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                PEAK OF <span className="italic">PERFORMANCE</span>
             </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-5xl mx-auto italic"
          >
            With our upgraded OMEN Tempest Cooling architecture ensuring your device stays cool no matter the situation, we were able to equip the new OMEN16 with the latest next-gen components in the market. This starts with up to a brand-new NVIDIA® RTX™ 5070 Laptop GPU, a beefy gen-over-gen upgrade with up to twice the performance than the 4070 with DLSS 4 on titles like Cyberpunk and Black Myth: Wukong. We also have the latest AMD Ryzen™ AI 9 H 365 CPU, which unlocks transformational AI experiences, and up to 32GB of DDR5 RAM with 2 upgradeable slots so you can always remain at the peak of performance.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 pt-4">
            {performanceStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center space-y-4 group"
              >
                <div className="p-4 border border-zinc-800 rounded-full group-hover:border-[#ff006e] transition-colors duration-500">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">{stat.title}</h4>
                  <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-[0.2em]">{stat.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FULL WIDTH GAME COLLAGE - Seamlessly attached --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative w-full aspect-[21/9] min-h-[400px] md:min-h-[600px] border-t border-zinc-900"
      >
        <Image 
          src="/images/omen-16/nvidia.png" 
          alt="NVIDIA GeForce RTX Powering Advanced AI" 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
           <div className="flex flex-col items-center gap-2">
              <div className="bg-black/80 backdrop-blur-md px-6 py-2 border border-zinc-800 rounded-sm">
                 <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
                    Powering Advanced AI
                 </p>
              </div>
           </div>
        </div>
      </motion.div>
    </section>
  );
}