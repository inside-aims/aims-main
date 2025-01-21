// import PricingHero from './components/pricing-hero'
// import PricingCards from './components/pricing-cards'
// import ComparisonTable from './components/comparison-table'
// import FAQ from './components/faq'
// import Testimonials from './components/testimonials'
// import CTASection from './components/cta-section'
import ComparisonTable from "@/components/hocs/Pricing/ComparisonTable";
import CTASection from "@/components/hocs/Pricing/cta-section";
import PricingCards from "@/components/hocs/Pricing/PricingCards";
import PricingHero from "@/components/hocs/Pricing/PricingHero";
// import FAQ from "@/components/hocs/Pricing/faq";
import Testimonials from "@/components/hocs/Pricing/Testimonials";
export default function PricingPage() {
  return (
    <div className="text-text-100">
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      {/* <FAQ /> */}
      <Testimonials />
      <CTASection />
    </div>
  );
}
