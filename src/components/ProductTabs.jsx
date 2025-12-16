export default function ProductTabs({ tabs }) {
  return (
    <section className="border-t pt-8">
      <h3 className="text-xl font-bold mb-4">Product Description</h3>
      <p className="opacity-80 max-w-3xl">{tabs.description}</p>
    </section>
  );
}
