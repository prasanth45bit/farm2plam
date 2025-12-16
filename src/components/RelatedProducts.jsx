export default function RelatedProducts({ products }) {
  return (
    <section className="pt-10">
      <h3 className="text-2xl font-bold mb-6">You May Also Like</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-[#f0f5ed] p-4 rounded-xl">
            <h4 className="font-bold">{p.name}</h4>
            <p className="text-[#5f9a4c]">${p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
