import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const NewsSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1440px] mx-auto px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Browse Our News & Articles</h2>
            <p className="mt-2 text-gray-600">Stay updated with the latest trends and insights in real estate</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Articles
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Quarterly hit the living ground running the market",
              image: "/landing-page/property1.avif",
              date: "June 7, 2023",
            },
            {
              title: "Marketing hit the living ground running the market",
              image: "/landing-page/property2.avif",
              date: "May 23, 2023",
            },
            {
              title: "Potential the marketing hit the ground running the market",
              image: "/landing-page/property3.avif",
              date: "April 15, 2023",
            },
          ].map((article, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <Link href="#">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">{article.date}</p>
                <Link href="#">
                  <h3 className="mb-4 text-xl font-semibold hover:text-gray-700">{article.title}</h3>
                </Link>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline">
            View All Articles
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection