import { FaPlus } from "react-icons/fa";
import CreateCollectionModal from "./CreateCollectionModal";

export default function CreateCollectionCard() {
  return (
    <CreateCollectionModal>
      <div className="aspect-square rounded-lg bg-zinc-800/50 border-2 border-dashed border-zinc-600 flex items-center justify-center group hover:border-zinc-400 transition-colors cursor-pointer">
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-500/20 transition-colors">
            <FaPlus className="text-indigo-400" />
          </div>
          <h3 className="font-medium">Create New Collection</h3>
        </div>
      </div>
    </CreateCollectionModal>
  );
}
