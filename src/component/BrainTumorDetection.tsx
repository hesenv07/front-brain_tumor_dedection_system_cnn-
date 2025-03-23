"use client";
import { JSX } from "react";

import { useBrainTumorDetection } from "@/hooks/useBrainTumorDetection";

import Indicator from "./Indicator";
import UploadSection from "./UploadSection";
import AnalyzeButton from "./AnalyzeButton";
import ResultsSection from "./ResultSection";
import LottieSpinner from "./LottieAnimation";

export default function BrainTumorDetection(): JSX.Element {
  const {
    result,
    loading,
    preview,
    resetAll,
    analyzeImage,
    handleImageUpload,
  } = useBrainTumorDetection();

  return (
    <div className="w-full min-h-screen flex items-center justify-center mx-auto px-4">
      <div className="max-w-5xl min-h-10/12 w-full flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl mt-10 border border-gray-200 p-8 gap-6">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="md:text-3xl text-lg font-extrabold text-center mb-6 text-gray-800">
            CNN ilə Beyin Şişi Aşkarlama və Vizuallaşdırma Sistemi
          </h2>
          <UploadSection
            image={preview}
            clearImage={resetAll}
            handleImageUpload={handleImageUpload}
          />
          <AnalyzeButton isLoading={loading} analyzeImage={analyzeImage} />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:border-l border-gray-300 p-4">
          <div className="hidden md:block">
            {!result && !loading && <LottieSpinner />}
          </div>
          {loading && <Indicator />}
          {result && <ResultsSection result={result} />}
        </div>
      </div>
    </div>
  );
}
