"use client"
import { useState } from "react";
import UserInfoStep from "./UserInfoStep";
import DurationStep from "./DurationStep";
import ReviewStep from "./ReviewStep";
import CheckoutSteps from "./CheckoutSteps";
import InterestsStep from "./InterestsStep";
import ImageUploadStep from "./ImageUploadStep";
import { toast } from "sonner"
import { usePaystackPayment } from 'react-paystack';
import { useMutation } from "@tanstack/react-query";
import { postAdsFn } from "@/lib/fetcher";

export type CheckoutFormData = {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  interestedIn: string[];
  duration: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  additionalInfo: string;
  image: File | null;
  basePrice: number;
  totalPrice: number;
};

const initialFormData: CheckoutFormData = {
  fullName: "",
  email: "",
  companyName: "",
  phoneNumber: "",
  interestedIn: [],
  duration: "0",
  startDate: undefined,
  endDate: undefined,
  additionalInfo: "",
  image: null,
  basePrice: 0,
  totalPrice: 0,
};

const CheckoutFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData);
  const {mutate} = useMutation({
    mutationFn: postAdsFn,
    onSuccess: (data: any) => {
      if(data.data.success) {
        toast("Success", {
          description: "Our team will contact you within 24 hours.",
        });
        setFormData(initialFormData);
        setCurrentStep(1);
      } else {
        toast.error(data.message);
      } 
    },
    onError: (data: any) => {
      toast.error(data.message);
    }
  });

  const config = {
    reference: (new Date()).getTime().toString(),
    email: formData.email,
    amount: formData.totalPrice * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
  };

  const onSuccess = (reference: any) => {
    if(reference.status == "success") {
      handleSubmit(); 
    }
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
  
  const updateFormData = (data: Partial<CheckoutFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

//   const handleGoToStep = (step: number) => {
//     if (step >= 1 && step <= 5) {
//       setCurrentStep(step);
//       window.scrollTo(0, 0);
//     }
//   };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    mutate(formData);
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div>
      <CheckoutSteps currentStep={currentStep} onStepClick={() => {}} />
      
      <div className="mt-8">
        {currentStep === 1 && (
          <UserInfoStep formData={formData} updateFormData={updateFormData} onNext={handleNextStep} />
        )}
        
        {currentStep === 2 && (
          <InterestsStep 
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNextStep}
            onBack={handlePrevStep}
          />
        )}
        
        {currentStep === 3 && (
          <ImageUploadStep 
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNextStep}
            onBack={handlePrevStep}
          />
        )}
        
        {currentStep === 4 && (
          <DurationStep 
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNextStep}
            onBack={handlePrevStep}
          />
        )}
        
        {currentStep === 5 && (
          <ReviewStep 
            formData={formData} 
            onSubmit={() => {initializePayment({onSuccess, onClose});}}
            onBack={handlePrevStep}
          />
        )}
      </div>
    </div>
  );
};

export default CheckoutFlow;