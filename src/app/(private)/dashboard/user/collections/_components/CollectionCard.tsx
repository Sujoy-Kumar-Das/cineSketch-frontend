import { ICollection } from "@/interface/collections.interface";
import { countTime } from "@/utils/count.time";
import Image from "next/image";
import Link from "next/link";
import { MdImageNotSupported } from "react-icons/md";
import CollectionCardMenu from "./CollectionCardMenu";

export default function CollectionCard({
  isGallery = false,
  collection,
  onEditModal,
  onDeleteModal,
}: {
  collection: ICollection;
  onEditModal: () => void;
  onDeleteModal: () => void;
  isGallery?: boolean;
}) {
  const { _id, title, createdAt, images } = collection;

  return (
    <div className="relative">
      <Link href={`/collection/${_id}`} className="group block">
        <div className="aspect-square rounded-lg bg-zinc-800/50 border border-zinc-700/50 overflow-hidden relative">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5">
            {images?.length > 0
              ? images
                  .slice(0, 4)
                  .map((image) => (
                    <Image
                      key={image}
                      alt="Collection Image"
                      width={300}
                      height={300}
                      src={image}
                      className="w-full h-full object-cover"
                    />
                  ))
              : [1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-full h-full flex items-center justify-center bg-zinc-700 text-zinc-400"
                  >
                    <MdImageNotSupported className="h-8 w-8" />{" "}
                  </div>
                ))}
          </div>
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <span className="text-lg font-medium">{title}</span>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="font-medium truncate">{title}</h3>
          <p className="text-xs text-zinc-400">
            24 images • Created {countTime(createdAt)}
          </p>
        </div>
      </Link>
      {!isGallery && (
        <CollectionCardMenu
          id={_id}
          onEditModal={onEditModal}
          onDeleteModal={onDeleteModal}
        />
      )}
    </div>
  );
}
