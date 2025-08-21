"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination() {
  return (
    <div className="mt-8 flex justify-center">
      <nav className="flex items-center gap-1">
        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700">
          <FaChevronLeft />
        </button>

        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
          1
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700">
          2
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700">
          3
        </button>

        <span className="px-2 text-zinc-500">...</span>

        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700">
          8
        </button>

        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700">
          <FaChevronRight />
        </button>
      </nav>
    </div>
  );
}
