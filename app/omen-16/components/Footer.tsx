export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* Subtle OMEN ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,110,0.12),_transparent_60%)] pointer-events-none" />

      <div className="relative container mx-auto px-6 py-20">

        {/* ================= TOP GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">

          {/* Products */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-6">
              Products
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              {['Laptops', 'Desktops', 'Monitors', 'Components'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-6">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              {['Downloads', 'Warranty', 'Service Centers', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-6">
              About OMEN
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              {['Company Info', 'Careers', 'News', 'Investors'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-6">
              Stay Connected
            </h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Subscribe for the latest OMEN launches, performance updates, and gaming news.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-zinc-900 text-white text-sm border border-zinc-800 focus:outline-none focus:border-[#ff006e] transition"
              />
              <button className="px-6 py-3 text-xs font-black uppercase tracking-widest bg-[#ff006e] hover:bg-[#ff3385] transition">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-10" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-500">

          <div className="text-center md:text-left leading-relaxed">
            <p>© OMEN by HP. All rights reserved.</p>
            <p className="mt-1">
              Specifications and availability may vary by region.
            </p>
          </div>

          <div className="flex gap-8 uppercase tracking-widest">
            {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map(item => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
