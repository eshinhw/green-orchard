"use client";
import React from "react";
import { Circles } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Circles
        height="80"
        width="80"
        color="#A9A9A9"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
