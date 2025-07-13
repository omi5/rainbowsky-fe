"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import InputLabel from "../CustomComponent/InputLabel";
import CustomInput from "../CustomComponent/CustomInput";
import CustomButton from "../CustomComponent/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { login } from "@/services/authService";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import apiClient from "@/lib/api/apiClient";

interface LoginProps {
  route?: string;
}

const Login: React.FC<LoginProps> = ({ route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login({ email, password });
      toast.success("Logged in successfully");
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.message);

      // Clear password field on error
      if (error.message.includes("Invalid")) {
        setPassword("");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleResetPassword = async () => {
    if (!resetEmail) {
      toast.error("Please enter your email");
      return;
    }
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: resetEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Reset password link sent to your email");
        setShowResetModal(false);
      } else {
        toast.error(data.message || "Failed to send reset link");
      }
    } catch (err) {
      toast.error("Failed to send reset password email");
      console.error("Reset password error:", err);
    }
  };
  // Google login handler
  // const loginWithGoogle = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     setGoogleLoading(true);
  //     try {
  //       // Get user info from Google
  //       const userInfoResponse = await axios.get(
  //         `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`
  //       );

  //       const userData = {
  //         email: userInfoResponse.data.email,
  //         familyName: userInfoResponse.data.family_name,
  //         givenName: userInfoResponse.data.given_name,
  //         name: userInfoResponse.data.name,
  //         isSignup: false,
  //       };

  //       // Call your backend API using apiClient
  //       const response = await apiClient.post("/users/google", userData);

  //       // Save token if using localStorage
  //       if (typeof window !== "undefined" && response.data.token) {
  //         localStorage.setItem("authToken", response.data.token);
  //       }

  //       toast.success("Logged in successfully with Google");
  //       router.push("/dashboard");
  //     } catch (error: any) {
  //       if (error.response) {
  //         // Handle specific error responses from your backend
  //         toast.error(error.response.data?.message || "Google login failed");
  //       } else if (error.request) {
  //         toast.error("No response from server. Please try again.");
  //       } else {
  //         toast.error("Google login failed");
  //       }
  //       console.error("Google login error:", error);
  //     } finally {
  //       setGoogleLoading(false);
  //     }
  //   },
  //   onError: (error) => {
  //     toast.error("Google login failed");
  //     console.error("Google login failed:", error);
  //     setGoogleLoading(false);
  //   },
  // });

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setGoogleLoading(true);
      console.log("Google token response:", tokenResponse);
      try {
        // Send the Google ID token to your backend
        const response = await apiClient.post("/users/google", {
          token: tokenResponse.access_token,
        });

        // Handle the response from your backend
        if (typeof window !== "undefined" && response.data.token) {
          localStorage.setItem("authToken", response.data.token);
        }

        toast.success("Logged in successfully with Google");
        router.push("/dashboard");
      } catch (error: any) {
        if (error.response) {
          toast.error(error.response.data?.message || "Google login failed");
        } else if (error.request) {
          toast.error("No response from server. Please try again.");
        } else {
          toast.error("Google login failed");
        }
        console.error("Google login error:", error);
      } finally {
        setGoogleLoading(false);
      }
    },
    onError: (error) => {
      toast.error("Google login failed");
      console.error("Google login failed:", error);
      setGoogleLoading(false);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <div className="space-y-4">
            <div>
              <InputLabel text="Email address" isRequired />
              <CustomInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <InputLabel text="Password" isRequired />
                <button
                  type="button"
                  onClick={() => setShowResetModal(true)}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </button>
              </div>
              <CustomInput
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <CustomButton
              type="submit"
              size="block"
              variant="primary"
              isLoading={isLoading}
            >
              Log in
            </CustomButton>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            {/* <CustomButton type="button" variant="outline" icon={<FaGoogle />}>
              Google
            </CustomButton> */}
            <CustomButton
              type="button"
              variant="outline"
              icon={<FaGoogle />}
              onClick={() => loginWithGoogle()}
              isLoading={googleLoading}
            >
              {googleLoading ? "Signing in..." : "Google"}
            </CustomButton>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* Reset Password Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-gray-900">
                Reset password
              </h3>
              <button
                onClick={() => setShowResetModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-4">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>

              <div className="mb-4">
                <InputLabel text="Email address" isRequired />
                <CustomInput
                  type="email"
                  placeholder="you@example.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>

              <div className="flex justify-end space-x-3">
                <CustomButton
                  type="button"
                  variant="outline"
                  onClick={() => setShowResetModal(false)}
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  type="button"
                  variant="primary"
                  onClick={handleResetPassword}
                >
                  Send link
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
