import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image.png";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold border-b-2 border-primary pb-1"
      : "text-black hover:text-primary";

  const mobileNavClass = ({ isActive }) =>
    `block px-4 py-2 hover:bg-gray-50 ${
      isActive ? "text-primary font-semibold" : "text-black hover:text-primary"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-surface-light shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="Farm2Palm Logo" className="h-15 w-20" />
            <div>
              <span className="font-display font-bold text-2xl text-blue-900">
                Farm<span className="text-red-500">2</span>Palm
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block">
                India Ki Organics
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <a href="/#about" className="text-black hover:text-primary">About Us</a>
            <NavLink to="/products" className={navClass}>Products</NavLink>
            <NavLink to="/services"  className={navClass}>Services</NavLink>
            <a href="/#contact" className="text-black hover:text-primary">Contact</a>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button className="text-gray-500 hover:text-primary">
                <ShoppingBag size={20} />
              </button>
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            <NavLink
              to="/products"
              className="bg-primary hover:bg-lime-700 text-white px-6 py-2.5 rounded-full font-bold text-sm"
            >
              Shop Now
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2">

            <NavLink to="/" end onClick={() => setIsMenuOpen(false)} className={mobileNavClass}>
              Home
            </NavLink>

            <a
              href="/#about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-50"
            >
              About Us
            </a>

            <NavLink to="/products" onClick={() => setIsMenuOpen(false)} className={mobileNavClass}>
              Products
            </NavLink>

            <NavLink to="/services" onClick={() => setIsMenuOpen(false)} className={mobileNavClass}>
              Services
            </NavLink>

            <a
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-black hover:text-primary hover:bg-gray-50"
            >
              Contact
            </a>

            {/* Mobile bottom actions */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-t border-gray-200">
              <div className="relative">
                <ShoppingBag size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>

              <NavLink
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary hover:bg-lime-700 text-white px-6 py-2.5 rounded-full font-bold text-sm"
              >
                Shop Now
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
