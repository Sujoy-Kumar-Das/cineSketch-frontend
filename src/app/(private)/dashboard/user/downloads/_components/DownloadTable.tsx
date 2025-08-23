"use client";

import { MdDelete, MdRefresh } from "react-icons/md";

interface DownloadItem {
  id: string;
  image: string;
  title: string;
  description: string;
  model: string;
  size: string;
  downloaded: string;
}

interface DownloadTableProps {
  downloads: DownloadItem[];
  onRetry?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function DownloadTable({
  downloads,
  onRetry,
  onDelete,
}: DownloadTableProps) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header */}
          <thead className="bg-zinc-700/10">
            <tr>
              {["Image", "Model", "Size", "Downloaded", "Actions"].map(
                (head) => (
                  <th
                    key={head}
                    className={`px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wider ${
                      head === "Actions" ? "text-right" : "text-left"
                    }`}
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-zinc-700/50">
            {downloads.map((item) => (
              <tr key={item.id} className="hover:bg-zinc-800/30">
                {/* Image + Info */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="text-xs text-zinc-400 truncate w-40">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Model */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs bg-indigo-500/10 text-indigo-400 rounded">
                    {item.model}
                  </span>
                </td>

                {/* Size */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                  {item.size}
                </td>

                {/* Downloaded */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                  {item.downloaded}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    className="text-indigo-400 hover:text-indigo-300 mr-3"
                    onClick={() => onRetry?.(item.id)}
                  >
                    <MdRefresh size={18} />
                  </button>
                  <button
                    className="text-rose-400 hover:text-rose-300"
                    onClick={() => onDelete?.(item.id)}
                  >
                    <MdDelete size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
