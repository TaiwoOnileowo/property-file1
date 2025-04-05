"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageUploadArea } from "@/components/(Dashboard)/image-upload-area";

export function NewListingForm() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Information</CardTitle>
        <CardDescription>
          Fill in the details of your property listing
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="details">Property Details</TabsTrigger>
            <TabsTrigger value="features">Features & Amenities</TabsTrigger>
            <TabsTrigger value="media">Media & Gallery</TabsTrigger>
          </TabsList>
          <TabsContent value="basic" className="mt-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="title">Property Title</Label>
                <Input
                  id="title"
                  placeholder="e.g. Luxury 3 Bedroom Apartment"
                />
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="grid gap-3">
                  <Label htmlFor="type">Property Type</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="status">Listing Status</Label>
                  <Select>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the property in detail"
                  className="min-h-[150px]"
                />
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="grid gap-3">
                  <Label htmlFor="price">Price (₦)</Label>
                  <Input id="price" type="number" placeholder="e.g. 75000000" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="payment-type">Payment Type</Label>
                  <Select>
                    <SelectTrigger id="payment-type">
                      <SelectValue placeholder="Select payment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sale">For Sale</SelectItem>
                      <SelectItem value="rent">For Rent</SelectItem>
                      <SelectItem value="lease">For Lease</SelectItem>
                      <SelectItem value="installment">Installment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="installment-frequency">
                    Installment Frequency
                  </Label>
                  <Select disabled>
                    <SelectTrigger id="installment-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="biannually">Bi-annually</SelectItem>
                      <SelectItem value="annually">Annually</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button onClick={() => setActiveTab("details")}>
                Next: Property Details
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="details" className="mt-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Full property address" />
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="grid gap-3">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="e.g. Lagos" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="state">State</Label>
                  <Select>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lagos">Lagos</SelectItem>
                      <SelectItem value="abuja">Abuja</SelectItem>
                      <SelectItem value="rivers">Rivers</SelectItem>
                      <SelectItem value="oyo">Oyo</SelectItem>
                      <SelectItem value="kano">Kano</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="neighborhood">Neighborhood</Label>
                  <Input id="neighborhood" placeholder="e.g. Lekki Phase 1" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                <div className="grid gap-3">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input id="bedrooms" type="number" placeholder="e.g. 3" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input id="bathrooms" type="number" placeholder="e.g. 2" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="toilets">Toilets</Label>
                  <Input id="toilets" type="number" placeholder="e.g. 3" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="size">Size (sqm)</Label>
                  <Input id="size" type="number" placeholder="e.g. 120" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="furnished" />
                  <Label htmlFor="furnished">Furnished</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="serviced" />
                  <Label htmlFor="serviced">Serviced</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newly-built" />
                  <Label htmlFor="newly-built">Newly Built</Label>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("basic")}>
                Previous
              </Button>
              <Button onClick={() => setActiveTab("features")}>
                Next: Features & Amenities
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="features" className="mt-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label>Property Features</Label>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-pool" />
                    <Label htmlFor="feature-pool">Swimming Pool</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-gym" />
                    <Label htmlFor="feature-gym">Gym</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-security" />
                    <Label htmlFor="feature-security">24/7 Security</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-parking" />
                    <Label htmlFor="feature-parking">Parking Space</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-wifi" />
                    <Label htmlFor="feature-wifi">WiFi</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-ac" />
                    <Label htmlFor="feature-ac">Air Conditioning</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-generator" />
                    <Label htmlFor="feature-generator">Generator</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-water" />
                    <Label htmlFor="feature-water">Water Supply</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-garden" />
                    <Label htmlFor="feature-garden">Garden</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-balcony" />
                    <Label htmlFor="feature-balcony">Balcony</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-elevator" />
                    <Label htmlFor="feature-elevator">Elevator</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-cctv" />
                    <Label htmlFor="feature-cctv">CCTV</Label>
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="additional-features">Additional Features</Label>
                <Textarea
                  id="additional-features"
                  placeholder="Describe any additional features or amenities"
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="video-url">Video URL (Optional)</Label>
                <Input
                  id="video-url"
                  placeholder="e.g. YouTube or Vimeo link"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="virtual-tour">
                  Virtual Tour URL (Optional)
                </Label>
                <Input
                  id="virtual-tour"
                  placeholder="e.g. Matterport or other virtual tour link"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("details")}>
                Previous
              </Button>
              <Button onClick={() => setActiveTab("media")}>
                Next: Media & Gallery
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="media" className="mt-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label>Property Images</Label>
                <ImageUploadArea />
              </div>
              <div className="grid gap-3">
                <Label>Floor Plan (Optional)</Label>
                <ImageUploadArea
                  maxFiles={1}
                  acceptedFileTypes="image/*,.pdf"
                />
              </div>
              <div className="grid gap-3">
                <Label>Property Documents (Optional)</Label>
                <ImageUploadArea
                  maxFiles={5}
                  acceptedFileTypes=".pdf,.doc,.docx"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                onClick={() => setActiveTab("features")}
              >
                Previous
              </Button>
              <Button>Submit Listing</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-6">
        <Button variant="outline">Cancel</Button>
        <Button>Save & Preview</Button>
      </CardFooter>
    </Card>
  );
}
