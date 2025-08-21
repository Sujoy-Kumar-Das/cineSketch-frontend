"use client";
import ActionButton from "@/_components/ui/ActionButton";
import { publishToGalleryService } from "@/service/actions/gallery.service";
import { ReactNode } from "react";

interface PublishButtonProps {
  title: string;
  image: string;
  children: ReactNode;
}

export default function PublishButton({
  title,
  image,
  children,
}: PublishButtonProps) {
  return (
    <ActionButton
      onClick={() => publishToGalleryService({ title, image })}
      loadingText="Publishing…"
      successMessage="Image published successfully!"
      errorMessage="Failed to publish image."
      className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
    >
      {children}
    </ActionButton>
  );
}
