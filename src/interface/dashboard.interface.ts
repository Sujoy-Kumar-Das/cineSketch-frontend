import { ReactNode } from "react";
import { IUserRoles } from "./IUser";

export interface IDashboardRoute {
  title: string;
  link: string;
  icon: ReactNode;
  role: IUserRoles[];
}
