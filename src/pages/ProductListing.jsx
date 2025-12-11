import React from 'react';
import HeroShop from '../components/HeroShop';
import SidebarFilters from '../components/SidebarFilters';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/shopData';

export default function ProductListing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroShop />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <SidebarFilters />
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-black">All Products</h2>
              <div className="text-sm text-gray-600">Showing {products.length} results</div>
            </div>

            <ProductGrid items={products} />
          </div>
        </div>
      </main>
    </div>
  );
}
