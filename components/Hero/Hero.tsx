'use client'

import { useState, useEffect, useRef, ComponentProps } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const UnoptimizedImage = (props: ComponentProps<typeof Image>) => {
  const { alt, ...restProps } = props
  return <Image {...restProps} alt={alt} unoptimized />
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particleSmallRef = useRef<HTMLDivElement>(null)
  const particleMediumRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (particleSmallRef.current) {
      particleSmallRef.current.style.left = `${mousePosition.x / 20}px`
      particleSmallRef.current.style.top = `${mousePosition.y / 20}px`
    }
    if (particleMediumRef.current) {
      particleMediumRef.current.style.left = `${mousePosition.x / 40}px`
      particleMediumRef.current.style.top = `${mousePosition.y / 40}px`
    }
  }, [mousePosition])

  const titles = ['Full Stack Developer', 'Full Stack Engineer', 'Tech Enthusiast']
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={particleSmallRef}
          className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000"
        />
        <div
          ref={particleMediumRef}
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="animate-fade-in">
              <span className="text-purple-400 text-lg md:text-xl font-semibold">
                👋 Hi, I am
              </span>
            </div>

            {/* Name with gradient */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-in">
              <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">
                Ankit Jha
              </span>
            </h1>

            {/* Rotating titles */}
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <h2 className="text-xl md:text-3xl text-gray-300 font-medium animate-fade-in">
                {titles[currentTitle]}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed animate-fade-in">
              I create innovative, scalable web applications using cutting-edge technologies.
              Passionate Full Stack Developer focused on clean code, performance, and exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-600 text-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Get In Touch
              </a>
            </div> 
          </div>

          {/* Right Side - Image Frame */}
          <div className="relative flex items-center justify-center animate-fade-in">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-500 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>

              {/* Image container with frame */}
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 p-1 ">

                </div>

                {/* Image */}
                <div className="absolute inset-2 rounded-xl overflow-hidden border-4 border-purple-300 transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] hover:scale-105">
                  <UnoptimizedImage
                    src="/images/ankit-photograph.png"
                    alt="Ankit Jha"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="eager"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-xl blur-xl animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/20 rounded-xl blur-xl animate-bounce delay-150"></div>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-purple-400 hover:text-purple-300 transition-colors" title="Scroll to About section">
          <ChevronDown size={32} />
        </a>
      </div>

      <style jsx>{`
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
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </section>
  )
}