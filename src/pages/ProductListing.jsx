import React, { useState, useEffect, useMemo } from "react";
import SidebarFilters from "../components/SidebarFilters";
import ProductGrid from "../components/ProductGrid";
import ProductCard from "../components/ProductCard";
import CategoryHero from "../components/CategoryHero";
import axios from "axios";

export default function ProductListing() {

  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get("https://farm2plamserver.onrender.com/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);


  useEffect(() => {
    setLoading(true);
    axios.get("https://farm2plamserver.onrender.com/api/products")
      .then(res => setAllProducts(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);


const activeCategory = useMemo(() => {
  return categories.find(cat => cat._id === selectedCategory) || null;
}, [categories, selectedCategory]);


  const productsToShow = useMemo(() => {
    let filtered = selectedCategory
  ? allProducts.filter(p => p.categoryId === selectedCategory)
  : allProducts;


    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [allProducts, selectedCategory, searchTerm]);



  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SEARCH */}
      <section className="bg-white py-10 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold text-black">
              Fresh produce and modern farming solutions, delivered to your door
          </h1>

          <div className="relative text-gray-800 max-w-3xl mx-auto mt-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <SidebarFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </aside>

          {/* PRODUCTS */}
          <section className="lg:col-span-3">

            {activeCategory && <CategoryHero category={activeCategory} />}

            {!activeCategory && (
              <div className="mb-6">
                <h2 className="text-2xl text-black  font-bold">All Products</h2>
                <p className="text-gray-600">Browse all farm products</p>
              </div>
            )}

            {loading && <p className="text-center py-20">Loading products...</p>}

            {!loading && productsToShow.length === 0 && (
              <div className="py-20 text-center text-gray-500">
                No products found
              </div>
            )}
            {!loading && productsToShow.length > 0 && (
              <ProductGrid items={productsToShow} />
            )}

          </section>
        </div>
      </main>
    </div>
  );
}
