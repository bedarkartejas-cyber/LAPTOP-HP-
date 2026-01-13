export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Laptops</a></li>
              <li><a href="#" className="hover:text-white">Desktops</a></li>
              <li><a href="#" className="hover:text-white">Monitors</a></li>
              <li><a href="#" className="hover:text-white">Components</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Downloads</a></li>
              <li><a href="#" className="hover:text-white">Warranty</a></li>
              <li><a href="#" className="hover:text-white">Service Centers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">About ASUS</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Company Info</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Subscribe for updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
              />
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p>© ASUSTeK Computer Inc. All rights reserved.</p>
              <p className="mt-2">Prices and specifications may vary by region.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}