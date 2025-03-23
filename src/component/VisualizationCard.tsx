import { getImageUrl } from "@/utils/Function";

import { JSX } from "react";

interface VisualizationCardProps {
  label: string;
  altText: string;
  imageUrl: string;
}

export default function VisualizationCard({
  label,
  altText,
  imageUrl,
}: VisualizationCardProps): JSX.Element {
  return (
    <div className="text-center bg-white  rounded-lg ">
      <img
        src={getImageUrl(imageUrl)}
        alt={altText}
        className="w-36 h-36 object-cover rounded-lg border"
      />
      <p className="text-sm text-blue-500 mt-2">{label}</p>
    </div>
  );
}
