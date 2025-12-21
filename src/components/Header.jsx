import React from "react";
import { Leaf, ArrowRight, Play, Star } from "lucide-react";

const id = "home";

export default function Header() {
  return (
    <header id={id}  className="relative bg-surface-light overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-primary font-bold text-sm uppercase tracking-wide">
              <Leaf size={16} /> 100% Organic & Chemical Free
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
              Organic Products & <br/>
              <span className="text-primary text-5xl lg:text-6xl relative inline-block">
                Production of earthworms
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-60" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7509 9.36481 124.98 9.61398 198.9 2.59762" stroke="currentColor" strokeWidth="3"></path></svg>
              </span>
            </h1>
            <p className="text-lg text-black max-w-lg leading-relaxed">
              Get farm-fresh, chemical-free organic products directly from farmers with zero brokerage. Enjoy a healthier lifestyle with A2 milk, ghee, paneer, and fresh produce.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a className="bg-primary hover:bg-lime-700 text-white px-8 py-4 rounded-full font-bold text-base transition transform hover:-translate-y-1 shadow-xl shadow-lime-600/30 flex items-center gap-2" href="#products">
                Discover More <ArrowRight size={20} />
              </a>
              <a className="bg-white border border-gray-200 hover:border-primary text-gray-800 px-8 py-4 rounded-full font-bold text-base transition flex items-center gap-2" href="#about">
                <Play size={20} className="text-primary" /> Watch Video
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500">
              <img alt="Farmer holding a basket of fresh vegetables" className="w-full h-auto object-cover aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgoqnPkoZtdrVB5x1PixWvehEJFGVDybMBAH9as_wwHtKhDnnbKdWCwQZhlcpbNiWJZVDKIorJSEcDdHwwJ5KxLWdov06wSdnC7ZXFz54enxZwKFILekvZ2cjqISjvS3C5YpydqxaOWZtMeocRgPG5P5fUmOXUZ94dZ_gj01fixrnzt9OmqmFRd3HGuhdq3moxjW0TwZvNrg_IUnKOwjNR0yM38N6mWepS1p74riQgGPxp1vZgRBggZCRDhSHG2n0cF135GHkU_exU"/>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs">
                <div className="bg-secondary p-2 rounded-full text-white">
                  <Star size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Top Quality</p>
                  <p className="text-xs text-black">Organic Products</p>
                </div>
              </div>
            </div>
            <img alt="Floating leaf" className="absolute -top-12 -right-8 w-24 h-24 object-contain opacity-80 animate-bounce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqRgOPVLU2xtQdCwqQRZa_3oPbW5yEGFlBSh7jZycpXYKx6vGZQSn6y8yVnqThq8XXbG9Dqz7XTQnBSWEVv8LQylnW8kOJqhAVxsqnh3rUaGX2XyBwAKq00-z4P2SgvEc6ti8vZQM5K0DSEVWZMcnm8luag3msN0l839vRUh7sCID1SuNzfaLjsYzMRcKY711EPeq1KvsQFZr1_WtksdgvBh6HTiMqIdHYuukZ5V8apoO6Lon8cirN_d9sNFaSWGDOwz5H-ZPHJJKh" style={{animationDuration: '3s'}}/>
            <img alt="Fresh vegetable decoration" className="absolute -bottom-10 -left-10 w-32 h-32 object-contain opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPgf1ThUURCbX32jdI01KZ2u4GlfD7fkZK2c1CEJX972REPqF7YHChQYS92fOp5Rv2poEIJfFfGHQBpxDQfKC9LhYTg74fAm7hNwTd5rMIrLLfvcWFttO8xSd1ruh2LfRnQkBfeDTbaYAwuHs2ukSeAWM-9gaWgo5VqCeBHLPqP3kDa3Jo5LJlk9IaRD3t8iekCwxHypUxy9S_XLWDqP0CjcXuhNbyhrp1USgfU0iDJpXnGlnS0RqsL3JUzvnpPR-1GKnPwbyTPDer"/>
          </div>
        </div>
      </div>
    </header>
  );
}
