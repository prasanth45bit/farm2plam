import { useState } from "react";

export default function ProductGallery({ images }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex-1 min-w-0 space-y-4">

      {/* Main Image */}
      <div className="aspect-square rounded-2xl overflow-hidden bg-[#f0f5ed] group">
        <img
          src={activeImage}
          alt="Product"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide">
        {images.slice(0, 5).map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`aspect-square rounded-lg overflow-hidden border
              ${
                activeImage === img
                  ? "border-primary border-2"
                  : "border-transparent hover:border-[#5f9a4c]"
              }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

    </div>
  );
}
