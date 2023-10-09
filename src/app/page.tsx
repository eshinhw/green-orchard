import ProductGrid from "@/components/product-grid";
import Stripe from "stripe";

async function getProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2023-08-16",
  });

  const res = await stripe.prices.list({
    expand: ["data.product"],
  });

  const products = res.data;
  return products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="p-4 flex flex-col">
      <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, productId) => (
          <ProductGrid
            id={product.id}
            price={product.unit_amount ?? 0}
            name={(product.product as any).name}
            productImage={(product.product as any).images[0]}
            key={productId}
          />
        ))}
      </div>
    </main>
  );
}
