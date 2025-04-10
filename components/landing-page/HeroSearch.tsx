"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { locationItems, priceItems, propertyItems } from "@/lib/data"

export function HeroSearch() {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-xl bg-white p-4 shadow-lg">
      <Tabs defaultValue="buy" className="w-full !h-auto">
        <TabsList className="grid w-full !h-auto cursor-pointer grid-cols-4 bg-gray-100">
          <TabsTrigger value="buy" className="data-[state=active]:bg-green-500 py-2  data-[state=active]:text-white">
            Buy
          </TabsTrigger>
          <TabsTrigger value="rent" className="data-[state=active]:bg-green-500 py-2 data-[state=active]:text-white">
            Rent
          </TabsTrigger>
          <TabsTrigger value="shortlet" className="data-[state=active]:bg-green-500 py-2 data-[state=active]:text-white">
            Shortlet
          </TabsTrigger>
          <TabsTrigger value="land" className="data-[state=active]:bg-green-500 py-2 data-[state=active]:text-white">
            Land
          </TabsTrigger>
        </TabsList>
        {["buy", "rent", "shortlet", "land"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-4">
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="flex-1">
        <Select>
          <SelectTrigger className="!h-12 w-full">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {locationItems.map((location) => (
              <SelectItem key={location.value} value={location.value}>
                {location.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <Select>
          <SelectTrigger className="!h-12 w-full">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            {propertyItems.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <Select>
          <SelectTrigger className="!h-12 w-full">
            <SelectValue placeholder="Max Price" />
          </SelectTrigger>
          <SelectContent>
            {priceItems.map((price) => (
              <SelectItem key={price.value} value={price.value}>
                {price.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button className="h-12 cursor-pointer bg-green-500 text-white transition-all hover:bg-green-600">
        <Search className="mr-2 h-4 w-4 text-white" />
        Search
      </Button>
    </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

{/* <div className="bg-white p-2 rounded-lg shadow-lg flex items-center">
              <div className="flex-1 flex items-center px-6">
                <MapPin className="text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search location..." 
                  className="ml-3 w-full outline-none text-gray-700"
                />
              </div>
              <div className="h-8 w-px bg-gray-200 mx-2"></div>
              <div className="flex-1 flex items-center px-6">
                <Home className="text-gray-400 w-5 h-5" />
                <select className="ml-3 w-full outline-none text-gray-700 bg-transparent">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>
              <button className="bg-emerald-500 text-white px-8 py-3 rounded hover:bg-emerald-600 transition-colors">
                Search
              </button>
            </div> */}