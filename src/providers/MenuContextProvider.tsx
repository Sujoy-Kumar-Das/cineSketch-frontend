"use client";

import { MenuContext } from "@/context/menu-context";
import { useState } from "react";

export default function MenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuId, setMenuId] = useState<null | string>(null);

  const handleMenuClick = (
    e: React.MouseEvent<HTMLButtonElement> | null,
    id: string
  ) => {
    e?.preventDefault();
    e?.stopPropagation();
    setMenuId((prev) => (prev === id ? null : id));
  };

  return (
    <MenuContext.Provider
      value={{ openId: menuId, onMenuClick: handleMenuClick }}
    >
      {children}
    </MenuContext.Provider>
  );
}
