"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import JobDetails from "@/app/components/Job/JobDetails";
import Footer from "@/app/components/HomePage/Footer";
import Navbar from "@/app/components/HomePage/Navbar";
import { useAuth } from "@/app/context/authContext";
import { Job } from "@/types/job";
import { getJobById, applyToJob } from "@/services/jobService";

export default function JobPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [error, setError] = useState("");
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getJobById(id)
      .then(setJob)
      .catch((err) => setError(err.message || "Failed to load job"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleApply = async () => {
    if (!isAuthenticated) {
      toast.warning("Please log in to apply.");
      router.push(`/login?redirect=/jobs/${id}`);
      return;
    }

    if (!job) return;

    setApplying(true);
    try {
      await applyToJob(job._id);
      toast.success("Application submitted!");
    } catch (err: any) {
      toast.error(err.message || "Failed to apply");
    } finally {
      setApplying(false);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!job) return <div className="text-center py-8">Job not found</div>;

  return (
    <>
      <Navbar />
      <br />
      <JobDetails job={job} />

      <div className="flex justify-center my-8">
        <button
          onClick={handleApply}
          disabled={applying}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-50"
        >
          {applying ? "Applying…" : "Apply for Job"}
        </button>
      </div>

      <div className="bg-gray-100 py-8">{/* <CVSubmission /> */}</div>
      <Footer />
    </>
  );
}
