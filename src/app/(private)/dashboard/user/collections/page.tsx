import Container from "@/_components/shared/container/Container";
import DashboardContainer from "@/_components/shared/container/DashboardContainer";
import { Suspense } from "react";
import DashboardHeader from "../../_components/DashboardHeader";
import CollectionCardSkeleton from "./_components/CollectionCardSkeleton";
import UserCollectionHeader from "./_components/UserCollectionHeader";
import UserCollectionList from "./_components/UserCollectionList";

export default function CollectionsPage() {
  return (
    <DashboardContainer>
      <DashboardHeader title="Collections">
        <div className=" hidden md:flex items-center gap-2 ">
          <UserCollectionHeader />
        </div>
      </DashboardHeader>
      <Container containerClass="px-6 py-6">
        <div className=" flex md:hidden items-center gap-4 mb-4 ">
          <UserCollectionHeader />
        </div>

        <Suspense fallback={<CollectionCardSkeleton />}>
          <UserCollectionList />
        </Suspense>
      </Container>
    </DashboardContainer>
  );
}
