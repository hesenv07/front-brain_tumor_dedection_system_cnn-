import { useState } from "react";

import { analyzeImageAPI } from "@/services/mutations/analyseImage";

import { ResultType } from "@/component/types";

export function useBrainTumorDetection() {
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<ResultType | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const resetAll = () => {
    setImage(null);
    setResult(null);
    setPreview(null);
  };

  const analyzeImage = async () => {
    if (!image) return;
    setLoading(true);
    setResult(null);

    try {
      const data = await analyzeImageAPI(image);
      setResult(data);
    } catch (error) {
      console.error("Error analyzing image:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    image,
    result,
    loading,
    preview,
    resetAll,
    analyzeImage,
    handleImageUpload,
  };
}
