'use client'

import { useEffect, useRef, useState } from 'react'
import { Trophy, GitBranch, Code, ExternalLink, Award, X } from 'lucide-react'
import Image from 'next/image'

type Certificate = {
  id: number;
  name: string;
  platform: string;
  imageUrl: string;
};

// Sample data structure - replace with your actual data
const achievementsData = [
  {
    id: 1,
    icon: 'trophy',
    title: 'DSA Problem Solving',
    description: 'Solved 50+ DSA problems across competitive programming platforms, demonstrating strong problem-solving abilities.',
    stats: '50+ Problems',
    links: [
      { name: 'LeetCode', url: 'https://leetcode.com/u/Ankit_jha_2003/' },
      { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/ankitjhaix7g' }
    ]
  },
  {
    id: 2,
    icon: 'code',
    title: 'Professional Development',
    description: 'Earned multiple certifications in Web Development, CSS, C++, Python, MySQL, OOP, and MS Excel from Udemy and GUVI platforms.',
    stats: '9 Certifications'
  },
  {
    id: 3,
    icon: 'git-branch',
    title: 'AI & Python Excellence',
    description: 'Certified in Python Programming and Artificial Intelligence (AI) from GUVI, along with web development internship experience.',
    stats: '2 Certifications + Internship'
  }
]

// Certificates data for scrolling section
const certificates = [
  { id: 1, name: 'Web Development', platform: 'Udemy', imageUrl: '/images/Webdevelopment Certificate.jpg' },
  { id: 2, name: 'CSS Mastery', platform: 'Udemy', imageUrl: '/images/CSS Certificate.jpg' },
  { id: 3, name: 'C++ Programming', platform: 'Udemy', imageUrl: '/images/C++ Certificate.jpg' },
  { id: 4, name: 'Python Programming', platform: 'Udemy', imageUrl: '/images/Python Certificate.jpg' },
  { id: 5, name: 'MySQL Database', platform: 'Udemy', imageUrl: '/images/MySQl Certificate.jpg' },
  { id: 6, name: 'Object Oriented Programming', platform: 'Udemy', imageUrl: '/images/OOPS Certificate.jpg' },
  { id: 7, name: 'MS Excel', platform: 'Udemy', imageUrl: '/images/MS Excel Certificate.jpg' },
  { id: 8, name: 'Python Programming', platform: 'GUVI', imageUrl: '/images/HCL GUVI Python Certificate.png' },
  { id: 9, name: 'Artificial Intelligence', platform: 'GUVI', imageUrl: '/images/HCL GUVI AI Certificate.png' },
  { id: 10, name: 'Web Development Internship', platform: 'Company', imageUrl: '/images/Web development Intern certificate.jpeg' },
  { id: 11, name: 'Web Development Internship', platform: 'Company', imageUrl: '/images/Web development intern Certtificate.jpg' }
]

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy size={40} />
      case 'git-branch':
        return <GitBranch size={40} />
      case 'code':
        return <Code size={40} />
      default:
        return <Trophy size={40} />
    }
  }

  return (
    <>
      <section
        id="achievements"
        ref={sectionRef}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`space-y-12 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Achievements & <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">Milestones</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 mx-auto rounded-full"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Celebrating successes and continuous growth in the tech journey
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {achievementsData.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } stagger-transition delay-${index}`}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-purple-600 via-red-500 to-blue-400 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {getIcon(achievement.icon)}
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 rounded-full text-white text-sm font-semibold mb-4">
                      {achievement.stats}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-red-500 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Links Section */}
                  {achievement.links && achievement.links.length > 0 && (
                    <div className="flex flex-col gap-3">
                      {achievement.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group/link"
                        >
                          <span className="font-medium">{link.name}</span>
                          <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Certificates Scrolling Section */}
            <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} stagger-transition certificates-delay`}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-3">
                  My <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">Certifications</span>
                </h3>
                <p className="text-gray-400">Click on any certificate to view</p>
              </div>

              <div className="relative overflow-hidden py-8">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling container */}
                <div className="flex animate-scroll gap-4">
                  {/* First set of certificates */}
                  {certificates.map((cert) => (
                    <div
                      key={`first-${cert.id}`}
                      onClick={() => setSelectedCertificate(cert)}
                      className="flex-shrink-0 w-80 cursor-pointer group/card"
                    >
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105">
                        {/* Certificate Image Container */}
                        <div className="relative h-48 bg-gradient-to-br from-purple-900/20 via-red-900/20 to-blue-900/20 flex items-center justify-center overflow-hidden">
                          <Image
                            src={cert.imageUrl}
                            alt={cert.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-contain group-hover/card:scale-105 transition-transform duration-300"
                            priority={cert.id <= 3}
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-red-500/10 to-blue-400/10 group-hover/card:from-purple-600/20 group-hover/card:via-red-500/20 group-hover/card:to-blue-400/20 transition-all duration-300 pointer-events-none"></div>
                        </div>

                        {/* Certificate Info */}
                        <div className="p-4">
                          <h4 className="text-lg font-bold text-white mb-1 group-hover/card:text-purple-400 transition-colors">
                            {cert.name}
                          </h4>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">{cert.platform}</span>
                            <Award size={16} className="text-purple-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {certificates.map((cert) => (
                    <div
                      key={`second-${cert.id}`}
                      onClick={() => setSelectedCertificate(cert)}
                      className="flex-shrink-0 w-80 cursor-pointer group/card"
                    >
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105">
                        <div className="relative h-48 bg-gradient-to-br from-purple-900/20 via-red-900/20 to-blue-900/20 flex items-center justify-center overflow-hidden">
                          <Image
                            src={cert.imageUrl}
                            alt={cert.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-contain group-hover/card:scale-105 transition-transform duration-300"
                            priority={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-red-500/10 to-blue-400/10 group-hover/card:from-purple-600/20 group-hover/card:via-red-500/20 group-hover/card:to-blue-400/20 transition-all duration-300 pointer-events-none"></div>
                        </div>

                        <div className="p-4">
                          <h4 className="text-lg font-bold text-white mb-1 group-hover/card:text-purple-400 transition-colors">
                            {cert.name}
                          </h4>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">{cert.platform}</span>
                            <Award size={16} className="text-purple-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border-2 border-purple-500 shadow-2xl shadow-purple-500/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-800/90 rounded-full hover:bg-red-500 transition-colors duration-300 text-white"
              aria-label="Close certificate modal"
            >
              <X size={24} />
            </button>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 via-red-500 to-blue-400 rounded-lg">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCertificate.name}</h3>
                  <p className="text-gray-400">{selectedCertificate.platform}</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8 aspect-video flex items-center justify-center border-2 border-gray-700 relative overflow-hidden">
                <Image
                  src={selectedCertificate.imageUrl}
                  alt={selectedCertificate.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .stagger-transition {
          transition-property: all;
          transition-duration: 0.6s;
          transition-timing-function: ease-out;
        }

        .delay-0 {
          transition-delay: 0ms;
        }

        .delay-1 {
          transition-delay: 150ms;
        }

        .delay-2 {
          transition-delay: 300ms;
        }

        .certificates-delay {
          transition-delay: 100ms;
        }

        .github-delay {
          transition-delay: 600ms;
        }
      `}</style>
    </>
  )
}