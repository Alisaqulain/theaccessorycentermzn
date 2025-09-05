"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
// import Image from 'next/image'
// 
export default function Home() {
  // Animation for elements when they come into view
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              "logo": "https://theaccessorycentermzn.in/logo.jpg",
              "image": "https://theaccessorycentermzn.in/logo.jpg",
              "telephone": "(555) 123-4567",
              "email": "info@accessorycenter.com",
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
      {/* Hero Section with Parallax Effect */}
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
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in-down">
            Transform Your Ride
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 animate-fade-in-up delay-200">
            Premium accessories to style and protect your car
          </p>
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-500">
           <a href="/products"> Shop Now</a>
          </button>
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

      {/* Featured Products Section */}
      <section
        ref={ref2}
        className={`py-16 px-6 bg-black/50 w-full transition-all duration-700 ${
          inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="overflow-hidden">
              <Image
                src="/images/3.jpg"
                alt="Premium Car Floor Mats - High-quality automotive floor protection"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Premium Car Mat</h3>
              <p className="text-gray-600 mt-2">₹2,499</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="overflow-hidden">
              <Image
                src="/images/brack.png"
                alt="All-Weather Car Cover - Premium vehicle protection and weather resistance"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">All-Weather Car Cover</h3>
              <p className="text-gray-600 mt-2">₹3,199</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="overflow-hidden">
              <Image
                src="/speaker.jpg"
                alt="Fast Car Charger - High-speed automotive charging solution"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Fast Car Charger</h3>
              <p className="text-gray-600 mt-2">₹999</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        ref={ref3}
        className={`py-16 px-6 w-full transition-all duration-700 ${
          inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-red-600 rounded-xl p-10 text-center text-white max-w-5xl mx-auto transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold">Upgrade Your Drive Today</h2>
          <p className="mt-4 text-lg">
            Get premium accessories at unbeatable prices
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
           <a href="/products"> Start Shopping</a>
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