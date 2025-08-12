"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

interface Props {
  images: string[];
  startIndex?: number;
}

export const CustomCarousel: React.FC<Props> = ({ images, startIndex = 0 }) => {
  return (
    <Carousel opts={{ startIndex }}>
      <CarouselContent>
        {images.map((src, idx) => (
          <CarouselItem key={idx} className="flex items-center justify-center">
            <div className="relative h-[300px] w-full">
              <Image
                src={src}
                alt={`Preview ${idx}`}
                fill
                className="rounded object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
