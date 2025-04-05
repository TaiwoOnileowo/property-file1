import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, CheckCircle2, CreditCard } from "lucide-react";

export function SubscriptionStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Subscription</CardTitle>
        <CardDescription>
          Your current plan and subscription details
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-semibold">Premium Plan</h3>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Active</Badge>
                <span className="text-sm text-muted-foreground">
                  Renews on May 15, 2024
                </span>
              </div>
            </div>
          </div>
          <Button variant="outline">Manage Billing</Button>
        </div>
        <div className="grid gap-4 rounded-lg border p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <div className="grid gap-1">
                <span className="font-medium">50 Active Listings</span>
                <span className="text-sm text-muted-foreground">
                  You've used 12 of 50 listings
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <div className="grid gap-1">
                <span className="font-medium">Featured Listings</span>
                <span className="text-sm text-muted-foreground">
                  5 featured listings per month
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <div className="grid gap-1">
                <span className="font-medium">Advanced Analytics</span>
                <span className="text-sm text-muted-foreground">
                  Full access to performance metrics
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 rounded-lg border p-4">
          <h4 className="font-medium">Payment Information</h4>
          <div className="flex items-center gap-4">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <div className="grid gap-1">
              <span>Visa ending in 4242</span>
              <span className="text-sm text-muted-foreground">
                Expires 12/2025
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CalendarDays className="h-5 w-5 text-muted-foreground" />
            <div className="grid gap-1">
              <span>Next billing date: May 15, 2024</span>
              <span className="text-sm text-muted-foreground">
                ₦25,000 / month
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-6">
        <Button variant="outline">Cancel Subscription</Button>
        <Button>Upgrade Plan</Button>
      </CardFooter>
    </Card>
  );
}
