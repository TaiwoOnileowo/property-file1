
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { CheckSquare, FileImage } from "lucide-react";
import { interestOptions } from "./InterestsStep";
import { CheckoutFormData } from "./CheckoutFlow";

interface ReviewStepProps {
  formData: CheckoutFormData;
  onSubmit: () => void;
  onBack: () => void;
}

const ReviewStep = ({ formData, onSubmit, onBack }: ReviewStepProps) => {
  const durationMap: Record<string, { label: string, discount: number }> = {
    "1": { label: "1 Month", discount: 0 },
    "3": { label: "3 Months", discount: 10 },
    "6": { label: "6 Months", discount: 15 },
    "12": { label: "12 Months", discount: 25 },
  };

  const getSelectedInterest = () => {
    if (!formData.interestedIn.length) return null;
    
    const selectedOption = interestOptions.find(option => 
      option.id === formData.interestedIn[0]
    );
    
    return selectedOption || null;
  };

  const getImagePreview = () => {
    if (formData.image) {
      return URL.createObjectURL(formData.image);
    }
    return null;
  };

  const calculatePrice = () => {
    const selectedInterest = getSelectedInterest();
    const duration = durationMap[formData.duration];
    const months = parseInt(formData.duration);
    
    if (!selectedInterest || !duration) return { basePrice: 0, discountedPrice: 0, discount: 0 };
    
    const basePrice = selectedInterest.price * months;
    const discount = basePrice * (duration.discount / 100);
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
        <h2 className="text-2xl font-semibold">Review Your Information</h2>
        <p className="text-gray-600">Please review your information before submitting</p>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium">{formData.fullName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company Name</p>
                  <p className="font-medium">{formData.companyName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="font-medium">{formData.phoneNumber}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Campaign Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Interested In</p>
                  <div className="mt-1">
                    {selectedInterest && (
                      <div className="flex items-center space-x-1 text-emerald-700">
                        <CheckSquare className="h-4 w-4" />
                        <span>{selectedInterest.label} - ${selectedInterest.price}/month</span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">
                    {durationMap[formData.duration]?.label || formData.duration}
                    {durationMap[formData.duration]?.discount > 0 && (
                      <span className="ml-2 text-emerald-600 text-sm">
                        ({durationMap[formData.duration].discount}% discount)
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Campaign Period</p>
                  <p className="font-medium">
                    {formData.startDate && formData.endDate ? (
                      <>
                        {format(formData.startDate, "MMMM d, yyyy")} to {format(formData.endDate, "MMMM d, yyyy")}
                      </>
                    ) : "Not specified"}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-4 rounded-md border border-emerald-200">
              <h3 className="font-medium text-emerald-800 mb-2">Pricing Summary</h3>
              <div className="space-y-1">
                <div className="flex justify-between text-emerald-700">
                  <span>Base price ({formData.duration} months):</span>
                  <span>${priceDetails.basePrice}</span>
                </div>
                
                {priceDetails.discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount ({durationMap[formData.duration]?.discount}%):</span>
                    <span>-${priceDetails.discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between font-bold text-emerald-800 pt-2 border-t border-emerald-200 mt-2">
                  <span>Total price:</span>
                  <span>${priceDetails.discountedPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            {formData.image && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Uploaded Image</h3>
                <div className="mt-2 border rounded-md p-2 bg-gray-50">
                  <img
                    src={getImagePreview() || ''}
                    alt="Uploaded"
                    className="max-h-40 mx-auto object-contain"
                  />
                </div>
              </div>
            )}
            
            {formData.additionalInfo && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
                <p className="text-gray-700 whitespace-pre-line">{formData.additionalInfo}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="flex space-x-4 pt-4">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex-1"
        >
          Back
        </Button>
        <Button 
          onClick={onSubmit} 
          className="flex-1 bg-emerald-500 hover:bg-emerald-600"
        >
          Submit Inquiry
        </Button>
      </div>
    </div>
  );
};

export default ReviewStep;