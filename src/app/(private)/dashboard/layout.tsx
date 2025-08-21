import DashboardMenuContextProvider from "@/providers/DashboardMenuContextProvider";
import { ReactNode } from "react";
import DashboardHeader from "./_components/DashboardHeader";
import DashboardMainSidebar from "./_components/DashboardMainSidebar";
import DashboardSidebar from "./_components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" block md:flex h-screen">
      {/* Sidebar */}
      <DashboardMenuContextProvider>
        <DashboardMainSidebar>
          <DashboardSidebar />
        </DashboardMainSidebar>
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden bg-zinc-900">
          {/* Top Navigation */}
          <DashboardHeader />
          {/* Content */}
          <main className="content-area flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </DashboardMenuContextProvider>
    </div>
  );
}
