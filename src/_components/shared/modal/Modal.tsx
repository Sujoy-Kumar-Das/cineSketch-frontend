"use client";
import { ReactNode, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
  className = "",
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-3xl",
  }[size];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`bg-zinc-900 text-white rounded-xl shadow-lg p-4 md:p-6 relative w-full ${sizeClass} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">{title}</h3>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white"
            >
              <AiOutlineClose className="h-5 w-5" />
            </button>
          </div>
        )}

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
