import React from "react";

export default function Products() {
  const items = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA88GgxOgbQS2JyDlv1I8E3Ya8-s24yuBZAyYzO6i5AkoTTB4sPn1pM2KNXRJOfOMcGBh-zXl-2RhGFH120adK28mSl0WZdAVNNT4z8Xm8NtDkqXzJfDkS0Tt0oaEhs-xRoDerg6wg4U0o5S8QsTuabwJoKUxXta2Czq24fMSxnp3evb9x1dOLLBktpfvpwi9Y8zH6ZoPspV6mWb522tMTfg5XAYe0hZSLQsnUMBe2B8Z2IGxB41i7lDQhZXX5-LpDurATF4jSBkOiG",
      title: "A2 Milk & Dairy",
      desc: "Ghee, Paneer, and pure A2 Milk.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT4Bbms3CkEk9ky797G01bRWjslBd_8cHWAvOJE6C0162Og68deaYHPF8UWLVMQ4vo16A13qNBPL7wDcrpEzHPK_iT_jm0dsd9AVIBIRH5Ehh0htiEIgkWvFsAQ4qC0I6xwYw6GUJa4eVtGbN909TIv_HrEz0Uhf_XB9Dq7XbTAQ3xU5MzIaxeJ4a45vhiuFkljXy93dnROHJz5tA7zZjmOx-FP81CIVk9NQUXLGCVcyQDggtYjjUAfh1kBGM8SE9Mg0pcQnZrqGIo",
      title: "Fresh Vegetables",
      desc: "Chemical-free greens from the garden.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByJwDtGEFGWU2jkM75JWXzdQGZ1ZqHUtobQTyzmLuWWIovXQT-DeT5CaYYn75Ay7Z4u3sRCaelR20Fxc4O5wHjnQhhFrPHMaxx2XFe_zXI3nYTNuJIsO5fUe6Zo7U99aoF2-hxKeDyZGcIVCao4QcEA3rqM-ADTTkVy5nPavlruwkieEW-ndKhgtLotCVwLV4TtFAVxl7GfdJ4MHZevHrL9nJaiG41Oo-qHYnka5smhxyqGoc5mzHHZfX_HB8FXv1HvnJYXfCoWBI2",
      title: "Country Chicken & Fish",
      desc: "Live fish and healthy poultry.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFBkV9d8FCEBm2CvqEvZ4Oy-e4H-bVlN-T0j7w86HoRN_wXUKAHG7CCJosYypeJwy214igjcoXLVLSzuGU8d0KmJXAARcDVMldoFKL-BlHXGeHWuOWePwu9RvK1Lh8lnSqWvA4pifzKJfFwFVHnByQu4r_0OfQpGCPyH0-a9JccWV9ojByH7dSqMJcrCKrBUak98D3M4gqo-e1NeOY3nAGZMyGbgB-U3omgzDktwPrNYcy2SpCsOxxAzQ6JDxPI65WcPpRGkf3ZdNj",
      title: "Spices, Nuts & More",
      desc: "Authentic flavors for your kitchen.",
      wide: true,
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu-dovww4n2IrNmvCNUSI22SACfEAQRFOyRXs6iUJqmKSm4cD3kqppYNBEFnc8eesBkN7Y6VjZEErpviN715nfI-hDQ-i0JmMDcNJbuUmDSIReUx60xJRkgd0m_GwTtp7aGGQ8fg8iLRxr0Qhdo_as1kUmlNVyVMDhGpKKHwqhXbKW2muqIMg7vAodwLHchNSStHzt4-xq9Xbbrxk0EHX12eL2fiEqw8vsfLHc96-6drEopoXP4gV81Cmf1zxkX7YXxsqkfni71RlP",
      title: "Earthworm & Soil Care",
      desc: "Production of earthworms for farming.",
    },
  ];

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

          {items.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-80 ${
                item.wide ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-display font-bold text-2xl mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
                <a className="text-secondary font-bold text-sm mt-4 group-hover:text-white" href="#">
                  Shop Now →
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
