"use client";
import { downloadImageFromHistoryService } from "@/service/actions/download.service";
import { useState } from "react";
import { toast } from "sonner";

interface UseDownloadFromHistoryProps {
  historyId: string;
  imageUrl: string;
  imageName?: string;
}

export default function useDownloadFromHistory({
  historyId,
  imageUrl,
  imageName,
}: UseDownloadFromHistoryProps) {
  const [loading, setLoading] = useState(false);

  const handleDownloadImage = async () => {
    if (!historyId || !imageUrl) {
      toast.error("Invalid image or history ID.");
      return;
    }

    try {
      setLoading(true);

      const saveResult = await downloadImageFromHistoryService(historyId);

      if (!saveResult?.success) {
        toast.error("Failed to save download record.");
        return;
      }

      // Fetch the image
      const response = await fetch(imageUrl);
      if (!response.ok) {
        toast.error("Failed to download image. Please try again.");
        return;
      }

      // Prepare file download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = imageName || "downloaded-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("Image downloaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Download failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleDownloadImage };
}
