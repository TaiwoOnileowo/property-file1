import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bed, Heart, MapPin, ShowerHead, Square } from "lucide-react"

interface PropertyCardProps {
  id: string
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: string
  imageUrl: string
  isForRent?: boolean
  isNew?: boolean
  isFeatured?: boolean
  type?: string
}
 const PopularPropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  isForRent = false,
}: PropertyCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative">
        <Link href={`/properties/${id}`}>
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={400}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </Link>
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {isForRent && <Badge className="bg-green-500 hover:bg-green-600">For Rent</Badge>}
          {!isForRent && <Badge className="bg-green-500 hover:bg-green-600">For Sale</Badge>}
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-white hover:text-green-500"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </div>
      <div className="p-5">
        <div className="mb-1 flex items-center text-sm text-gray-500">
          <MapPin className="mr-1 h-3 w-3" />
          {location}
        </div>
        <Link href={`/properties/${id}`}>
          <h3 className="mb-1 text-lg font-black hover:text-green-500">
            {title}
          </h3>
        </Link>
        <p className="mb-4 text-xl font-bold">{price}</p>
        <div className="flex border-t pt-4">
          <div className="flex flex-1 items-center justify-center gap-1">
            <Bed className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{bedrooms}</span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-1 border-l border-r px-2">
            <ShowerHead className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{bathrooms}</span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-1">
            <Square className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{area}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularPropertyCard