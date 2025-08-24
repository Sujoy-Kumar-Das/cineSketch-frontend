import Container from "@/_components/shared/container/Container";
import DashboardContainer from "@/_components/shared/container/DashboardContainer";
import Pagination from "@/_components/shared/pagination/Pagination";
import { Suspense } from "react";
import DashboardHeader from "../../_components/DashboardHeader";
import CollectionCardSkeleton from "../collections/_components/CollectionCardSkeleton";
import UserCollectionList from "../collections/_components/UserCollectionList";
import GalleryHeader from "./_components/UserGalleryHeader";
import UserGalleryImageSection from "./_components/UserGalleryImageSection";

export default function GalleryPage() {
  return (
    <DashboardContainer>
      <DashboardHeader title="Gallery">
        <div className=" hidden md:flex items-center gap-4 ">
          <GalleryHeader />
        </div>
      </DashboardHeader>
      <Container containerClass="px-6 py-6">
        <div className=" flex md:hidden items-center gap-4 mb-4 ">
          <GalleryHeader />
        </div>

        <Suspense fallback={<CollectionCardSkeleton />}>
          <UserCollectionList isGallery={true} />
        </Suspense>

        <UserGalleryImageSection />

        <Pagination />
      </Container>
    </DashboardContainer>
  );
}
