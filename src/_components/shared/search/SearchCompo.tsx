"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchCompo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search history..."
        className={` bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm transition-all duration-300 ease-in-out ${
          open ? "w-48 opacity-100 pr-10" : "w-10 opacity-0 px-0 border-0"
        }`}
      />
      <button
        onClick={() => setOpen(!open)}
        className="text-zinc-400 hover:text-white p-2 absolute right-0"
      >
        <FaSearch />
      </button>
    </div>
  );
}
