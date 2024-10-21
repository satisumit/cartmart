import React from "react";

type Props = {};

const ProductDeal = (props: Props) => {
  return (
    <div className="w-40 flex flex-col items-center justify-start py-5 ">
      <div className="p-5 rounded-full bg-green-300 w-max bg-opacity-15 flex items-center justify-center hover:border-green-400 border border-transparent hover:shadow-lg transition-all duration-300 cursor-pointer">
        <img src="/img/Phone1.png" alt="" className="w-20 h-20" />
      </div>
      <p className="pt-2 text-gray-800 text-sm">Mobile</p>
    </div>
  );
};

export default ProductDeal;
