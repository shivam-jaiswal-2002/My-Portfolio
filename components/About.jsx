'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [particles, setParticles] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Create particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
    }))
    setParticles(newParticles)

    // Mouse tracking
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const technologies = [
    'Java',
    'JavaScript',
    'React & Next.js',
    'Node.js & Express',
    'Spring Boot',
    'MongoDB',
    'ElasticSearch',
    'Redis',
    'Python',
    'SQL & PostgreSQL',
    'Tailwind CSS',
    'Git & GitHub',
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-slate-900 text-gray-300 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 119, 198, 0.2), transparent 50%)`
        }}
      />
      
      {/* Grid pattern overlay with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] animate-gradient opacity-50" />
      
      {/* Floating gooey orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animate-gooey"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animate-gooey animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animate-gooey animation-delay-4000"></div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-20 animate-particle"
          style={{
            left: `${particle.x}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
          }}
        />
      ))}
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-purple-400 font-mono text-sm md:text-base mb-4 block">
            01. About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-4">
              <p className="text-lg text-gray-400 leading-relaxed">
                Hey there! I'm <span className="text-purple-400 font-semibold">Shivam Jaiswal</span>, a passionate computer science enthusiast 
                and an aspiring engineer on a journey through the exciting world of bits, bytes, and algorithms. 
                I completed my degree in Computer Science and Engineering at VIT Chennai, I'm all about 
                diving deep into the realms of technology, coding, and innovation.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm currently working as a <span className="text-purple-400 font-semibold">Java Escalation Engineer</span> at Tufin Software Technologies, 
                where I develop and maintain backend services for the Tufin Orchestration Suite. I specialize in 
                integrating network security devices and optimizing performance for enterprise networks.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Previously, I worked as a Backend Developer at Chatwise, where I engineered backend solutions 
                using Node.js, Express, and MongoDB, and optimized search functionalities with Elasticsearch. 
                I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Here are a few technologies I've been working with recently:
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    <span className="text-purple-400 mr-3">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
          }`}>
            <div className="relative aspect-square max-w-md mx-auto group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse-glow"></div>
              
              {/* Image container with improved background */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 shadow-2xl shadow-purple-500/20">
                  {/* Profile Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/profile_pic.jpg"
                      alt="Shivam Jaiswal"
                      fill
                      className="object-cover rounded-full"
                      style={{
                        filter: 'brightness(0.85) contrast(1.05) saturate(1.1)',
                      }}
                      priority
                    />
                    {/* Overlay gradient for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 rounded-full"></div>
                    {/* Subtle vignette effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/30 rounded-full"></div>
                  </div>
                  
                  {/* Decorative particles around image */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse shadow-lg shadow-purple-400/50"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-pulse shadow-lg shadow-pink-400/50 animation-delay-1000"></div>
                  <div className="absolute top-1/2 -right-4 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-pulse animation-delay-2000"></div>
                  <div className="absolute top-1/4 -left-4 w-2 h-2 bg-purple-300 rounded-full opacity-50 animate-pulse animation-delay-500"></div>
                </div>
              </div>
              
              {/* Animated ring decoration */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 -z-10 group-hover:border-purple-500/40 transition-colors duration-300 group-hover:animate-spin-slow" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 rounded-full border border-pink-500/20 -z-10 group-hover:border-pink-500/40 transition-colors duration-300 group-hover:animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
