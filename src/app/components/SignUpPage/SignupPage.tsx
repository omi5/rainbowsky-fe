"use client";
import React, { useState, useRef } from "react";
import InputLabel from "../CustomComponent/InputLabel";
import CustomInput from "../CustomComponent/CustomInput";
import CustomButton from "../CustomComponent/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { googleSignIn, login, signup } from "@/services/authService";
import { validateSignupForm } from "@/utils/auth/validation";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    imageFile: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, imageFile: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateSignupForm(formData);
    if (validationErrors.length > 0) {
      validationErrors.forEach((err) => toast.error(err));
      return;
    }

    if (!formData.imageFile) {
      toast.error("Profile picture is required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    setIsLoading(true);

    try {
      const { confirmPassword, imageFile, ...payload } = formData;

      const data = new FormData();
      Object.entries(payload).forEach(([key, value]) =>
        data.append(key, value as string)
      );
      if (imageFile) data.append("image", imageFile);

      await signup(data);

      toast.success("Account created successfully! Please login.");
      router.push("/login");
    } catch (error: any) {
      if (error.errors) {
        Object.entries(error.errors).forEach(([field, messages]) => {
          if (Array.isArray(messages)) {
            messages.forEach((msg: string) => toast.error(`${field}: ${msg}`));
          }
        });
      } else {
        toast.error(error.message || "Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (res: CredentialResponse) => {
    if (!res.credential) {
      toast.error("Google sign‑in failed: no credential");
      return;
    }
    // setGoogleLoading(true);
    try {
      const data = await googleSignIn(res.credential);

      toast.success("sign up with google success! Please log in with Google");
      router.push("/login");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      // setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Start your journey with us today
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <InputLabel text="Full name" isRequired />
              <CustomInput
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <InputLabel text="Email address" isRequired />
              <CustomInput
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <InputLabel text="Phone number" isRequired />
              <CustomInput
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <InputLabel text="Date of birth" isRequired />
              <CustomInput
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Date of Birth"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <InputLabel text="Gender" isRequired />
              <div className="mt-2 flex space-x-4">
                {["male", "female", "other"].map((g) => (
                  <label
                    key={g}
                    className="inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      required
                    />
                    <span className="ml-2 text-gray-700">
                      {g.charAt(0).toUpperCase() + g.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Profile Picture */}
            <div>
              <InputLabel text="Profile Picture" isRequired />
              <div className="flex items-center space-x-4 mt-2">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center bg-gray-100">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">Preview</span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Upload Image
                </button>
              </div>
              <input
                type="file"
                name="image"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Password */}
            <div>
              <InputLabel text="Password" isRequired />
              <CustomInput
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Must be at least 8 characters
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <InputLabel text="Confirm password" isRequired />
              <CustomInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <CustomButton
            type="submit"
            size="block"
            variant="primary"
            isLoading={isLoading}
          >
            Create account
          </CustomButton>
        </form>

        <div className="relative flex items-center my-6">
          <div className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => toast.error("Google sign‑in failed")}
            useOneTap
            width="280"
            text="signin_with"
          />
        </div>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
