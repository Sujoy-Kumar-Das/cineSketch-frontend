import { IGallery } from "@/interface/gallery.interface";
import { countTime } from "@/utils/count.time";
import Image from "next/image";
import DownloadDeleteButton from "./DownloadDeleteButton";

interface TableDataProps {
  item: {
    _id: string;
    image: IGallery;
    createdAt: string;
  };
}

export default function TableData({ item }: TableDataProps) {
  const { createdAt, _id, image } = item;

  const { size, title, image: imageUrl, model } = image;

  return (
    <tr className="hover:bg-zinc-800/30">
      {/* Image + Info */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 rounded-lg overflow-hidden">
            <Image
              height={400}
              width={400}
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium">{title}</div>
          </div>
        </div>
      </td>

      {/* Model */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 py-1 text-xs bg-indigo-500/10 text-indigo-400 rounded">
          {model}
        </span>
      </td>

      {/* Size */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
        {size}
      </td>

      {/* Downloaded */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
        {countTime(createdAt)}
      </td>

      {/* Actions */}
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <DownloadDeleteButton id={_id} />
      </td>
    </tr>
  );
}
