"use client";

import AddToFavoriteButton from "@/_components/shared/action-buttons/AddToFavouriteButton";
import Modal from "@/_components/shared/modal/Modal";
import { IGallery } from "@/interface/gallery.interface";
import { countTime } from "@/utils/count.time";
import Image from "next/image";
import { useState } from "react";
import { FiDownload, FiHeart, FiX } from "react-icons/fi";
import DownloadFromGalleryButton from "../../history/_components/DownloadFromGallery";
import AddToCollectionModal from "./AddToCollectionModal";

interface GalleryPreviewModalProps {
  galleryImage: IGallery;
}

export default function GalleryPreviewModal({
  galleryImage,
}: GalleryPreviewModalProps) {
  const [open, setOpen] = useState(false);

  const { _id, createdAt, image, model, title, prompt, size } = galleryImage;

  return (
    <>
      <button
        className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-800 rounded-md"
        onClick={() => setOpen(true)}
      >
        Preview
      </button>

      {open && (
        <Modal
          isOpen
          onClose={() => setOpen(false)}
          size="lg"
          className=" max-w-4xl "
        >
          <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Image Details</h3>
              <button
                className="text-zinc-400 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image */}
              <div className=" relative rounded-lg overflow-hidden">
                <Image
                  fill
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Details */}
              <div>
                <div className="mb-4">
                  <h4 className="text-sm text-zinc-400 mb-1">Prompt</h4>
                  <p className="text-sm">{prompt}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm text-zinc-400 mb-1">Model</h4>
                  <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded">
                    {model}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm text-zinc-400 mb-1">Created</h4>
                  <p className="text-sm">{countTime(createdAt)}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm text-zinc-400 mb-1">Dimensions</h4>
                  <p className="text-sm">{size}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-6">
                  <DownloadFromGalleryButton
                    imageId={_id}
                    imageName={title}
                    imageUrl={image}
                    className="min-w-10"
                  >
                    <FiDownload size={16} /> Download
                  </DownloadFromGalleryButton>

                  <AddToFavoriteButton
                    galleryId={_id}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm flex items-center gap-2"
                  >
                    <FiHeart size={16} /> Favorite
                  </AddToFavoriteButton>

                  <AddToCollectionModal
                    _id={_id}
                    onClose={() => setOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
