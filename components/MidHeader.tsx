import React from "react";
import {
  ShoppingBag,
  Search,
  Logs,
  User,
  ShoppingCart,
  Menu,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const MidHeader = () => {
  return (
    <section className="font-poppins">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-3 gap-4">
        <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start gap-4">
          <div className="flex items-center gap-2">
            <Menu className="lg:hidden text-green-600" />
            <ShoppingBag className="text-green-600 w-8 h-8 sm:w-10 sm:h-10 p-2 bg-green-300 bg-opacity-30 rounded-[10px]" />
            <p className="text-green-600 font-semibold text-xl sm:text-2xl">
              CartMart
            </p>
          </div>
          <div className="flex lg:hidden items-center gap-3 sm:gap-5">
            <div className="flex items-center pr-2 sm:pr-4 border-r gap-2 border-green-500">
              <User className="text-green-600" />
              <p className="text-sm hidden sm:block">Login/SignUp</p>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="text-green-600" />
              <p className="text-sm hidden sm:block">Cart</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center gap-2 border px-3 py-1 bg-green-300 bg-opacity-20 border-green-300 rounded-[8px] relative">
          <Search className="text-green-600 cursor-pointer" />
          <Input
            type="text"
            placeholder="Search essentials, groceries and more ..."
            className="border-0 border-green-300 bg-transparent rounded-lg px-2 py-1 text-sm text-gray-800 outline-none placeholder:text-gray-500 placeholder:overflow-hidden placeholder:whitespace-nowrap w-full pr-10  "
          />
          <Logs className="text-green-600 absolute right-4 bg-transparent top-1/2 transform -translate-y-1/2 cursor-pointer" />
        </div>
        <div className="hidden lg:flex items-center gap-5 font-semibold text-gray-700">
          <div className="flex items-center pr-4 border-r gap-2 border-green-500">
            <User className="text-green-600" />
            <p>Login/SignUp</p>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-green-600" />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidHeader;
