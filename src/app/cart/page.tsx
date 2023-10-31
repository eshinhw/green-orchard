"use client";
import React from "react";
import useCart from "../store";

export default function CartPage() {
  const cartItems = useCart((state) => (state as any).cart);
  const removeItem = useCart((state) => (state as any).removeItem);
  const total = cartItems.reduce(
    (sum: number, { cost, quantity }: { cost: number; quantity: number }) =>
      sum + cost * quantity,
    0
  );
  console.log(total);
  const removeFromCart = () => {
    console.log("Item removed.");
  };
  return (
    <>
      <h1 className="text-2xl my-10 text-center">Your Cart</h1>
      {/* If cart is empty */}
      {!cartItems.length && (
        <div className="text-center my-5">
          <p>Your cart is currently empty.</p>
          <p>Continue browsing here.</p>
        </div>
      )}
      {/* If cart has at least one item */}
      {cartItems.length && (
        <div className="flex flex-row p-6">
          <div className="w-2/3 pl-5">
            {cartItems.map((item: any, idx: number) => (
              <div className="flex flex-row border-2 w-2/3 mb-5" key={idx}>
                <div className="w-1/2 flex items-center justify-center border-r-2">
                  <img src={item.img} className="w-20 h-20" />
                </div>
                <div className="w-1/2 ml-5 flex flex-col gap-5">
                  {/* Item name and price */}
                  <div className="flex flex-row justify-between mx-10 items-center mt-5">
                    <h2 className="text-xl">{item.name}</h2>
                    <p className="text-lg">$ {item.cost * item.quantity}</p>
                  </div>
                  {/* Quantity control */}
                  <div>Quantity: {item.quantity}</div>
                  {/* <div className="flex flex-row justify-center items-center gap-5">
                    <button className="bg-black px-5 text-white">-</button>
                    <p>{item.quantity}</p>
                    <button className="bg-black px-5 text-white">+</button>
                  </div> */}
                  <button onClick={removeFromCart} className="hover:bg-red-600">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-2xl">Subtotal: $ {total}</div>
            <button className="py-2 px-4 bg-black text-white">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
