import Link from "next/link";
import React from "react";
import { BsCartFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="sticky top-0 p-6 bg-white border-b border-solid border-lime-800 shadow-lg z-50 text-black text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between">
      <Link href={"/"}>
        <h1 className="uppercase cursor-pointer hover:scale-110">
          Green Orchard
        </h1>
      </Link>
      <div className="flex flex-row gap-10 items-center">
        <Link href={"/products"}>
          <h5 className="text-xl">Products</h5>
        </Link>
        <Link href={"/cart"}>
          <BsCartFill className="cursor-pointer hover:text-lime-800" />
        </Link>
      </div>
    </header>
  );
}
