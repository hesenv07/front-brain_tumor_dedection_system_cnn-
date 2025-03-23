"use client";

import { useRef } from "react";

interface UploadSectionProps {
  image: string | null;
  clearImage: () => void;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadSection({
  image,
  clearImage,
  handleImageUpload,
}: UploadSectionProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClearImage = () => {
    clearImage();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center border-2 border-dashed border-blue-400 p-4 md:p-6 rounded-xl cursor-pointer hover:bg-blue-50 transition shadow-md relative">
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      {!image && (
        <label
          htmlFor="fileInput"
          className="cursor-pointer text-blue-600 text-sm md:text-xl font-semibold"
        >
          MRT şəklini yükləmək üçün klikləyin
        </label>
      )}
      {image && (
        <div className="relative mt-4">
          <img
            src={image}
            alt="MRI Preview"
            className="w-48 h-48 object-cover rounded-xl shadow-lg border border-gray-300"
          />
          <button
            onClick={handleClearImage}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
