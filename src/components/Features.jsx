import React from "react";
import { Leaf, Handshake, Truck } from "lucide-react";

export default function Features({ id }) {
  const features = [
    { icon: Leaf, title: "100% Organic", text: "Grown without chemicals for a healthier lifestyle directly from mother earth." },
    { icon: Handshake, title: "Zero Brokerage", text: "Directly from farmers to your palm. No middlemen, fair prices for everyone." },
    { icon: Truck, title: "Farm Fresh Delivery", text: "Fresh fruits, vegetables, and A2 milk products delivered straight to your door." },
  ];

  return (
    <section id={id} className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((item, i) => {
            const IconComponent = item.icon;
            const colors = ["bg-green-100", "bg-yellow-100", "bg-blue-100"];
            const textColors = ["text-primary", "text-secondary", "text-blue-600"];
            
            return (
              <div key={i} className="p-8 rounded-2xl bg-background-light hover:shadow-lg transition duration-300 group">
                <div className={`w-16 h-16 ${colors[i]} ${textColors[i]} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-black">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
