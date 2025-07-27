import apiClient from "@/lib/api/apiClient";
import { LoginCredentials, LoginResponse, SignupFormData } from "@/types/auth";

// Signup function
export const signup = async (
  formData: Omit<SignupFormData, "confirmPassword">
): Promise<any> => {
  try {
    const response = await apiClient.post("/users/signup", formData);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.data?.errors) {
        throw {
          message: "Validation failed",
          errors: error.response.data.errors,
        };
      }
      throw new Error(error.response.data?.message || "Registration failed");
    }
    if (error.request) {
      throw new Error("No response from server. Please try again.");
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


    return response.data;
  } catch (err: any) {
     console.log("🔥 loginService catch:", err.response?.data, err.message);
     if (err.response) {
      
      const msg = err.response.data?.message || "Login failed";
      throw new Error(msg);
    }
    if (err.request) {
      throw new Error("No response from server. Please try again.");
    }
    throw new Error("Login failed. Please try again.");
  }
};


export const googleSignIn = async (
  idToken: string
): Promise<{ token: string; user: any }> => {
  try {
    const response = await apiClient.post<LoginResponse>(
      "/users/google",
      { token: idToken }
    );
    return response.data;
  }  catch (err: any) {
    if (err.response) {
      const msg = err.response.data?.message || "Google sign‑in failed";
      throw new Error(msg);
    }
    if (err.request) {
      throw new Error("No response from server. Please try again.");
    }
    throw new Error("Google sign‑in failed. Please try again.");
  }
};