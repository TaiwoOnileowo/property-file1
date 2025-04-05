"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Building,
  CreditCard,
  LayoutDashboard,
  MessageSquare,
  Settings,
  User,
  Megaphone,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/listings", label: "Listings", icon: Building },
  { href: "/dashboard/leads", label: "Leads", icon: MessageSquare },
  {
    href: "/dashboard/advertisements",
    label: "Advertisements",
    icon: Megaphone,
  },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/subscription", label: "Subscription", icon: CreditCard },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardNav() {
  const pathname = usePathname();
  const splitPathname = pathname?.split("/")[2];

  return (
    <nav className="grid items-start gap-2 p-6">
      {navItems.map(({ href, label, icon: Icon }) => {
        const isActive = href.split("/")[2] === splitPathname;
        return (
          <Link key={href} href={href}>
            <Button
              variant={isActive ? "default" : "ghost"}
              className="w-full justify-start"
            >
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}
