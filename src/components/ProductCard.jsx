import React from 'react';
import { Star } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-md overflow-hidden bg-white">
      <div className="relative">
        <img src={product.img} alt={product.title} className="w-full h-48 object-cover" />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">{product.badge}</span>
        )}
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-black">{product.title}</h3>
        <p className="text-xs text-gray-600">{product.subtitle}</p>

        <div className="flex items-center gap-2 mt-2 text-sm">
          <div className="flex items-center text-yellow-500">
            <Star size={14} /> <span className="ml-1 text-black">{product.rating}</span>
          </div>
          <div className="text-gray-500">({product.reviews})</div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          {/* <div>
            <div className="text-lg font-bold text-black">{product.price}</div>
            {product.oldPrice && <div className="text-xs text-gray-500 line-through">{product.oldPrice}</div>}
          </div> */}
          {/* <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">Add</button> */}
        </div>
      </div>
    </div>
  );
}
