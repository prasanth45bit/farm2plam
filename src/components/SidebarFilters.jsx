import React from "react";

export default function SidebarFilters({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="bg-white text-black rounded-xl shadow-sm p-5 sticky top-24">
      <h3 className="font-bold text-lg mb-4">Categories</h3>

      <button
        onClick={() => onSelectCategory(null)}
        className={`block w-full text-left px-3 py-2 rounded-lg mb-2 transition
          ${!selectedCategory ? "bg-green-100 text-green-700 font-semibold" : "hover:bg-gray-100"}`}
      >All Products
      </button>

      {categories.map((cat) => (
        <button
          key={cat._id}
          onClick={() => onSelectCategory(cat._id)} 
          className={`block w-full text-left px-3 py-2 rounded-lg mb-1 transition
            ${selectedCategory === cat._id
              ? "bg-green-100 text-green-700 font-semibold"
              : "hover:bg-gray-100"
            }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
}
