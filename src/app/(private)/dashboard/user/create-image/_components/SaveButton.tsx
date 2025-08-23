"use client";
import ActionButton from "@/_components/ui/ActionButton";
import {
  IGalleryPayload,
  saveToGalleryService,
} from "@/service/actions/gallery.service";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import { toast } from "sonner";

interface SaveButtonProps {
  data: IGalleryPayload;
  children: ReactNode;
  className?: string;
  loadingText?: string;
}

export default function SaveButton({
  data,
  children,
  className,
  loadingText,
}: SaveButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleSaveImage = async () => {
    try {
      setLoading(true);
      const res = await saveToGalleryService(data);

      if (!res.success) {
        toast.error(res.message || "Failed to save image.");
        return;
      }

      toast.success(res.message || "Saved to gallery successfully.");
    } catch {
      toast.error("Failed to save in gallery.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <ActionButton
      onClick={handleSaveImage}
      loading={loading}
      loadingText={loadingText}
      className={clsx(
        "bg-zinc-700 hover:bg-zinc-600 text-white py-2 px-4 rounded-lg",
        className
      )}
    >
      {children}
    </ActionButton>
  );
}
