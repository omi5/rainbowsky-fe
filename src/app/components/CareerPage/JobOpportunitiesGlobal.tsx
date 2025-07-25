'use client'
import { useEffect, useState } from "react";
import { getJobs, PaginatedJobs } from "@/services/jobService";
import { Job } from "@/types/job";
import JobCard from "./JobCard";

export default function JobOpportunitiesGlobal() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadJobs = async (nextPage = 1) => {
    setLoading(true);
    try {
      const { jobs: newJobs, totalPages } = await getJobs(nextPage, 8);
      setJobs((prev) => (nextPage === 1 ? newJobs : [...prev, ...newJobs]));
      setTotalPages(totalPages);
      setPage(nextPage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs(1);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
          Find International work opportunities around the globe
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Blue‑ and white‑collar job openings from all over the world
        </p>
        <div className="w-16 h-0.5 bg-orange-400 mx-auto mt-6"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} {...job} />
        ))}
      </div>

      {page < totalPages && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => loadJobs(page + 1)}
            disabled={loading}
            className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            {loading ? "Loading…" : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
