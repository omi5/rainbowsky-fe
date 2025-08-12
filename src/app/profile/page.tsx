"use client";

import { useEffect, useState, useRef, ChangeEvent } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/app/context/authContext";
import { Mail, Phone, User, Calendar } from "lucide-react";
import LoadingSpinner from "./components/loader/LoadingSpinner";
import { ApplicantDocuments } from "./components/ApplicantDocuments";
// import { ApplicantJobs } from "./components/ApplicantJobs";

export default function ApplicantPage() {
  const userDeatils = localStorage.getItem("user");
  const userId = userDeatils ? JSON.parse(userDeatils).id : null;
  const { token } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchUserData();
  }, [token, userId]);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const updatedUser = await response.json();
      setData((prev: any) => ({
        ...prev,
        user: updatedUser,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  if (!data && loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Unable to load user data</h2>
          <button
            onClick={fetchUserData}
            className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const { user, documents, applications } = data;
  if (!user) return <div>User not found</div>;

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="container mx-auto max-w-6xl space-y-6 p-4 py-8">
      {/* Profile Section */}
      <div>
        <button
          onClick={() => router.back()}
          className="mb-4 rounded-md cursor-pointer bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 transition-colors"
        >
          Back to previous page
        </button>
      </div>
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div className="border-b p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {user.name.split(" ").slice(0, 2).join(" ")} Profile
          </h1>
          <div>
            <button
              onClick={() => router.push(`/profile/edit/${userId}`)}
              className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 cursor-pointer"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="group relative">
              <div
                className="flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100"
                onClick={handleImageClick}
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-3xl font-medium text-gray-600">
                    {getInitials(user.name)}
                  </span>
                )}
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50">
                    <LoadingSpinner screen={true} />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-medium text-white">
                    Change Photo
                  </span>
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </div>

            <div className="flex-1 space-y-3">
              <h2 className="text-2xl font-bold">{user.name}</h2>

              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>

              {user.phone && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{user.phone}</span>
                </div>
              )}

              {user.gender && (
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="h-4 w-4" />
                  <span>{user.gender}</span>
                </div>
              )}

              {user.dob && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(user.dob).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">Documents</h2>
        </div>
        <div className="p-6">
          {documents && documents.length > 0 ? (
            <ApplicantDocuments documents={documents} />
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-gray-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No documents uploaded
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                This applicant hasn't uploaded any documents yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Applications Section */}
    </div>
  );
}
