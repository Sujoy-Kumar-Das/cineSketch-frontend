import MenuContextProvider from "@/providers/MenuContextProvider";
import { getAllCollectionByUserService } from "@/service/actions/collection.service";
import CollectionCards from "./CollectionCards";
import CreateCollectionCard from "./CreateCollectionCard";

export default async function UserCollectionList() {
  const data = await getAllCollectionByUserService();

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <CreateCollectionCard />
        <MenuContextProvider>
          <CollectionCards collections={data.data} />
        </MenuContextProvider>
      </div>
    </>
  );
}
