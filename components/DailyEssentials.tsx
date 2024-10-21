import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {};

const DailyEssentials = (props: Props) => {
  return (
    <ul className="flex items-center justify-between border-b-2">
      <div>
        <li className="">
          Daily <span className="text-green-600">Essentials</span>
        </li>
        <li className="border-2 rounded-full border-green-600 w-full"></li>
      </div>
      <li className="flex items-center gap-1 text-xs">
        <span>View All</span> <ChevronRight className="h-4 w-4 mt-0.5" />
      </li>
    </ul>
  );
};

export default DailyEssentials;
