import { getAllCollectionByUserService } from "@/service/actions/collection.service";
import CollectionCards from "./CollectionCards";
import CreateCollectionCard from "./CreateCollectionCard";

// is galley prop is used for disable and enable the menu options
// in gallery page, we don't want to show the delete option
// because we don't want to delete or edit the collection from gallery

export default async function UserCollectionList({
  isGallery = false,
}: {
  isGallery?: boolean;
}) {
  const data = await getAllCollectionByUserService();

  return (
    <div>
      <h1 className=" text-xl text-white font-normal mb-5">Collections</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {!isGallery && <CreateCollectionCard />}
        <CollectionCards collections={data.data} isGallery={isGallery} />
      </div>
    </div>
  );
}
