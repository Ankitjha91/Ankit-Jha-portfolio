'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

// Your actual projects data
const projects = [
  {
    id: 1,
    title: 'Payroll Management System',
    description: 'Built full-stack payroll system with JWT authentication, role-based access, and automated salary calculations. Implemented expense tracking, PDF generation, and real-time notifications using FastAPI and React.',
    technologies: ['FastAPI', 'React.js', 'Python', 'SQLite', 'JWT'],
    github: 'https://github.com/Ankitjha91/Payroll-Management-System',
    live: null,
    image: '/images/Payroll Management System.png'
  },
  {
    id: 2,
    title: 'Real-Time Chat Application',
    description: 'Developed real-time messaging platform with WebSocket integration using MERN stack and user authentication. Designed responsive UI with Tailwind CSS and tested RESTful APIs using Postman.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/Ankitjha91/chat-application',
    live: null,
    image: '/images/Chat.png'
  },
  {
    id: 3,
    title: 'Pandit Booking Platform',
    description: 'Created responsive booking interface with dynamic profiles, service listings, and payment gateway integration. Implemented reusable React components with modern UI/UX design patterns for enhanced user experience.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/Ankitjha91/puja-pandit-booking-site',
    live: null,
    image: '/images/Pandit Booking Platform.png'
  }
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
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

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const nextProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToProject = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-white">
              Featured{' '}
              <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my latest work and technical innovations
            </p>
          </div>

          {/* Projects Slider */}
          <div className="relative">
            {/* Main Project Card */}
            <div className="relative max-w-5xl mx-auto">
              <div 
                className="bg-white bg-opacity-5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl gradient-border"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image/Visual */}
                  <div className="relative h-80 md:h-auto overflow-hidden group">
                    <Image 
                      src={projects[currentIndex].image} 
                      alt={projects[currentIndex].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const next = target.nextSibling as HTMLElement;
                        if (next) next.style.display = 'block';
                      }}
                    />
                    {/* Gradient Fallback */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-red-500 to-blue-400 hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4 p-8">
                          <div className="text-white text-6xl font-black opacity-20">
                            {String(currentIndex + 1).padStart(2, '0')}
                          </div>
                          <h3 className="text-white text-3xl font-bold drop-shadow-lg">
                            {projects[currentIndex].title}
                          </h3>
                        </div>
                      </div>
                      {/* Animated Shapes */}
                      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-white opacity-20 rounded-lg animate-spin-slow"></div>
                      <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-white opacity-20 rounded-full animate-pulse"></div>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                    {/* Project Number Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-purple-600 via-red-500 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-white text-2xl font-black">
                        {String(currentIndex + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-1 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 rounded-full"></div>
                        <span className="text-gray-400 font-semibold">Project {currentIndex + 1}/{projects.length}</span>
                      </div>

                      <h3 className="text-3xl font-bold text-white">
                        {projects[currentIndex].title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed text-lg">
                        {projects[currentIndex].description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {projects[currentIndex].technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-purple-600/20 via-red-500/20 to-blue-400/20 text-white text-sm rounded-full border border-white border-opacity-10 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      {projects[currentIndex].github && (
                        <a
                          href={projects[currentIndex].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-white border-opacity-10"
                        >
                          <Github size={20} />
                          <span className="font-semibold">View Code</span>
                        </a>
                      )}
                      {projects[currentIndex].live && (
                        <a
                          href={projects[currentIndex].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 hover:shadow-lg hover:shadow-purple-500/50 text-white rounded-xl transition-all duration-300 hover:scale-105 font-semibold"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {!projects[currentIndex].live && projects[currentIndex].github && (
                        <div className="flex-1"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevProject}
                disabled={isAnimating}
                className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white border-opacity-20 disabled:opacity-50"
                aria-label="Previous project"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextProject}
                disabled={isAnimating}
                className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white border-opacity-20 disabled:opacity-50"
                aria-label="Next project"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  disabled={isAnimating}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-12 h-3 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400'
                      : 'w-3 h-3 bg-white bg-opacity-30 hover:bg-opacity-50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Quick View Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto pt-8">
            {projects.map((project, index: number) => (
              <button
                key={project.id}
                onClick={() => goToProject(index)}
                disabled={isAnimating}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-br from-purple-600 via-red-500 to-blue-400 shadow-lg scale-105'
                    : 'bg-white bg-opacity-5 hover:bg-opacity-10 border border-white border-opacity-10'
                }`}
              >
                <h4 className={`text-sm font-bold ${
                  index === currentIndex ? 'text-white' : 'text-gray-400'
                }`}>
                  {project.title}
                </h4>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-border {
          border: 4px solid transparent;
          border-image: linear-gradient(to right, #9333ea, #ef4444, #3b82f6) 1;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  )
}