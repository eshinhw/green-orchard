import Link from "next/link";
import React from "react";

export default function ProductGrid(props: any) {
  const { product } = props;
  const { unit_amount: cost, product: productInfo } = product;
  const { id: productId, name: name } = productInfo;
  return (
    <Link href={`/product/${productId}`}>
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

// {
//   id: 'price_1Nz6LlL9XXpuYWUZJkgYocaQ',
//   object: 'price',
//   active: true,
//   billing_scheme: 'per_unit',
//   created: 1696807529,
//   currency: 'cad',
//   custom_unit_amount: null,
//   livemode: false,
//   lookup_key: null,
//   metadata: {},
//   nickname: null,
//   product: {
//     id: 'prod_OmfhrEn68mT403',
//     object: 'product',
//     active: true,
//     attributes: [],
//     created: 1696807529,
//     default_price: 'price_1Nz6LlL9XXpuYWUZJkgYocaQ',
//     description: null,
//     features: [],
//     images: [Array],
//     livemode: false,
//     metadata: {},
//     name: 'Banana',
//     package_dimensions: null,
//     shippable: null,
//     statement_descriptor: null,
//     tax_code: null,
//     type: 'service',
//     unit_label: null,
//     updated: 1696807530,
//     url: null
//   },
//   recurring: null,
//   tax_behavior: 'unspecified',
//   tiers_mode: null,
//   transform_quantity: null,
//   type: 'one_time',
//   unit_amount: 2500,
//   unit_amount_decimal: '2500'
// }
