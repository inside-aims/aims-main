// import PricingHero from './components/pricing-hero'
// import PricingCards from './components/pricing-cards'
// import ComparisonTable from './components/comparison-table'
// import FAQ from './components/faq'
// import Testimonials from './components/testimonials'
// import CTASection from './components/cta-section'
import PricingHero from "@/components/hocs/Pricing/PricingHero";
import PricingCards from "@/components/hocs/Pricing/PricingCards";
import ComparisonTable from "@/components/hocs/Pricing/ComparisonTable";
// import FAQ from "@/components/hocs/Pricing/faq";
import Testimonials from "@/components/hocs/Pricing/Testimonials";
import CTASection from "@/components/hocs/Pricing/cta-section";
export default function PricingPage() {
  return (
    <div className="min-h-screen  text-white">
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      {/* <FAQ /> */}
      <Testimonials />
      <CTASection />
    </div>
  );
}
