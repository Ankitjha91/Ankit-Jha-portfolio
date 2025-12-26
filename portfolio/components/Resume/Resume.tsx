'use client'

import { useEffect, useRef, useState } from 'react'
import { Download, FileText, Eye, Award, Briefcase, Code } from 'lucide-react'

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const highlights = [
    { icon: Code, text: 'Full Stack Development' },
    { icon: Briefcase, text: 'Professional Experience' },
    { icon: Award, text: '10+ Certifications' }
  ]

  return (
    <section 
      id="resume" 
      ref={sectionRef}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my professional journey, skills, and achievements
            </p>
          </div>

          {/* Main Resume Card */}
          <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-gray-700 hover:border-purple-500 transition-all duration-500 relative overflow-hidden group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/10 via-red-500/10 to-blue-400/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Icon with animation */}
                  <div className="flex-shrink-0">
                    <div className={`w-40 h-40 bg-gradient-to-br from-purple-600 via-red-500 to-blue-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/50 transition-transform duration-500 ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
                      <FileText size={80} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Download My Resume
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        Get a comprehensive overview of my skills, experience, and educational background. 
                        My resume includes detailed information about my projects, technical expertise, 
                        and professional journey in software development.
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {highlights.map((highlight, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 bg-gray-900/50 rounded-xl p-3 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
                        >
                          <div className="p-2 bg-gradient-to-br from-purple-600 via-red-500 to-blue-400 rounded-lg">
                            <highlight.icon size={20} className="text-white" />
                          </div>
                          <span className="text-sm text-gray-300 font-medium">{highlight.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <a 
                        href="/resume/Ankit_Jha_Resume.pdf" 
                        download
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 group"
                      >
                        <Download size={22} className="group-hover:animate-bounce" />
                        Download PDF
                      </a>
                      <a 
                        href="/resume/Ankit_Jha_Resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 border-2 border-purple-500 text-white font-semibold rounded-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 group"
                      >
                        <Eye size={22} className="group-hover:scale-110 transition-transform" />
                        View Online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}