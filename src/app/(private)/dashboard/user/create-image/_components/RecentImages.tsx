import Link from "next/link";
import { Suspense } from "react";
import RecentImagesList from "./RecentImgesList";

export default function RecentImages() {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Recent Creations</h2>
        <Link
          href="/dashboard/user/history"
          className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
        >
          View All <i className="fas fa-chevron-right text-xs" />
        </Link>
      </div>

      <Suspense
        fallback={
          <div className="absolute inset-0 bg-zinc-700 animate-pulse" />
        }
      >
        <RecentImagesList />
      </Suspense>
    </div>
  );
}
