import { productData } from "../data/productData";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import PricingCard from "../components/PricingCard";
import ProductTabs from "../components/ProductTabs";
import ReviewsSection from "../components/ReviewsSection";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductDetail() {
  return (
    <main className="bg-[#f6f8f6] min-h-screen">
      <div className="max-w-[1200px] text-black mx-auto px-4 py-10 space-y-12">
        <Breadcrumbs items={productData.breadcrumbs} />

        <div className="flex flex-col lg:flex-row gap-12">
          <ProductGallery images={productData.product.images} />

          <div className="lg:w-[440px] space-y-6">
            <ProductInfo product={productData.product} />
            {/* <PricingCard product={productData.product} /> */}
          </div>
        </div>

        <ProductTabs tabs={productData.tabs} />
        <ReviewsSection reviews={productData.reviews} />
        <RelatedProducts products={productData.related} />
      </div>
    </main>
  );
}
