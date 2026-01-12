'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Projects() {
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
    const newParticles = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 12,
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

  const projects = [
    {
      title: 'Generative AI Post-Recommendation System',
      description:
        'Developed a Post Recommender System utilizing GPT-3.5 Turbo and Langchain. Implemented OpenAI\'s GPT-3.5 Turbo for language processing and utilized Langchain for effective document analysis with a Reddit dataset.',
      technologies: ['Python', 'GPT-3.5 Turbo', 'Langchain', 'Streamlit', 'OpenAI API'],
      github: 'https://github.com/shivam-jaiswal-2002/Generative-AI-based-post-recommendation-system',
      demo: 'https://github.com/shivam-jaiswal-2002/Generative-AI-based-post-recommendation-system',
      featured: true,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80',
      gradient: 'from-blue-600 via-purple-600 to-pink-600',
    },
    {
      title: 'Emotion Detection Music System',
      description:
        'Developed a real-time facial expression recognition system to create personalized playlists based on mood. Integrated Python libraries including MediaPipe, Numpy, Tensorflow, and Streamlit.',
      technologies: ['Python', 'MediaPipe', 'Tensorflow', 'CV2', 'Numpy', 'Streamlit'],
      github: 'https://github.com/shivam-jaiswal-2002/emotion-detection-music-system',
      demo: 'https://github.com/shivam-jaiswal-2002/emotion-detection-music-system',
      featured: true,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80',
      gradient: 'from-pink-600 via-purple-600 to-indigo-600',
    },
    {
      title: 'Wine Quality Prediction',
      description:
        'Applied machine learning algorithms to forecast wine quality, leveraging physicochemical factors. Employed algorithms such as Decision Tree, Bagging, XgBoost, and AdaBoost for accurate predictions.',
      technologies: ['Python', 'Machine Learning', 'XgBoost', 'Decision Tree', 'AdaBoost'],
      github: 'https://github.com/shivam-jaiswal-2002/Wine-quality-prediction',
      demo: 'https://github.com/shivam-jaiswal-2002/Wine-quality-prediction',
      featured: false,
      image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&h=600&fit=crop&q=80',
      gradient: 'from-red-600 via-pink-600 to-purple-600',
    },
    {
      title: 'Smart Parking System',
      description:
        'Streamlined automated monitoring of accessible parking slots by employing ultrasonic sensors. Enabled user reservations via an intuitive web interface using Firebase, Arduino UNO, and ultrasonic sensors.',
      technologies: ['Arduino UNO', 'Firebase', 'Ultrasonic Sensors', 'Web Interface', 'IoT'],
      github: '#',
      demo: '#',
      featured: false,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80',
      gradient: 'from-green-600 via-blue-600 to-cyan-600',
    },
    {
      title: 'Trend Horizon',
      description:
        'A modern web development project showcasing trending topics and insights. Built with modern web technologies and responsive design.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript'],
      github: '#',
      demo: 'https://trend-horizon.vercel.app/',
      featured: false,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
      gradient: 'from-orange-600 via-pink-600 to-purple-600',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 bg-slate-900 text-gray-300 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.2), transparent 50%)`
        }}
      />
      
      {/* Grid pattern overlay with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] animate-gradient opacity-50" />
      
      {/* Floating gooey orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animate-gooey"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animate-gooey animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animate-gooey animation-delay-4000"></div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full opacity-20 animate-particle"
          style={{
            left: `${particle.x}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${14 + Math.random() * 10}s`,
          }}
        />
      ))}
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-purple-400 font-mono text-sm md:text-base mb-4 block">
            03. Featured Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Some Things I've Built
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of projects I've worked on recently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              
              {/* Project image */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient || 'from-purple-600 via-pink-600 to-blue-600'} overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                {/* Gradient background (fallback) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient || 'from-purple-600 via-pink-600 to-blue-600'} z-0`}></div>
                
                {/* Background image */}
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative z-10"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                )}
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent group-hover:from-slate-900/70 transition-opacity duration-300"></div>
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 animate-gradient"></div>
                
                {/* Project title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h4 className="text-white text-lg font-bold transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    {project.title}
                  </h4>
                </div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>

              <div className="relative p-6">
                {project.featured && (
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full mb-4">
                    Featured Project
                  </span>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-purple-500/20 hover:border-purple-500/50 hover:text-purple-400 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors group/link"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-6 h-6 group-hover/link:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors group/link"
                    aria-label="Live Demo"
                  >
                    <svg
                      className="w-6 h-6 group-hover/link:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
