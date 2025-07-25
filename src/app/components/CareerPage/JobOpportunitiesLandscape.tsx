import JobCard from "./JobCard";
import jobData from "@/utils/JobData";

export default function JobOpportunities() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
          Shape the global mobility landscape
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Our world would be better if you could see past obstacles and go
          straight to solutions. Explore jobs to determine what we can achieve
          collectively.
        </p>
        <div className="w-16 h-0.5 bg-orange-400 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobData.map((job) => (
          <JobCard
            key={job.id}
            _id={job.id}
            country={job.location}
            imageUrl={job.imageUrl}
            title={job.title}
            details={job.description}
            status={job.status}
            workingHours={job.workingHours || 40}
            salary={job.salary || 0}
            currency={job.currency || "USD"}
            facilities={job.facilities || []}
          />
        ))}
      </div>
    </div>
  );
}
