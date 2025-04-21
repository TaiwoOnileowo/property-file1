import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { addMonths, format, startOfDay } from "date-fns";
import { AlertCircle, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckoutFormData } from "./CheckoutFlow";
import { interestOptions } from "./InterestsStep";

interface DurationStepProps {
  formData: CheckoutFormData;
  updateFormData: (data: Partial<CheckoutFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

interface DurationOption {
  value: string;
  label: string;
  months: number;
  discount: number;
  description: string;
}

const DurationStep = ({ 
  formData, 
  updateFormData, 
  onNext, 
  onBack 
}: DurationStepProps) => {
  const [error, setError] = useState<string | null>(null);
  
  const durationOptions: DurationOption[] = [
    {
      value: "1",
      label: "1 Month",
      months: 1,
      discount: 0,
      description: "Basic plan for short-term campaigns"
    },
    {
      value: "3",
      label: "3 Months",
      months: 3,
      discount: 10,
      description: "10% discount on the total price"
    },
    {
      value: "6",
      label: "6 Months",
      months: 6,
      discount: 15,
      description: "15% discount on the total price"
    },
    {
      value: "12",
      label: "12 Months",
      months: 12,
      discount: 25,
      description: "25% discount on the total price"
    }
  ];

  const handleDurationChange = (value: string) => {
    const selectedOption = durationOptions.find(option => option.value === value);
    if (selectedOption) {
      const today = startOfDay(new Date());
      const startDate = today;
      const endDate = addMonths(today, selectedOption.months);

      const selectedInterest = interestOptions.find(
        option => option.id === (formData.interestedIn[0])
      );
      const basePrice = selectedInterest ? selectedInterest.price * selectedOption.months : 0;
      const discount = basePrice * (selectedOption.discount / 100);
      const totalPrice = basePrice - discount;

      updateFormData({
        duration: value,
        startDate,
        endDate,
        basePrice: selectedInterest ? selectedInterest.price : 0,
        totalPrice,
      });
    }
  };

  const validateFields = () => {
    if (!formData.duration) {
      setError("Please select a campaign duration");
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleNextStep = () => {
    if (validateFields()) {
      onNext();
    }
  };

  const getSelectedDuration = () => {
    return durationOptions.find(option => option.value === formData.duration);
  };

  const getSelectedInterest = () => {
    const interestId = formData.interestedIn[0];
    return interestOptions.find(option => option.id === interestId);
  };

  const calculatePrice = () => {
    const selectedInterest = getSelectedInterest();
    const selectedDuration = getSelectedDuration();
    
    if (!selectedInterest || !selectedDuration) return { basePrice: 0, discountedPrice: 0, discount: 0 };
    
    const basePrice = selectedInterest.price * Number(selectedDuration.months);
    const discount = basePrice * (selectedDuration.discount / 100);
    const discountedPrice = basePrice - discount;
    
    return {
      basePrice,
      discountedPrice,
      discount,
    };
  };

  const priceDetails = calculatePrice();
  const selectedInterest = getSelectedInterest();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-2xl font-semibold">Select Campaign Duration</h2>
        <p className="text-gray-600">Choose how long your advertising campaign should run</p>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-center space-x-2 mb-4">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}
      
      {selectedInterest && (
        <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-4">
          <p className="font-medium text-blue-800">
            Selected option: {selectedInterest.label} - ${selectedInterest.price}/month
          </p>
        </div>
      )}
      
      <div className="space-y-4">
        <RadioGroup
          value={formData.duration}
          onValueChange={handleDurationChange}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {durationOptions.map((option) => (
            <div key={option.value} className="relative">
              <RadioGroupItem
                value={option.value}
                id={`duration-${option.value}`}
                className="sr-only"
              />
              <Label
                htmlFor={`duration-${option.value}`}
                className={cn(
                  "flex flex-col h-full p-4 border-2 rounded-lg cursor-pointer transition-all",
                  formData.duration === option.value
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-gray-200 hover:border-emerald-300"
                )}
              >
                <div className="flex justify-between gap-4 items-start mb-2">
                  <span className="text-lg font-semibold">{option.label}</span>
                  {option.discount > 0 && (
                    <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                      Save {option.discount}%
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{option.description}</p>
                {formData.duration === option.value && (
                  <div className="absolute top-2 right-2 text-emerald-500">
                    <Check className="h-5 w-5" />
                  </div>
                )}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      
      {formData.duration && formData.startDate && formData.endDate && selectedInterest && (
        <div className="bg-emerald-50 p-4 rounded-md border border-emerald-200">
          <h3 className="font-medium text-emerald-800">Campaign Summary</h3>
          <p className="text-emerald-700 mt-1">
            Your campaign will run from {format(formData.startDate, "MMMM d, yyyy")} to {format(formData.endDate, "MMMM d, yyyy")}
          </p>
          
          <div className="mt-3 space-y-1">
            <div className="flex justify-between text-emerald-700">
              <span>Base price ({getSelectedDuration()?.months} months):</span>
              <span>${priceDetails.basePrice}</span>
            </div>
            
            {priceDetails.discount > 0 && (
              <div className="flex justify-between text-emerald-700">
                <span>Discount ({getSelectedDuration()?.discount}%):</span>
                <span>-${priceDetails.discount.toFixed(2)}</span>
              </div>
            )}
            
            <div className="flex justify-between font-bold text-emerald-800 pt-2 border-t border-emerald-200 mt-2">
              <span>Total price:</span>
              <span>${priceDetails.discountedPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex space-x-4 pt-4">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex-1"
        >
          Back
        </Button>
        <Button 
          onClick={handleNextStep} 
          className="flex-1 bg-emerald-500 hover:bg-emerald-600"
        >
          Continue to Review
        </Button>
      </div>
    </div>
  );
};

export default DurationStep;