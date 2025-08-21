"use client";
import useDashboardMenuContext from "@/hooks/useDashboardMenuContext";
import clsx from "clsx";
import { ReactNode } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function DashboardHeader({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const { open, onToggleMenu } = useDashboardMenuContext();
  return (
    <header
      className={clsx(
        "bg-zinc-900/80 border-b border-zinc-800 p-8 flex items-center justify-between",
        className
      )}
    >
      <h1 className="font-bold text-lg">{title}</h1>

      {children}
      <button
        onClick={onToggleMenu}
        className="md:hidden text-zinc-400 hover:text-white p-2"
      >
        {open ? <ImCross /> : <FaBars />}
      </button>
    </header>
  );
}
