/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { toast } from "sonner";

export default function DownloadButton({
  children,
  imageUrl,
  imageName,
  className,
}: {
  children: ReactNode;
  imageUrl: string;
  imageName: string;
  className?: string;
}) {
  const handleDownloadImage = async () => {
    try {
      const response = await fetch(imageUrl);

      if (!response.ok) {
        toast.error("Failed to download image.");
      }

      const name = imageName || "downloaded-image.png";

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("Image downloaded successfully");
    } catch {
      toast.error("Failed to download image.");
    }
  };
  return (
    <button
      className={`flex-1 bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm ${className}`}
      onClick={handleDownloadImage}
    >
      {children}
    </button>
  );
}
