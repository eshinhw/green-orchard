"use client";
import useCart from "@/app/store";
import React, { useState } from "react";

type Props = {
  price: number;
  currProduct: any;
  productInfo: any;
};

export default function QuantityMenu(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(props.price);
  const { unit_amount: cost, product: productInfo } = props.currProduct;
  const { name: name, id: id } = productInfo;
  console.log(props.productInfo);
  const addItem = useCart((state: any) => state.addItem);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
      setPrice(price * quantity);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(price * quantity);
    }
  };

  const calcPrice = (quantity: number) => {
    return quantity * props.price;
  };

  const addToCart = () => {
    const newItem = {
      id,
      name,
      quantity,
      cost: cost / 100,
      img: props.productInfo.images[0],
    };
    addItem({ newItem });
    console.log("Item added to cart!");
  };

  return (
    <>
      <div className="flex flex-col gap-5 mt-10">
        <div className="flex flex-row justify-between gap-10">
          <div className="flex flex-row gap-5 items-center">
            <button
              className="bg-black text-white px-4 py-1"
              onClick={decrease}
            >
              -
            </button>
            {quantity}
            <button
              className="bg-black text-white px-4 py-1"
              onClick={increase}
            >
              +
            </button>
          </div>
          <div className="py-1 text-xl">$ {calcPrice(quantity)}</div>
        </div>
        <div className="flex flex-row justify-end mt-4">
          <button className="bg-black text-white px-4 py-1" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
