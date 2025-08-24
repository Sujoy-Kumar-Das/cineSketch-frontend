"use client";
import ActionButton from "@/_components/ui/ActionButton";
import { downloadImageFromGalleryService } from "@/service/actions/download.service";
import { downloadImage } from "@/utils/download-image";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import { toast } from "sonner";

interface DownloadFromGalleryButtonProps {
  imageId: string;
  imageUrl: string;
  imageName: string;
  children: ReactNode;
  className?: string;
  loadingText?: string | undefined;
}

export default function DownloadFromGalleryButton({
  imageId,
  imageUrl,
  imageName,
  children,
  className,
  loadingText,
}: DownloadFromGalleryButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownloadImage = async () => {
    if (!imageId) {
      toast.error("Invalid image or history ID.");
      return;
    }

    try {
      setLoading(true);

      const saveResult = await downloadImageFromGalleryService(imageId);

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

  return (
    <ActionButton
      onClick={handleDownloadImage}
      loading={loading}
      loadingText={loadingText ? "Downloading..." : undefined}
      className={clsx("bg-blue-600 text-white py-2 px-4 rounded-lg", className)}
    >
      {children}
    </ActionButton>
  );
}
