import apiClient from "@/lib/api/apiClient";

interface QueryPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendQuery = async (payload: QueryPayload): Promise<void> => {
  await apiClient.post("/query", payload);
};
