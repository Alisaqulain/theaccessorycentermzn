"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
// import Image from 'next/image'
// 
export default function Home() {
  // Animation for elements when they come into view
  const [inView1, setInView1] = useState(false);
  const [inView2, setInView2] = useState(false);
  const [inView3, setInView3] = useState(false);
  const [inView4, setInView4] = useState(false);
  
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref1.current) setInView1(true);
            if (entry.target === ref2.current) setInView2(true);
            if (entry.target === ref3.current) setInView3(true);
            if (entry.target === ref4.current) setInView4(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);
    if (ref3.current) observer.observe(ref3.current);
    if (ref4.current) observer.observe(ref4.current);

    return () => observer.disconnect();
  }, []);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.getElementById("parallax-bg");
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Premium Car Accessories & Modifications in Muzaffarnagar | The Accessory Center MZN</title>
        <meta name="description" content="Transform your ride with premium car accessories in Muzaffarnagar. Expert installation, quality products, and exceptional service. Shop speakers, headlights, horns, LED lights, and complete car customization services." />
        <meta name="keywords" content="car accessories muzaffarnagar, automotive parts muzaffarnagar, car modifications muzaffarnagar, car speakers muzaffarnagar, headlights muzaffarnagar, car horns muzaffarnagar, LED lights muzaffarnagar, car accessories near me" />
        <link rel="canonical" href="https://theaccessorycentermzn.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              "name": "The Accessory Center Muzaffarnagar",
              "description": "Premium car accessories and modifications store in Muzaffarnagar",
              "url": "https://theaccessorycentermzn.in",
              "logo": "https://theaccessorycentermzn.in/car.png",
              "image": "https://theaccessorycentermzn.in/car.png",
              "telephone": ["+917456886910", "+919045030110"],
              "email": "shazizaidi52058@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sadaat Hostel, Arya Samaj Road",
                "addressLocality": "Muzaffarnagar",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "251002",
                "addressCountry": "IN"
              },
              "openingHours": [
                "Mo-Fr 09:00-19:00",
                "Sa 10:00-18:00",
                "Su 12:00-17:00"
              ],
              "sameAs": [
                "https://www.facebook.com/accessorycentermzn",
                "https://www.instagram.com/accessorycentermzn",
                "https://www.twitter.com/accessorycentermzn"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Car Accessories",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Car Speakers",
                      "description": "High-quality car speakers for enhanced audio experience"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "LED Headlights",
                      "description": "Premium LED headlights for improved visibility and modern look"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Car Horns",
                      "description": "Loud and clear car horns for safety and attention"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <main className="flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Section - Optimized */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <div
          id="parallax-bg"
          className="absolute inset-0 transition-transform duration-300"
        >
           <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Car Accessories"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center">
          <div className="glass-dark p-8 rounded-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white neon-text">
              Transform Your Ride
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mt-4">
              Premium accessories to style and protect your car
            </p>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (window.showModernAlert) {
                  window.showModernAlert('Redirecting to Products! 🛒\n\nYou will be taken to our full product catalog.', 'info', 2000);
                  setTimeout(() => {
                    window.location.href = '/products';
                  }, 1000);
                }
              }}
              className="mt-6 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        ref={ref1}
        className={`py-16 px-6 max-w-7xl w-full transition-all duration-700 ${
          inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group">
            <div className="overflow-hidden">
              <Image
                src="/int.jpg"
                alt="Interior Car Accessories - Premium interior modifications and styling"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Interior</h3>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group">
            <div className="overflow-hidden">
              <Image
                src="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg"
                alt="Exterior Car Accessories - Premium exterior modifications and styling"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Exterior</h3>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group">
            <div className="overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg"
                alt="Car Electronics - Premium automotive electronics and accessories"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Electronics</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - Optimized */}
      <section
        ref={ref2}
        className={`py-16 px-6 bg-black/50 w-full transition-all duration-700 ${
          inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Featured Products
            </h2>
            <p className="text-gray-300 text-lg">
              Discover our most popular car accessories
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product 1 - Premium Car Horn */}
            <div className="glass-dark rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/car horn.avif"
                  alt="Premium Car Horn - High-quality automotive horn"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-sm ml-2">(127 reviews)</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Premium Car Horn</h3>
                <p className="text-gray-300 text-sm mb-4">High-quality automotive horn for better safety</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-red-500">₹499</span>
                  <span className="text-gray-400 text-sm">In Stock</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (window.showModernAlert) {
                        window.showModernAlert('Added to cart! 🛒\n\nPremium Car Horn - ₹499\n\nThank you for your interest! Contact us for purchase.', 'success', 5000);
                      }
                    }}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (window.showModernAlert) {
                        window.showModernAlert('Added to favorites! ❤️\n\nPremium Car Horn has been saved to your favorites.', 'success', 3000);
                      }
                    }}
                    className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    ♥
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 - Premium Steering Cover */}
            <div className="glass-dark rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/car streeing cover.jpg"
                  alt="Premium Steering Cover - High-quality automotive steering wheel cover"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-sm ml-2">(89 reviews)</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Premium Steering Cover</h3>
                <p className="text-gray-300 text-sm mb-4">Comfortable and stylish steering wheel protection</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-red-500">₹199</span>
                  <span className="text-gray-400 text-sm">In Stock</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (window.showModernAlert) {
                        window.showModernAlert('Added to cart! 🛒\n\nPremium Steering Cover - ₹199\n\nThank you for your interest! Contact us for purchase.', 'success', 5000);
                      }
                    }}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (window.showModernAlert) {
                        window.showModernAlert('Added to favorites! ❤️\n\nPremium Steering Cover has been saved to your favorites.', 'success', 3000);
                      }
                    }}
                    className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    ♥
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 - Premium Body Cover */}
            <div className="glass-dark rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/car body cover.jpg"
                  alt="Premium Body Cover - High-quality automotive body protection"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-sm ml-2">(203 reviews)</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Premium Body Cover</h3>
                <p className="text-gray-300 text-sm mb-4">All-weather protection for your vehicle</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-red-500">₹999</span>
                  <span className="text-gray-400 text-sm">In Stock</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (window.showModernAlert) {
                        window.showModernAlert('Added to cart! 🛒\n\nPremium Body Cover - ₹999\n\nThank you for your interest! Contact us for purchase.', 'success', 5000);
                      }
                    }}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (window.showModernAlert) {
                        window.showModernAlert('Added to favorites! ❤️\n\nPremium Body Cover has been saved to your favorites.', 'success', 3000);
                      }
                    }}
                    className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    ♥
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Optimized */}
      <section
        ref={ref3}
        className={`py-16 px-6 w-full transition-all duration-700 ${
          inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="glass-dark rounded-2xl p-10 text-center text-white max-w-5xl mx-auto transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold mb-4 neon-text">Upgrade Your Drive Today</h2>
          <p className="mt-4 text-lg">
            Get premium accessories at unbeatable prices
          </p>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (window.showModernAlert) {
                window.showModernAlert('Redirecting to Products! 🛒\n\nYou will be taken to our full product catalog.', 'info', 2000);
                setTimeout(() => {
                  window.location.href = '/products';
                }, 1000);
              }
            }}
            className="mt-6 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            Start Shopping
          </button>
        </div>
      </section>

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
      </main>
    </>
  );
}