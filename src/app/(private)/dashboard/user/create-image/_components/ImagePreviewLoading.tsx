import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ImagePreviewLoading() {
  return (
    <div className="flex flex-col items-center gap-2 text-indigo-400">
      <AiOutlineLoading3Quarters className="animate-spin text-2xl md:text-4xl" />
      <p className="text-xs md:text-sm">Generating image...</p>
    </div>
  );
}
