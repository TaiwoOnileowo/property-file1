import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const TestimonialsSection = () => {
  return (
    <section className="py-20 max-w-[1440px] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight md:text-4xl">Here Are Few Words</h2>
        <p className="mb-12 text-center text-xl">From Customers</p>

        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-600">
                "The team at EstateVue made finding my dream home an absolute pleasure. Their attention to detail and
                understanding of my needs led me to the perfect property. I couldn't be happier with the service I
                received."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/landing-page/property1.avif"
                    alt="Customer"
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center space-x-2">
          <Button size="icon" variant="outline" className="h-10 w-10 rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="outline" className="h-10 w-10 rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection