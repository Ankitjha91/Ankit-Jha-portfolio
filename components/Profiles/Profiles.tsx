'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Code2, ExternalLink, Award } from 'lucide-react'

export default function Profiles() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

  const profiles = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ankit-j-1761a9216/',
      icon: <Linkedin size={40} />,
      description: 'Connect with me professionally and explore my career journey',
      stats: '500+ Connections',
      gradient: 'from-blue-600 via-blue-500 to-blue-400',
      hoverGlow: 'hover:shadow-blue-500/50',
      delay: 0,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Ankitjha91',
      icon: <Github size={40} />,
      description: 'Explore my code repositories, projects, and open-source contributions',
      stats: '10+ Repositories',
      gradient: 'from-purple-600 via-purple-500 to-purple-400',
      hoverGlow: 'hover:shadow-purple-500/50',
      delay: 150,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Ankit_jha_2003/',
      icon: <Code2 size={40} />,
      description: 'Check out my problem-solving skills and coding challenges',
      stats: '50+ Problems',
      gradient: 'from-orange-600 via-yellow-500 to-yellow-400',
      hoverGlow: 'hover:shadow-yellow-500/50',
      delay: 300,
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/profile/ankitjhaix7g',
      icon: <Award size={40} />,
      description: 'View my coding practice and algorithm solutions',
      stats: 'Active Contributor',
      gradient: 'from-green-600 via-emerald-500 to-green-400',
      hoverGlow: 'hover:shadow-green-500/50',
      delay: 450,
    },
  ]

  return (
    <section
      id="profiles"
      ref={sectionRef}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Online <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">Profiles</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Connect with me across various platforms and explore my professional presence
            </p>
          </div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${profile.hoverGlow} group block relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 space-y-4">
                  {/* Icon with gradient background */}
                  <div className="flex justify-center">
                    <div className={`p-4 bg-gradient-to-br ${profile.gradient} rounded-2xl text-white shadow-lg ${hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'} transition-transform duration-500`}>
                      {profile.icon}
                    </div>
                  </div>

                  {/* Platform name */}
                  <h3 className="text-xl font-bold text-white text-center group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-red-500 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {profile.name}
                  </h3>

                  {/* Stats badge */}
                  <div className="flex justify-center">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${profile.gradient} rounded-full text-white text-xs font-semibold shadow-md`}>
                      {profile.stats}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm text-center leading-relaxed min-h-[60px]">
                    {profile.description}
                  </p>

                  {/* Visit link */}
                  <div className="flex items-center justify-center gap-2 text-purple-400 group-hover:text-purple-300 group-hover:gap-3 transition-all pt-2">
                    <span className="text-sm font-medium">Visit Profile</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${profile.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-gray-800/50 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-700">
              <p className="text-gray-400">
                Want to collaborate? Let&apos;s connect on any of these platforms! 
                <span className="ml-2 inline-block bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent font-semibold">
                  I&apos;m always open to new opportunities
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}