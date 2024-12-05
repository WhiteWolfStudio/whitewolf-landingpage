'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])
  
  const isActive = (path: string) => {
    // Handle both with and without trailing slash
    return pathname === path || pathname === `${path}/` ? 'text-white' : 'text-gray-300'
  }

  return (
    <nav className="bg-gray-900 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg md:text-xl font-bold text-white hover:text-gray-200 transition-colors">
          White Wolf Studio
        </Link>
        
        {/* Hamburger menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link 
              href="/" 
              className={`${isActive('/')} hover:text-white transition-colors`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`${isActive('/about')} hover:text-white transition-colors`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`${isActive('/contact')} hover:text-white transition-colors`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              href="/software" 
              className={`${isActive('/software')} hover:text-white transition-colors`}
            >
              Our Software
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 md:hidden">
            <ul className="flex flex-col px-4 py-2">
              <li className="py-2">
                <Link 
                  href="/" 
                  className={`${isActive('/')} hover:text-white transition-colors block`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  href="/about" 
                  className={`${isActive('/about')} hover:text-white transition-colors block`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  href="/contact" 
                  className={`${isActive('/contact')} hover:text-white transition-colors block`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  href="/software" 
                  className={`${isActive('/software')} hover:text-white transition-colors block`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Software
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

