'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home', number: '00' },
    { href: '#about', label: 'About', number: '01' },
    { href: '#skills', label: 'Skills', number: '02' },
    { href: '#projects', label: 'Projects', number: '03' },
    { href: '#certificates', label: 'Certificates', number: '04' },
    { href: '#contact', label: 'Contact', number: '05' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-purple-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="group/logo relative text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all transform hover:scale-110 inline-block"
            >
              <span className="relative z-10">{'<Portfolio />'}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0 group-hover/logo:opacity-100 blur-sm transition-opacity duration-300">
                {'<Portfolio />'}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`group/nav relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg transform hover:scale-110 ${
                      isActive
                        ? 'text-purple-400'
                        : 'text-gray-400 hover:text-purple-400'
                    }`}
                  >
                    <span className="text-purple-500/50 mr-1 group-hover/nav:text-purple-400 transition-colors">{link.number}.</span>
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-glow"></span>
                    )}
                    {/* Hover background effect */}
                    <span className="absolute inset-0 bg-purple-500/10 rounded-lg scale-0 group-hover/nav:scale-100 transition-transform duration-300 origin-center"></span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-purple-400 focus:outline-none transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border border-purple-500/20 rounded-lg mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 block px-3 py-2 text-base font-medium rounded transition-all"
                >
                  <span className="text-purple-500/50 mr-2">{link.number}.</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
