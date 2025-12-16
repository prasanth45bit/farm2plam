export default function PricingCard({ product }) {
  return (
    <div className="border rounded-xl p-6 bg-white space-y-4 sticky top-6">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-[#5f9a4c]">Price</p>
          <p className="text-4xl font-black">
            ${product.price}
            <span className="text-sm font-normal"> / {product.unit}</span>
          </p>
        </div>
        <span className="text-xs bg-[#eaf3e7] px-3 py-1 rounded-full">
          {product.stock}
        </span>
      </div>

      {/* <button className="w-full h-12 bg-primary font-bold rounded-lg">
        Add to Cart
      </button> */}
    </div>
  );
}
