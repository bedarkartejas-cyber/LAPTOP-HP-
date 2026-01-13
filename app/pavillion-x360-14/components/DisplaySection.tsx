'use client';

import { useState } from 'react';

export default function DisplaySection() {
  const [activeTab, setActiveTab] = useState('oled');

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">More Immersive</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose between stunning OLED with perfect blacks or smooth IPS with high refresh rate.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('oled')}
              className={`px-6 py-3 font-medium ${activeTab === 'oled' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              FHD+ OLED
            </button>
            <button
              onClick={() => setActiveTab('ips')}
              className={`px-6 py-3 font-medium ${activeTab === 'ips' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              FHD+ IPS
            </button>
          </div>
          
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-900 rounded-xl p-8 mb-6">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                  <span className="text-white">Display Demo</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {activeTab === 'oled' ? (
                  <>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm text-gray-600">Resolution</div>
                      <div className="font-bold">1920 x 1200</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm text-gray-600">Refresh Rate</div>
                      <div className="font-bold">60Hz</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm text-gray-600">Color Gamut</div>
                      <div className="font-bold">100% DCI-P3</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm text-gray-600">Brightness</div>
                      <div className="font-bold">400 nits</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm text-gray-600">Resolution</div>
                      <div className="font-bold">1920 x 1200</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm text-gray-600">Refresh Rate</div>
                      <div className="font-bold">144Hz</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm text-gray-600">Color Gamut</div>
                      <div className="font-bold">100% sRGB</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-sm text-gray-600">Eye Care</div>
                      <div className="font-bold">TÜV Certified</div>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">
                {activeTab === 'oled' ? 'FHD+ OLED Display' : 'FHD+ IPS Display'}
              </h3>
              <p className="text-gray-600">
                {activeTab === 'oled'
                  ? 'Experience stunning visuals with perfect blacks, vibrant colors, and ultra-fast response times for an immersive viewing experience.'
                  : 'Enjoy smooth visuals with high refresh rate, ideal for productivity and entertainment with excellent color accuracy.'}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Vivid colors and deep contrast</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Eye care technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Wide viewing angles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}