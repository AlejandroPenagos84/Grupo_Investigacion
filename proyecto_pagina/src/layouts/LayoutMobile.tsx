import { AppSidebar } from "@/components/ui/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { ReactNode } from "react";
import "@/styles/global.css";

export default function LayoutMobile({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen w-full md:hidden">
        <header className="flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
          <div className="text-xl font-bold text-gray-900">
            Logo Grupo Investigación
          </div>
          <SidebarTrigger className="p-2 rounded hover:bg-gray-100" />
        </header>

        <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {children}
        </main>

        <AppSidebar />
      </div>
    </SidebarProvider>
  );
}
