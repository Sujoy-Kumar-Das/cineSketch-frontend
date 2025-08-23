import { ReactElement } from "react";

export default function DownloadStatsCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: ReactElement;
}) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}
