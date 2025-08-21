import Container from "@/_components/shared/container/Container";
import DashboardContainer from "@/_components/shared/container/DashboardContainer";
import Pagination from "@/_components/shared/pagination/Pagination";
import Filter from "@/_components/shared/search/Filter";
import SearchCompo from "@/_components/shared/search/SearchCompo";
import DashboardHeader from "../../_components/DashboardHeader";
import { aiModels } from "../create-image/_components/prompt.data";
import HistoryFilter from "./_components/HistoryFilter";
import HistoryList from "./_components/HistoryList";

export default function HistoryPage() {
  return (
    <DashboardContainer>
      <DashboardHeader title="Generation History">
        <div className=" hidden md:flex items-center gap-4 ">
          <Filter options={[{ label: "All Models", value: "" }, ...aiModels]} />
          <SearchCompo />
        </div>
      </DashboardHeader>
      <Container containerClass="px-6 py-6">
        <div className=" flex md:hidden items-center gap-4 mb-4 ">
          <Filter options={[{ label: "All Models", value: "" }, ...aiModels]} />
          <SearchCompo />
        </div>
        <HistoryFilter />
        <HistoryList />
        <Pagination />
      </Container>
    </DashboardContainer>
  );
}
