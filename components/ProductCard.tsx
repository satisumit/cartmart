import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div>
      <Card className="w-52 after:w-10 after:h-10 after:bg-green-500 relative after:absolute after:top-0 after:right-0 overflow-clip after:rounded-bl-2xl after:content-['50%_OFF'] after:text-xs after:text-center after:text-white after:flex after:items-center after:justify-center hover:outline-green-600 hover:border-green-600 hover:outline-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <CardContent className="bg-green-300 bg-opacity-15">
          <div>
            <img src="/img/Phone1.png" alt="" />
          </div>
        </CardContent>
        <CardFooter className="px-2 pt-5 pb-0 flex flex-col justify-start items-start">
          <p className="text-gray-800 text-sm text-left">
            Xiaomi Redmi Note 11
          </p>
          <p className="flex items-center gap-2 pb-2">
            <span className="text-sm">₹ 9,999</span>{" "}
            <span className="text-gray-500 line-through text-xs">₹ 11,999</span>
          </p>
          <div className="text-green-500 text-xs border-t py-2 w-full">
            <p className="">Save ₹ 1,000</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
