'use client'

import { useEffect, useRef, useState } from 'react'

export default function Skills() {
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
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        'React',
        'Next.js',
        'HTML/CSS',
        'Tailwind CSS',
        'JavaScript',
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        'Java',
        'C++',
        'Node.js',
        'Express',
        'Spring Boot',
        'MongoDB',
        'PostgreSQL',
        'ElasticSearch',
        'Redis',
        'SQL',
      ],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        'Git & GitHub',
        'Python',
        'Postman',
        'CPP/C',
        'Arduino/ESP',
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 bg-slate-800 text-gray-300 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.2), transparent 50%)`
        }}
      />
      
      {/* Grid pattern overlay with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] animate-gradient opacity-50" />
      
      {/* Floating gooey orbs */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animate-gooey"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animate-gooey animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animate-gooey animation-delay-4000"></div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-20 animate-particle"
          style={{
            left: `${particle.x}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${10 + Math.random() * 8}s`,
          }}
        />
      ))}
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-purple-400 font-mono text-sm md:text-base mb-4 block">
            02. Skills & Technologies
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-5xl">{category.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="group/item px-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-gray-300 font-medium hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                      style={{ 
                        animationDelay: `${skillIndex * 50}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.3s ease-out ${skillIndex * 50}ms`
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="text-purple-400">▹</span>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
