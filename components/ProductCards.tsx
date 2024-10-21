import React from "react";
import ProductCard from "./ProductCard";

type Props = {};

const ProductCards = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between py-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductCards;
