"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Job {
  _id: string;
  title: string;
  imageUrl: string;
}

export default function JobSlider() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5001/jobs");
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const jobsPerSlide = 3;
  const totalSlides = Math.ceil(jobs.length / jobsPerSlide);

  // Auto slide only if multiple slides
  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [totalSlides]);

  if (!jobs.length) {
    return null;
  }

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
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
                    Array.from({ length: jobsPerSlide - slideJobs.length }).map(
                      (_, i) => <div key={i} className="w-64 h-80" />
                    )}
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
    </div>
  );
}
