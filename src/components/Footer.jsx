import React from "react";
import logo from '../assets/image.png';
import { Sprout, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div className="space-y-6">
          <div className="flex items-center gap-2">
             <img src={logo} alt="Farm2Palm Logo" className="h-15 w-auto" />
            <div>
              <span className="font-display font-bold text-2xl text-blue-900">
                Farm<span className="text-primary text-red-500">2</span>Palm
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block">
                India Ki Organics
              </span>
            </div>
          </div>

          <p className="text-gray text-sm">
            Connecting you directly to the source of your food. Authentic, organic, and healthy products.
          </p>

        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray">
            <li><a className="hover:text-primary" href="#">Home</a></li>
            <li><a className="hover:text-primary" href="#about">About Us</a></li>
            <li><a className="hover:text-primary" href="/products">Shop Products</a></li>
            <li><a className="hover:text-primary" href="/services">Our Services</a></li>
            <li><a className="hover:text-primary" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>

          <ul className="space-y-4">

            <li className="flex items-start gap-4">
              <div className="p-2 bg-gray-200 rounded-full text-primary flex-shrink-0">
                <MapPin size={20} />
              </div>
              <p className="text-gray text-sm">
                24K, VOC Nagar 1st Street, Sirumugai, Coimbatore - 641302, India.
              </p>
            </li>

            <li className="flex items-center gap-4">
              <div className="p-2 bg-gray-200 rounded-full text-primary flex-shrink-0">
                <Phone size={20} />
              </div>
              <div className="flex flex-col text-gray text-sm">
                <a href="tel:8610825382">+91 86108 25382</a>
                <a href="tel:9486084040">+91 94860 84040</a>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="p-2 bg-gray-200 rounded-full text-primary flex-shrink-0">
                <Mail size={20} />
              </div>
              <a href="mailto:farm2palmindia@gmail.com" className="text-gray text-sm">
                farm2palmindia@gmail.com
              </a>
            </li>

          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray text-sm">
        © 2023 Farm2Palm India. All rights reserved.
      </div>

    </footer>
  );
}
