/* eslint-disable @typescript-eslint/no-explicit-any */
import TableHeader from "@/_components/shared/table/TableHeader";
import { getUsersDownloadedImageService } from "@/service/actions/download.service";
import TableData from "./TableData";

export default async function DownloadTable() {
  const data = await getUsersDownloadedImageService();

  return (
    <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header */}
          <TableHeader
            items={["Image", "Model", "Size", "Downloaded", "Actions"]}
          />

          <tbody className="divide-y divide-zinc-700/50">
            {data.data.downloads.map((item: any) => (
              <TableData key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
