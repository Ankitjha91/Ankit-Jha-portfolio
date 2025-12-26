'use client'
import { useEffect, useRef, useState } from 'react'
import { Calendar, Building, Code } from 'lucide-react'

const experience = [
  {
    company: "Doshi Technologies",
    role: "Web Developer Intern",
    duration: "January 2025 – April 2025",
    points: [
      "Developed full-stack applications using React.js, Node.js, and MongoDB for enterprise clients",
      "Collaborated with cross-functional teams to deliver high-performance web solutions",
      "Enhanced user experience through modern design principles and optimized performance"
    ],
    skills: ["React.js", "Node.js", "MongoDB", "Full-Stack"]
  },
  {
    company: "Vertx",
    role: "Frontend Developer Intern",
    duration: "April 2025 – June 2025",
    points: [
      "Built responsive user interfaces using React.js, JavaScript, and Tailwind CSS",
      "Transformed Figma designs into clean, maintainable code following modern design standards",
      "Implemented real-time UI/UX improvements to enhance user engagement and interaction"
    ],
    skills: ["React.js", "JavaScript", "Tailwind CSS", "Figma"]
  }
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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

    const element = sectionRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Work{' '}
            <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-red-500 to-blue-400 hidden md:block"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 border-4 border-slate-950 hidden md:block z-10 animate-pulse"></div>

                {/* Experience Card */}
                <div className="md:ml-20 group">
                  <div className={`relative p-8 rounded-2xl backdrop-blur-sm border-2 transition-all duration-500 ${
                    activeIndex === index 
                      ? 'bg-gradient-to-br from-purple-600/10 via-red-500/10 to-blue-400/10 border-purple-500 shadow-2xl shadow-purple-500/20 scale-105' 
                      : 'bg-slate-900/50 border-slate-700 hover:border-purple-500/50'
                  }`}>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-red-500/0 to-blue-400/0 group-hover:from-purple-600/5 group-hover:via-red-500/5 group-hover:to-blue-400/5 transition-all duration-500"></div>

                    <div className="relative z-10">
                      {/* Company Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-400/20">
                              <Building className="w-5 h-5 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-red-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {exp.company}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 ml-14">
                            <Code className="w-4 h-4 text-red-400" />
                            <p className="text-lg font-semibold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                              {exp.role}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 sm:ml-auto">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-slate-300 font-medium whitespace-nowrap">
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Bullet Points */}
                      <ul className="space-y-3 mb-6">
                        {exp.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 flex-shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600/20 via-red-500/20 to-blue-400/20 text-purple-300 border border-purple-500/30 hover:border-purple-400 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .delay-200 {
          animation-delay: 200ms;
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