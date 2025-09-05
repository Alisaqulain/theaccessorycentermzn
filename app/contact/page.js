'use client'
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = [];

    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
      
      observers.push(observer);
      return observer;
    };

    createObserver(sectionRef1, setIsVisible1);
    createObserver(sectionRef2, setIsVisible2);
    createObserver(sectionRef3, setIsVisible3);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
      }, 2000)
    }
  }

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      details: ['(555) 123-4567', '(555) 123-4568'],
      action: 'Call us now'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['info@accessorycenter.com', 'support@accessorycenter.com'],
      action: 'Send us an email'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      details: ['Sadaat Hostel, Arya Samaj Road, Muzaffarnagar'],
      action: 'Get directions'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 5:00 PM' }
  ]

  return (
    <>
      <Head>
        <title>Contact The Accessory Center Muzaffarnagar | Get Expert Automotive Support</title>
        <meta name="description" content="Contact The Accessory Center Muzaffarnagar for expert automotive support. Get help with car accessories, installation guidance, and product recommendations. Located in Muzaffarnagar, UP." />
        <meta name="keywords" content="contact accessory center muzaffarnagar, automotive support muzaffarnagar, car accessories help muzaffarnagar, installation guidance muzaffarnagar, expert advice muzaffarnagar, car accessories near me muzaffarnagar" />
        <link rel="canonical" href="https://theaccessorycentermzn.in/contact" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact The Accessory Center Muzaffarnagar",
              "description": "Get expert automotive support and guidance in Muzaffarnagar",
              "url": "https://theaccessorycentermzn.in/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "The Accessory Center Muzaffarnagar",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Sadaat Hostel, Arya Samaj Road",
                  "addressLocality": "Muzaffarnagar",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "251002",
                  "addressCountry": "IN"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "(555) 123-4567",
                    "contactType": "customer service",
                    "email": "info@accessorycenter.com",
                    "availableLanguage": "English"
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "(555) 123-4568",
                    "contactType": "technical support",
                    "email": "support@accessorycenter.com"
                  }
                ],
                "openingHours": [
                  "Mo-Fr 09:00-19:00",
                  "Sa 10:00-18:00",
                  "Su 12:00-17:00"
                ]
              }
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Get in touch with our team of automotive experts. We&#39;re here to help you with any questions or concerns.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div 
        ref={sectionRef1}
        className={`py-16 bg-gray-900 transition-all duration-700 ${
          isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <div className="space-y-1 mb-4">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300">{detail}</p>
                  ))}
                </div>
                <button className="text-red-400 hover:text-red-300 font-medium transition-colors transform hover:scale-105">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div 
        ref={sectionRef2}
        className={`py-16 bg-gray-800 transition-all duration-700 ${
          isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitSuccess && (
                <div className="bg-green-600 text-white p-4 rounded-lg mb-6 animate-fade-in-down">
                  Thank you for your message! We&#39;ll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-3 py-3 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300 ${
                        errors.firstName ? 'border-red-500' : ''
                      }`}
                      placeholder="Your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-400 animate-fade-in-up">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-3 py-3 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300 ${
                        errors.lastName ? 'border-red-500' : ''
                      }`}
                      placeholder="Your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-400 animate-fade-in-up">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-3 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300 ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 animate-fade-in-up">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-3 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300 ${
                      errors.subject ? 'border-red-500' : ''
                    }`}
                    placeholder="What can we help you with?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400 animate-fade-in-up">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-3 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300 ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 animate-fade-in-up">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              
              {/* Business Hours */}
              <div className="bg-gray-700 p-6 rounded-lg mb-8 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between transition-transform duration-300 hover:translate-x-2">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map */}
              {/* Location Map */}
<div className="bg-gray-700 p-6 rounded-lg mb-8 transition-transform duration-300 hover:-translate-y-2">
  <h3 className="text-xl font-semibold text-white mb-4">Visit Our Store</h3>
  <div className="h-64 rounded-lg overflow-hidden mb-4">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.197482338018!2d77.703147275426!3d29.47268137521465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c190a86f5b0f9%3A0x7e04e63e9ed20a3d!2sArya%20Samaj%20Rd%2C%20Muzaffarnagar%2C%20Uttar%20Pradesh%20251002!5e0!3m2!1sen!2sin!4v1693598741234!5m2!1sen!2sin"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full border-0"
    ></iframe>
  </div>
  <p className="text-gray-300 text-sm">
    Located in the heart of Car City, our store is easily accessible from major highways 
    and offers plenty of parking for customers.
  </p>
</div>


              {/* FAQ Quick Links */}
              <div className="bg-gray-700 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Help</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-red-400 hover:text-red-300 transition-colors duration-300 transform hover:translate-x-2">
                    • How to choose the right accessories?
                  </a>
                  <a href="#" className="block text-red-400 hover:text-red-300 transition-colors duration-300 transform hover:translate-x-2">
                    • Installation guides and tutorials
                  </a>
                  <a href="#" className="block text-red-400 hover:text-red-300 transition-colors duration-300 transform hover:translate-x-2">
                    • Return and warranty information
                  </a>
                  <a href="#" className="block text-red-400 hover:text-red-300 transition-colors duration-300 transform hover:translate-x-2">
                    • Shipping and delivery options
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        ref={sectionRef3}
        className={`py-16 bg-red-600 transition-all duration-700 ${
          isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-red-100 mb-8">
            Our customer support team is available to help you with any urgent questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Call Now: (555) 123-4567
            </a>
            <a href="mailto:support@accessorycenter.com" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Email Support
            </a>
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
      </div>
    </>
  )
}