import React from "react";
import ProductDeal from "./ProductDeal";

type Props = {};

const ProductDeals = (props: Props) => {
  return (
    <div className="flex justify-between">
      <ProductDeal></ProductDeal>
      <ProductDeal></ProductDeal>
      <ProductDeal></ProductDeal>
      <ProductDeal></ProductDeal>
      <ProductDeal></ProductDeal>
    </div>
  );
};

export default ProductDeals;
