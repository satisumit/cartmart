import { ChevronRight } from "lucide-react";
import React from "react";
import ProductDeals from "./ProductDeals";

type Props = {};

const TopCategories = (props: Props) => {
  return (
    <>
      <ul className="flex items-center justify-between border-b-2">
        <div>
          <li className="">
            Shop from
            <span className="text-green-600">Top Categories</span>
          </li>
          <li className="border-2 rounded-full border-green-600 w-full"></li>
        </div>

        <li className="flex items-center gap-1 text-xs">
          <span>View All</span> <ChevronRight className="h-4 w-4 mt-0.5" />
        </li>
      </ul>
      <ProductDeals></ProductDeals>
    </>
  );
};

export default TopCategories;
