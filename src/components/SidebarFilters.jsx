import React from 'react';
import { categories } from '../data/shopData';

export default function SidebarFilters() {
  return (
    <aside className="w-full sm:w-64 border rounded p-4 bg-white">
      <h3 className="font-semibold text-black mb-3">Categories</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {categories.map((c) => (
          <li key={c.id} className="flex justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{c.label}</span>
            </label>
            <span className="text-gray-500">{c.count}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h4 className="font-semibold text-black">Price</h4>
        <div className="mt-2 text-sm text-gray-600">Min</div>
        <input type="range" min="0" max="100" className="w-full" />
      </div>
    </aside>
  );
}
