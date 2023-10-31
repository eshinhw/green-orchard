import React from "react";
import Orchard1 from "../../public/orchard/orchard-1.jpg";
import Orchard2 from "../../public/orchard/orchard-2.jpg";
import Orchard3 from "../../public/orchard/orchard-3.jpg";
import QuotationMark from "../../public/quotation.png";
import DeliveryTruck from "../../public/delivery-truck.png";
import CustomerService from "../../public/customer-service.png";
import KiwiImg from "../../public/fruits/kiwi-homepage.jpg";
import BananaImg from "../../public/fruits/banana-homepage.jpg";
import AppleImg from "../../public/fruits/apple-homepage.jpg";
import Image from "next/image";

import { GiFruitTree } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";

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
    <section>
      <h1 className="text-2xl text-center my-10">Welcome to Green Orchard!</h1>
      <div className="bg-green-100 w-full p-10">
        <div className="flex flex-row mx-5 my-5 gap-2">
          <Image
            src={Orchard1}
            alt="orchard-1"
            className="basis-1/3 w-1/5 h-48 object-cover"
          />
          <Image
            src={Orchard2}
            alt="orchard-2"
            className="basis-1/3 w-1/5 h-48 object-cover"
          />
          <Image
            src={Orchard3}
            alt="orchard-3"
            className="basis-1/3 w-1/5 h-48 object-cover"
          />
        </div>
      </div>
      {/* With icons */}
      <div className="block w-2/3 m-auto bg-slate-100 my-10">
        <div className="grid p-5">
          <div className="flex flex-row gap-10">
            <GiFruitTree className="w-24 h-24 object-cover text-green-400" />
            <div className="grid">
              <h3>Always Fresh</h3>
              <p>
                Our trombones use the shiniest brass which is sourced locally.
                This will increase the longevity of your purchase.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <TbTruckDelivery className="w-24 h-24 object-cover text-green-400" />
            <div className="grid">
              <h3>Fast Shipping</h3>
              <p>
                We make sure you recieve your trombone as soon as we have
                finished making it. We also provide free returns if you are not
                satisfied.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <RiCustomerServiceFill className="w-24 h-24 object-cover text-green-400" />
            <div className="grid">
              <h3>Fast Shipping</h3>
              <p>
                We make sure you recieve your trombone as soon as we have
                finished making it. We also provide free returns if you are not
                satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product categories */}
      <h1 className="text-xl text-center my-10">
        What Makes Green Orchard Special?
      </h1>
      <div className="flex flex-row gap-2 bg-red-300 m-10 p-10">
        <Image
          src={KiwiImg}
          alt="orchard-1"
          className="basis-1/3 w-1/5 max-h-min rounded-xl"
        />
        <Image
          src={BananaImg}
          alt="orchard-2"
          className="basis-1/3 w-1/5 max-h-min rounded-xl"
        />
        <Image
          src={AppleImg}
          alt="orchard-3"
          className="basis-1/3 w-1/5 max-h-min rounded-xl"
        />
      </div>

      {/* Testimonials */}
      <div className="bg-orange-100 p-10">
        <h1 className="text-2xl text-center">Testimonials</h1>
        <div className="my-10 flex flex-row gap-5 justify-evenly mx-48">
          <div className="flex flex-col justify-start gap-5 w-1/3 h-auto">
            <div className="h-12">
              <Image
                src={QuotationMark}
                width={48}
                height={48}
                alt="quotation"
              />
            </div>
            <p>
              Thank you for such wonderful fruit, I feel like I have a surprise
              coming every Wednesday and I really look forward to it. It is a
              bright spot mid week. Looking forward to this Wednesday's cart!
              Thank you!
            </p>
            <p>James Garfield</p>
          </div>
          <div className="flex flex-col justify-start gap-5 w-1/3 h-auto">
            <div className="h-12">
              <Image
                src={QuotationMark}
                width={48}
                height={48}
                alt="quotation"
              />
            </div>
            <p>
              Thank you for such wonderful fruit, I feel like I have a surprise
              coming every Wednesday and I really look forward to it. It is a
              bright spot mid week. Looking forward to this Wednesday's cart!
              Thank you!
            </p>
            <p>James Garfield</p>
          </div>
          <div className="flex flex-col justify-start gap-5 w-1/3 h-auto">
            <div className="h-12">
              <Image
                src={QuotationMark}
                width={48}
                height={48}
                alt="quotation"
              />
            </div>
            <p>
              Thank you for such wonderful fruit, I feel like I have a surprise
              coming every Wednesday and I really look forward to it. It is a
              bright spot mid week. Looking forward to this Wednesday's cart!
              Thank you!
            </p>
            <p>James Garfield</p>
          </div>
        </div>
      </div>

      {/* Email sign up */}
      <div className="flex flex-col gap-5 border-2 p-16 my-24 mx-48 h-auto">
        <h1 className="text-center text-3xl">Sign up for our newsletter!</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="border-2 mx-auto"
        />
        <button className="py-2 px-6 border-2 bg-green-100 mx-auto">
          Submit
        </button>
      </div>
    </section>
  );
}
