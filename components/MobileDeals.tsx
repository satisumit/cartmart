import React from "react";
import { ChevronRight } from "lucide-react";
import Card from "./ProductCard";
import ProductCards from "./ProductCards";

const MobileDeals = () => {
  return (
    <>
      <ul className="flex items-center justify-between border-b-2">
        <div>
          <li className="">
            Grab the best deals on{" "}
            <span className="text-green-600">Smartphones</span>
          </li>
          <li className="border-2 rounded-full border-green-600 w-full"></li>
        </div>

        <li className="flex items-center gap-1 text-xs">
          <span>View All</span> <ChevronRight className="h-4 w-4 mt-0.5" />
        </li>
      </ul>
      <ProductCards />
    </>
  );
};

export default MobileDeals;
