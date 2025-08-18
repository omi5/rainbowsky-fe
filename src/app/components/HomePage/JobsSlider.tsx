"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getJobs } from "@/services/jobService";

interface Job {
  _id: string;
  title: string;
  imageUrl: string;
}

interface PaginatedJobs {
  jobs: Job[];
  total: number;
  page: number;
  limit: number;
}

export default function JobSlider() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs(1, 10);
        setJobs(response.jobs);
        console.log("Fetched jobs:", response.jobs);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const jobsPerSlide = 3;
  const totalSlides = Math.ceil(jobs.length / jobsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [totalSlides, jobs.length]);

  if (isLoading) {
    return (
      <div className="w-full bg-white py-16 min-h-[400px] flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold text-center mb-8">All Job Posts</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-16 min-h-[400px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">All Job Posts</h2>

        {jobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-gray-500 text-lg">
              No job openings currently available
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Slider Container */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                  const start = slideIndex * jobsPerSlide;
                  const slideJobs = jobs.slice(start, start + jobsPerSlide);

                  return (
                    <div
                      key={slideIndex}
                      className="w-full flex-shrink-0 flex justify-center space-x-6"
                    >
                      {slideJobs.map((job) => (
                        <Link
                          key={job._id}
                          href={`/jobs/${job._id}`}
                          className="block group cursor-pointer w-64"
                        >
                          <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                            <img
                              src={job.imageUrl}
                              alt={job.title}
                              className="max-h-full max-w-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "/placeholder.svg";
                              }}
                            />
                          </div>
                          <div className="mt-4 text-center">
                            <h3 className="text-lg font-medium text-gray-800">
                              {job.title}
                            </h3>
                          </div>
                        </Link>
                      ))}

                      {/* White space fillers to keep centering */}
                      {slideJobs.length < jobsPerSlide &&
                        Array.from({
                          length: jobsPerSlide - slideJobs.length,
                        }).map((_, i) => <div key={i} className="w-64 h-80" />)}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots only if more than 1 slide */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-red-500 scale-110"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
