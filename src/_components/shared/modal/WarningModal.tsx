"use client";

import { FaSpinner } from "react-icons/fa"; // Spinner icon
import Modal from "./Modal";

interface WarningModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

export default function WarningModal({
  isOpen,
  title,
  message,
  onClose,
  onConfirm,
  loading = false,
}: WarningModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="rounded-2xl p-6 w-full shadow-xl border border-zinc-700"
      size="md"
    >
      <div>
        {/* Title */}
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>

        {/* Message */}
        <p className="text-gray-300 mb-6">{message}</p>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-gray-500 text-gray-300 hover:bg-zinc-800 transition"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className={`px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition flex items-center justify-center ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading && <FaSpinner className="animate-spin mr-2 h-5 w-5" />}
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
