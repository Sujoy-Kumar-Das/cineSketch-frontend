"use client";
import Image from "next/image";
import { FaDownload, FaSave } from "react-icons/fa";
import DownloadFromHistoryButton from "./DownloadFromHistoryButton";
import SaveButton from "./SaveButton";

interface RecentImageCardProps {
  imageUrl: string;
  alt: string;
  historyId: string;
  imageName: string;
  model: string;
}

export default function RecentImageCard({
  alt,
  model,
  historyId = "",
  imageName = "",
  imageUrl = "",
}: RecentImageCardProps) {
  const saveDataPayload = {
    title: imageName,
    image: imageUrl,
    model,
  };
  return (
    <div className="image-card group relative rounded-lg overflow-hidden border border-zinc-700/50 aspect-square">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 rounded-lg opacity-100
        `}
      />

      {/* Image Actions */}
      <div className="image-actions absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
        <div className="flex justify-between items-center">
          <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded">
            {model}
          </span>

          <div className="flex gap-2">
            <DownloadFromHistoryButton
              className="w-7 h-7 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full"
              imageUrl={imageUrl}
              imageName={imageName}
              historyId={historyId}
              loadingText={undefined}
            >
              <span>
                <FaDownload className="text-sm text-white" />
              </span>
            </DownloadFromHistoryButton>

            <SaveButton
              className="w-7 h-7 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 rounded-full"
              data={saveDataPayload}
            >
              <span>
                <FaSave className="text-xs text-white" />
              </span>
            </SaveButton>
          </div>
        </div>
      </div>
    </div>
  );
}
