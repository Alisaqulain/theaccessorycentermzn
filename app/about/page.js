"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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
    { year: '2010', title: 'Company Founded', description: 'Started as a small local shop' },
    { year: '2015', title: 'Online Expansion', description: 'Launched our e-commerce platform' },
    { year: '2018', title: 'National Recognition', description: 'Featured in major automotive magazines' },
    { year: '2020', title: 'Premium Partnership', description: 'Became authorized dealer for top brands' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as top accessory retailer' }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">About THE ACCESSORY CENTER</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Your trusted partner in automotive excellence for over a decade
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
                To provide car enthusiasts with the highest quality accessories and modifications, 
                backed by expert knowledge and exceptional customer service. We believe every vehicle 
                deserves to be transformed into something extraordinary.
              </p>
              <p className="text-gray-300 text-lg">
                From performance upgrades to style enhancements, we're committed to helping you 
                create the car of your dreams while maintaining the highest standards of quality and safety.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                To become the leading destination for automotive enthusiasts worldwide, known for:
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
                  Unmatched customer experience
                </li>
                <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Innovation in automotive solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Company History */}
      <div 
        ref={sectionRef2}
        className={`py-16 bg-gray-800 transition-all duration-700 ${
          isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="text-center transition-transform duration-300 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-300 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div 
        ref={sectionRef3}
        className={`py-16 bg-gray-900 transition-all duration-700 ${
          isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality</h3>
              <p className="text-gray-300">
                We never compromise on quality. Every product we carry meets our strict standards.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                We stay ahead of the curve with the latest automotive technology and trends.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Passion</h3>
              <p className="text-gray-300">
                Our love for cars drives everything we do, from product selection to customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - Added for completeness */}
      <div 
        ref={sectionRef4}
        className={`py-16 bg-gray-800 transition-all duration-700 ${
          isVisible4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
       
      </div>

      {/* CTA Section */}
      <div 
        ref={sectionRef5}
        className={`py-16 bg-red-600 transition-all duration-700 ${
          isVisible5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ride?</h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of satisfied customers who trust THE ACCESSORY CENTER
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
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
  )
}