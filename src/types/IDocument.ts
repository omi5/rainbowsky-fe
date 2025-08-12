// src/types/document.ts
export type DocumentType =
  | "Resume"
  | "Cover Letter"
  | "Portfolio"
  | "Certifications"
  | "References"
  | "Education Transcript"
  | "Work Samples"
  | "ID Proof"
  | "Other";

export interface IFile {
  fileUrl: string;
  filePublicId: string;
  fileType: string;
  uploadedAt: Date;
}

export interface IDocument {
  _id: string;
  user: string;
  type: DocumentType;
  files: IFile[];
  createdAt: Date;
  updatedAt: Date;
}

export type DocumentFormValues = {
  type: DocumentType;
  files: File[];
};
