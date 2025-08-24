import { getUsersDownloadedImageService } from "@/service/actions/download.service";
import convertStorage from "@/utils/covertStorage";
import { FaDownload } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import DownloadStatsCard from "./DownloadStatsCard";

export default async function DownloadStats() {
  const data = await getUsersDownloadedImageService();

  console.log({ data });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <DownloadStatsCard
        title="Total Downloads"
        value={data.data.stats.totalDownloads}
        icon={<FaDownload className="text-indigo-400" />}
      />
      <DownloadStatsCard
        title="This Month Downloads"
        value={data.data.stats.monthDownloads}
        icon={<SlCalender className="text-green-400" />}
      />
      <DownloadStatsCard
        title="Storage Used"
        value={convertStorage(data.data.stats.totalStorage)}
        icon={<GrStorage className="text-blue-400" />}
      />
    </div>
  );
}
