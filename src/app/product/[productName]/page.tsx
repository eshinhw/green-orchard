import React from "react";

export default function ProductPage({
  params,
}: {
  params: { productName: string };
}) {
  return <div>{params.productName}</div>;
}
