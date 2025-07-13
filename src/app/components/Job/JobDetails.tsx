"use client";
import { Job } from "@/types/job";

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Image */}
          <div className="md:w-3/6">
            <img
              src={job.imageUrl || "/placeholder.svg"}
              alt={job.title}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="md:w-3/6">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {job.title}
                </h1>
                <p className="text-gray-600 mt-2">{job.companyName}</p>
                <p className="text-gray-500 mt-1">
                  {job.location || job.country}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  What You'll Do:
                </h2>
                <div className="prose text-gray-600 whitespace-pre-line">
                  {job.details}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Requirements:
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Fluent in Russian & English</li>
                  <li>Marketing & Sales skills</li>
                  <li>Executive support & scheduling experience</li>
                  <li>Coordination with different teams</li>
                  <li>Cross-functional communication</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Location:
                </h2>
                <p className="text-gray-600">
                  {job.location || "Moscow, Russia"}
                </p>
              </div>

              {/* <div className="pt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  How to Apply:
                </h2>
                <p className="text-gray-600 mb-4">
                  To apply kindly send your resume to{" "}
                  <a
                    href={`mailto:russia@soundlinesglobal.com`}
                    className="text-blue-600 hover:underline"
                  >
                    russia@soundlinesglobal.com
                  </a>
                </p>
                <p className="text-gray-500 text-sm">
                  Visit our website:{" "}
                  <a
                    href="https://soundlinesglobal.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    soundlinesglobal.ru
                  </a>
                </p>
              </div> */}
            </div>

            {/* Social Media Tags */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {[
                  "#Bruslajobs",
                  "#globesevers",
                  "#JobSearch2025",
                  "#Romajobs",
                  "#jobinoman",
                  "#fibuhanjobs",
                  "#aknoajobs",
                  "#linking",
                  "#recruitment",
                  "#job",
                  "#krefaybbs",
                  "#gulhankin",
                  "#soundlinesgroup",
                  "#SG",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
