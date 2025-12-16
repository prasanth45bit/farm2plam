import React from 'react';
import { useNavigate } from "react-router-dom";

import ProductCard from './ProductCard';

export default function ProductGrid({ items }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((p) => (
        <div onClick={() => navigate(`/product/${p.id}`)} >
        <ProductCard key={p.id} product={p} />
        </div>
      ))}
    </div>
  );
}
