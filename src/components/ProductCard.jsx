import React from 'react';
import { Star } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-md overflow-hidden bg-white">
      <div className="relative bg-gray-100 flex items-center justify-center h-48">
        <div className="w-50 h-48 flex items-center justify-center bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {product.badge && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">{product.badge}</span>
        )}
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-black">{product.title}</h3>
        <p className="text-xs text-gray-600">{product.desc}</p>

        <div className="flex items-center gap-2 mt-2 text-sm">
          <div className="flex items-center text-yellow-500">
            <Star size={14} /> <span className="ml-1 text-black">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
