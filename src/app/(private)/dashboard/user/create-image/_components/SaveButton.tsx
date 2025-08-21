"use client";
import ActionButton from "@/_components/ui/ActionButton";
import { saveToGalleryService } from "@/service/actions/gallery.service";
import clsx from "clsx";
import { ReactNode } from "react";

interface SaveButtonProps {
  title: string;
  image: string;
  children: ReactNode;
  className?: string;
}

export default function SaveButton({
  title,
  image,
  children,
  className,
}: SaveButtonProps) {
  return (
    <ActionButton
      onClick={() => saveToGalleryService({ title, image })}
      loadingText="Saving…"
      successMessage="Image saved successfully!"
      errorMessage="Failed to save image."
      className={clsx(
        "bg-zinc-700 hover:bg-zinc-600 text-white py-2 px-4 rounded-lg",
        className
      )}
    >
      {children}
    </ActionButton>
  );
}
