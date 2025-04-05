import { DashboardHeader } from "@/components/(Dashboard)/dashboard-header";
import { NewListingForm } from "@/components/(Dashboard)/new-listing-form";

export default function NewListingPage() {
  return (
    <>
      <DashboardHeader
        heading="Create New Listing"
        text="Add a new property listing to your portfolio"
      />
      <NewListingForm />
    </>
  );
}
