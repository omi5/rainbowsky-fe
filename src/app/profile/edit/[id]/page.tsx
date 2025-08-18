"use client";

import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/app/context/authContext";
import { getUserById, updateUser } from "@/services/applicant.service";
import { useState, useEffect } from "react";
import UserForm from "../../components/ApplicantForm";
import DocumentSection from "../../components/documents/DocumentSection";
import LoadingSpinner from "../../components/loader/LoadingSpinner";
import Navbar from "@/app/components/HomePage/Navbar";

export default function UserEditPage() {
  const { id } = useParams();
  const { token, isAuthenticated, loading } = useAuth();
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/signin");
    }
  }, [loading, isAuthenticated, router]);

  useEffect(() => {
    if (token && id) {
      fetchUser();
    }
  }, [token, id]);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const userData = await getUserById(token!, id as string);
      setUser(userData);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (updatedUser: FormData) => {
    try {
      setIsLoading(true);
      await updateUser(token!, id as string, updatedUser);
      router.push(`/profile`);
    } catch (error: any) {
      console.error("Failed to update user:", error);
      // Add user-visible error handling here
      alert("Failed to update user: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading || isLoading)
    return (
      <div className="py-8 text-center">
        <LoadingSpinner />
      </div>
    );
  if (!user) return <div className="py-8 text-center">User not found</div>;

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="ml-2 flex-1 overflow-y-auto p-4 pt-24">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-0">
          <div className="mb-6">
            <button
              onClick={() => router.push(`/profile`)}
              className="inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Back to User
            </button>
          </div>

          <h1 className="mb-6 text-2xl font-bold text-gray-900">Edit User</h1>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
            {/* Left Column - User Form */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <UserForm
                user={user}
                onSubmit={handleSubmit}
                isLoading={isLoading}
                isEdit
              />
            </div>

            {/* Right Column - Document Section */}
            <div>
              <DocumentSection userId={id as string} token={token!} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
