import Image from "next/image";
import { FaImage } from "react-icons/fa";
import ImagePreviewLoading from "./ImagePreviewLoading";

interface ImagePreviewResultProps {
  loading: boolean;
  error: string | undefined;
  link: string | undefined;
}

export default function ImagePreviewResult({
  loading,
  error,
  link,
}: ImagePreviewResultProps) {
  return (
    <div className="bg-zinc-900 rounded-lg border-2 border-dashed border-zinc-700 flex-1 flex items-center justify-center relative min-h-[200px] md:min-h-[300px]">
      {loading ? (
        <ImagePreviewLoading />
      ) : error ? (
        <p className="text-red-400 font-medium text-sm md:text-base px-2 text-center">
          {error}
        </p>
      ) : link ? (
        <div className="relative w-full h-full">
          <Image
            src={link}
            alt="Generated"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      ) : (
        <div className="text-center p-4 md:p-6">
          <FaImage className="text-2xl md:text-4xl text-zinc-700 mb-2 md:mb-3 mx-auto" />
          <p className="text-zinc-600 text-sm md:text-base">
            Your generated image will appear here
          </p>
        </div>
      )}
    </div>
  );
}
