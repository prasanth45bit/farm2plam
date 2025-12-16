export default function ProductInfo({ product }) {
  return (
    <div className="space-y-4">
      <span className="text-sm text-[#5f9a4c] font-medium">
        🌱 {product.badge}
      </span>

      <h1 className="text-3xl font-bold">{product.title}</h1>

      <p className="opacity-80">{product.description}</p>
    </div>
  );
}
