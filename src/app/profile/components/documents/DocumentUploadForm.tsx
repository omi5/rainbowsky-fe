"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { DocumentType } from "@/types/IDocument";
import {
  updateDocument,
  createDocument,
  deleteDocument,
} from "@/services/document.service";
import { File, Plus, TrashIcon, X } from "lucide-react";

const documentTypes: DocumentType[] = [
  "Resume",
  "Cover Letter",
  "Portfolio",
  "Certifications",
  "References",
  "Education Transcript",
  "Work Samples",
  "ID Proof",
  "Other",
];

interface DocumentFormState {
  type: DocumentType;
  files: File[];
  existingDoc?: any;
  filesToRemove: string[];
}

interface DocumentUploadFormProps {
  userId: string; // The user whose documents are being managed
  token: string;
  existingDocuments: any[];
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export default function DocumentUploadForm({
  userId,
  token,
  existingDocuments,
  onSuccess,
  onError,
}: DocumentUploadFormProps) {
  const [activeDocuments, setActiveDocuments] = useState<DocumentFormState[]>(
    []
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingDocId, setDeletingDocId] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [documentToDelete, setDocumentToDelete] = useState<{
    index: number;
    doc: DocumentFormState;
  } | null>(null);

  // Helper function to validate document type
  const validateDocumentType = (type: string): DocumentType => {
    const matchedType = documentTypes.find(
      (t) => t.toLowerCase() === type.toLowerCase()
    );
    return matchedType || "Other";
  };

  // Initialize form with existing documents
  useEffect(() => {
    // console.log('Existing documents from backend:', existingDocuments);

    if (existingDocuments.length > 0) {
      setActiveDocuments(
        existingDocuments.map((doc) => {
          // Use doc.name instead of doc.type since your backend uses 'name' field
          const validatedType = validateDocumentType(doc.name);
          // console.log(`Processing document ${doc._id}:`, {
          //   backendName: doc.name,
          //   validatedType,
          // });

          return {
            type: validatedType,
            files: [],
            existingDoc: doc,
            filesToRemove: [],
          };
        })
      );
    } else {
      // If no existing documents, start with one empty form
      setActiveDocuments([
        {
          type: "Resume",
          files: [],
          filesToRemove: [],
        },
      ]);
    }
  }, [existingDocuments]);

  const addNewDocument = () => {
    setActiveDocuments([
      ...activeDocuments,
      {
        type: "Resume",
        files: [],
        filesToRemove: [],
      },
    ]);
  };

  const removeDocument = async (index: number) => {
    const doc = activeDocuments[index];

    // If it's an existing document, show modal confirmation
    if (doc.existingDoc) {
      setDocumentToDelete({ index, doc });
      setDeleteModalOpen(true);
    } else {
      // If it's a new document (not yet saved), just remove from local state
      const updated = [...activeDocuments];
      updated.splice(index, 1);
      setActiveDocuments(updated);
    }
  };

  const handleConfirmDelete = async () => {
    if (!documentToDelete) return;

    const { index, doc } = documentToDelete;

    try {
      setDeletingDocId(doc.existingDoc._id);
      await deleteDocument(token, doc.existingDoc._id);

      // Remove from local state after successful deletion
      const updated = [...activeDocuments];
      updated.splice(index, 1);
      setActiveDocuments(updated);

      // Call onSuccess callback if provided
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error deleting document:", error);
      if (onError) onError(error as Error);
    } finally {
      setDeletingDocId(null);
      setDeleteModalOpen(false);
      setDocumentToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setDocumentToDelete(null);
  };

  const handleTypeChange = (index: number, type: DocumentType) => {
    const updated = [...activeDocuments];
    updated[index].type = type;
    setActiveDocuments(updated);
  };

  const handleFileChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const updated = [...activeDocuments];
      updated[index].files = Array.from(e.target.files);
      setActiveDocuments(updated);
    }
  };

