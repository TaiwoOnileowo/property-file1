import Image from "next/image";
import React from "react";

const RightSection = () => {
  return (
    <div className="hidden lg:block relative flex-1">
      <div className="absolute inset-0">
        <Image
          fill
          src="/landing-page/hero.avif"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-[2px]"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-start justify-center p-20">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 max-w-md">
          <h2 className="text-3xl font-bold text-white mb-4">
            Find Your Dream Home
          </h2>
          <p className="text-gray-200 text-lg">
            Discover exceptional properties in prime locations, where luxury
            meets comfort and style meets sophistication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
