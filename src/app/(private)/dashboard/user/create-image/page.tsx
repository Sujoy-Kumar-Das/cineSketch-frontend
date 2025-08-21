import ImagePromptAndResultGrid from "./_components/ImagePromptAndResultGrid";
import RecentImages from "./_components/RecentImages";

export default function CreateImagePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <ImagePromptAndResultGrid />

      <RecentImages />
    </div>
  );
}
