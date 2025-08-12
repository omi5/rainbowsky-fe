export interface IFile {
  fileUrl: string;
  filePublicId: string;
  fileType: string;
  uploadedAt: string;
}

export interface IDocument {
  _id: string;
  user: string;
  name: string;
  files: IFile[];
  createdAt: string;
  updatedAt: string;
}
