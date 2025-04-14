import { DashboardHeader } from "@/components/(Dashboard)/dashboard-header";
import HomeStats from "@/components/(Dashboard)/HomeStats";
import { RecentListings } from "@/components/(Dashboard)/recent-listings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader
        heading="Dashboard"
        text="Welcome back! Here's an overview of your property listings and performance."
      />
      <HomeStats />

      <div className="grid gap-4">
        <Card className="bg-primary/5 border-gray-500">
          <CardHeader>
            <CardTitle className="text-white">Recent Listings</CardTitle>
            <CardDescription className="text-gray-500">
              Your most recently added or updated property listings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentListings />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
