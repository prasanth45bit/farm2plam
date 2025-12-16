import React from "react";

export default function SidebarFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <aside className="w-full border rounded-lg p-4 bg-white sticky top-24">
      <h3 className="font-semibold text-black mb-4">Categories</h3>

      <ul className="space-y-3 text-sm">
        <li
          onClick={() => onSelectCategory(null)}
          className={`cursor-pointer px-2 py-1 rounded ${
            selectedCategory === null
              ? "text-green-600 font-semibold bg-green-50"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          All Products
        </li>

        {categories.map((cat) => (
          <li
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`cursor-pointer px-2 py-1 rounded flex justify-between ${
              selectedCategory === cat.id
                ? "text-green-600 font-semibold bg-green-50"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span>{cat.title}</span>
            <span className="text-gray-400">
              {cat.products.length}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
