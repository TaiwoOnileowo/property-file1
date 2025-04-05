import { DashboardHeader } from "@/components/(Dashboard)/dashboard-header";
import { SubscriptionPlans } from "@/components/(Dashboard)/subscription-plans";
import { SubscriptionStatus } from "@/components/(Dashboard)/subscription-status";

export default function SubscriptionPage() {
  return (
   <>   <DashboardHeader
   heading="Subscription"
   text="Manage your subscription plan and billing"
 />
 <div className="grid gap-8">
   <SubscriptionStatus />
   <SubscriptionPlans />
 </div></>
  );
}
