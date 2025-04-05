"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          Update your profile information to help clients know more about you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="business">Business Info</TabsTrigger>
            <TabsTrigger value="social">Social & Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="personal" className="mt-6">
            <div className="grid gap-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1.5">
                  <Label htmlFor="profile-picture">Profile Picture</Label>
                  <Input id="profile-picture" type="file" accept="image/*" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    defaultValue="John"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" defaultValue="Doe" />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  defaultValue="john.doe@example.com"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+234 800 123 4567"
                  defaultValue="+234 800 123 4567"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell clients about yourself"
                  defaultValue="I am a real estate agent with over 5 years of experience in the Nigerian property market. I specialize in luxury properties in Lagos and Abuja."
                  className="min-h-[120px]"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="business" className="mt-6">
            <div className="grid gap-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Business logo" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <div className="grid gap-1.5">
                  <Label htmlFor="business-logo">Business Logo</Label>
                  <Input id="business-logo" type="file" accept="image/*" />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="business-name">Business Name</Label>
                <Input
                  id="business-name"
                  placeholder="PropertyPro Realty"
                  defaultValue="PropertyPro Realty"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="business-address">Business Address</Label>
                <Input
                  id="business-address"
                  placeholder="123 Victoria Island, Lagos"
                  defaultValue="123 Victoria Island, Lagos"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="business-city">City</Label>
                  <Input
                    id="business-city"
                    placeholder="Lagos"
                    defaultValue="Lagos"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="business-state">State</Label>
                  <Input
                    id="business-state"
                    placeholder="Lagos"
                    defaultValue="Lagos"
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="business-description">
                  Business Description
                </Label>
                <Textarea
                  id="business-description"
                  placeholder="Describe your business"
                  defaultValue="PropertyPro Realty is a leading real estate agency in Nigeria, specializing in high-end residential and commercial properties. We provide exceptional service to our clients, ensuring they find their perfect property."
                  className="min-h-[120px]"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="license-number">License Number</Label>
                <Input
                  id="license-number"
                  placeholder="RECON-12345"
                  defaultValue="RECON-12345"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="social" className="mt-6">
            <div className="grid gap-6">
              <div className="grid gap-1.5">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  defaultValue="https://propertypro.ng"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  placeholder="https://facebook.com/username"
                  defaultValue="https://facebook.com/propertyprorealty"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  placeholder="https://instagram.com/username"
                  defaultValue="https://instagram.com/propertyprorealty"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  placeholder="https://twitter.com/username"
                  defaultValue="https://twitter.com/propertyprorealty"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/username"
                  defaultValue="https://linkedin.com/in/johndoe"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="whatsapp">WhatsApp Business</Label>
                <Input
                  id="whatsapp"
                  placeholder="+234 800 123 4567"
                  defaultValue="+234 800 123 4567"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-6">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
