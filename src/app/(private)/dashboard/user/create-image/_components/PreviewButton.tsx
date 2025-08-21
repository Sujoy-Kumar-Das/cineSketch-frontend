"use client";
import Modal from "@/_components/shared/modal/Modal";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode, useState } from "react";

export default function PreviewButton({
  link,
  children,
  className,
}: {
  link: string;
  children: ReactNode;
  className?: string;
}) {
  const [previewOpen, setPreviewOpen] = useState(false);

  const handlePreview = () => {
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
  };
  return (
    <>
      <button
        onClick={handlePreview}
        className={clsx(
          `flex items-center justify-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700`,
          className
        )}
      >
        {children}
      </button>
      {previewOpen && link && (
        <Modal isOpen onClose={handleClosePreview}>
          <div className="flex items-center justify-center w-full h-[80vh]">
            <div className="relative w-full max-w-3xl h-full">
              <Image
                src={link}
                alt="Preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
