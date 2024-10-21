import React from "react";
import DailyEssentials from "./DailyEssentials";
import TopBrands from "./TopBrands";
import TopCategories from "./TopCategories";
import MobileDeals from "./MobileDeals";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className="py-5">
      <MobileDeals />
      <TopCategories />
      <TopBrands />
      <DailyEssentials />
    </div>
  );
};

export default Content;
