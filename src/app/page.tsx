import { HeroSection } from "@/components/landing-page/HeroSection";
import { TrustedBy } from "@/components/landing-page/TrustedBy";
import { Features } from "@/components/landing-page/Features";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
import { Pricing } from "@/components/landing-page/Pricing";
import { Testimonials } from "@/components/landing-page/Testimonials";
import { CallToAction } from "@/components/landing-page/CallToAction";
import { Footer } from "@/components/landing-page/Footer";
import { BookADemo } from "@/components/layout/BookADemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroSection />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
      <BookADemo/>
    </main>
  );
}
