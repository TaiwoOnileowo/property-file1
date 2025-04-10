import React from "react";
import { Button } from "../ui/button";
import PopularPropertyCard from "./PopularPropertyCard";
import { properties } from "@/lib/data";

const PopularProperties = () => {
  return (
    <section className="py-20 max-w-[1440px] mx-auto">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Popular Properties</h2>
                <p className="mt-2 text-gray-600">
                  Handpicked properties selected for their premium locations and exceptional features
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-10 cursor-pointer">
                  Residential
                </Button>
                <Button variant="outline" size="sm" className="h-10 cursor-pointer">
                  Commercial
                </Button>
                <Button variant="outline" size="sm" className="h-10 cursor-pointer">
                  Apartment
                </Button>
                <Button size="sm" className="h-10 bg-green-500 cursor-pointer">
                  Explore All Listing
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {properties.map((property) => (
                    <PopularPropertyCard key={property.id} {...property} />
                ))}
            </div>
          </div>
        </section>
  );
};

export default PopularProperties;
