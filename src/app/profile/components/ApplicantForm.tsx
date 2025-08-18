"use client";
import { useState, useEffect } from "react";
import { User, Camera } from "lucide-react";
import { IUser } from "@/types/applicant";

interface UserFormProps {
  user?: IUser;
  isLoading?: boolean;
  isEdit?: boolean;
  onSubmit: (data: FormData) => Promise<void>;
}

const UserForm = ({ user, isLoading, isEdit, onSubmit }: UserFormProps) => {
  const [formData, setFormData] = useState<Partial<IUser>>({
    name: "",
    email: "",
    type: 1,
    gender: undefined,
    dob: undefined,
    phone: "",
    verified: false,
    provider: "local",
    image: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (isEdit && user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        type: user.type || 1,
        gender: user.gender,
        dob: user.dob ? formatDateForInput(user.dob) : undefined,
        phone: user.phone || "",
        verified: user.verified || false,
        provider: user.provider || "local",
        image: user.image || "",
      });
      if (user.image) {
        setPreviewImage(user.image);
      }
    }
  }, [user, isEdit]);

  // Helper function to format date for input field
  const formatDateForInput = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Add all form fields to FormData
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        // Convert boolean to string for FormData
        if (typeof value === "boolean") {
          formDataToSend.append(key, value.toString());
        } else {
          formDataToSend.append(key, value.toString());
        }
      }
    });

    // Add image file if selected
    if (imageFile) {
      formDataToSend.append("image", imageFile);
    }

    try {
      await onSubmit(formDataToSend);
    } catch (error) {
      console.error("Form submission error:", error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Image Upload */}
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24">
          {previewImage ? (
            <img
              src={previewImage}
              alt="User profile"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200">
              <User className="h-12 w-12 text-gray-500" />
            </div>
          )}
          <label
            htmlFor="image-upload"
            className="absolute right-0 bottom-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white"
          >
            <Camera className="h-4 w-4" />
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>

      {/* Name */}
      <div>
        <label className="mb-1 block text-sm font-medium">Name*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border p-2 border-gray-300"
          required
          placeholder={isEdit ? undefined : "Enter full name"}
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-1 block text-sm font-medium">Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border p-2 border-gray-300"
          required
          disabled={isEdit}
          placeholder={isEdit ? undefined : "Enter email address"}
        />
      </div>

      {/* User Type */}
      <div>
        <label className="mb-1 block text-sm font-medium">User Type*</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full rounded-lg border p-2 border-gray-300"
          required
        >
          <option value={1}>Regular User</option>
          <option value={2}>Admin</option>
        </select>
      </div>

      {/* Date of Birth */}
      <div>
        <label className="mb-1 block text-sm font-medium">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob || ""}
          onChange={handleChange}
          className="w-full rounded-lg border p-2 border-gray-300"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="mb-1 block text-sm font-medium">Gender</label>
        <select
          name="gender"
          value={formData.gender || ""}
          onChange={handleChange}
          className="w-full rounded-lg border p-2 border-gray-300"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Phone */}
      <div>
        <label className="mb-1 block text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border p-2 border-gray-300"
          placeholder={isEdit ? undefined : "Enter phone number"}
        />
      </div>

      {/* Verified */}
      {/* <div className="flex items-center">
        <input
          type="checkbox"
          name="verified"
          checked={formData.verified || false}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300"
        />
        <label className="ml-2 text-sm font-medium">Verified</label>
      </div> */}

      {/* Submit Button */}
      <div className="flex items-end justify-end pt-4">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </span>
          ) : isEdit ? (
            "Update User"
          ) : (
            "Create User"
          )}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
