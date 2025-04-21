
import { Check, CircleDashed } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckoutStepsProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const CheckoutSteps = ({ currentStep, onStepClick }: CheckoutStepsProps) => {
  const steps = [
    { id: 1, name: "Basic Information" },
    { id: 2, name: "Interests" },
    { id: 3, name: "Image Upload" },
    { id: 4, name: "Campaign Duration" },
    { id: 5, name: "Review & Checkout" },
  ];

  return (
    <div className="relative overflow-x-auto scrollbar-hide">
      <div className="hidden sm:flex items-center justify-between my-4 min-w-max">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex items-center">
            <button
              onClick={() => onStepClick(step.id)}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 cursor-pointer",
                currentStep >= step.id 
                  ? "bg-emerald-500 border-emerald-600 text-white" 
                  : "border-gray-300 text-gray-500 bg-white hover:bg-gray-100"
              )}
            >
              {currentStep > step.id ? (
                <Check className="w-5 h-5" />
              ) : (
                step.id === currentStep ? (
                  <span className="text-sm font-semibold">{step.id}</span>
                ) : (
                  <CircleDashed className="w-5 h-5 opacity-50" />
                )
              )}
            </button>
            
            <div className="ml-2 mr-2 text-sm font-medium text-gray-900 whitespace-nowrap">
              {step.name}
            </div>
            
            {index < steps.length - 1 && (
              <div className={cn(
                "w-16 border-t mx-1 border-gray-300",
                currentStep > step.id && "border-emerald-500"
              )} />
            )}
          </div>
        ))}
      </div>
      
      <div className="sm:hidden text-center mb-6">
        <p className="text-lg font-semibold">
          Step {currentStep} of {steps.length}: {steps[currentStep - 1].name}
        </p>
      </div>
    </div>
  );
};

export default CheckoutSteps;