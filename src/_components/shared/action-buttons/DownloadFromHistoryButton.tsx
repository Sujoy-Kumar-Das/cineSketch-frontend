"use client";
import useDownloadFromHistory from "@/hooks/useDownloadFromHistory";
import clsx from "clsx";
import { ReactNode } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface DownloadFromHistoryButtonProps {
  historyId: string;
  imageUrl: string;
  imageName: string;
  children: ReactNode;
  className?: string;
  loadingText?: string | undefined;
}

export default function DownloadFromHistoryButton({
  historyId,
  imageUrl,
  imageName,
  children,
  className,
  loadingText,
}: DownloadFromHistoryButtonProps) {
  const { handleDownloadImage, loading } = useDownloadFromHistory({
    historyId,
    imageUrl,
    imageName,
  });

  const loadingIndicator = loadingText ? (
    loadingText
  ) : (
    <AiOutlineLoading3Quarters className="absolute animate-spin h-4 w-4 text-white" />
  );

  return (
    <button
      onClick={handleDownloadImage}
      className={clsx(
        "bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2",
        className
      )}
      disabled={loading}
    >
      {!loading && children}

      {loading && loadingIndicator}
    </button>
  );
}
