import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
// Shared components must be in app/components/ for this path to work
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ASUS Vivobook S16 | Premium Ultra-Slim Laptop',
  description: 'Experience the perfect blend of style and performance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}