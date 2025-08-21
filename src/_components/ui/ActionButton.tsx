"use client";
import clsx from "clsx";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";

interface ActionButtonProps {
  children: React.ReactNode;
  onClick: () => Promise<{ success: boolean; message?: string }>;
  className?: string;
  loadingText?: string;
  successMessage?: string;
  errorMessage?: string;
  disabled?: boolean;
}

export default function ActionButton({
  children,
  onClick,
  className = "",
  loadingText = "Processing…",
  successMessage = "Action completed successfully.",
  errorMessage = "Something went wrong.",
  disabled = false,
}: ActionButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading || disabled) return;

    setLoading(true);
    try {
      const res = await onClick();

      if (!res.success) {
        toast.error(res.message || errorMessage);
        return;
      }

      toast.success(res.message || successMessage);
    } catch (err) {
      console.error("ActionButton error:", err);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx("flex items-center justify-center gap-2", className)}
      disabled={loading || disabled}
    >
      {loading ? (
        <>
          <AiOutlineLoading3Quarters className="animate-spin h-4 w-4" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
}
