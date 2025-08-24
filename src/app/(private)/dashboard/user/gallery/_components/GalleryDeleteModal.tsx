"use client";

import WarningModal from "@/_components/shared/modal/WarningModal";
import { deleteGalleryService } from "@/service/actions/gallery.service";
import { useState } from "react";
import { toast } from "sonner";

export default function GalleryDeleteModal({
  galleryId,
}: {
  galleryId: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      const res = await deleteGalleryService(galleryId);

      if (!res.success) {
        toast.error(res.message || "Failed to delete gallery.");
        return;
      }

      toast.success(res.message || "Gallery deleted successfully.");
      setOpen(false);
    } catch (error) {
      console.error("Failed to delete:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-800 rounded-md"
        onClick={() => setOpen(true)}
      >
        Delete
      </button>

      {open && (
        <WarningModal
          isOpen={open}
          title="Delete Gallery Item"
          message="Are you sure you want to delete this gallery item? This action cannot be undone."
          onClose={() => setOpen(false)}
          onConfirm={handleConfirm}
          loading={loading}
        />
      )}
    </>
  );
}
