'use client'

import { useEffect, useRef, useState } from 'react'

export default function Certificates() {
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
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 6,
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

  // Icon components for each certificate
  const CertificateIcon = ({ type }) => {
    const icons = {
      microsoft: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v7.64l-8 4-8-4V8.18l8-4z"/>
          <path d="M12 8.5L6 11.5v5l6 3 6-3v-5l-6-3zm0 2.36l3.5 1.75v3.5L12 18.14l-3.5-1.75v-3.5L12 10.86z"/>
        </svg>
      ),
      java: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.851 18.56s.369.258.749.342c.738.16 1.095.13 1.477.006.384-.13.69-.3.69-.3s-.384.258-.814.385c-.597.18-1.24.214-1.863.12-.384-.06-.64-.15-.64-.15l.001-.403zm-.746-1.05s.45.3.96.39c.75.13 1.14.1 1.62-.01.48-.11.87-.27.87-.27s-.39.24-.81.37c-.63.2-1.4.23-2.13.1-.45-.08-.78-.19-.78-.19l.43-.39zm5.212-1.23c-.18 0-.29.02-.29.02s.15-.19.4-.28c.39-.14.9-.17 1.38 0 .47.16.78.37.78.37s-.24-.19-.57-.3c-.33-.11-.84-.15-1.7-.15v-.34l-.01.68h.01zm-4.64 2.68c-.33-.07-.56-.17-.56-.17s.24-.15.57-.23c.33-.08.75-.11 1.17-.05.42.06.75.18 1.01.3.26.12.39.21.39.21s-.18-.12-.42-.22c-.24-.1-.6-.18-1.08-.22-.48-.04-1.09.02-1.09.02v.36zm8.78-1.05c.3.15.5.3.65.45.15.15.2.3.2.3s-.15-.12-.35-.27c-.2-.15-.5-.3-.85-.42-.35-.12-.75-.2-1.2-.24-.45-.04-.9-.02-1.35.05-.45.07-.85.2-1.2.35-.35.15-.6.3-.75.45-.15.15-.2.27-.2.27s.1-.15.25-.3c.15-.15.4-.3.7-.42.3-.12.65-.21 1.05-.27.4-.06.85-.07 1.35 0 .5.07.95.2 1.35.4zm-2.55 1.66c-.24-.05-.42-.1-.42-.1s.12-.12.3-.18c.18-.06.42-.09.66-.08.24.01.48.06.69.13.21.07.36.14.48.2.12.06.18.11.18.11s-.06-.08-.18-.14c-.12-.06-.3-.12-.54-.17-.24-.05-.54-.08-.87-.08-.33 0-.69.03-.96.11zm-1.35.75c-.15 0-.24.02-.24.02s.06-.1.15-.14c.09-.04.24-.07.39-.06.15.01.3.05.42.11.12.06.21.12.27.17.06.05.09.08.09.08s-.03-.05-.09-.1c-.06-.05-.15-.1-.27-.15-.12-.05-.27-.09-.42-.11-.15-.02-.3-.02-.39.02-.09.04-.15.14-.15.14l.24-.02z"/>
        </svg>
      ),
      cpp: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.509.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.509.294 1.34.294 1.848 0l8.816-5.09c.509-.293.923-1.013.923-1.6V7.6c.023-.31-.078-.588-.203-.6zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 0 1 6.156 3.553l-2.73 1.577a4.236 4.236 0 0 0-3.426-1.789c-2.35 0-4.257 1.913-4.257 4.262 0 2.35 1.907 4.263 4.257 4.263a4.236 4.236 0 0 0 3.426-1.789l2.73 1.577A7.133 7.133 0 0 1 12 19.11zm7.109-7.11h-1.784V9.89h1.784zm2.677 0h-1.784V9.89h1.784z"/>
        </svg>
      ),
      hackerrank: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c1.285 0 9.75 2.25 9.75 11.25 0 2.25-1.125 4.125-3 5.25l3 5.25H15l-3-5.25c-1.125.375-3 .375-4.125 0L5.25 22.5H0l3-5.25c-1.875-1.125-3-3-3-5.25C0 2.25 10.715 0 12 0zm-.375 4.125c-2.625 0-4.875 2.25-4.875 5.25 0 3 2.25 5.25 4.875 5.25 2.625 0 4.875-2.25 4.875-5.25 0-3-2.25-5.25-4.875-5.25zm0 1.875c1.875 0 3 1.125 3 3.375 0 2.25-1.125 3.375-3 3.375-1.875 0-3-1.125-3-3.375 0-2.25 1.125-3.375 3-3.375z"/>
        </svg>
      ),
      spring: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
    }
    return icons[type] || null
  }

  const certificates = [
    {
      title: 'Microsoft SC-900',
      issuer: 'Microsoft',
      date: 'May - July 2023',
      description: 'Scored 882/1000 in the Microsoft Security, Compliance, and Identity Fundamentals test.',
      iconType: 'microsoft',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Java Tutorial',
      issuer: 'IIT Bombay',
      date: 'June 2023',
      description: 'Achieved 82.50% in Java quizzes held by IIT Bombay.',
      iconType: 'java',
      color: 'from-orange-600 to-red-600',
    },
    {
      title: 'CPP Tutorial',
      issuer: 'IIT Bombay',
      date: 'June 2023',
      description: 'Achieved 100% in CPP quizzes held by IIT Bombay.',
      iconType: 'cpp',
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Java & Problem Solving Certification',
      issuer: 'HackerRank',
      date: 'July 2023',
      description: 'Qualified the Java programming coding round at HackerRank.',
      iconType: 'hackerrank',
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Spring Boot',
      issuer: 'Udemy',
      date: '2025',
      description: 'Completed comprehensive Spring Boot course covering REST APIs, Spring Data JPA, and microservices architecture.',
      iconType: 'spring',
      color: 'from-green-500 to-teal-600',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="relative py-24 bg-slate-800 text-gray-300 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.2), transparent 50%)`
        }}
      />
      
      {/* Grid pattern overlay with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] animate-gradient opacity-50" />
      
      {/* Floating gooey orbs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animate-gooey"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animate-gooey animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animate-gooey animation-delay-4000"></div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-20 animate-particle"
          style={{
            left: `${particle.x}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        />
      ))}
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-purple-400 font-mono text-sm md:text-base mb-4 block">
            05. Certifications
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements I've earned
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg text-white`}>
                    <CertificateIcon type={cert.iconType} />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-purple-400 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {cert.date}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  {cert.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
