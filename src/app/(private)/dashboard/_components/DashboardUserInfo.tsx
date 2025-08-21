import defaultUser from "@/assets/icons/default_user.png";
import Image from "next/image";
import { auth } from "../../../../../auth";
export default async function DashboardUserInfo() {
  const session = await auth();

  const user = session?.user;

  const userImage = user?.image || defaultUser;

  const plan = user?.plan || "Free";

  return (
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
        <p className="text-xs text-zinc-400 truncate capitalize">{plan} Plan</p>
      </div>
    </div>
  );
}
