import { MenuContext } from "@/context/menu-context";
import { useContext } from "react";

export default function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
}
