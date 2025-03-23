import Spinner from "./Spinner";

interface AnalyzeButtonProps {
  isLoading: boolean;
  analyzeImage: () => void;
}

export default function AnalyzeButton({
  isLoading,
  analyzeImage,
}: AnalyzeButtonProps) {
  return (
    <button
      className="w-full flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 mt-6 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-800 transition shadow-lg"
      onClick={analyzeImage}
    >
      {isLoading ? (
        <>
          <Spinner />
          <span>Analiz Edilir</span>
        </>
      ) : (
        "Analiz Et"
      )}
    </button>
  );
}
