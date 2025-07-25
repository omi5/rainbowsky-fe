import apiClient from "@/lib/api/apiClient";
import { Job } from "@/types/job";

export interface PaginatedJobs {
  jobs: Job[];
  total: number;
  page: number;
  totalPages: number;
}

export const getJobs = async (
  page = 1,
  limit = 10
): Promise<PaginatedJobs> => {
  const resp = await apiClient.get<PaginatedJobs>("/jobs", {
    params: { page, limit },
  });
  return resp.data;
};

export const getJobById = async (id: string): Promise<Job> => {
  const resp = await apiClient.get<Job>(`/jobs/${id}`);
  return resp.data;
};

export const applyToJob = async (id: string): Promise<void> => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!token) throw new Error("Not authenticated");

  await apiClient.post(
    `/jobs/${id}/apply`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
