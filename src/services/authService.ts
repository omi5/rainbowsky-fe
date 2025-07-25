// services/authService.ts
import apiClient from "@/lib/api/apiClient";
import { LoginCredentials, LoginResponse, SignupFormData } from "@/types/auth";

// Signup function
export const signup = async (
  formData: Omit<SignupFormData, "confirmPassword">
) => {
  try {
    const response = await apiClient.post("/users/signup", formData);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // Handle API validation errors
      if (error.response.data?.errors) {
        throw {
          message: "Validation failed",
          errors: error.response.data.errors,
        };
      }
      throw new Error(error.response.data?.message || "Registration failed");
    }
    throw new Error("Network error. Please try again.");
  }
};

// Login function
export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post<LoginResponse>(
      "/users/signin",
      credentials
    );

    // Store token in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("authToken", response.data.token);
    }

    return response.data;
  } catch (error: any) {
    if (error.response) {
      // Handle specific status codes
      switch (error.response.status) {
        case 401:
          throw new Error("Invalid email or password");
        case 403:
          throw new Error("Account not verified");
        case 429:
          throw new Error("Too many attempts. Try again later");
        default:
          throw new Error(error.response.data?.message || "Login failed");
      }
    } else if (error.request) {
      throw new Error("No response from server. Please try again.");
    } else {
      throw new Error("Login failed. Please try again.");
    }
  }
};
