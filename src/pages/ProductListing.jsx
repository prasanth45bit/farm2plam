import React, { useState, useMemo } from "react";
import SidebarFilters from "../components/SidebarFilters";
import ProductGrid from "../components/ProductGrid";
import CategoryHero from "../components/CategoryHero";
import { catalogData } from "../data/catalogData";

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Active category
  const activeCategory = useMemo(() => {
    return catalogData.find((cat) => cat.id === selectedCategory);
  }, [selectedCategory]);

  // Filter products by category + search
  const productsToShow = useMemo(() => {
    let products = activeCategory
      ? activeCategory.products
      : catalogData.flatMap((cat) => cat.products);

    if (searchTerm.trim()) {
      products = products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return products;
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-black">Fresh groceries delivered to your door</h1>
          <p className="mt-2 text-sm text-gray-700">Seasonal, organic produce sourced directly from farms near you.</p>
        </div>
      </div>
       {/* SEARCH BAR */}
            <div className="mb-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
    </section>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* SIDEBAR (STICKY) */}
          <div className="lg:col-span-1">
            <SidebarFilters
              categories={catalogData}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-3">
            
           

              {/* CATEGORY HERO SECTION */}
  {activeCategory && (<CategoryHero category={activeCategory} />
  )}

  {/* DEFAULT (ALL PRODUCTS) */}
  {!activeCategory && (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-black">All Products</h2>
      <p className="text-gray-600">
        Browse all available farm products
      </p>
    </div>
  )}

            {/* RESULT COUNT */}
            <div className="text-sm text-gray-600 mb-4">
              Showing {productsToShow.length} products
            </div>

            {/* PRODUCTS */}
            <ProductGrid items={productsToShow} />
          </div>
        </div>
      </main>
    </div>
  );
}
