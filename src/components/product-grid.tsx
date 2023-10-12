"use client";
import useCart from "@/app/store";
import Link from "next/link";
import React from "react";

export default function ProductGrid(props: any) {
  const { product } = props;
  const { unit_amount: cost, product: productInfo } = product;
  const { id: productId, name: name } = productInfo;
  const setProduct = useCart((state) => state.setProduct);
  const onProductClick = () => {
    const newProduct = {
      name,
      productId,
      cost,
      productInfo,
    };
    setProduct({ newProduct });
  };
  return (
    <Link href={`/product/${productId}`} onClick={onProductClick}>
      <div className="flex flex-col shadow bg-white hover:shadow-xl cursor-pointer">
        <img
          className="w-full h-full object-cover"
          src={productInfo.images[0]}
        ></img>
        <div className="flex flex-row items-center justify-between p-4 gap-4">
          <h3>{name}</h3>
          <p>$ {cost / 100}</p>
        </div>
      </div>
    </Link>
  );
}
