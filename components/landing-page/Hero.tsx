import Image from "next/image";
import React from "react";
import { HeroSearch } from "./HeroSearch";

const Hero = () => {
  return (
    <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/landing-page/hero.avif"
            alt="Modern Home"
            height={2000}
            width={2000}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30" />
        </div>
        
        <div className="relative h-full max-w-[1440px] container mx-auto px-4 pt-16">
          <div className="h-[calc(100%-5rem)] flex flex-col justify-center max-w-3xl">
            <h1 className="text-white text-6xl font-bold leading-tight mb-6">
              Experience Elevated Living
            </h1>
            <p className="text-white/90 text-xl mb-12 max-w-2xl">
              Discover exceptional homes in prime locations, where luxury meets comfort and style meets sophistication.
            </p>

            {/* Search Bar */}
            <HeroSearch />
          </div>
        </div>
      </div>
  );
};

export default Hero;
