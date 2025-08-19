import Image from "next/image";
import { FaDownload, FaHeart } from "react-icons/fa";
interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  user: {
    name: string;
    avatarUrl: string;
  };
}
export default function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div
      key={item.id}
      className="image-card rounded-xl overflow-hidden border border-zinc-700/50 hover:border-indigo-500/50 relative group"
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        width={600}
        height={600}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
        <h3 className="font-bold mb-1">{item.title}</h3>
        <p className="text-sm text-zinc-300 mb-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={item.user.avatarUrl}
              width={24}
              height={24}
              className="w-6 h-6 rounded-full mr-2"
              alt={item.user.name}
            />
            <span className="text-xs">@{item.user.name}</span>
          </div>
          <div className="flex gap-2">
            <button className="text-pink-400 hover:text-pink-300">
              <FaHeart />
            </button>
            <button className="text-blue-400 hover:text-blue-300">
              <FaDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
