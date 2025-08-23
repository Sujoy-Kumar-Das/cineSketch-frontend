"use client";
import useSearch from "@/hooks/useSearch";
import { FaTimes } from "react-icons/fa";
import { imageRatioItems } from "../../create-image/_components/prompt.data";

export default function HistoryFilter() {
  const { search, getParam, deleteSearch } = useSearch();

  const size = getParam("size");

  return (
    <div className="filter-buttons flex flex-wrap gap-2 md:gap-3 mb-6">
      {imageRatioItems.map((item) => (
        <button
          key={item.label}
          onClick={() => search({ size: item.value })}
          className={`px-3 py-1 md:px-4 md:py-2  rounded-full text-xs md:text-sm flex items-center gap-1 md:gap-2 active-filter flex-shrink-0 hover:bg-indigo-500/20 transition ${
            size === item.value
              ? "bg-indigo-500/10 text-indigo-400"
              : "bg-zinc-800 hover:bg-zinc-700"
          }`}
        >
          <span>{item.label}</span>
          {size === item.value && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                deleteSearch("size");
              }}
            >
              <FaTimes className="h-3 w-3 md:h-4 md:w-4" />
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
