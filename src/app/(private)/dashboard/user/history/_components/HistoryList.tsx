/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllHistoryByUser } from "@/service/actions/history.service";
import HistoryCard from "./HistoryCard";
import { IHistory } from "@/interface/history.interface";

export default async function HistoryList() {
  const histories = await getAllHistoryByUser();

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {histories.data.map((history: IHistory) => (
        <HistoryCard key={history._id} history={history} />
      ))}
    </div>
  );
}
