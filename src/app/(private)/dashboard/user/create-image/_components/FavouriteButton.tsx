"use client";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function FavoriteButton({ children }) {
  const [loading, setLoading] = useState(false);

  const handleAddToFavorite = () => {};
  return (
    <button className="flex-1 bg-zinc-700 hover:bg-zinc-600 py-2 rounded-lg flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm">
      {loading ? (
        <>
          <AiOutlineLoading3Quarters className="animate-spin h-4 w-4" />
          Downloading…
        </>
      ) : (
        children
      )}
    </button>
  );
}
