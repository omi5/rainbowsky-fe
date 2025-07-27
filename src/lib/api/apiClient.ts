
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "@/utils/Urls/StaticUrl";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;


const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: any) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.code === "ECONNABORTED") {
      toast.error("Request timeout. Please try again.");
    }

    if (!error.response) {
      toast.error("Network error. Please check your connection.");
    }

    // Pass through for service layer to handle specific status codes
    return Promise.reject(error);
  }
);

export default apiClient;
