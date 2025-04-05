"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface ImageUploadAreaProps {
  maxFiles?: number;
  acceptedFileTypes?: string;
}

export function ImageUploadArea({
  maxFiles = 10,
  acceptedFileTypes = "image/*",
}: ImageUploadAreaProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      const totalFiles = [...files, ...newFiles];

      if (totalFiles.length > maxFiles) {
        alert(`You can only upload a maximum of ${maxFiles} files.`);
        return;
      }

      setFiles(totalFiles);

      // Generate previews for images
      newFiles.forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target?.result) {
              setPreviews((prev) => [...prev, e.target!.result as string]);
            }
          };
          reader.readAsDataURL(file);
        } else {
          // For non-image files, use a placeholder
          setPreviews((prev) => [...prev, "document"]);
        }
      });
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
  };

  return (
    <div className="grid gap-4">
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-12">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">
              Drag & drop files here or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              Upload up to {maxFiles} files (
              {acceptedFileTypes.replace(/,/g, ", ")})
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            multiple
            accept={acceptedFileTypes}
            onChange={handleFileChange}
            id="file-upload"
          />
          <Button
            variant="outline"
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            Select Files
          </Button>
        </div>
      </div>

      {previews.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {previews.map((preview, index) => (
            <div key={index} className="relative rounded-lg border">
              {preview === "document" ? (
                <div className="flex h-32 items-center justify-center bg-muted">
                  <p className="text-sm text-muted-foreground">
                    {files[index].name}
                  </p>
                </div>
              ) : (
                <img
                  src={preview || "/placeholder.svg"}
                  alt={`Preview ${index}`}
                  className="h-32 w-full rounded-lg object-cover"
                />
              )}
              <Button
                variant="destructive"
                size="icon"
                className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
                onClick={() => removeFile(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
