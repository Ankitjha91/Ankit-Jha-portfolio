'use client'

import { useState } from 'react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-blur-lg shadow-xl border-b border-white border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="relative group">
              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 inline-block">
                Ankit
              </span>
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-red-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 inline-block ml-2">
                Jha
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-red-500 hover:to-blue-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 inline-flex items-center justify-center p-2 rounded-lg text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl border-t border-white border-opacity-20">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-red-500 hover:to-blue-400 block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}