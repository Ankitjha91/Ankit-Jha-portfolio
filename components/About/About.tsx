'use client'

import { useEffect, useRef, useState } from 'react'
import {Code2, Sparkles } from 'lucide-react'

const personalInfo = {
  name: 'Ankit Jha',
  title: 'Full Stack Developer',
  location: 'India',
  bio: 'I specialize in building exceptional digital experiences with the MERN stack.'
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [videoError, setVideoError] = useState(false)
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
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gray-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Left Column - Video */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-glow"></div>

              {/* Video container */}
              <div className="relative  bg-gray-800 rounded-2xl overflow-hidden shadow-2xl w-full aspect-[4/3]">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onError={() => setVideoError(true)}
                  onLoadedData={() => setVideoError(false)}
                  onCanPlay={() => setVideoError(false)}
                >
                  <source src="/video/ankit-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Fallback content if video doesn't load */}
                {videoError && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-red-500 to-blue-400 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Code2 size={80} className="mx-auto text-white animate-bounce" />
                      <p className="text-white text-2xl font-bold">Building the Future</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-600 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50 animate-bounce">
                <Sparkles size={32} className="text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-400/50 animate-bounce delay-300">
                <Code2 size={28} className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold">
                About <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 rounded-full shadow-lg shadow-purple-500/50"></div>
            </div>

            {/* Bio */}
            <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
              <p className="hover:text-gray-100 transition-colors duration-300">
                Hello! I&apos;m <span className="text-purple-400 font-semibold">{personalInfo.name}</span>, a passionate <span className="text-blue-400 font-semibold">{personalInfo.title}</span> based in <span className="text-red-400 font-semibold">{personalInfo.location}</span>.
                I love creating innovative web solutions that make a difference.
              </p>
              <p className="hover:text-gray-100 transition-colors duration-300">
                {personalInfo.bio} With expertise in modern web technologies,
                I focus on building scalable, user-friendly applications that solve real-world problems.
              </p>
              <p className="hover:text-gray-100 transition-colors duration-300">
                Beyond coding, I enjoy experimenting with new technologies, contributing to open source, and solving challenging problems on LeetCode.
              </p>
            </div>
            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            opacity: 0.75;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  )
}