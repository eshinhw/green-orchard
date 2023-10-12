import ProductGrid from "@/components/product-grid";
import { getStripeProducts } from "../service/stripe";

export default async function HomePage() {
  const products = await getStripeProducts();
  return (
    <main className="p-4 flex flex-col">
      <div className="max-w-[1100px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, idx) => (
          <ProductGrid product={product} key={idx} />
        ))}
      </div>
    </main>
  );
}
