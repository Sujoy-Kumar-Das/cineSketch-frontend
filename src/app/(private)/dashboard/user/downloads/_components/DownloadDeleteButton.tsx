"use client";

import { deleteUsersDownloadedImageService } from "@/service/actions/download.service";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

export default function DownloadDeleteButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  const handleDeleteItem = async () => {
    setLoading(true);
    try {
      const res = await deleteUsersDownloadedImageService(id);

      if (!res.success) {
        toast.error(res.message || "Failed to delete.");
        setLoading(false);
        return;
      }

      toast.success(res.message || "Deleted successfully!");
      // Optionally, trigger refresh or remove row from UI here
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`flex justify-self-center items-center justify-center text-rose-400 hover:text-rose-300 ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleDeleteItem}
      disabled={loading}
    >
      {loading ? (
        <span className="animate-spin h-4 w-4 border-2 border-rose-400 border-t-transparent rounded-full" />
      ) : (
        <MdDelete size={18} />
      )}
    </button>
  );
}
