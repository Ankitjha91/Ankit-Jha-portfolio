'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail,Send, Phone, Linkedin, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    
    try {
      // Using Web3Forms API (free email service)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '8f81ecad-d4ab-4af8-8020-1d6c4a530054',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })

      const result = await response.json()

      if (result.success) {
        setFormStatus('success')
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch {
      setFormStatus('error')
      setStatusMessage('Failed to send message. Please try emailing directly.')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  const contactMethods = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'ankitjhacse2003@gmail.com',
      link: 'mailto:ankitjhacse2003@gmail.com',
      description: 'Send me an email anytime',
      gradient: 'from-red-600 via-red-500 to-orange-400',
      hoverGlow: 'hover:shadow-red-500/50',
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone & WhatsApp',
      value: '+91 9109282109',
      link: 'https://wa.me/919109282109?text=Hi%20Ankit%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you',
      description: 'Call or message me',
      gradient: 'from-green-600 via-green-500 to-emerald-400',
      hoverGlow: 'hover:shadow-green-500/50',
    },
    {
      icon: <Linkedin size={28} />,
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/ankit-j-1761a9216/',
      description: 'Professional networking',
      gradient: 'from-blue-600 via-blue-500 to-cyan-400',
      hoverGlow: 'hover:shadow-blue-500/50',
    },
  ]

  const quickInfo = [
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'India'
    },
    {
      icon: <Clock size={20} />,
      label: 'Response Time',
      value: 'Within 24 hours'
    }
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get In <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;m always open to discussing new opportunities and interesting ideas
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Side - Contact Info */}
            <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">
                  Let&apos;s Connect
                </h3>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.title}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`block bg-gray-900/50 rounded-2xl p-7 border-2 border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${method.hoverGlow} group relative overflow-hidden`}
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10 flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-br ${method.gradient} rounded-xl text-white shadow-lg ${hoveredCard === index ? 'scale-110' : 'scale-100'} transition-transform duration-500`}>
                          {method.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-red-500 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-1">
                            {method.title}
                          </h4>
                          <p className="text-gray-400 text-sm mb-1">{method.description}</p>
                          <p className="text-purple-400 font-medium text-sm break-all">{method.value}</p>
                        </div>
                        <Send size={18} className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="mt-6 pt-6 border-t border-gray-700 space-y-3">
                  {quickInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-400">
                      <div className="p-2 bg-gradient-to-br from-purple-600 via-red-500 to-blue-400 rounded-lg text-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{info.label}</p>
                        <p className="text-sm font-medium text-gray-300">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-gray-700 hover:border-purple-500 transition-all duration-500 relative overflow-hidden group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-red-500/5 to-blue-400/5 group-hover:from-purple-600/10 group-hover:via-red-500/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Send a <span className="bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 bg-clip-text text-transparent">Message</span>
                  </h3>
                  <p className="text-gray-400 mb-8">Fill out the form below and I&apos;ll get back to you as soon as possible</p>

                  {/* Status Messages */}
                  {formStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center gap-3 text-green-400">
                      <CheckCircle size={24} />
                      <p className="font-medium">{statusMessage}</p>
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/20 border-2 border-red-500 rounded-xl flex items-center gap-3 text-red-400">
                      <AlertCircle size={24} />
                      <p className="font-medium">{statusMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          disabled={formStatus === 'sending'}
                          className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none text-white transition-all duration-300 placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={formStatus === 'sending'}
                          className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none text-white transition-all duration-300 placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={formStatus === 'sending'}
                        className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none text-white transition-all duration-300 placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        disabled={formStatus === 'sending'}
                        className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none text-white resize-none transition-all duration-300 placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Tell me about your project or idea..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-red-500 to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}