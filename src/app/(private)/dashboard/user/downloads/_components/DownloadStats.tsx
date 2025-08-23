import { FaDownload } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import DownloadStatsCard from "./DownloadStatsCard";

export default function DownloadStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <DownloadStatsCard
        title="Total Downloads"
        value="40"
        icon={<FaDownload className="text-indigo-400" />}
      />
      <DownloadStatsCard
        title="This Month Downloads"
        value="40"
        icon={<SlCalender className="text-green-400" />}
      />
      <DownloadStatsCard
        title="Storage Used"
        value="40"
        icon={<GrStorage className="text-blue-400" />}
      />
    </div>
  );
}
