// src/services/document.service.ts
import { IDocument } from "@/types/document";

export const uploadDocuments = async (
  token: string,
  userId: string,
  name: string,
  files: File[]
): Promise<IDocument> => {
  const formData = new FormData();
  formData.append("name", name);
  files.forEach((file) => {
    formData.append("file", file);
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/documents`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to upload documents");
  }

  return response.json();
};

export const deleteDocument = async (
  token: string,
  docId: string
): Promise<void> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/documents/${docId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete document");
  }
};

export const getUserDocuments = async (
  token: string,
  userId: string
): Promise<IDocument[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/documents/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch documents");
  }

  const data = await response.json();
  return Array.isArray(data.documents) ? data.documents : [];
};

export const listDocuments = async (token: string): Promise<IDocument[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/documents`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch documents");
    }

    const data = await response.json();
    return Array.isArray(data.documents) ? data.documents : [];
  } catch (error) {
    console.error("listDocuments error:", error);
    throw error;
  }
};

export const updateDocument = async (
  userId: string, // The user who owns the document
  token: string,
  docId: string,
  updates: {
    name?: string;
    removedPublicIds?: string[];
  },
  newFiles?: File[]
): Promise<IDocument> => {
  const formData = new FormData();

  // Add userId to specify document owner
  formData.append("userId", userId);

  // Add text fields to formData
  if (updates.name) {
    formData.append("name", updates.name);
  }

  // Add files to remove (as JSON string since backend expects string or array)
  if (updates.removedPublicIds && updates.removedPublicIds.length > 0) {
    if (updates.removedPublicIds.length === 1) {
      formData.append("removedPublicIds", updates.removedPublicIds[0]);
    } else {
      updates.removedPublicIds.forEach((id) => {
        formData.append("removedPublicIds", id);
      });
    }
  }

  // Add new files to upload - using 'file' to match backend Multer config
  if (newFiles && newFiles.length > 0) {
    newFiles.forEach((file) => {
      formData.append("file", file); // Changed to 'file' to match backend
    });
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/documents/${docId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to update document");
  }

  return response.json();
};

// Also add/update the create document service
export const createDocument = async (
  userId: string, // The user who will own the document
  token: string,
  name: string,
  files: File[]
): Promise<IDocument> => {
  const formData = new FormData();

  // Add userId to specify document owner
  formData.append("userId", userId);

  // Add document name
  formData.append("name", name);

  // Add files
  files.forEach((file) => {
    formData.append("file", file);
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/documents`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create document");
  }

  return response.json();
};
