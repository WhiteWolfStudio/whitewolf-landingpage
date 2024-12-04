import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '../components/Navbar'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'White Wolf Studios',
  description: 'Professional software development and design services',
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: 'White Wolf Studios',
    description: 'Professional software development and design services',
    images: [{
      url: '/images/logo.png',
      width: 800,
      height: 800,
      alt: 'White Wolf Studios Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Wolf Studios',
    description: 'Professional software development and design services',
    images: ['/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

