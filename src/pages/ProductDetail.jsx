import { useParams } from "react-router-dom";
import { catalogData } from "../data/catalogData";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import PricingCard from "../components/PricingCard";
import ProductTabs from "../components/ProductTabs";
import ReviewsSection from "../components/ReviewsSection";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductDetail() {
  const {  productId } = useParams();

  let category = null;
  let product = null;
  for (const cat of catalogData) {
    const foundProduct = cat.products.find((p) => p.id === productId);
    if (foundProduct) {
      category = cat;
      product = foundProduct;
      break;
    }
  }

  console.log("ProductDetail - productId:", productId);
  console.log("ProductDetail - category:", category);
  console.log("ProductDetail - product:", product);

  if (!category || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-black">
          Product not found
        </p>
      </div>
    );
  }

  return (
    <main className="bg-[#f6f8f6] min-h-screen">
      <div className="max-w-[1200px] text-black mx-auto px-4 py-10 space-y-12">
        {/* BREADCRUMBS */}
        {/* <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: category.title, href: "/products" },
            { label: product.title },
          ]}
        /> */}

        {/* PRODUCT MAIN */}
        <div className="flex flex-col lg:flex-row gap-12">
          <ProductGallery image={[product.image]} />

          <div className="lg:w-[440px] space-y-6">
            <ProductInfo product={product} />
            <PricingCard product={product} />
          </div>
        </div>

        {/* TABS */}
        <ProductTabs
          tabs={[
            {
              title: "Description",
              content: product.desc,
            },
            {
              title: "Category Info",
              content: category.longDescription,
            },
          ]}
        />

    

        {/* RELATED PRODUCTS */}
        <RelatedProducts products={category.related} />
      </div>
    </main>
  );
}
