import { DashboardHeader } from "@/components/(Dashboard)/dashboard-header";
import { ListingsTable } from "@/components/(Dashboard)/listings-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ListingsPage() {
  return (
    <>
      <DashboardHeader
        heading="Property Listings"
        text="Manage your property listings"
      >
        <Link href="/dashboard/listings/new">
          <Button className="cursor-pointer">
            <Plus className="mr-2 h-4 w-4" />
            Add New Listing
          </Button>
        </Link>
      </DashboardHeader>
      <ListingsTable />
    </>
  );
}
