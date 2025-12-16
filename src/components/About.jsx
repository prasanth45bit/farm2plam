import React from "react";
import { Users } from "lucide-react";

export default function About() {
  const stats = [
    { num: "3+", label: "Years Active" },
    { num: "100%", label: "Chemical Free" },
    { num: "24h", label: "Fresh Delivery" },
    { num: "50+", label: "Farmer Partners" },
  ];

  return (
    <section id="about" className="py-24 bg-surface-light text-center">
      <div className="max-w-4xl mx-auto px-4">

        <div className="mb-10">
          <div className="text-4xl text-primary bg-primary/10 p-5 rounded-full inline-flex">
            <Users size={40} />
          </div>

          <h2 className="mt-6 text-4xl font-display font-bold text-black">
            <span className="font-display font-bold text-blue-900">
              Farm<span className="text-red-500">2</span>Palm
            </span>{" "}
            Philosophy
          </h2>


          <p className="text-xl text-black mt-4">
            We bridge the gap between farmers and consumers, ensuring fair pricing and fresh,
            chemical-free produce.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="p-4 bg-background-light rounded-xl border border-gray-200"
            >
              <h4 className="text-3xl font-bold text-primary">{s.num}</h4>
              <p className="text-sm text-black">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
