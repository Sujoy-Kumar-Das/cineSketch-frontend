"use client";
import defaultUser from "@/assets/icons/default_user.png";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function DashboardUserInfo() {
  const session = useSession();

  const user = session?.data?.user;

  const userImage = user?.image || defaultUser;

  const plan = user?.plan || "Free";

  return (
    <div className="p-4 border-b border-zinc-800">
      <div className="flex items-center gap-3">
        <Image
          src={userImage}
          className="w-10 h-10 rounded-full"
          alt="User"
          height={20}
          width={20}
        />
        <div className="flex-1 overflow-hidden">
          <p className="font-medium truncate">{user?.name}</p>
          <p className="text-xs text-zinc-400 truncate capitalize">
            {plan} Plan
          </p>
        </div>
      </div>
    </div>
  );
}
