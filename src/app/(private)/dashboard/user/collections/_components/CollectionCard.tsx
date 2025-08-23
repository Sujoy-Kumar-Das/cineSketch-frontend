import { ICollection } from "@/interface/collections.interface";
import { countTime } from "@/utils/count.time";
import Image from "next/image";
import Link from "next/link";
import CollectionCardMenu from "./CollectionCardMenu";

export default function CollectionCard({
  collection,
  onEditModal,
  onDeleteModal,
}: {
  collection: ICollection;
  onEditModal: () => void;
  onDeleteModal: () => void;
}) {
  const { _id, title, createdAt } = collection;

  return (
    <div className="relative">
      <Link href="/collection/1" className="group block">
        <div className="aspect-square rounded-lg bg-zinc-800/50 border border-zinc-700/50 overflow-hidden relative">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                alt={`Collection Image ${i}`}
                width={300}
                height={300}
                src={`https://source.unsplash.com/random/300x300/?fantasy,${i}`}
                className="w-full h-full object-cover"
              />
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

      <CollectionCardMenu
        id={_id}
        onEditModal={onEditModal}
        onDeleteModal={onDeleteModal}
      />
    </div>
  );
}
