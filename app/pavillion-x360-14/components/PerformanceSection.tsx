'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Gauge, CpuIcon as Chip, Database, Rocket, Brain } from 'lucide-react';
import { useState } from 'react';

export default function PerformanceSection() {
  const [activeBenchmark, setActiveBenchmark] = useState('cpu');

  const performanceMetrics = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Intel Core Ultra 7",
      description: "Series 2 Processor",
      value: "4.2GHz",
      subvalue: "Max Turbo",
      color: "from-blue-500 to-cyan-400",
      improvement: "+18%"
    },
    {
      icon: <Chip className="w-6 h-6" />,
      title: "AI Engine",
      description: "NPU Performance",
      value: "34 TOPS",
      subvalue: "AI Processing",
      color: "from-purple-500 to-pink-400",
      improvement: "+45%"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "PCIe 4.0 SSD",
      description: "Storage Speed",
      value: "7,000MB/s",
      subvalue: "Read Speed",
      color: "from-green-500 to-emerald-400",
      improvement: "+2.5x"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "DDR5 Memory",
      description: "System Memory",
      value: "6400MHz",
      subvalue: "DDR5 Speed",
      color: "from-orange-500 to-amber-400",
      improvement: "+50%"
    }
  ];

  const benchmarks = {
    cpu: [
      { task: "Video Editing", score: 94, color: "from-blue-500 to-cyan-400" },
      { task: "3D Rendering", score: 88, color: "from-purple-500 to-pink-400" },
      { task: "Code Compilation", score: 96, color: "from-green-500 to-emerald-400" },
      { task: "Data Analysis", score: 91, color: "from-orange-500 to-amber-400" }
    ],
    gpu: [
      { task: "Gaming @ 1080p", score: 85, color: "from-blue-500 to-cyan-400" },
      { task: "Video Encoding", score: 92, color: "from-purple-500 to-pink-400" },
      { task: "AI Inference", score: 95, color: "from-green-500 to-emerald-400" },
      { task: "Photo Editing", score: 89, color: "from-orange-500 to-amber-400" }
    ],
    storage: [
      { task: "File Transfer", score: 98, color: "from-blue-500 to-cyan-400" },
      { task: "App Launch", score: 96, color: "from-purple-500 to-pink-400" },
      { task: "Boot Time", score: 94, color: "from-green-500 to-emerald-400" },
      { task: "Database Query", score: 91, color: "from-orange-500 to-amber-400" }
    ]
  };

  const useCases = [
    {
      title: "Creative Work",
      description: "Smooth 4K video editing and 3D rendering",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Gaming",
      description: "Enjoy modern games at high settings",
      icon: "🎮",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Development",
      description: "Fast code compilation and virtual machines",
      icon: "💻",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Processing",
      description: "Accelerated machine learning tasks",
      icon: "🤖",
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0 
            }}
            animate={{ 
              y: [null, `-${Math.random() * 100 + 20}px`],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container-wide section-padding relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 mb-6">
            <Zap className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-300">Raw Performance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unleash
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-300 ml-3">
              Maximum Power
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience blazing-fast performance with Intel Core Ultra 7 processor and cutting-edge 
            architecture designed for today's demanding workloads.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Brain className="w-6 h-6 text-blue-300" />
              Performance Specifications
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover-lift"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.color}`}>
                      {metric.icon}
                    </div>
                    <span className="px-2 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 text-xs font-medium rounded-full">
                      {metric.improvement}
                    </span>
                  </div>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400 mb-2">{metric.subvalue}</div>
                  <div className="font-semibold text-white mb-1">{metric.title}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benchmark Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Performance Benchmarks</h3>
              <div className="flex gap-2">
                {['cpu', 'gpu', 'storage'].map((bench) => (
                  <button
                    key={bench}
                    onClick={() => setActiveBenchmark(bench)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeBenchmark === bench
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {bench.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {benchmarks[activeBenchmark as keyof typeof benchmarks]?.map((bench, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{bench.task}</span>
                    <span className="font-semibold">{bench.score}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bench.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${bench.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Comparison */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">vs Previous Generation</span>
                <Rocket className="w-5 h-5 text-green-400" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-bold text-green-400">+42%</div>
                  <div className="text-xs text-gray-400 mt-1">AI Performance</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">+28%</div>
                  <div className="text-xs text-gray-400 mt-1">Multi-core</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-400">+35%</div>
                  <div className="text-xs text-gray-400 mt-1">Graphics</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Perfect For</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((usecase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${usecase.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all h-full">
                  <div className="text-4xl mb-6">{usecase.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{usecase.title}</h4>
                  <p className="text-gray-400">{usecase.description}</p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Recommended Spec:</span>
                      <span className="text-blue-300">16GB RAM</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-1">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-3">
              <Zap className="w-5 h-5" />
              <span>Experience Maximum Performance</span>
              <span className="opacity-75">→</span>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            See detailed benchmarks and performance comparisons
          </p>
        </motion.div>
      </div>
    </section>
  );
}