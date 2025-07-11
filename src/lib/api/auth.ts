import apiClient from "./apiClient";
import { LoginPayload, SignupPayload } from "@/types/auth";

export const authService = {
  login: async (payload: LoginPayload) => {
    const response = await apiClient.post("/auth/login", payload);
    return response.data;
  },

  signup: async (payload: SignupPayload) => {
    const response = await apiClient.post("/auth/signup", payload);
    return response.data;
  },

  forgotPassword: async (email: string) => {
    const response = await apiClient.post("/auth/forgot-password", { email });
    return response.data;
  },

  // Add other auth-related methods as needed
};
