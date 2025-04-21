
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";
import { FileImage, X, Upload, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { CheckoutFormData } from "./CheckoutFlow";

interface ImageUploadStepProps {
  formData: CheckoutFormData;
  updateFormData: (data: Partial<CheckoutFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ImageUploadStep = ({ formData, updateFormData, onNext, onBack }: ImageUploadStepProps) => {
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      
      updateFormData({ image: file });
      
      // Create image preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      setError(null);
    }
  };

  const removeImage = () => {
    updateFormData({ image: null });
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    if (!formData.image) {
      setError("Please upload an image for your advertisement");
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
        <h2 className="text-2xl font-semibold">Upload Your Advertisement</h2>
        <p className="text-gray-600">Upload an image that will be used in your advertising campaign</p>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-center space-x-2 mb-4">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}
      
      <div className="max-w-md mx-auto">
        <Label htmlFor="image" className="mb-2 block">Advertisement Image</Label>
        <input
          id="image"
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        
        {!imagePreview && !formData.image ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center h-64 cursor-pointer hover:border-emerald-400 transition-colors"
          >
            <FileImage className="h-16 w-16 text-gray-400 mb-4" />
            <p className="text-gray-600 text-center mb-1">Drag and drop your image here, or click to browse</p>
            <p className="text-gray-400 text-sm text-center">PNG, JPG or GIF (max 5MB)</p>
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              className="mt-4"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
            >
              <Upload className="mr-2 h-4 w-4" />
              Select File
            </Button>
          </div>
        ) : (
          <div className="relative border rounded-lg overflow-hidden h-64">
            <img
              src={imagePreview || (formData.image ? URL.createObjectURL(formData.image) : '')}
              alt="Preview"
              className="w-full h-full object-contain"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full"
              onClick={removeImage}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
              <p className="text-white text-sm truncate">
                {formData.image?.name || 'Uploaded image'}
              </p>
            </div>
          </div>
        )}
      </div>
      
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

export default ImageUploadStep;