"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black border-b-2 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo + Name */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <Link href="/" className="flex flex-col items-center">
              <img src="./car.png" alt="logo" className="w-40 h-24 mt-1 mb-5" />
              <span className="text-gray-300 text-sm font-semibold pb-2 relative md:absolute top-20">
             by Abbas Zaidi
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white px-5 py-3 text-lg font-medium transition-colors relative
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-red-600
                after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white px-5 py-3 text-lg font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 pt-4 pb-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 text-lg font-medium transition-colors relative
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-red-600
                after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-700 space-y-2">
              <Link
                href="/login"
                className="text-gray-300 hover:text-white block px-3 py-2 text-lg font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-red-600 hover:bg-red-700 text-white block px-3 py-2 rounded-md text-lg font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
