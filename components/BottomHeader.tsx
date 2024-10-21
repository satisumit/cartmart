import React, { useState } from "react";
import {
  Menubar,
  MenubarTrigger,
  MenubarContent,
  MenubarMenu,
  MenubarItem,
} from "@/components/ui/menubar";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};
const Categories = [
  {
    id: 1,
    name: "Groceries",
    subcategories: [
      { id: 101, name: "Fruits & Vegetables" },
      { id: 102, name: "Dairy & Eggs" },
      { id: 103, name: "Snacks & Beverages" },
      { id: 104, name: "Meat & Seafood" },
      { id: 105, name: "Bakery" },
      { id: 106, name: "Frozen Foods" },
    ],
  },
  {
    id: 2,
    name: "Electronics",
    subcategories: [
      { id: 201, name: "Mobile Phones" },
      { id: 202, name: "Laptops" },
      { id: 203, name: "Televisions" },
      { id: 204, name: "Headphones" },
      { id: 205, name: "Cameras" },
      { id: 206, name: "Wearable Technology" },
    ],
  },
  {
    id: 3,
    name: "Home & Kitchen",
    subcategories: [
      { id: 301, name: "Furniture" },
      { id: 302, name: "Cookware & Bakeware" },
      { id: 303, name: "Home Decor" },
      { id: 304, name: "Bedding & Linens" },
      { id: 305, name: "Storage & Organization" },
      { id: 306, name: "Cleaning Supplies" },
    ],
  },
  {
    id: 4,
    name: "Books",
    subcategories: [
      { id: 401, name: "Fiction" },
      { id: 402, name: "Non-Fiction" },
      { id: 403, name: "Children's Books" },
      { id: 404, name: "Educational" },
      { id: 405, name: "Comics" },
      { id: 406, name: "Biographies" },
    ],
  },
  {
    id: 5,
    name: "Sports & Fitness",
    subcategories: [
      { id: 501, name: "Fitness Equipment" },
      { id: 502, name: "Outdoor Sports" },
      { id: 503, name: "Gym Accessories" },
      { id: 504, name: "Sportswear" },
      { id: 505, name: "Yoga & Meditation" },
      { id: 506, name: "Team Sports" },
    ],
  },
  {
    id: 6,
    name: "Fashion",
    subcategories: [
      { id: 601, name: "Men's Fashion" },
      { id: 602, name: "Women's Fashion" },
      { id: 603, name: "Kids' Fashion" },
      { id: 604, name: "Footwear" },
      { id: 605, name: "Accessories" },
      { id: 606, name: "Jewelry" },
    ],
  },
  {
    id: 7,
    name: "Toys & Games",
    subcategories: [
      { id: 701, name: "Action Figures" },
      { id: 702, name: "Board Games" },
      { id: 703, name: "Outdoor Play" },
      { id: 704, name: "Educational Toys" },
      { id: 705, name: "Video Games" },
      { id: 706, name: "Dolls & Stuffed Toys" },
    ],
  },
  {
    id: 8,
    name: "Others",
    subcategories: [
      { id: 801, name: "Office Supplies" },
      { id: 802, name: "Pet Supplies" },
      { id: 803, name: "Musical Instruments" },
      { id: 804, name: "Gifts" },
      { id: 805, name: "Stationery" },
      { id: 806, name: "Party Supplies" },
    ],
  },
  {
    id: 9,
    name: "Beauty & Personal Care",
    subcategories: [
      { id: 901, name: "Makeup" },
      { id: 902, name: "Skincare" },
      { id: 903, name: "Haircare" },
      { id: 904, name: "Fragrances" },
      { id: 905, name: "Bath & Body" },
      { id: 906, name: "Men's Grooming" },
    ],
  },
];

const BottomHeader = () => {
  return (
    <section className="text-gray-700 relative">
      <Menubar className="flex justify-between px-4 sm:px-6 lg:px-20 py-3 overflow-x-auto overflow-y-hidden scrollbar-hide">
        {" "}
        <Carousel className="w-full">
          <CarouselContent className="flex justify-between">
            {Categories.map((category) => (
              <CarouselItem key={category.id} className="basis-auto">
                <MenubarMenu>
                  <MenubarTrigger className="bg-green-300 bg-opacity-30 px-3 sm:px-5 py-1 rounded-full font-base text-xs flex items-center justify-between text-nowrap whitespace-nowrap focus:bg-green-300 focus:text-accent-foreground data-[state=open]:bg-green-300 data-[state=open]:text-accent-foreground">
                    <p>{category.name}</p>
                    <ChevronDown className="text-green-600 w-4 h-4 sm:w-5 sm:h-5 pt-1 ml-1" />
                  </MenubarTrigger>

                  <MenubarContent className="bg-green-300 p-0 rounded-xl absolute left-0 w-full mt-2">
                    {category.subcategories.map((subcategory) => (
                      <MenubarItem
                        key={subcategory.id}
                        className="bg-green-100 py-2"
                      >
                        {subcategory.name}
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </Menubar>
    </section>
  );
};

export default BottomHeader;
