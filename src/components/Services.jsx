import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

        <img
          className="rounded-3xl shadow-2xl rotate-3 border-4 border-white/20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxFSfc90c_6Vel3-XpOW8xKySsaTspONnjY-BflP6xBOeuGxKcx2wxGulwQeJcFYb9H6AsXmKFNhyGBn9xa1zEKpIZAhbkUwVn_JZcZP4AV9G6GKD01Pfxm17lOzJm7sf5QaT8A7b9Eggh2yLmMwjBXcaU8PzTQbrb9eacFqgipXPhe1YKxxM7FOPoHKQfCjjuI5Ri5BmdKmGEvKVHqBPtM3pWBbX48XklI-f-qGSgGdlN_39Y4aO-phL7OOg3Yhc45LET65w95f3u"
          alt="Smart Farming"
        />

        <div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Smart Agriculture
          </span>

          <h2 className="text-4xl font-display font-bold mt-4 mb-6">
            Modern Farming with Mobile Control
          </h2>

          <p className="text-lime-100 leading-relaxed mb-8">
            We don't just sell produce; we innovate. Our farm leasing and development services
            include automation, valves, motors, and soil health IoT systems.
          </p>

          <ul className="space-y-4 mb-8">
            {["Farm Leasing & Development", "Mobile App Automation", "IoT Sensors for Soil Health"].map(
              (item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
          <button
  className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg mr-4 hover:-translate-y-0.5 transition"
  onClick={() => navigate("/modernfarming")}
>
  Learn Technology
</button>

        </div>

      </div>
    </section>
  );
}
