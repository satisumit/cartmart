import React from "react";
import { MapPin, Truck, BadgePercent } from "lucide-react";

const TopHeader: React.FC = () => {
  return (
    <section className=" flex-col sm:flex-row items-center justify-between px-4 sm:px-20 py-2 text-xs sm:text-sm text-gray-700 text-opacity-80 bg-green-300 bg-opacity-20 md:flex hidden">
      <div className="mb-2 sm:mb-0">
        <p>Welcome to CartMart!!</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
        <div className="flex items-center justify-center gap-1 sm:border-r sm:border-green-500 sm:pr-5">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-700" />
          <p>Deliver here Location</p>
        </div>
        <div className="flex items-center justify-center gap-1 sm:border-r sm:border-green-500 sm:pr-5">
          <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-green-700" />
          <p>Track Your Order</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <BadgePercent className="w-3 h-3 sm:w-4 sm:h-4 text-green-700" />
          <p>Offers</p>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
