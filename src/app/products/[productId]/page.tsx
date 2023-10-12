import { getStripeProductById } from "@/app/service/stripe";
import QuantityMenu from "@/components/quantity-menu";
import React from "react";

import { BiWorld } from "react-icons/bi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaNutritionix } from "react-icons/fa";

async function getFruityViceData(fruitName: string) {
  const res = await fetch(`https://www.fruityvice.com/api/fruit/${fruitName}`);
  if (!res.ok) throw new Error("Failed to fetch data from fruityvice");
  return res.json();
}

export default async function IndividualProductPage({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  const currProduct = await getStripeProductById(params.productId);
  const { unit_amount: cost, product: productInfo } = currProduct;
  const { name: name } = productInfo;
  const fruitData = await getFruityViceData(name);
  return (
    <div className="max-w-[1100px] w-full mx-auto p-4">
      <div className="flex flex-row">
        {/* container-left */}
        <div className="w-1/2 my-5">
          <img
            className="object-cover"
            src={(currProduct.product as any).images[0]}
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-3xl my-5">{name}</h3>
          <div className="flex flex-row gap-4">
            <div className="w-1/2">
              <p>Description</p>
              <div className="flex items-center gap-1">
                <BiSolidCategoryAlt />
                {fruitData.genus}
              </div>
              <div className="flex items-center gap-1">
                <BiWorld />
                {fruitData.family}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-2">
                <FaNutritionix />
                <h1>Nutrition Facts</h1>
              </div>
              <p>Calories: {fruitData.nutritions.calories} cal</p>
              <p>Fat: {fruitData.nutritions.fat} g</p>
              <p>Sugar: {fruitData.nutritions.sugar} g</p>
              <p>Carbohydrates: {fruitData.nutritions.carbohydrates} g</p>
              <p>Protein: {fruitData.nutritions.protein} g</p>
            </div>
          </div>
          <QuantityMenu price={cost! / 100} />
        </div>
      </div>
    </div>
  );
}
