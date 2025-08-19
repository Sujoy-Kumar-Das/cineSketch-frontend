import FAQSection from "./_components/faq/FAQSection";
import FeaturesSection from "./_components/fatuers-section/FeaturesSection";
import GallerySection from "./_components/gallery/Gallery";
import Glow from "./_components/glow/Glow";
import HeroSection from "./_components/hero-section/HeroSection";
import HowItWorksSection from "./_components/how-it-works-section/HowItWorkSection";
import PricingSection from "./_components/pricing/PricingSection";
import StartNowSection from "./_components/startNowSection/StartNowSection";
import TestimonialSection from "./_components/testimonials/TestimonialSection";
import TrustedBrandSection from "./_components/truseted-brand-section/TrustedBrandSection";

export default function HomePage() {
  return (
    <>
      <Glow />
      <HeroSection />
      <TrustedBrandSection />
      <FeaturesSection />
      <HowItWorksSection />
      <GallerySection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <StartNowSection />
    </>
  );
}
