"use client";
import ActionButton from "@/_components/ui/ActionButton";
import { addToFavoriteService } from "@/service/actions/favourite.service";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import { toast } from "sonner";

interface AddToFavoriteButtonProps {
  galleryId: string;
  children: ReactNode;
  className?: string;
  loadingText?: string | undefined;
}

export default function AddToFavoriteButton({
  galleryId,
  children,
  className,
  loadingText,
}: AddToFavoriteButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownloadImage = async () => {
    if (!galleryId) {
      toast.error("Invalid gallery ID.");
      return;
    }

    try {
      setLoading(true);

      const saveResult = await addToFavoriteService(galleryId);

      if (!saveResult?.success) {
        toast.error(saveResult.message || "Failed to add your favorite.");
        return;
      }

      toast.success("Image added favorite list successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add your favorite. Please try again.");
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
