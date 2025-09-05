"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

export default function About() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const sectionRef5 = useRef(null);

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
    createObserver(sectionRef4, setIsVisible4);
    createObserver(sectionRef5, setIsVisible5);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const milestones = [
    { year: 'Feb 2025', title: 'Grand Opening', description: 'The Accessory Center launches in Muzaffarnagar' },
    { year: '2025', title: 'Premium Collections', description: 'Introduced top-tier car accessories & modifications' },
    { year: '2025', title: 'Customer Trust', description: 'Quickly became a trusted local automotive brand' },
    { year: '2026', title: 'Expanding Reach', description: 'Plans to serve customers across Uttar Pradesh' },
    { year: '2027', title: 'Innovation Ahead', description: 'Introducing futuristic automotive tech solutions' },
  ];

  return (
    <>
      <Head>
        <title>About The Accessory Center Muzaffarnagar | Premium Car Accessories Since 2025</title>
        <meta name="description" content="Discover The Accessory Center Muzaffarnagar, launched in February 2025. Premium car accessories, expert installation, and customer-first service for automotive enthusiasts." />
        <meta name="keywords" content="about accessory center muzaffarnagar, car accessories muzaffarnagar, automotive excellence 2025, premium car parts muzaffarnagar, expert installation muzaffarnagar" />
        <link rel="canonical" href="https://theaccessorycentermzn.in/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About The Accessory Center Muzaffarnagar",
              "description": "Premium car accessories and expert modifications store launched in February 2025 in Muzaffarnagar.",
              "url": "https://theaccessorycentermzn.in/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "The Accessory Center Muzaffarnagar",
                "description": "Premium car accessories and modifications store in Muzaffarnagar",
                "foundingDate": "2025-02",
                "url": "https://theaccessorycentermzn.in",
                "logo": "https://theaccessorycentermzn.in/logo.jpg",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Sadaat Hostel, Arya Samaj Road",
                  "addressLocality": "Muzaffarnagar",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "251002",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "7456886910",
                  "contactType": "customer service",
                  "email": "shazizaidi52058@gmail.com"
                }
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">About THE ACCESSORY CENTER</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Your trusted partner in automotive excellence – proudly serving Muzaffarnagar since February 2025
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div 
        ref={sectionRef1}
        className={`py-16 bg-gray-900 transition-all duration-700 ${
          isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                To deliver premium car accessories and modifications that redefine style, performance, and safety. 
                We aim to provide Muzaffarnagar car lovers with the best upgrades and personalized solutions.
              </p>
              <p className="text-gray-300 text-lg">
                From cutting-edge technology to timeless enhancements, we’re committed to excellence in every detail.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                To grow as the most trusted car accessories brand in North India, known for:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Premium product selection
                </li>
                <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Expert technical support
                </li>
                <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Exceptional customer service
                </li>
                <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Innovation & future-ready solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Company Journey */}
      <div 
        ref={sectionRef2}
        className={`py-16 bg-gray-800 transition-all duration-700 ${
          isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey Begins</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="text-center transition-transform duration-300 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12">
                  <span className="text-white font-bold text-sm">{milestone.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-300 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of sections (Core Values, Vision, CTA) remain same */}
      {/* ... keep as in your original code ... */}

      </div>
    </>
  )
}
