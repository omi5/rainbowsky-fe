"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { CustomCarousel } from "./CustomCarousel";
import { useState } from "react";
import { IDocument } from "@/types/document";

interface Props {
  documents: IDocument[];
}

export const ApplicantDocuments: React.FC<Props> = ({ documents }) => {
  const [open, setOpen] = useState(false);
  const [activeFiles, setActiveFiles] = useState<string[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  const handleClick = (files: string[], index: number) => {
    setActiveFiles(files);
    setStartIndex(index);
    setOpen(true);
  };

  return (
    <div className="mt-6 w-full space-y-6">
      {documents.map((doc) => (
        <div
          key={doc._id}
          className="grid grid-cols-1 items-center gap-4 rounded-md border p-4 shadow-sm sm:grid-cols-2"
        >
          <div className="text-sm font-medium sm:text-base">{doc.name}</div>
          <div className="flex flex-wrap gap-3">
            {doc.files.map((file, idx) => (
              <Dialog
                key={file.filePublicId}
                open={open}
                onOpenChange={setOpen}
              >
                <DialogTrigger asChild>
                  <Image
                    src={file.fileUrl}
                    alt={`Doc ${idx}`}
                    width={100}
                    height={100}
                    className="cursor-pointer rounded border object-cover"
                    onClick={() =>
                      handleClick(
                        doc.files.map((f) => f.fileUrl),
                        idx
                      )
                    }
                  />
                </DialogTrigger>
                <DialogContent className="w-full max-w-2xl bg-white p-0">
                  <CustomCarousel
                    images={activeFiles}
                    startIndex={startIndex}
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
