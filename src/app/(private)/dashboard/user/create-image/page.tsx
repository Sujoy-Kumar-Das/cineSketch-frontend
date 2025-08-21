import Container from "@/_components/shared/container/Container";
import DashboardContainer from "@/_components/shared/container/DashboardContainer";
import DashboardHeader from "../../_components/DashboardHeader";
import ImagePromptAndResultGrid from "./_components/ImagePromptAndResultGrid";
import RecentImages from "./_components/RecentImages";

export default function CreateImagePage() {
  return (
    <DashboardContainer>
      <DashboardHeader title="Create Image">Dashboard Header</DashboardHeader>
      <Container containerClass="px-6 py-6">
        <ImagePromptAndResultGrid />
        <RecentImages />
      </Container>
    </DashboardContainer>
  );
}
