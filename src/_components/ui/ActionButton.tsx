"use client";
import clsx from "clsx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ActionButtonProps {
  children: React.ReactNode;
  onClick: () => Promise<void> | void;
  className?: string;
  loadingText?: string | undefined;
  disabled?: boolean;
  loading: boolean;
}

export default function ActionButton({
  children,
  onClick,
  className = "",
  loadingText,
  disabled = false,
  loading = false,
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx("flex items-center justify-center gap-2", className)}
      disabled={loading || disabled}
    >
      {!loading && children}

      {loading &&
        (loadingText ? (
          loadingText
        ) : (
          <AiOutlineLoading3Quarters className="absolute animate-spin h-4 w-4 text-white" />
        ))}
    </button>
  );
}
