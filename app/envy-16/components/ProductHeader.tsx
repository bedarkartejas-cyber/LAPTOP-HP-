'use client';

import { motion } from 'framer-motion';
import { Info, ChevronDown } from 'lucide-react';

export default function ProductHeader() {
  const tabs = [
    { label: 'Overview', sublabel: 'Intel Core Ultra Series 2', active: true },
    { label: 'Tech Specs', href: '/techspec' },
    { label: 'Support', href: '/support' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066cc' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-wide section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-8"
        >
          {/* Model Name */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium rounded-full">
                NEW
              </span>
              <span className="text-sm text-gray-600">Slim & Lightweight</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">
                ASUS Vivobook S16
              </span>
              <br />
              <span className="text-gray-900">(S3607)</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl">
              More Intelligent, More Productive, More Secure — Your perfect companion for work and play.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-blue-50 to-cyan-50">
                <div className="flex divide-x divide-gray-200/50">
                  {tabs.map((tab, index) => (
                    <div key={tab.label} className="flex-1">
                      {tab.active ? (
                        <div className="text-center py-4 px-2">
                          <div className="font-semibold text-blue-700 text-lg">{tab.label}</div>
                          {tab.sublabel && (
                            <div className="text-sm text-gray-500 mt-1">{tab.sublabel}</div>
                          )}
                          <div className="mt-2 mx-auto w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                        </div>
                      ) : (
                        <a
                          href={tab.href}
                          className="block text-center py-4 px-2 text-gray-600 hover:text-blue-600 hover:bg-white/50 transition-all rounded-lg"
                        >
                          <div className="font-medium">{tab.label}</div>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300">Price Starting at</span>
                    <button className="relative group">
                      <Info className="w-4 h-4 text-gray-400" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-gray-800 text-sm text-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        ASUS eStore price. Specifications may vary. Actual price may differ by reseller.
                      </div>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full text-xs font-medium">
                      Limited Time Offer
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-4">
                    <div className="text-5xl font-bold">₹65,990</div>
                    <div className="text-2xl text-gray-400 line-through">₹86,990</div>
                    <div className="ml-auto">
                      <div className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl font-bold shadow-lg">
                        SAVE ₹21,000
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm mt-2">Inclusive of all taxes</div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <span>View Options</span>
                    <ChevronDown className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-4 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all"
                  >
                    Where to Buy
                  </motion.button>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      In Stock
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Free Shipping
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      1-Year Warranty
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}