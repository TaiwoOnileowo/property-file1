import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatCardProps = {
  title: string;
  value: string | number;
  description: string;
};

const StatCard = ({ title, value, description }: StatCardProps) => (
  <Card className="bg-primary/5 border-gray-500">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-200">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-white">{value}</div>
      <p className="text-xs text-gray-500">{description}</p>
    </CardContent>
  </Card>
);

const HomeStats = () => {
  const stats = [
    { title: "Total Listings", value: 12, description: "+2 from last month" },
    {
      title: "Total Views",
      value: "1,234",
      description: "+15% from last month",
    },
    { title: "Leads Generated", value: 24, description: "+8 from last month" },
    { title: "Active Ads", value: 3, description: "2 expiring soon" },
  ];

  return (
    <div className="grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default HomeStats;
