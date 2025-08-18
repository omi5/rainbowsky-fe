"use client";

import { IUser } from "@/types/applicant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingSpinner from "./loader/LoadingSpinner";
import Image from "next/image";

interface UserTableProps {
  users: IUser[];
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

export default function UserTable({
  users,
  onDelete,
  isLoading,
}: UserTableProps) {
  const router = useRouter();
  const [sortConfig, setSortConfig] = useState<{
    key: keyof IUser;
    direction: "asc" | "desc";
  } | null>(null);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [users]);

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortConfig) return 0;

    const key = sortConfig.key;
    if (a[key] === undefined || b[key] === undefined) return 0;

    if (a[key]! < b[key]!) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[key]! > b[key]!) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key: keyof IUser) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key: keyof IUser) => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  const handleDeleteClick = (id: string) => {
    setDeleteUserId(id);
  };

  const confirmDelete = () => {
    if (deleteUserId) {
      onDelete(deleteUserId);
      setDeleteUserId(null);
    }
  };

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="overflow-x-auto">
      {/* Delete Confirmation Modal */}
      {deleteUserId && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            />
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="z-50 inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="mb-4 text-lg leading-6 font-medium text-gray-900">
                  Delete User
                </h3>
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this user? This action cannot
                  be undone.
                </p>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={confirmDelete}
                  type="button"
                  className="inline-flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Delete
                </button>
                <button
                  onClick={() => setDeleteUserId(null)}
                  type="button"
                  className="mt-3 inline-flex w-full cursor-pointer justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Image
              </th>
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                onClick={() => requestSort("name")}
              >
                Name {getSortIndicator("name")}
              </th>
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                onClick={() => requestSort("email")}
              >
                Email {getSortIndicator("email")}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Gender
              </th>
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                onClick={() => requestSort("verified")}
              >
                Status {getSortIndicator("verified")}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center">
                  <LoadingSpinner />
                </td>
              </tr>
            ) : paginatedUsers.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center">
                  No users found
                </td>
              </tr>
            ) : (
              paginatedUsers.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td
                    className="px-6 py-4 whitespace-nowrap"
                    onClick={() => router.push(`/applicants/${user._id}`)}
                  >
                    <div className="h-10 w-10 flex-shrink-0">
                      {user.image ? (
                        <img
                          src={user.image}
                          alt={user.name}
                          width={40}
                          height={40}
                          className="ww-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                          <span className="font-medium text-gray-500">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td
                    className="cursor-pointer px-6 py-4 whitespace-nowrap"
                    onClick={() => router.push(`/applicants/${user._id}`)}
                  >
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                    </div>
                  </td>
                  <td
                    className="cursor-pointer px-6 py-4 whitespace-nowrap"
                    onClick={() => router.push(`/applicants/${user._id}`)}
                  >
                    <div className="text-sm text-gray-900">{user.email}</div>
                  </td>
                  <td
                    className="cursor-pointer px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                    onClick={() => router.push(`/applicants/${user._id}`)}
                  >
                    {user.gender
                      ? user.gender.charAt(0).toUpperCase() +
                        user.gender.slice(1)
                      : "-"}
                  </td>
                  <td
                    className="cursor-pointer px-6 py-4 whitespace-nowrap"
                    onClick={() => router.push(`/applicants/${user._id}`)}
                  >
                    <span
                      className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
                        user.verified
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.verified ? "Verified" : "Unverified"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex space-x-2">
                      <Link
                        href={`/applicants/edit/${user._id}`}
                        className="cursor-pointer text-blue-600 hover:text-blue-900"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteClick(user._id)}
                        className="cursor-pointer text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t bg-white px-6 py-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              currentPage === 1
                ? "cursor-not-allowed bg-gray-200 text-gray-500"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Previous
          </button>

          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              currentPage === totalPages
                ? "cursor-not-allowed bg-gray-200 text-gray-500"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
