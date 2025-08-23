/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllImageHistoryByUserService } from "@/service/actions/prompt.service";
import RecentImageCard from "./RecentImageCard";

export default async function RecentImagesList() {
  const histories: any = await getAllImageHistoryByUserService();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {histories?.data?.map((history: any) => (
        <RecentImageCard
          key={history._id}
          alt={history.title + "Image"}
          imageUrl={history.image}
          imageName={history.title}
          historyId={history._id}
          model={history.model}
        />
      ))}
    </div>
  );
}
