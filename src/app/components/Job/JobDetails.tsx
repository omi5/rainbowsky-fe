"use client";

import { Job } from "@/types/job";

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails({ job }: JobDetailsProps) {
  const formatOrNA = (value: string | undefined | null) =>
    value && value !== "" ? value : "Not available";

  const numOrNA = (value: number | undefined | null) =>
    typeof value === "number" ? value : "Not available";

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={job.imageUrl || "/placeholder.svg"}
                alt={formatOrNA(job.title)}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 flex-1 space-y-6">
              {/* Title & Company */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {formatOrNA(job.title)}
                </h1>
                <p className="mt-1 text-gray-600">
                  {formatOrNA(job.companyName)}
                </p>
              </div>

              {/* Key Chips */}
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    job.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {formatOrNA(job.status?.toUpperCase())}
                </span>
                <span className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">
                  🌍 {formatOrNA(job.country)}
                </span>
                <span className="px-3 py-1 text-xs bg-yellow-50 text-yellow-800 rounded-full">
                  💰 {numOrNA(job.salary)} {formatOrNA(job.currency)}
                </span>
                <span className="px-3 py-1 text-xs bg-purple-50 text-purple-800 rounded-full">
                  ⏰ {numOrNA(job.workingHours)}h/wk
                </span>
              </div>

              {/* What You’ll Do */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  What You’ll Do
                </h2>
                <p className="mt-2 text-gray-700 whitespace-pre-line">
                  {formatOrNA(job.details)}
                </p>
              </div>

              {/* Facilities */}
              {job.facilities?.length ? (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Facilities
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.facilities.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-gray-500 italic text-sm">
                  Facilities: Not available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
