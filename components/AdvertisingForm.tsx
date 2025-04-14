"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

export default function AdvertisingForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    adType: "",
    budget: "",
    duration: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formState);
    // Show success message
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00bf63]/20">
          <CheckCircle className="h-8 w-8 text-[#00bf63]" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-black">Thank You!</h3>
        <p className="mt-2 text-center text-gray-600">
          Your advertising inquiry has been received. Our team will contact you
          within 24 hours.
        </p>
        <Button
          className="mt-6 bg-[#00bf63] hover:bg-[#00a857]"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Smith"
            required
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            required
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            placeholder="Your Company"
            required
            value={formState.company}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="(123) 456-7890"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Interested In</Label>
        <RadioGroup
          defaultValue="marquee"
          className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-3"
          onValueChange={(value) => handleSelectChange("adType", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="marquee-header" id="marquee-header" />
            <Label htmlFor="marquee-header" className="cursor-pointer">
              Marquee Header
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="marquee-middle" id="marquee-middle" />
            <Label htmlFor="marquee-middle" className="cursor-pointer">
              Marquee Middle
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="marquee-popup" id="marquee-popup" />
            <Label htmlFor="marquee-popup" className="cursor-pointer">
              Marquee Pop-up
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="blog-header" id="blog-header" />
            <Label htmlFor="blog-header" className="cursor-pointer">
              Blog Header
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="blog-middle" id="blog-middle" />
            <Label htmlFor="blog-middle" className="cursor-pointer">
              Blog Middle
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="blog-side" id="blog-side" />
            <Label htmlFor="blog-side" className="cursor-pointer">
              Blog Side
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="budget">Monthly Budget</Label>
          <Select
            onValueChange={(value) => handleSelectChange("budget", value)}
          >
            <SelectTrigger id="budget">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under500">Under $500</SelectItem>
              <SelectItem value="500-1000">$500 - $1,000</SelectItem>
              <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
              <SelectItem value="over2000">Over $2,000</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration">Campaign Duration</Label>
          <Select
            onValueChange={(value) => handleSelectChange("duration", value)}
          >
            <SelectTrigger id="duration">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Month</SelectItem>
              <SelectItem value="3">3 Months (10% discount)</SelectItem>
              <SelectItem value="6">6 Months (15% discount)</SelectItem>
              <SelectItem value="12">12 Months (25% discount)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your advertising goals or any specific requirements"
          rows={4}
          value={formState.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full bg-[#00bf63] hover:bg-[#00a857]">
        Submit Inquiry
      </Button>
    </form>
  );
}
