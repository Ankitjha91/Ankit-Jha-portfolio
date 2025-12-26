'use client'

import { Heart, Github, Linkedin, Code2, ArrowUp, Mail, Phone, MapPin, Award, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const navigationSections = {
    explore: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#Experience' },
    ],
    connect: [
      { name: 'Achievements', href: '#achievements' },
      { name: 'Resume', href: '#resume' },
      { name: 'Profiles', href: '#profiles' },
      { name: 'Contact', href: '#contact' },
    ]
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ankitjha91',
      icon: <Github size={22} />,
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ankit-j-1761a9216/',
      icon: <Linkedin size={22} />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Ankit_jha_2003/',
      icon: <Code2 size={22} />,
      color: 'hover:text-yellow-400'
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/profile/ankitjhaix7g',
      icon: <Award size={22} />,
      color: 'hover:text-green-400'
    },
  ]

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      text: 'ankitjhacse2003@gmail.com',
      link: 'mailto:ankitjhacse2003@gmail.com'
    },
    {
      icon: <Phone size={18} />,
      text: '+91 9109282109',
      link: 'tel:+919109282109'
    },
    {
      icon: <MapPin size={18} />,
      text: 'India',
      link: null
    }
  ]

  return (
    <footer className="bg-gray-900 border-t-2 border-gray-800 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent mb-3">
                Ankit Jha
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 rounded-full mb-4"></div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A passionate Full Stack Developer crafting innovative web solutions and creating meaningful digital experiences.
              Let&apos;s build something amazing together!
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 ${social.color} transition-all duration-300 hover:scale-110 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 group`}
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-400 rounded-full"></span>
              Explore
            </h4>
            <ul className="space-y-3">
              {navigationSections.explore.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-400 rounded-full"></span>
              Connect
            </h4>
            <ul className="space-y-3">
              {navigationSections.connect.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 rounded-full"></span>
              Get In Touch
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="flex items-start gap-3 text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm group"
                    >
                      <span className="mt-0.5 text-purple-400 group-hover:scale-110 transition-transform">
                        {info.icon}
                      </span>
                      <span className="break-all">{info.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="mt-0.5 text-purple-400">{info.icon}</span>
                      <span>{info.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 group"
              >
                Send Message
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap text-center">
          <span>© {currentYear} Ankit Jha</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          <span>All rights reserved</span>
          <Code2 className="w-4 h-4 text-purple-400" />
        </p>

      </div>


      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 text-white rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-110 transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  )
}