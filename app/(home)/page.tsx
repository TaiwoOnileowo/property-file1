import Hero from "@/components/landing-page/Hero";
import HowItWorks from "@/components/landing-page/HowItWorks";
import NewsSection from "@/components/landing-page/NewsSection";
import PopularProperties from "@/components/landing-page/PopularProperties";
import TestimonialsSection from "@/components/landing-page/TestimonialSection";

const Page = () => {
  return (
    <div>
      <Hero />
      <PopularProperties />
      <HowItWorks />
      <TestimonialsSection />
      <NewsSection />
    </div>
  );
};

export default Page;
