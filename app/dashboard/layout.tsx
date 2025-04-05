import type React from "react";
import { DashboardNav } from "@/components/(Dashboard)/dashboard-nav";
import { MainNav } from "@/components/(Dashboard)/main-nav";
import { UserNav } from "@/components/(Dashboard)/user-nav";

interface DashboardShellProps {
  children: React.ReactNode;
}

export default function Layout({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen overflow-hidden flex-col">
      <header className="sticky top-0 px-6 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <UserNav />
        </div>
      </header>
      <div className="container grid flex-1  md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[240px]">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
