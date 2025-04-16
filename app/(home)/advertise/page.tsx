import AdvertisingForm from "@/components/AdvertisingForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  BarChart2,
  CheckCircle,
  Mail,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function AdvertisePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heliosBold text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
            <span className="block">Advertise on</span>
            <span className="mt-2 block  text-transparent bg-gradient-to-r from-primary to-[#20C4B7] bg-clip-text ">PropertyFile</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Connect with our engaged audience of property enthusiasts,
            investors, and homeowners to grow your business and increase your
            brand visibility.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-[#00bf63] text-white hover:bg-[#00a857]"
              asChild
            >
              <a href="#get-started">Get Started</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a href="#ad-types">View Ad Options</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heliosBold text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Why Advertise With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              PropertyFile delivers exceptional value through our engaged
              audience and premium content.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00bf63]/10">
                <Users className="h-6 w-6 text-[#00bf63]" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-black">50K+</h3>
              <p className="mt-2 text-gray-600">Monthly Visitors</p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00bf63]/10">
                <BarChart2 className="h-6 w-6 text-[#00bf63]" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-black">3.5 min</h3>
              <p className="mt-2 text-gray-600">Avg. Time on Page</p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00bf63]/10">
                <TrendingUp className="h-6 w-6 text-[#00bf63]" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-black">65%</h3>
              <p className="mt-2 text-gray-600">Returning Visitors</p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00bf63]/10">
                <Award className="h-6 w-6 text-[#00bf63]" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-black">4.8/5</h3>
              <p className="mt-2 text-gray-600">Advertiser Satisfaction</p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h3 className="font-heliosBold text-xl font-bold text-black">
                Targeted Audience
              </h3>
              <p className="mt-2 text-gray-600">
                Our readers are property enthusiasts, investors, and homeowners
                actively looking for solutions in the real estate market.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h3 className="font-heliosBold text-xl font-bold text-black">
                Premium Content
              </h3>
              <p className="mt-2 text-gray-600">
                Your ads appear alongside high-quality, authoritative content
                that attracts engaged readers in the property sector.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h3 className="font-heliosBold text-xl font-bold text-black">
                Brand Association
              </h3>
              <p className="mt-2 text-gray-600">
                Align your brand with PropertyFile's reputation for trustworthy,
                expert property information and advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Types Section */}
      <section id="ad-types" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heliosBold text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Our Advertising Options
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose from a variety of premium placements to maximize your
              visibility and engagement.
            </p>
          </div>

          <Tabs defaultValue="marquee" className="mt-16">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="marquee">Marquee Ads</TabsTrigger>
              <TabsTrigger value="inblog">In-Blog Ads</TabsTrigger>
            </TabsList>

            <TabsContent value="marquee" className="mt-8">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-black">
                    <div className="flex h-full w-full items-center justify-center bg-[#00bf63]/10 p-4">
                      <div className="h-12 w-full rounded bg-[#00bf63]/20 text-center text-sm font-medium leading-12 text-[#00bf63]">
                        Header Strip Ad
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heliosBold text-xl font-bold text-black">
                      Header Strip
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Your banner placed at the top grabs the attention of every
                      potential visitor.
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Dimensions: 970×90px</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>100% viewability</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Desktop & Mobile</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg font-bold text-black">
                        $499
                        <span className="text-sm font-normal text-gray-600">
                          /month
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video bg-black">
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#00bf63]/10 p-4">
                      <div className="h-12 w-full rounded bg-[#00bf63]/20 text-center text-sm font-medium leading-12 text-[#00bf63]">
                        Content
                      </div>
                      <div className="mt-4 h-12 w-full rounded bg-[#00bf63]/40 text-center text-sm font-medium leading-12 text-white">
                        Middle Strip Ad
                      </div>
                      <div className="mt-4 h-12 w-full rounded bg-[#00bf63]/20 text-center text-sm font-medium leading-12 text-[#00bf63]">
                        Content
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heliosBold text-xl font-bold text-black">
                      Middle Strip
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Position your ad right in the center for maximum
                      visibility.
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Dimensions: 728×90px</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>High engagement rate</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Desktop & Mobile</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg font-bold text-black">
                        $399
                        <span className="text-sm font-normal text-gray-600">
                          /month
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video bg-black">
                    <div className="flex h-full w-full items-center justify-center bg-[#00bf63]/10 p-4">
                      <div className="h-32 w-32 rounded bg-[#00bf63]/40 text-center text-sm font-medium leading-[8rem] text-white">
                        Pop-Up Ad
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heliosBold text-xl font-bold text-black">
                      Pop-Up
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Engage users with an interactive ad that appears
                      on-screen.
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Dimensions: 600×400px</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Highest CTR</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Desktop & Mobile</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg font-bold text-black">
                        $599
                        <span className="text-sm font-normal text-gray-600">
                          /month
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="inblog" className="mt-8">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-black">
                    <div className="flex h-full w-full items-center justify-center bg-[#00bf63]/10 p-4">
                      <div className="h-12 w-full rounded bg-[#00bf63]/20 text-center text-sm font-medium leading-12 text-[#00bf63]">
                        Header Strip Ad
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heliosBold text-xl font-bold text-black">
                      Header Strip
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Your banner placed at the top of blog posts for immediate
                      visibility.
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Dimensions: 728×90px</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>First impression</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Desktop & Mobile</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg font-bold text-black">
                        $349
                        <span className="text-sm font-normal text-gray-600">
                          /month
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video bg-black">
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#00bf63]/10 p-4">
                      <div className="h-12 w-full rounded bg-[#00bf63]/20 text-center text-sm font-medium leading-12 text-[#00bf63]">
                        Content
                      </div>
                      <div className="mt-4 h-12 w-full rounded bg-[#00bf63]/40 text-center text-sm font-medium leading-12 text-white">
                        Middle Strip Ad
                      </div>
                      <div className="mt-4 h-12 w-full rounded bg-[#00bf63]/20 text-center text-sm font-medium leading-12 text-[#00bf63]">
                        Content
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heliosBold text-xl font-bold text-black">
                      Middle Strip
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Placed within blog content for maximum reader engagement.
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Dimensions: 728×90px</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Highest engagement</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Desktop & Mobile</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg font-bold text-black">
                        $299
                        <span className="text-sm font-normal text-gray-600">
                          /month
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video bg-black">
                    <div className="flex h-full w-full items-center justify-center bg-[#00bf63]/10 p-4">
                      <div className="flex w-full justify-between">
                        <div className="w-2/3 rounded bg-[#00bf63]/20 p-4 text-center text-sm font-medium text-[#00bf63]">
                          Content
                        </div>
                        <div className="ml-2 w-1/3 rounded bg-[#00bf63]/40 p-4 text-center text-sm font-medium text-white">
                          Side Strip
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heliosBold text-xl font-bold text-black">
                      Side Strip
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Placed at the side for consistent visibility throughout
                      reading.
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Dimensions: 300×600px</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Longest viewability</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-[#00bf63]" />
                        <span>Desktop only</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg font-bold text-black">
                        $399
                        <span className="text-sm font-normal text-gray-600">
                          /month
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heliosBold text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Multi-Month Discounts
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Save more when you commit to longer advertising periods.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-heliosBold text-xl font-bold text-black">
                    3 Months
                  </h3>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-black">10%</span>
                    <span className="ml-1 text-gray-600">discount</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Perfect for seasonal campaigns
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-[#00bf63]">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-heliosBold text-xl font-bold text-black">
                    6 Months
                  </h3>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#00bf63]">
                      15%
                    </span>
                    <span className="ml-1 text-gray-600">discount</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Our most popular option
                  </p>
                  <div className="mt-2 rounded-full bg-[#00bf63]/10 px-2 py-1 text-xs font-medium text-[#00bf63]">
                    BEST VALUE
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-heliosBold text-xl font-bold text-black">
                    12 Months
                  </h3>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-black">25%</span>
                    <span className="ml-1 text-gray-600">discount</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Maximum savings for long-term advertisers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heliosBold text-3xl font-bold tracking-tight text-black sm:text-4xl">
              What Our Advertisers Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join these satisfied advertisers who have seen real results.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="flex items-center">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg"
                    alt="Testimonial author"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-black">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">
                    Marketing Director, HomeStyle
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "Our ad campaign on PropertyFile exceeded expectations. We saw a
                40% increase in qualified leads within the first month."
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="flex items-center">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg"
                    alt="Testimonial author"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-black">Michael Chen</h4>
                  <p className="text-sm text-gray-600">
                    CEO, PropertyTech Solutions
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The targeted audience on PropertyFile was exactly what we
                needed. Our ROI was 3x higher than other platforms we've tried."
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="flex items-center">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg"
                    alt="Testimonial author"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-black">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-600">
                    Marketing Manager, Dream Homes
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "We've renewed our advertising package three times now. The
                quality of leads and brand exposure has been consistently
                excellent."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heliosBold text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about advertising with us.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-heliosBold text-lg font-bold text-black">
                What file formats do you accept?
              </h3>
              <p className="mt-2 text-gray-600">
                We accept JPG, PNG, GIF, and HTML5 formats for all ad
                placements. Animated GIFs should be under 1MB.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-heliosBold text-lg font-bold text-black">
                How do I track my ad performance?
              </h3>
              <p className="mt-2 text-gray-600">
                All advertisers receive access to our real-time analytics
                dashboard showing impressions, clicks, and CTR.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-heliosBold text-lg font-bold text-black">
                Can I target specific content categories?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, you can choose to display your ads on specific categories
                like "Home Buying," "Investment," or "Renovation."
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-heliosBold text-lg font-bold text-black">
                What is your ad approval process?
              </h3>
              <p className="mt-2 text-gray-600">
                We review all ads within 48 hours to ensure they meet our
                quality standards and are relevant to our audience.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-heliosBold text-lg font-bold text-black">
                Do you offer design services?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, we offer professional ad design services for an additional
                fee. Our designers specialize in creating high-converting ads
                for the property market.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-heliosBold text-lg font-bold text-black">
                Can I change my ad during the campaign?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, you can update your ad creative once per month at no
                additional cost. Additional changes may incur a small fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="bg-[#00bf63] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heliosBold text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Fill out the form below and our advertising team will contact you
              within 24 hours.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-xl md:p-8">
            <AdvertisingForm />
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heliosBold text-2xl font-bold tracking-tight text-black">
              Have Questions?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our advertising team is here to help you create the perfect
              campaign.
            </p>
            <div className="mt-6 flex justify-center">
              <Button className="bg-black text-white hover:bg-black/80" asChild>
                <a href="mailto:advertising@propertyfile.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
