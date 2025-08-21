"use client";
import DashboardMenuContext from "@/context/dashboard-menu-context";
import { ReactNode, useState } from "react";

export default function DashboardMenuContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const onToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <DashboardMenuContext.Provider value={{ open, onToggleMenu }}>
      {children}
    </DashboardMenuContext.Provider>
  );
}
