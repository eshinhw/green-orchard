import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="p-5 border-t-2 border-solid flex items-center justify-between px-5">
      <p className="text-stone-400">
        © {new Date().getFullYear()} Papas Orchard. All right reserved.
      </p>
      <div className="flex flex-row justfy-between gap-8">
        <Link href={"https://facebook.com"} target="_blank">
          <BsFacebook className="cursor-pointer" />
        </Link>
        <Link href={"https://instagram.com"} target="_blank">
          <BsInstagram className="cursor-pointer" />
        </Link>
        <Link href={"https://youtube.com"} target="_blank">
          <BsYoutube className="cursor-pointer" />
        </Link>
      </div>
    </footer>
  );
}
