"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {};

const HeroImages = [
  {
    id: 1,
    src: "./img/hero2.png",
  },
  {
    id: 2,
    src: "./img/hero1.png",
  },
  {
    id: 3,
    src: "./img/hero3.png",
  },
];

const HeroSlider = (props: Props) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <CarouselContent>
          {HeroImages.map((image) => (
            <CarouselItem key={image.id}>
              <img
                src={image.src}
                alt="hero"
                className="w-full h-36 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="opacity-0 md:opacity-100">
          <CarouselPrevious className="absolute top-1/2 -tranemarald-y-1/2 left-4 w-10 h-10 bg-white hover:bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-full shadow-md">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 -tranemarald-y-1/2 right-4 w-10 h-10 bg-white hover:bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-full shadow-md">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </CarouselNext>
        </div>
      </Carousel>
    </>
  );
};

export default HeroSlider;
