"use client";
import { downloadImageFromHistoryService } from "@/service/actions/download.service";
import { downloadImage } from "@/utils/download-image";
import { useState } from "react";
import { toast } from "sonner";

interface UseDownloadFromHistoryProps {
  historyId: string;
  imageUrl: string;
  imageName: string;
  model: string;
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

      await downloadImage(imageName, imageUrl);

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
