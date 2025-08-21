"use client";
import { FaTimes } from "react-icons/fa";
import { imageRatioItems } from "../../create-image/_components/prompt.data";

export default function HistoryFilter() {
  return (
    <div className="filter-buttons flex flex-wrap gap-2 md:gap-3 mb-6">
      {imageRatioItems.map((item) => (
        <button
          key={item.label}
          className="px-3 py-1 md:px-4 md:py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-xs md:text-sm flex items-center gap-1 md:gap-2 active-filter flex-shrink-0 hover:bg-indigo-500/20 transition"
          data-filter="time"
          data-value={item.value || ""}
        >
          <span>{item.label}</span>
          <FaTimes className="h-3 w-3 md:h-4 md:w-4" />
        </button>
      ))}
    </div>
  );
}
