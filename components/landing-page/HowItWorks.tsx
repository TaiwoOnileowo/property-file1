import { Building, Home, Key, Search } from "lucide-react"

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container max-w-[1440px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Discover Home</h3>
            <p className="text-gray-600">Browse our extensive collection of properties to find your perfect match.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
              <Building className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Schedule Tour</h3>
            <p className="text-gray-600">Book a viewing at your convenience to experience the property firsthand.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
              <Home className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Financing</h3>
            <p className="text-gray-600">
              Get assistance with mortgage options and financial planning for your purchase.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
              <Key className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Close Deal</h3>
            <p className="text-gray-600">
              Complete the transaction with our expert guidance for a smooth closing process.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks