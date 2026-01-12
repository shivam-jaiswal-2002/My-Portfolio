'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setIsVisible(true)
    
    // Create particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15,
    }))
    setParticles(newParticles)
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 md:pt-20"
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 119, 198, 0.3), transparent 50%)`
        }}
      />
      
      {/* Grid pattern overlay with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-gradient" />
      
      {/* Floating gooey orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animate-gooey"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animate-gooey animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animate-gooey animation-delay-4000"></div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-particle"
          style={{
            left: `${particle.x}%`,
            bottom: '-10px',
            animationDelay: `${particle.delay}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-6 inline-block animate-slide-up animation-delay-200">
            <span className="text-sm md:text-base text-purple-400 font-mono mb-4 block animate-text-reveal">
              Hi, my name is
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight animate-slide-up animation-delay-400 animate-gradient">
            Shivam Jaiswal
          </h1>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-300 animate-slide-up animation-delay-600">
            I build things for the web.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-800">
            I&apos;m a <span className="text-purple-400 font-semibold relative inline-block group">
              <span className="relative z-10">full-stack developer</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span> and computer science enthusiast specializing in building 
            exceptional digital experiences. Currently working as a Java Escalation Engineer 
            at Tufin Software, focused on creating scalable backend services and network security solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animation-delay-1000">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:text-white gooey-button ripple"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 gooey-button ripple animate-gradient"
            >
              <span className="relative z-10">Get In Touch</span>
            </a>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-purple-400 font-mono animate-pulse">Scroll</span>
            <svg
              className="w-6 h-6 text-purple-400 animate-float"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
