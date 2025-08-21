"use client";

import DashboardMenuContext from "@/context/dashboard-menu-context";
import { useContext } from "react";

export default function useDashboardMenuContext() {
  const context = useContext(DashboardMenuContext);

  if (!context) {
    throw new Error("Try to accessing value outside of DashboardMenuContext");
  }

  return context;
}
