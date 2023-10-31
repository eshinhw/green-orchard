import Stripe from "stripe";

export async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2023-08-16",
  });

  const res = await stripe.prices.list({
    expand: ["data.product"],
  });

  const products = res.data;
  return products;
}

export async function getStripeProductById(prodId: string) {
  const products = await getStripeProducts();
  const result = products.filter((prod) => (prod.product as any).id === prodId);
  return result[0];
}
