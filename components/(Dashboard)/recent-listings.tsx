import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Eye } from "lucide-react";

// Define a type for our listing data
type Listing = {
  title: string;
  location: string;
  type: string;
  price: number;
  status: "Active" | "Draft" | "Pending";
  views: number;
};

// Sample data
const listings: Listing[] = [
  {
    title: "3 Bedroom Apartment",
    location: "Lekki Phase 1, Lagos",
    type: "Apartment",
    price: 75000000,
    status: "Active",
    views: 245,
  },
  {
    title: "4 Bedroom Duplex",
    location: "Ikoyi, Lagos",
    type: "House",
    price: 150000000,
    status: "Active",
    views: 189,
  },
  {
    title: "Commercial Space",
    location: "Victoria Island, Lagos",
    type: "Commercial",
    price: 200000000,
    status: "Draft",
    views: 0,
  },
  {
    title: "2 Plots of Land",
    location: "Abuja, FCT",
    type: "Land",
    price: 45000000,
    status: "Active",
    views: 132,
  },
  {
    title: "3 Bedroom Bungalow",
    location: "Port Harcourt, Rivers",
    type: "House",
    price: 35000000,
    status: "Pending",
    views: 78,
  },
];

export function RecentListings() {
  // Helper function to determine badge variant based on status
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "Draft":
        return "outline";
      case "Pending":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <Table className="text-gray-500">
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Price (₦)</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Views</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listings.map((listing, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{listing.title}</TableCell>
            <TableCell>{listing.location}</TableCell>
            <TableCell>{listing.type}</TableCell>
            <TableCell>{listing.price.toLocaleString()}</TableCell>
            <TableCell>
              <Badge variant={getBadgeVariant(listing.status)}>
                {listing.status}
              </Badge>
            </TableCell>
            <TableCell>{listing.views}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
