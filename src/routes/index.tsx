import { USER_ROLE } from "@/constants/User_Role";
import { IDashboardRoute } from "@/interface/dashboard.interface";
import {
  FaDownload,
  FaFolder,
  FaHeart,
  FaHistory,
  FaImages,
  FaMagic,
} from "react-icons/fa";

export const routes: IDashboardRoute[] = [
  {
    title: "Create",
    link: "/dashboard/user/create-image",
    icon: <FaMagic className="w-5 text-center" />,
    role: [USER_ROLE.USER],
  },
  {
    title: "History",
    link: "/dashboard/user/history",
    icon: <FaHistory className="w-5 text-center" />,
    role: [USER_ROLE.USER],
  },
  {
    title: "My Gallery",
    link: "/dashboard/user/gallery",
    icon: <FaImages className="w-5 text-center" />,
    role: [USER_ROLE.USER],
  },
  {
    title: "Favorites",
    link: "/dashboard/user/favorites",
    icon: <FaHeart className="w-5 text-center" />,
    role: [USER_ROLE.USER],
  },
  {
    title: "Downloads",
    link: "/dashboard/user/downloads",
    icon: <FaDownload className="w-5 text-center" />,
    role: [USER_ROLE.USER],
  },
  {
    title: "Collections",
    link: "/collections",
    icon: <FaFolder className="w-5 text-center" />,
    role: [USER_ROLE.USER],
  },
];
