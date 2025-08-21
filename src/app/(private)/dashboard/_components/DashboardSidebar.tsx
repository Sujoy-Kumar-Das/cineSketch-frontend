"use client";
import Logo from "@/_components/shared/logo/Logo";
import { IUserRoles } from "@/interface/IUser";
import routeGenerator from "@/utils/route.generator";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaCog } from "react-icons/fa";
import DashboardUserInfo from "./DashboardUserInfo";

export default function DashboardSidebar() {
  const session = useSession();

  const dashboardLinks = routeGenerator(session?.data?.user.role as IUserRoles);

  console.log({ dashboardLinks, user: session.data?.user.role });
  return (
    <>
      {/* Logo */}
      <div className="p-4">
        <Logo />
      </div>
      {/* User Profile */}
      <div className="p-4 border-b border-zinc-800">
        <DashboardUserInfo />
      </div>
      {/* Main Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {dashboardLinks.map((link) => (
          <Link
            href={link.link}
            key={link.link}
            className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-colors"
          >
            {link.icon}
            <span>{link.title}</span>
          </Link>
        ))}
      </nav>
      {/* Credits & Settings */}
      <div className="p-4 border-t border-zinc-800">
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-zinc-400">Credits</span>
            <span className="font-medium">142/500</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-2">
            <div
              className="bg-indigo-500 h-2 rounded-full"
              style={{ width: "28%" }}
            />
          </div>
        </div>
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-colors"
        >
          <FaCog className="w-5 text-center" />
          <span>Settings</span>
        </Link>
      </div>
    </>
  );
}
