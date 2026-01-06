import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://farm2plamserver.onrender.com/api/products/${productId}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [productId]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-background-light text-gray-800 min-h-screen">

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* IMAGE */}
        <div className="bg-white rounded-3xl p-8 shadow border aspect-square flex items-center justify-center">
          {product.badge && (
            <span className="absolute mt-[-20px] ml-[-20px] bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
              {product.badge}
            </span>
          )}
          <img
            src={product.image}
            alt={product.title}
            className="object-contain max-h-[85%]"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>
          <p className="text-gray-500 text-lg mb-6">{product.desc}</p>

          <div className="bg-white border rounded-2xl p-6 mb-8 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Total Price</p>
                <p className="text-4xl font-bold">₹ 0 <span className="text-lg text-gray-500">/ {product.unit}</span></p>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                {product.stock}
              </span>
            </div>
          </div>

          <a
            href={`https://wa.me/919486084040?text=I am interested in ${product.title}`}
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold text-lg shadow"
          >
            Order on WhatsApp
          </a>

          <div className="border-t mt-8 pt-6">
            <h3 className="text-2xl font-bold mb-3">Product Description</h3>
            <p className="text-gray-600">{product.desc}</p>
            <p className="mt-3 text-sm text-gray-500">
              ⭐ {product.rating} | {product.reviews} reviews | “{product.comment}”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
