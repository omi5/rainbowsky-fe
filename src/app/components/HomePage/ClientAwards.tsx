"use client";

import { useState, useEffect, useCallback } from "react";

interface AwardData {
  id: number;
  image: string;
  title: string;
  description?: string;
}

interface ArrowSliderProps {
  awards?: AwardData[][];
  autoSlideInterval?: number;
}

export default function ClientAwardsSlider({
  awards,
  autoSlideInterval = 4000,
}: ArrowSliderProps) {
  const defaultAwards: AwardData[][] = [
    [
      {
        id: 1,
        image: "/placeholder.svg?height=300&width=250",
        title: "SISBAN",
        description: "Excellence Award 2023",
      },
      {
        id: 2,
        image: "/placeholder.svg?height=300&width=250",
        title: "ABDAL",
        description: "Innovation Award 2023",
      },
      {
        id: 3,
        image: "/placeholder.svg?height=300&width=250",
        title: "AIMS INTERNATIONAL",
        description: "Quality Award 2023",
      },
    ],
    [
      {
        id: 4,
        image: "/placeholder.svg?height=300&width=250",
        title: "GLOBAL TECH",
        description: "Technology Award 2023",
      },
      {
        id: 5,
        image: "/placeholder.svg?height=300&width=250",
        title: "FUTURE CORP",
        description: "Leadership Award 2023",
      },
      {
        id: 6,
        image: "/placeholder.svg?height=300&width=250",
        title: "SMART SOLUTIONS",
        description: "Innovation Award 2023",
      },
    ],
  ];

  const slideData = awards || defaultAwards;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  }, [slideData.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  }, [slideData.length]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoSlideInterval, isAutoSliding]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsAutoSliding(false);
  const handleMouseLeave = () => setIsAutoSliding(true);

  return (
    <div className="w-full bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-4xl font-sans-serif text-[#464646] tracking-[10px]">
            <span className="text-[#999999]">04</span>{" "}
            <span className="text-[#FE0000]">/</span> Client Awards
          </span>
        </div>

        {/* Slider Container */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slideData.map((slideGroup, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
                    {slideGroup.map((award) => (
                      <div key={award.id} className="group">
                        <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                          <div className="relative">
                            <img
                              src={award.image || "/placeholder.svg"}
                              alt={award.title}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                          </div>
                          <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold text-white mb-2">
                              {award.title}
                            </h3>
                            {award.description && (
                              <p className="text-gray-300 text-sm">
                                {award.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-gray-800 transition-all duration-300">
            View More →
          </button>
        </div>
      </div>
    </div>
  );
}
