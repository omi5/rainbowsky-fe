"use client";

import { useState, useEffect, useCallback } from "react";
import certificationLogos from "@/utils/partnersImage/partnersImage";
import { useTranslations } from "@/hooks/useTranslations";

interface CertificationLogo {
  id: number;
  name: string;
  image: string;
}

interface ArrowSliderProps {
  logos?: CertificationLogo[][];
  autoSlideInterval?: number;
}

export default function ClientAwardsSlider({
  logos,
  autoSlideInterval = 4000,
}: ArrowSliderProps) {
  // Split the certificationLogos into groups of 3 for sliding
  const defaultLogos: CertificationLogo[][] = [];
  for (let i = 0; i < certificationLogos.length; i += 3) {
    defaultLogos.push(certificationLogos.slice(i, i + 3));
  }

  const slideData = logos || defaultLogos;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const t = useTranslations("Clients");

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
            <span className="text-[#FE0000]">/</span> {t("title")}
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
                    {slideGroup.map((logo) => (
                      <div key={logo.id} className="group">
                        <div className="bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                          {/* Image container - takes full width */}
                          <div className="relative w-full aspect-square flex items-center justify-center bg-white p-4">
                            <img
                              src={logo.image}
                              alt={logo.name}
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          {/* Company name - stays at bottom */}
                          <div className="p-6 text-center mt-auto">
                            <h3 className="text-xl font-semibold text-white mb-2">
                              {logo.name}
                            </h3>
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
