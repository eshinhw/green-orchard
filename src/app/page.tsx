import React from "react";
import Orchard1 from "../../public/orchard/orchard-1.jpg";
import Orchard2 from "../../public/orchard/orchard-2.jpg";
import Orchard3 from "../../public/orchard/orchard-3.jpg";
import KiwiImg from "../../public/fruits/kiwi-homepage.jpg";
import BananaImg from "../../public/fruits/banana-homepage.jpg";
import AppleImg from "../../public/fruits/apple-homepage.jpg";
import Image from "next/image";

export default function HomePage() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl text-center my-10">Welcome to Papas Orchard!</h1>
      <div className="flex flex-row mx-5 my-5 gap-2">
        <Image
          src={Orchard1}
          alt="orchard-1"
          className="basis-1/3 w-1/5 max-h-max"
        />
        <Image
          src={Orchard2}
          alt="orchard-2"
          className="basis-1/3 w-1/5 max-h-full"
        />
        <Image
          src={Orchard3}
          alt="orchard-3"
          className="basis-1/3 w-1/5 h-1/2"
        />
      </div>
      <h1 className="text-xl text-center my-10">ALWAYS FRESH!</h1>
      <div className="flex flex-row mx-5 my-5 gap-2">
        <Image
          src={KiwiImg}
          alt="orchard-1"
          className="basis-1/3 w-1/5 max-h-min"
        />
        <Image
          src={BananaImg}
          alt="orchard-2"
          className="basis-1/3 w-1/5 max-h-min"
        />
        <Image
          src={AppleImg}
          alt="orchard-3"
          className="basis-1/3 w-1/5 max-h-min"
        />
      </div>
    </div>
  );
}
