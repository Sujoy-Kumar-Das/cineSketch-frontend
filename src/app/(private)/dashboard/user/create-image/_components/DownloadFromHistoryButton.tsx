"use client";
import ActionButton from "@/_components/ui/ActionButton";
import useDownloadFromHistory from "@/hooks/useDownloadFromHistory";
import clsx from "clsx";
import { ReactNode } from "react";

interface DownloadFromHistoryButtonProps {
  historyId: string;
  imageUrl: string;
  imageName: string;
  children: ReactNode;
  className?: string;
  loadingText?: string | undefined;
  model: string;
}

export default function DownloadFromHistoryButton({
  historyId,
  imageUrl,
  imageName,
  children,
  className,
  loadingText,
  model,
}: DownloadFromHistoryButtonProps) {
  const { handleDownloadImage, loading } = useDownloadFromHistory({
    historyId,
    imageUrl,
    imageName,
    model,
  });

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
