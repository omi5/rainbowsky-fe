"use client";

import { useTranslations } from "@/hooks/useTranslations";
import { useState } from "react";

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  stats: string;
}

interface DotSliderProps {
  slides?: SlideData[][];
}

export default function ProjectSlider({ slides }: DotSliderProps) {
  const defaultSlides: SlideData[][] = [
    [
      {
        id: 1,
        image: "/placeholder.svg?height=200&width=300",
        title: "SBG Matar",
        subtitle: "Candidates Deployed",
        stats: "15,000+",
      },
      {
        id: 2,
        image: "/placeholder.svg?height=200&width=300",
        title: "FIFA World Cup",
        subtitle: "Candidates Deployed",
        stats: "3226+",
      },
      {
        id: 3,
        image: "/placeholder.svg?height=200&width=300",
        title: "Hyper Panda",
        subtitle: "Candidates Deployed",
        stats: "1000+",
      },
    ],
    [
      {
        id: 4,
        image: "/placeholder.svg?height=200&width=300",
        title: "Project Alpha",
        subtitle: "Team Members",
        stats: "500+",
      },
      {
        id: 5,
        image: "/placeholder.svg?height=200&width=300",
        title: "Project Beta",
        subtitle: "Clients Served",
        stats: "2000+",
      },
      {
        id: 6,
        image: "/placeholder.svg?height=200&width=300",
        title: "Project Gamma",
        subtitle: "Projects Completed",
        stats: "150+",
      },
    ],
  ];

  const slideData = slides || defaultSlides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("Projects");

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-600 mb-8">
            <span className="text-4xl font-sans-serif text-[#464646] tracking-[10px]">
              <span className="text-[#999999]">03</span>{" "}
              <span className="text-[#FE0000]">/</span> {t("title")}
            </span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slideData.map((slideGroup, groupIndex) => (
              <div key={groupIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {slideGroup.map((card) => (
                    <div key={card.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={card.image || "/placeholder.svg"}
                          alt={card.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-medium text-gray-800 mb-1">
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {card.subtitle}
                        </p>
                        <p className="text-xl font-bold text-red-500">
                          {card.stats}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-red-500 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
