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
