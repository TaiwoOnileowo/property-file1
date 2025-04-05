import { AdvertisementsList } from "@/components/(Dashboard)/advertisements-list";
import { DashboardHeader } from "@/components/(Dashboard)/dashboard-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AdvertisementsPage() {
  return (
    <>
      <DashboardHeader
        heading="Advertisements"
        text="Manage your property advertisements"
      >
        <Link href="/advertisements/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New Ad
          </Button>
        </Link>
      </DashboardHeader>
      <AdvertisementsList />
    </>
  );
}
