"use client";
import useMenuContext from "@/hooks/useMenuContext";
import { CiMenuKebab } from "react-icons/ci";
import EditGalleryModal from "./EditGalleryModal";

export default function GalleryMenu({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  const { openId, onMenuClick } = useMenuContext();

  const open = openId === id;
  return (
    <div className="absolute top-2 right-2">
      <button
        onClick={(e) => onMenuClick(e, id)}
        className="w-7 h-7 flex items-center justify-center bg-zinc-900/80 rounded-full text-zinc-300 hover:text-white"
        aria-label="Collection options"
      >
        <CiMenuKebab className=" text-xs" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-28 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-10">
          <EditGalleryModal id={id} title={title} description={description} />
          <button
            className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-800 rounded-md"
            // onClick={onDeleteModal}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
