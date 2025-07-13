// "use client";
// import JobDetails from "@/app/components/Job/JobDetails";
// import { Job } from "@/types/job";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function JobPage() {
//   const params = useParams();
//   const id = params.id as string;
//   const [job, setJob] = useState<Job | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!id) return;

//     const fetchJob = async () => {
//       try {
//         const response = await fetch(`/api/jobs/${id}`);
//         if (!response.ok) {
//           throw new Error("Job not found");
//         }
//         const data = await response.json();
//         setJob(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Failed to load job");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJob();
//   }, [id]);

//   if (loading) return <div className="text-center py-8">Loading...</div>;
//   if (error)
//     return <div className="text-center py-8 text-red-500">{error}</div>;
//   if (!job) return <div className="text-center py-8">Job not found</div>;

//   return <JobDetails job={job} />;
// }

"use client";
import CVSubmission from "@/app/components/CareerPage/CvSubmission";
import Footer from "@/app/components/HomePage/Footer";
import JobDetails from "@/app/components/Job/JobDetails";
import { Job } from "@/types/job";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Test data for job with id '1'
const testJobData: Job = {
  id: "1",
  title: "WE'RE HIRING IN RUSSIA",
  details:
    "Looking for a sharp, driven and versatile individual with Marketing & Sales skills",
  date: new Date().toISOString(),
  imageUrl:
    "https://images.unsplash.com/photo-1618890055645-f4f426890941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpvYiUyMHBvc3R8ZW58MHx8MHx8fDA%3D",
  country: "Russia",
  industry: "Recruitment",
  companyName: "Soundlines Global",
  location: "Moscow, Russia",
};

export default function JobPage() {
  const params = useParams();
  // Use test ID '1' for development
  const id = "1"; // params.id as string;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    // Simulate API fetch with timeout
    const fetchJob = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

        // Return test data for id '1', error for others
        if (id === "1") {
          setJob(testJobData);
        } else {
          throw new Error("Job not found");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load job");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!job) return <div className="text-center py-8">Job not found</div>;

  return (
    <>
      <JobDetails job={job} />
      <div className="bg-gray-500 py-8 px-4 sm:px-6 lg:px-8">
        <CVSubmission />
      </div>
      <Footer />
    </>
  );
}
