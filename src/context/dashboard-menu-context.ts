import { createContext } from "react";

interface DashboardMenuContextProps {
  open: boolean;
  onToggleMenu: () => void;
}

const DashboardMenuContext = createContext<DashboardMenuContextProps | null>(
  null
);

export default DashboardMenuContext;
