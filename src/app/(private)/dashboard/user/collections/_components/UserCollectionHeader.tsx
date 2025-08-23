import SearchCompo from "@/_components/shared/search/SearchCompo";
import { FaPlus } from "react-icons/fa";
import CreateCollectionModal from "./CreateCollectionModal";

export default function UserCollectionHeader() {
  return (
    <>
      <CreateCollectionModal>
        <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-sm flex items-center gap-2">
          <FaPlus /> New Collection
        </button>
      </CreateCollectionModal>
      <SearchCompo />
    </>
  );
}
