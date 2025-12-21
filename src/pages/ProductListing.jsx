import React, { useState, useMemo } from "react";
import SidebarFilters from "../components/SidebarFilters";
import ProductGrid from "../components/ProductGrid";
import CategoryHero from "../components/CategoryHero";
import { catalogData } from "../data/catalogData";

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  /* ----------------------------------------
     ACTIVE CATEGORY
  ----------------------------------------- */
  const activeCategory = useMemo(() => {
    return catalogData.find((cat) => cat.id === selectedCategory) || null;
  }, [selectedCategory]);

  /* ----------------------------------------
     SEARCH + CATEGORY FILTER LOGIC
  ----------------------------------------- */
  const productsToShow = useMemo(() => {
  let products = activeCategory
    ? activeCategory.products.map((p) => ({
        ...p,
        categoryId: activeCategory.id,
        categoryTitle: activeCategory.title,
      }))
    : catalogData.flatMap((cat) =>
        cat.products.map((p) => ({
          ...p,
          categoryId: cat.id,
          categoryTitle: cat.title,
        }))
      );

  if (!searchTerm.trim()) return products;

  const query = searchTerm.toLowerCase();

  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      p.categoryTitle.toLowerCase().includes(query)
  );
}, [activeCategory, searchTerm]);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* ----------------------------------------
          HEADER + SEARCH
      ----------------------------------------- */}
      <section className="bg-white py-10 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold text-black">
            Fresh groceries delivered to your door
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Seasonal, organic produce sourced directly from nearby farms.
          </p>

          {/* SEARCH BAR */}
          <div className="relative max-w-3xl text-black mx-auto mt-6">
            <input
              type="text"
              placeholder="Search products, categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 pr-10 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ----------------------------------------
          MAIN CONTENT
      ----------------------------------------- */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <SidebarFilters
              categories={catalogData}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </aside>

          {/* PRODUCTS SECTION */}
          <section className="lg:col-span-3">
            {/* CATEGORY HERO */}
            {activeCategory && <CategoryHero category={activeCategory} />}

            {/* ALL PRODUCTS TITLE */}
            {!activeCategory && (
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-black">
                  All Products
                </h2>
                <p className="text-gray-600">
                  Browse all available farm products
                </p>
              </div>
            )}

            {/* RESULT COUNT */}
            <div className="text-sm text-gray-600 mb-4">
              Showing {productsToShow.length} products
            </div>

            {/* EMPTY STATE */}
            {productsToShow.length === 0 && (
              <div className="py-20 text-center text-gray-500">
                <p className="text-lg font-semibold">No products found</p>
                <p className="text-sm mt-1">
                  Try a different keyword or category
                </p>
              </div>
            )}

            {/* PRODUCT GRID */}
            {productsToShow.length > 0 && (
              <ProductGrid items={productsToShow} />
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
