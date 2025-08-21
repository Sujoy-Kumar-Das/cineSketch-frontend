/* eslint-disable @typescript-eslint/no-explicit-any */
import ActionButton from "@/_components/ui/ActionButton";
import { downloadImageService } from "@/service/actions/download.service";
import { ReactNode } from "react";

interface SaveAndDownloadButtonProps {
  imageUrl: string;
  imageName: string;
  children: ReactNode;
}

export default function SaveAndDownloadButton({
  imageUrl,
  imageName,
  children,
}: SaveAndDownloadButtonProps) {
  const handleDownloadImage = async (): Promise<{
    success: boolean;
    message?: string;
  }> => {
    try {
      const response = await fetch(imageUrl);

      if (!response.ok) {
        return { success: false, message: "Failed to download image." };
      }

      const name = imageName || "downloaded-image.png";
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Save in DB
      const saveResult: any = await downloadImageService({
        name,
        image: imageUrl,
      });
      if (!saveResult.success) {
        return { success: false, message: "Failed to save download record." };
      }

      return { success: true, message: "Downloaded successfully!" };
    } catch (error) {
      console.error("Download error:", error);
      return { success: false, message: "Download failed!" };
    }
  };

  return (
    <ActionButton
      onClick={handleDownloadImage}
      loadingText="Downloading…"
      successMessage="Downloaded successfully!"
      errorMessage="Download failed!"
      className="bg-blue-600 text-white py-2 px-4 rounded-lg"
    >
      {children}
    </ActionButton>
  );
}
