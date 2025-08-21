"use client";
import useDashboardMenuContext from "@/hooks/useDashboardMenuContext";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function DashboardHeader() {
  const { open, onToggleMenu } = useDashboardMenuContext();
  return (
    <header className="bg-zinc-900/80 border-b border-zinc-800 p-4 flex items-center justify-between">
      <h1 className="font-bold text-lg">Create New Image</h1>
      <button
        onClick={onToggleMenu}
        className="md:hidden text-zinc-400 hover:text-white p-2"
      >
        {open ? <ImCross /> : <FaBars />}
      </button>
    </header>
  );
}
