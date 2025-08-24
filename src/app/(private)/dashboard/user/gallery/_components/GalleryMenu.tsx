"use client";
import useMenuContext from "@/hooks/useMenuContext";
import { IGallery } from "@/interface/gallery.interface";
import { CiMenuKebab } from "react-icons/ci";
import EditGalleryModal from "./EditGalleryModal";
import GalleryDeleteModal from "./GalleryDeleteModal";
import GalleryPreviewModal from "./GalleryPreviewModal";

export default function GalleryMenu({
  galleryImage,
}: {
  galleryImage: IGallery;
}) {
  const { openId, onMenuClick } = useMenuContext();

  const { _id, title, description } = galleryImage;

  const open = openId === _id;
  return (
    <div className="absolute top-2 right-2">
      <button
        onClick={(e) => onMenuClick(e, _id)}
        className="w-7 h-7 flex items-center justify-center bg-zinc-900/80 rounded-full text-zinc-300 hover:text-white"
        aria-label="Collection options"
      >
        <CiMenuKebab className=" text-xs" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-28 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-10">
          <EditGalleryModal
            id={_id}
            title={title}
            description={description || ""}
          />

          <GalleryPreviewModal galleryImage={galleryImage} />

          <GalleryDeleteModal galleryId={_id} />
        </div>
      )}
    </div>
  );
}
