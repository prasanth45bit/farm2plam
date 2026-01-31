import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Products() {

  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://farm2plamserver.onrender.com/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <section id="products" className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-wider">Our Products</span>
          <h2 className="text-4xl font-display font-bold text-gray-900">
            Farm Fresh Categories
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

         {categories.map((item) => (
  <div
    key={item._id}
    className={`group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-80 ${
      item.wide ? "lg:col-span-2" : ""
    }`}
    onClick={() => navigate(`/product/${item.categoryId}`)}
  >
    <img
      src={item.coverImage}
      alt={item.title}
      className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
      <h3 className="text-white font-display font-bold text-2xl mb-2">
        {item.title}
      </h3>
      <p className="text-gray-300 text-sm">
        {item.description}
      </p>

      <button className="text-secondary font-bold text-sm mt-4 group-hover:text-white">
        Shop Now →
      </button>
    </div>
  </div>
))}


        </div>

      </div>
    </section>
  );
}
