export default function BatterySection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Power All Day, Every Day</h2>
            <p className="text-gray-600 mb-6">
              With up to 20 hours of battery life and fast charging technology, stay productive from morning to night.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '70WHrs', label: 'battery capacity' },
                { value: 'Up to 20 hrs', label: 'battery life' },
                { value: 'Up to 1.2x', label: 'battery lifespan' },
                { value: '60% in 49 mins', label: 'Fast Charging' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold text-gray-900">{item.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
            <span className="text-gray-400">Battery Visualization</span>
          </div>
        </div>
      </div>
    </section>
  )
}