  const handleRemoveExistingFile = (docIndex: number, filePublicId: string) => {
    const updated = [...activeDocuments];
    if (!updated[docIndex].filesToRemove.includes(filePublicId)) {
      updated[docIndex].filesToRemove.push(filePublicId);
      setActiveDocuments(updated);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      for (const doc of activeDocuments) {
        if (doc.existingDoc) {
          // Update existing document if there are changes
          if (
            doc.files.length > 0 ||
            doc.filesToRemove.length > 0 ||
            doc.type !== doc.existingDoc.name
          ) {
            await updateDocument(
              userId, // Pass the userId of the document owner
              token,
              doc.existingDoc._id,
              {
                name: doc.type, // Using the selected type as name
                removedPublicIds: doc.filesToRemove,
              },
              doc.files
            );
          }
        } else {
          // Create new document if files are added
          if (doc.files.length > 0) {
            await createDocument(
              userId, // Pass the userId of the document owner
              token,
              doc.type,
              doc.files
            );
          }
        }
      }

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error managing documents:", error);
      if (onError) onError(error as Error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const isImageFile = (fileName: string) => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
    return imageExtensions.some((ext) => fileName.toLowerCase().endsWith(ext));
  };

  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Documents</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {activeDocuments.map((doc, index) => (
              <div
                key={index}
                className="rounded-md border border-gray-200 p-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-700">
                    {doc.existingDoc
                      ? `Edit ${doc.existingDoc.name}`
                      : `New Document`}
                  </h4>
                  <button
                    type="button"
                    onClick={() => removeDocument(index)}
                    className="cursor-pointer text-red-500 hover:text-red-700 disabled:opacity-50"
                    disabled={deletingDocId === doc.existingDoc?._id}
                    title={
                      doc.existingDoc ? "Delete document" : "Remove from form"
                    }
                  >
                    {deletingDocId === doc.existingDoc?._id ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-red-500 border-t-transparent"></div>
                    ) : (
                      <TrashIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor={`type-${index}`}
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Type
                    </label>
                    <select
                      id={`type-${index}`}
                      value={doc.type}
                      onChange={(e) =>
                        handleTypeChange(index, e.target.value as DocumentType)
                      }
                      className="w-full rounded-lg border p-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      // disabled={!!doc.existingDoc}
                    >
                      {documentTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {doc.existingDoc && (
                      <p className="mt-1 text-xs text-gray-500">
                        Current type: {doc.existingDoc.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor={`files-${index}`}
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Files
                    </label>
                    <input
                      type="file"
                      id={`files-${index}`}
                      multiple
                      onChange={(e) => handleFileChange(index, e)}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {doc.files.length > 0 && (
                      <div className="mt-1 text-xs text-gray-500">
                        {doc.files.length} new file(s) selected
                      </div>
                    )}
                  </div>
                </div>

                {doc.existingDoc?.files && doc.existingDoc.files.length > 0 && (
                  <div className="mt-4">
                    <h5 className="mb-2 text-xs font-medium text-gray-500">
                      Existing Files:
                    </h5>
                    <ul className="space-y-2">
                      {doc.existingDoc.files.map((file: any) => (
                        <li
                          key={file.filePublicId}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            {isImageFile(file.fileUrl) ? (
                              <div className="relative mr-2 h-16 w-16">
                                <img
                                  src={file.fileUrl}
                                  alt={
                                    file.fileUrl.split("/").pop() || "Document"
                                  }
                                  className="rounded object-cover"
                                />
                              </div>
                            ) : (
                              <File className="mr-2 h-4 w-4 text-blue-500" />
                            )}
                            {/* <a
                              href={file.fileUrl}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-sm text-blue-600 hover:underline'
                            >
                              {file.fileUrl.split('/').pop()}
                            </a> */}
                          </div>
                          {!doc.filesToRemove.includes(file.filePublicId) ? (
                            <button
                              type="button"
                              onClick={() =>
                                handleRemoveExistingFile(
                                  index,
                                  file.filePublicId
                                )
                              }
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          ) : (
                            <span className="text-xs text-red-500">
                              Marked for removal
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={addNewDocument}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              <Plus className="mr-1 h-4 w-4" />
              Add Another Document
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Semi-transparent overlay */}
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm transition-opacity"
            onClick={handleCancelDelete}
          ></div>

          {/* Modal panel - now properly centered */}
          <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <TrashIcon className="h-6 w-6 text-red-600" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Delete Document
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete "
                    {documentToDelete?.doc.existingDoc?.name}"? This action
                    cannot be undone and will permanently remove all files
                    associated with this document.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={deletingDocId !== null}
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {deletingDocId !== null ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Deleting...
                  </>
                ) : (
                  "Delete"
                )}
              </button>
              <button
                type="button"
                onClick={handleCancelDelete}
                disabled={deletingDocId !== null}
                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
