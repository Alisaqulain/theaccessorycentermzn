'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState('grid')
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'exterior', name: 'Exterior Accessories' },
    { id: 'interior', name: 'Interior Accessories' },
    { id: 'performance', name: 'Performance Parts' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'maintenance', name: 'Maintenance' }
  ]

  const products = [
    {
      id: 1,
      name: 'LED Headlight Kit',
      category: 'exterior',
      price: 89.99,
      rating: 4.8,
      reviews: 127,
      image: '/images/6.jpg',
      description: 'Bright LED headlights for improved visibility and modern look'
    },
    {
      id: 2,
      name: 'Carbon Fiber Spoiler',
      category: 'exterior',
      price: 299.99,
      rating: 4.6,
      reviews: 89,
      image: '/images/3.jpg',
      description: 'Lightweight carbon fiber rear spoiler for enhanced aerodynamics'
    },
    {
      id: 3,
      name: 'Leather Seat Covers',
      category: 'interior',
      price: 159.99,
      rating: 4.7,
      reviews: 203,
      image: '/images/5.jpg',
      description: 'Premium leather seat covers for luxury comfort and style'
    },
    {
      id: 4,
      name: 'Performance Exhaust System',
      category: 'performance',
      price: 599.99,
      rating: 4.9,
      reviews: 156,
      image: '/images/8.webp',
      description: 'High-performance exhaust system for improved power and sound'
    },
    
    {
      id: 6,
      name: 'Air Filter Upgrade',
      category: 'performance',
      price: 49.99,
      rating: 4.4,
      reviews: 234,
      image: '/images/air.jpg',
      description: 'High-flow air filter for improved engine performance'
    },
    {
      id: 7,
      name: 'LED Interior Lights',
      category: 'interior',
      price: 29.99,
      rating: 4.6,
      reviews: 167,
      image: '/images/7.jpeg',
      description: 'Ambient LED lighting kit for interior customization'
    },
    
    {
      id: 9,
      name: 'Dash Camera',
      category: 'electronics',
      price: 129.99,
      rating: 4.7,
      reviews: 145,
      image: '/images/4.jpg',
      description: '1080p dash camera with night vision and GPS tracking'
    },
    
    {
      id: 11,
      name: 'Brake Pads',
      category: 'maintenance',
      price: 69.99,
      rating: 4.5,
      reviews: 178,
      image: '/images/brack.png',
      description: 'Ceramic brake pads for superior stopping power and low dust'
    },
    
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'price':
        return a.price - b.price
      case 'rating':
        return b.rating - a.rating
      case 'reviews':
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#374151" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    return stars
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
        </div>
      )}

      {/* Hero Section with Parallax Effect */}
      <div className="bg-gray-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full transform scale-110">
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-red-900 opacity-70"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Premium Car Accessories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Discover high-quality accessories to enhance your vehicle's performance, style, and functionality
          </p>
          
          {/* Animated decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-600 rounded-full filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-500 rounded-full filter blur-xl opacity-20 animate-pulse-medium"></div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="py-8 bg-gray-900 sticky top-0 z-30 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search with focus animation */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter with hover effects */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort and View with transitions */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="reviews">Sort by Reviews</option>
              </select>

              <div className="flex bg-gray-800 rounded-lg p-1 transition-all duration-300">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-300 transform hover:scale-110 ${
                    viewMode === 'grid' ? 'bg-red-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-300 transform hover:scale-110 ${
                    viewMode === 'list' ? 'bg-red-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid with staggered animations */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12 animate-fade-in">
              <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up flex ${
                    viewMode === 'list' ? 'flex-row' : 'flex-col h-full'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Product Image with hover effect */}
                  <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''} relative overflow-hidden group`}>
                    <Image 
                      src={product.image}
                      alt={product.name}
                      width={800}
                      height={400}
                      className={`${viewMode === 'list' ? 'w-48 h-48' : 'w-full h-48'} object-cover transition-all duration-500 group-hover:scale-110`}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-red-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold">
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={`p-6 flex flex-col ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white hover:text-red-400 transition-colors duration-300 cursor-pointer">{product.name}</h3>
                      <span className="text-2xl font-bold text-red-500 transform hover:scale-110 transition-transform duration-300">${product.price}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex mr-2">{renderStars(product.rating)}</div>
                        <span className="text-sm text-gray-400">({product.reviews})</span>
                      </div>
                      <span className="text-xs text-gray-400 uppercase tracking-wide px-2 py-1 bg-gray-700 rounded-md">{product.category}</span>
                    </div>

                    <div className="mt-auto flex gap-2">
                      <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add to Cart
                      </button>
                      <button className="px-4 py-2 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-110 group">
                        <svg className="w-5 h-5 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section with pulse animation */}
      <div className="py-16 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-400 rounded-full opacity-20 animate-ping-slow"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-400 rounded-full opacity-20 animate-ping-medium"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4 animate-pulse-slow">Need Help Choosing?</h2>
          <p className="text-xl text-red-100 mb-8">
            Our automotive experts are here to help you find the perfect accessories for your vehicle
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contact Our Experts
          </button>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
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
        
        @keyframes pingSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.1;
          }
        }
        
        @keyframes pingMedium {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.1;
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-ping-slow {
          animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-medium {
          animation: pingMedium 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  )
}