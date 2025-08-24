import Filter from "@/_components/shared/search/Filter";
import { Suspense } from "react";
import UserGalleryImageList from "./UserGalleryImageList";

export default function UserGalleryImageSection() {
  return (
    <div className="w-full mt-8 mb-6 ">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-white">
          All Images
        </h1>
        <div className="w-full sm:w-auto">
          <Filter
            filterKey="sort"
            options={[
              { label: "Newest", value: "1" },
              { label: "Oldest", value: "-1" },
            ]}
          />
        </div>
      </div>

      {/* Gallery List */}
      <Suspense fallback={<p className="text-gray-500">Loading images...</p>}>
        <UserGalleryImageList />
      </Suspense>
    </div>
  );
}
