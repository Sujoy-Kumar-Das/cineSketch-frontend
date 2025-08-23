import { createContext } from "react";

interface MenuContextProps {
  openId: string | null;
  onMenuClick: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

export const MenuContext = createContext<MenuContextProps | null>(null);
