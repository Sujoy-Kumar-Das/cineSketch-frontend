"use client";
import useDashboardMenuContext from "@/hooks/useDashboardMenuContext";
import { ReactNode } from "react";

export default function DashboardMainSidebar({
  children,
}: {
  children: ReactNode;
}) {
  const { open } = useDashboardMenuContext();

  return (
    <div
      className={`sidebar fixed top-0 left-0 z-50 h-full w-64 bg-zinc-900/95 border-r border-zinc-800 flex flex-col flex-shrink-0 overflow-y-auto transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:relative md:top-0 md:left-0`}
    >
      {children}
    </div>
  );
}
