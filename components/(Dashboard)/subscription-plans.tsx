import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export function SubscriptionPlans() {
  return (
    <div className="grid gap-6">
      <div>
        <h2 className="text-2xl font-bold">Available Plans</h2>
        <p className="text-muted-foreground">
          Choose the plan that best fits your business needs
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>
              For individual agents just getting started
            </CardDescription>
            <div className="mt-4 text-4xl font-bold">
              ₦10,000
              <span className="text-sm font-normal text-muted-foreground">
                /month
              </span>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>10 Active Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Basic Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Email Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Standard Listing Visibility</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Select Plan
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-primary">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Premium</CardTitle>
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                Popular
              </span>
            </div>
            <CardDescription>
              For established agents with growing portfolios
            </CardDescription>
            <div className="mt-4 text-4xl font-bold">
              ₦25,000
              <span className="text-sm font-normal text-muted-foreground">
                /month
              </span>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>50 Active Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Advanced Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Priority Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>5 Featured Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Lead Management Tools</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Current Plan</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>
              For agencies and large real estate businesses
            </CardDescription>
            <div className="mt-4 text-4xl font-bold">
              ₦50,000
              <span className="text-sm font-normal text-muted-foreground">
                /month
              </span>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Unlimited Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Premium Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>24/7 Dedicated Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>20 Featured Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Advanced Lead Management</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>API Access</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Upgrade
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
