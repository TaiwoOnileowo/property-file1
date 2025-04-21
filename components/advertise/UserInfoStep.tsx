    
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckoutFormData } from "./CheckoutFlow";

interface UserInfoStepProps {
  formData: CheckoutFormData;
  updateFormData: (data: Partial<CheckoutFormData>) => void;
  onNext: () => void;
}

const UserInfoStep = ({ formData, updateFormData, onNext }: UserInfoStepProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-2xl font-semibold">Tell Us About You</h2>
        <p className="text-gray-600">Please provide your basic information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input 
            id="fullName"
            placeholder="John Smith"
            value={formData.fullName}
            onChange={(e) => updateFormData({ fullName: e.target.value })}
          />
          {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input 
            id="companyName"
            placeholder="Your Company"
            value={formData.companyName}
            onChange={(e) => updateFormData({ companyName: e.target.value })}
          />
          {errors.companyName && <p className="text-sm text-red-500">{errors.companyName}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input 
            id="phoneNumber"
            placeholder="(123) 456-7890"
            value={formData.phoneNumber}
            onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
          />
          {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
        <Textarea 
          id="additionalInfo"
          placeholder="Tell us about your advertising goals or any specific requirements"
          rows={4}
          value={formData.additionalInfo}
          onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
        />
      </div>
      
      <div className="pt-4">
        <Button onClick={handleNext} className="w-full bg-emerald-500 hover:bg-emerald-600">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default UserInfoStep;