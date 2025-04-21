import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { CheckoutFormData } from "./CheckoutFlow";

interface InterestsStepProps {
  formData: CheckoutFormData;
  updateFormData: (data: Partial<CheckoutFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const interestSchema = z.object({
  interestedIn: z.string().min(1, { message: "Please select an advertising option" }),
});

export interface InterestOption {
  id: string;
  label: string;
  description: string;
  price: number;
}

export const interestOptions: InterestOption[] = [
  { id: "marquee-header", label: "Marquee Header", description: "Prime visibility at the top of our website", price: 499 },
  { id: "marquee-middle", label: "Marquee Middle", description: "Featured placement in the middle of our website", price: 399 },
  { id: "marquee-popup", label: "Marquee Pop-up", description: "Eye-catching modal displays for maximum engagement", price: 599 },
  { id: "blog-header", label: "Blog Header", description: "Top visibility in our popular blog section", price: 349 },
  { id: "blog-middle", label: "Blog Middle", description: "Integrated within our blog content", price: 299 },
  { id: "blog-side", label: "Blog Side", description: "Persistent sidebar visibility throughout blog reading", price: 399 },
];

const InterestsStep = ({ formData, updateFormData, onNext, onBack }: InterestsStepProps) => {
  const [error, setError] = useState<string | null>(null);

  const handleInterestChange = (value: string) => {
    const selectedOption = interestOptions.find(option => option.id === value);

    // Calculate potential totalPrice if duration already chosen, else 0
    let totalPrice = 0;
    if (formData.duration) {
      const months = Number(formData.duration);
      const base = selectedOption ? selectedOption.price * months : 0;

      // Duration discount logic (must match logic in DurationStep!)
      let discount = 0;
      if (formData.duration === "3") discount = 0.1;
      if (formData.duration === "6") discount = 0.15;
      if (formData.duration === "12") discount = 0.25;
      totalPrice = base - base * discount;
    }

    updateFormData({
      interestedIn: [value],
      basePrice: selectedOption?.price || 0,
      totalPrice,
    });
  };

  const validateForm = () => {
    const result = interestSchema.safeParse({ interestedIn: formData.interestedIn[0] || "" });
    
    if (!result.success) {
      setError(result.error.errors[0]?.message || "Please select an advertising option");
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-2xl font-semibold">Select Advertising Options</h2>
        <p className="text-gray-600">Choose the placement option you're interested in</p>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-center space-x-2 mb-4">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}
      
      <RadioGroup 
        value={formData.interestedIn[0] || ""} 
        onValueChange={handleInterestChange}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {interestOptions.map((option) => (
          <Card 
            key={option.id} 
            className={cn(
              "border-2 p-4 transition-all relative",
              formData.interestedIn[0] === option.id 
                ? "border-emerald-500 bg-emerald-50" 
                : "border-gray-200 hover:border-emerald-300"
            )}
          >
            <div className="flex items-start space-x-3">
              <RadioGroupItem 
                value={option.id} 
                id={option.id}
                className="mt-1"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <Label htmlFor={option.id} className="font-medium text-base cursor-pointer">{option.label}</Label>
                  <span className="font-bold text-emerald-600">${option.price}/mo</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{option.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </RadioGroup>
      
      <div className="flex space-x-4 pt-4">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex-1"
        >
          Back
        </Button>
        <Button 
          onClick={handleNext} 
          className="flex-1 bg-emerald-500 hover:bg-emerald-600"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default InterestsStep;