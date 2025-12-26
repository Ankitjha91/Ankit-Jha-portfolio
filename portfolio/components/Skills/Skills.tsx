'use client'

import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'JavaScript', 'Python']
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'TailwindCSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'Core Subjects',
    skills: ['DSA', 'DBMS', 'Operating Systems', 'OOPs']
  },
  {
    title: 'Dev Tools',
    skills: ['VS Code', 'Git', 'GitHub', 'Postman']
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gray-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold">
              My <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid grid-cols-1 gap-6">
            {skillCategories.map((category, index) => {
              const delayClass = index === 0 ? 'delay-0' : index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : 'delay-400'
              return (
                <div
                  key={category.title}
                  className={`relative group transition-all duration-700 ${delayClass} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Gradient Border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  
                  {/* Glowing effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-75 transition duration-500"></div>
                
                  {/* Box Container */}
                  <div className="relative bg-gray-900 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50">
                    
                    {/* Category Title */}
                    <div className="mb-6 pb-4 border-b border-gray-800 group-hover:border-purple-500/30 transition-colors duration-300">
                      <h3 className="text-xl md:text-2xl font-bold text-center md:text-left">
                        <span className="bg-gradient-to-r from-purple-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
                          {category.title}
                        </span>
                      </h3>
                    </div>

                    {/* Skills Grid - Row wise */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gradient-to-r hover:from-purple-600/10 hover:via-red-500/10 hover:to-blue-400/10 transition-all duration-300 group/skill"
                        >
                          {/* Bullet Point */}
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 group-hover/skill:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                          
                          {/* Skill Name */}
                          <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300 font-medium text-sm">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-purple-600 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom decoration */}
          <div className="flex justify-center items-center gap-2 pt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-0 {
          transition-delay: 0ms;
        }
        .delay-100 {
          transition-delay: 100ms;
        }
        .delay-200 {
          transition-delay: 200ms;
        }
        .delay-300 {
          transition-delay: 300ms;
        }
        .delay-400 {
          transition-delay: 400ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  )
}