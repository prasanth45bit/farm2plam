import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/image.png';
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface-light shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="Farm2Palm Logo" className="h-20 w-auto" />
            <div>
              <span className="font-display font-bold text-2xl text-blue-900">
                Farm<span className="text-primary text-red-500">2</span>Palm
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block">
                India Ki Organics
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link className="text-primary font-medium" to="/">Home</Link>
            <Link className="text-black hover:text-primary" to="/#about">About Us</Link>
            <Link className="text-black hover:text-primary" to="/products">Products</Link>
            <Link className="text-black hover:text-primary" to="/#services">Services</Link>
            <Link className="text-black hover:text-primary" to="/#contact">Contact</Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-500 hover:text-primary">
              <Search size={20} />
            </button>

            <div className="relative">
              <button className="text-gray-500 hover:text-primary">
                <ShoppingBag size={20} />
              </button>
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </div>

            <Link
              to="/products"
              className="bg-primary hover:bg-lime-700 text-white px-6 py-2.5 rounded-full font-bold text-sm"
            >
              Shop Now
            </Link>

            <button
              className="
    hidden sm:inline-flex items-center
    px-4 py-2
    rounded-lg
    text-sm font-semibold
    border border-gray-200
    bg-white/70 backdrop-blur
    text-gray-700
    shadow-sm
    transition-all duration-300
    hover:bg-primary hover:text-white hover:border-primary
    hover:shadow-md hover:-translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-primary/40
  "
            >
              Sign In
            </button>

            <button
              className="
    hidden sm:inline-flex items-center
    px-4 py-2 ml-2
    rounded-lg
    text-sm font-semibold
    border border-gray-200
    bg-white/70 backdrop-blur
    text-gray-700
    shadow-sm
    transition-all duration-300
    hover:bg-primary hover:text-white hover:border-primary
    hover:shadow-md hover:-translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-primary/40
  "
            >
              <User size={16} className="mr-2" />
              Account
            </button>

          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="text-gray-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2">
            <Link className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-50" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-50" to="/#about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-50" to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-50" to="/#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-50" to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

            {/* Mobile Icons */}
            <div className="flex items-center gap-4 px-4 py-3 border-t border-gray-200">
              <Search size={20} className="text-gray-600" />
              <div className="relative">
                <ShoppingBag size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
              </div>
            </div>

            {/* Mobile Account Buttons */}
            <div className="px-4 mt-3 space-y-2">
              <button
                className="
    hidden sm:inline-flex items-center
    px-4 py-2
    rounded-lg
    text-sm font-semibold
    border border-gray-200
    bg-white/70 backdrop-blur
    text-gray-700
    shadow-sm
    transition-all duration-300
    hover:bg-primary hover:text-white hover:border-primary
    hover:shadow-md hover:-translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-primary/40
  "
              >
                Sign In
              </button>

              <button
                className="
    hidden sm:inline-flex items-center
    px-4 py-2 ml-2
    rounded-lg
    text-sm font-semibold
    border border-gray-200
    bg-white/70 backdrop-blur
    text-gray-700
    shadow-sm
    transition-all duration-300
    hover:bg-primary hover:text-white hover:border-primary
    hover:shadow-md hover:-translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-primary/40
  "
              >
                <User size={16} className="mr-2" />
                Account
              </button>

            </div>

          </div>
        )}
      </div>
    </nav>
  );
}
