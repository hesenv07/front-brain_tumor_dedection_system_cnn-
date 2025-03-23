"use client";
import { JSX } from "react";

import { motion } from "framer-motion";

import VisualizationCard from "./VisualizationCard";

import type { ResultsSectionProps } from "./types";

export default function ResultsSection({
  result,
}: ResultsSectionProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-6 p-2"
    >
      <h3 className="text-xl font-bold text-blue-700">Analiz Nəticələri</h3>
      <p className="text-gray-700 mt-2">
        <strong>Diaqnoz:</strong> {result.prediction}
      </p>
      <p className="text-gray-700 mt-1">
        <strong>Dəqiqlik Faizi:</strong> {(result.confidence * 100).toFixed(2)}%
      </p>

      <div className="flex justify-center items-center flex-col md:flex-row gap-2 mt-4">
        <VisualizationCard
          imageUrl={result.visualization_urls.original_url}
          altText="Orijinal Şəkil"
          label="Orijinal MRT"
        />
        <VisualizationCard
          imageUrl={result.visualization_urls.heatmap_url}
          altText="İstilik Xəritəsi"
          label="Termoqrafik"
        />
        <VisualizationCard
          imageUrl={result.visualization_urls.overlay_url}
          altText="Qarışıq Görüntü"
          label="Qarışıq"
        />
      </div>
    </motion.div>
  );
}
