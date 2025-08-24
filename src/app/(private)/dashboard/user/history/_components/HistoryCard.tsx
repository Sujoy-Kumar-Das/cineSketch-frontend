import { IHistory } from "@/interface/history.interface";
import { countTime } from "@/utils/count.time";
import Image from "next/image";
import { FaDownload, FaSave } from "react-icons/fa";
import DownloadFromHistoryButton from "../../create-image/_components/DownloadFromHistoryButton";
import SaveButton from "../../create-image/_components/SaveButton";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function HistoryCard({ history }: { history: IHistory }) {
  const { image, model, title, createdAt, _id } = history;

  return (
    <div className="group relative rounded-lg overflow-hidden border border-zinc-700/50 aspect-square">
      <Image
        height={300}
        width={300}
        src={image}
        className="w-full h-full object-cover"
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
        <p className="text-xs text-zinc-300 mb-2 truncate">{title}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded">
            {model}
          </span>
          <div className="flex gap-2">
            <DownloadFromHistoryButton
              imageName={title}
              imageUrl={image}
              historyId={_id}
              model={model}
              className="w-7 h-7 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 rounded-full"
            >
              <span>
                <FaDownload className=" text-xs text-white" />
              </span>
            </DownloadFromHistoryButton>

            <SaveButton
              historyId={_id}
              className="w-7 h-7 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 rounded-full"
            >
              <span>
                <FaSave className="text-xs" />
              </span>
            </SaveButton>
          </div>
        </div>
      </div>
      <div className="absolute top-2 left-2 text-xs bg-zinc-900/80 text-zinc-300 px-2 py-1 rounded">
        {countTime(createdAt)}
      </div>
    </div>
  );
}
