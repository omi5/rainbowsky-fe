// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Your backend base URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add request interceptor for auth tokens if needed
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("authToken");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default apiClient;

import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "@/utils/Urls/StaticUrl";

const apiClient = axios.create({
  baseURL: baseUrl || "https://rainbowsky.onrender.com",
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
