import { ResultType } from "@/component/types";

export const analyzeImageAPI = async (image: File): Promise<ResultType> => {
  const formData = new FormData();
  formData.append("file", image);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/predict`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Şəkil analiz edilə bilmədi");
    }
    const data: ResultType = await response.json();
    return data;
  } catch (error) {
    console.error("Xəta baş verdi", error);
    throw error;
  }
};
