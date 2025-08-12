// src/components/DocumentSection.tsx
"use client";

import { useState, useEffect, use } from "react";
import { IDocument } from "@/types/document";
import { getUserDocuments, listDocuments } from "@/services/document.service";
import DocumentUploadForm from "./DocumentUploadForm";

interface DocumentSectionProps {
  userId: string;
  token: string;
}

export default function DocumentSection({
  userId,
  token,
}: DocumentSectionProps) {
  const [documents, setDocuments] = useState<IDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDocuments = async () => {
    try {
      setLoading(true);
      const documents = await getUserDocuments(token, userId);
      setDocuments(documents);
    } catch (err) {
      setError("Failed to load documents");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [userId, token]);

  if (loading)
    return <div className="py-4 text-center">Loading documents...</div>;
  if (error)
    return <div className="py-4 text-center text-red-500">{error}</div>;

  return (
    <DocumentUploadForm
      userId={userId}
      token={token}
      existingDocuments={documents}
      onSuccess={fetchDocuments}
      onError={(err) => setError(err.message)}
    />
  );
}
