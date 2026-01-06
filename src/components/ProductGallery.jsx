import React from 'react';

export default function ProductGallery({ image }) {

  return (
    <div className="flex-1 bg-white rounded-2xl shadow-xl min-w-0 p-4 m-10 space-y-4">
      <div className="w-full max-w-sm mx-auto sm:max-w-md lg:max-w-lg aspect-square rounded-2xl  overflow-hidden bg-[#f0f5ed] group">
        <img
          src={image}
          alt="Product"
          className="w-full h-full object-cover m-5 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
