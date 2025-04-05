import { DashboardHeader } from "@/components/(Dashboard)/dashboard-header";
import { ProfileForm } from "@/components/(Dashboard)/profile-form";

export default function ProfilePage() {
  return (
  <>    <DashboardHeader
  heading="Agent Profile"
  text="Manage your personal and business information"
/>
<ProfileForm /></>
  );
}
