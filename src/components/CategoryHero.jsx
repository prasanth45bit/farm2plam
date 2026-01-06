import React from "react";
import {
  SlidersHorizontal,
  PlayCircle,
  Leaf,
  Droplets,
  Tractor,
} from "lucide-react";

// map feature icon keys → lucide icons
const iconMap = {
  spa: Leaf,
  water_drop: Droplets,
  agriculture: Tractor,
};

export default function CategoryHero({ category }) {
  if (!category) return null;

  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-[#eaf3e7] shadow-sm flex flex-col mb-10">
      <div className="flex flex-col lg:flex-row">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf3e7] text-primary">
              <SlidersHorizontal size={18} />
            </span>
            <span className="text-sm font-bold tracking-wide text-[#5f9a4c] uppercase">
              Premium Category Focus
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111b0d] mb-6 leading-tight">
            Pure &amp; Wholesome <br />
            <span className="text-primary">{category.title}</span>
          </h1>

          <div className="space-y-4 max-w-xl">
            <p className="text-[#111b0d] text-lg font-medium leading-relaxed">
              {category.shortDescription}
            </p>
            <p className="text-[#5f9a4c] text-base leading-relaxed">
              {category.longDescription}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button className="px-8 py-3.5 rounded-xl bg-primary text-[#111b0d] font-bold text-sm shadow-lg hover:-translate-y-0.5 transition">
              Shop {category.title}
            </button>

            <button className="px-6 py-3.5 rounded-xl border border-[#d5e7cf] text-[#111b0d] font-bold text-sm hover:bg-[#eaf3e7] transition flex items-center gap-2">
              <PlayCircle size={20} />
              Watch Our Process
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-2/5 relative min-h-[300px]">
          <img
            src={category.coverImage}
            alt={category.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-black/5" />
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-[#f9fcf8] border-t border-[#eaf3e7] px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* {category.features.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-[#eaf3e7] group-hover:scale-110 transition">
                  {Icon && <Icon size={24} />}
                </div>
                <div>
                  <h4 className="font-bold text-[#111b0d] mb-1">
                    {f.title}
                  </h4>
                  <p className="text-sm text-[#5f9a4c] leading-snug">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
