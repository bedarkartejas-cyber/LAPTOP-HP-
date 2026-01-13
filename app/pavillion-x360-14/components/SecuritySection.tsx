export default function SecuritySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">More Security, Less Worry</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Windows Hello facial recognition, IR camera, and physical webcam shutter for complete privacy protection.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Windows Hello', desc: 'Secure facial recognition login' },
            { title: 'IR Camera', desc: 'Instant unlock in any lighting' },
            { title: 'Privacy Shutter', desc: 'Physical camera cover' },
            { title: 'Auto Lock', desc: 'Locks when you walk away' },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}