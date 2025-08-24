import Container from "@/_components/shared/container/Container";
import DashboardContainer from "@/_components/shared/container/DashboardContainer";
import Pagination from "@/_components/shared/pagination/Pagination";
import Filter from "@/_components/shared/search/Filter";
import SearchCompo from "@/_components/shared/search/SearchCompo";
import { Suspense } from "react";
import DashboardHeader from "../../_components/DashboardHeader";
import { aiModels } from "../create-image/_components/prompt.data";
import DownloadStats from "./_components/DownloadStats";
import DownloadTable from "./_components/DownloadTable";
import TableSkeleton from "./_components/TableSkeleton";

export default function DownloadPage() {
  return (
    <DashboardContainer>
      <DashboardHeader title="Downloads">
        <div className=" hidden md:flex items-center gap-4 ">
          <Filter
            filterKey="model"
            options={[{ label: "All Model", value: "" }, ...aiModels]}
          />
          <SearchCompo />
        </div>
      </DashboardHeader>
      <Container containerClass="px-6 py-6">
        <div className=" flex md:hidden items-center gap-4 mb-4 ">
          <Filter
            filterKey="model"
            options={[{ label: "All Model", value: "" }, ...aiModels]}
          />
          <SearchCompo />
        </div>

        <DownloadStats />
        <Suspense fallback={<TableSkeleton />}>
          <DownloadTable />
        </Suspense>
        <Pagination />
      </Container>
    </DashboardContainer>
  );
}
