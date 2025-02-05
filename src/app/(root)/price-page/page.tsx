import { MobileAppPricingCard } from "@/components/hocs/Pricing-Page/MobileAppPricing";
import { PricingCard } from "@/components/hocs/Pricing-Page/PricingCard";
const plans = [
  {
    name: "Basic",
    price: 500,
    maxPrice: 1500,
    period: "project",
    features: [
      "Up to 5 pages",
      "Template-based design",
      "Responsive design",
      "Basic SEO optimization",
      "Standard security features",
      "1 month support & maintenance",
      "1-2 weeks turnaround time",
      { text: "Domain registration & hosting", available: false, new: true },
      { text: "SSL certificate", available: false, new: true },
      { text: "Content creation (5 pages)", available: false, new: true },
      { text: "Social media integration", available: false },
      { text: "Performance optimization", available: false },
      { text: "Multilingual support", available: false, new: true },
    ],
    bestFor: "Small businesses, startups, personal websites",
  },
  {
    name: "Standard",
    price: 2000,
    maxPrice: 5000,
    period: "project",
    featured: true,
    features: [
      "Up to 15 pages",
      "Semi-custom design",
      "Responsive design",
      "Standard SEO optimization",
      "CMS integration (WordPress, Shopify, etc.)",
      "Basic e-commerce store",
      "Database integration",
      "Enhanced security features",
      "Speed optimization",
      "Basic analytics setup",
      "3 months support & maintenance",
      "3-6 weeks turnaround time",
      { text: "Domain registration & hosting", available: true, new: true },
      { text: "SSL certificate", available: true, new: true },
      { text: "Content creation (5 pages)", available: true, new: true },
      { text: "Social media integration", available: true },
      { text: "Performance optimization", available: true },
      { text: "Multilingual support", available: false, new: true },
    ],
    bestFor: "Growing businesses, e-commerce, custom features",
  },
  {
    name: "Premium",
    price: 6000,
    period: "project",
    features: [
      "Unlimited pages",
      "Fully custom design",
      "Responsive design",
      "Advanced SEO optimization",
      "Custom CMS integration",
      "Advanced e-commerce store",
      "Advanced database integration",
      "Enterprise-level security features",
      "Advanced speed optimization",
      "Advanced analytics setup",
      "6+ months support & maintenance",
      "6+ weeks turnaround time",
      { text: "Domain registration & hosting", available: true, new: true },
      { text: "SSL certificate", available: true, new: true },
      { text: "Content creation (10 pages)", available: true, new: true },
      { text: "Social media integration", available: true },
      { text: "Performance optimization", available: true },
      { text: "Multilingual support", available: true, new: true },
    ],
    bestFor: "Enterprises, high-traffic websites, advanced solutions",
  },
];

const addOns = [
  { name: "Extra Pages", price: 100, unit: "per page" },
  { name: "Advanced SEO Package", price: 500, unit: "flat" },
  { name: "Custom API Integrations", price: 1000, unit: "starting at" },
  { name: "Mobile App Integration", price: null, unit: "Custom Pricing" },
];

const mobileAppPlans = [
  {
    name: "Basic",
    price: 2000,
    maxPrice: 5000,
    period: "project",
    platforms: "Single (iOS or Android)",
    features: [
      "MVP development",
      "Basic UI/UX (Template-based)",
      "Flutter or React Native",
      "Email & Password Authentication",
      "Basic API Integrations (1-2 APIs)",
      "Firebase Database",
      { text: "Push Notifications", available: false },
      { text: "E-commerce Features", available: false },
      { text: "Admin Dashboard", available: false },
      "Standard Security & Encryption",
      "App Store Deployment",
      "1 Month Support & Maintenance",
      "4-6 Weeks Turnaround Time",
    ],
    bestFor: "MVPs, startups, personal projects",
  },
  {
    name: "Standard",
    price: 6000,
    maxPrice: 15000,
    period: "project",
    featured: true,
    platforms: "Both (iOS & Android)",
    features: [
      "Full app development",
      "Custom UI Design",
      "Flutter or React Native",
      "Social Login + OTP Authentication",
      "Multiple API Integrations",
      "SQL/NoSQL Database",
      "Push Notifications",
      "Basic E-commerce Features",
      "Basic Admin Dashboard",
      "Enhanced Security & Encryption",
      "App Store Deployment",
      "3 Months Support & Maintenance",
      "8-12 Weeks Turnaround Time",
    ],
    bestFor: "Small-to-mid businesses, e-commerce apps",
  },
  {
    name: "Premium",
    price: 20000,
    period: "project",
    platforms: "Both + Web App",
    features: [
      "Enterprise-level app development",
      "Fully Custom & Animated UI/UX",
      "Native Development (Swift/Kotlin)",
      "Biometric + Multi-Auth",
      "Advanced APIs & AI Integration",
      "Scalable Cloud Database",
      "Advanced Push Notifications",
      "Advanced E-commerce Features",
      "Advanced Admin Dashboard + Analytics",
      "Enterprise-Level Security & Encryption",
      "App Store Deployment (Full Optimization)",
      "6+ Months Support & Maintenance",
      "12+ Weeks Turnaround Time",
    ],
    bestFor: "Enterprises, feature-rich apps",
  },
];

const mobileAppAddOns = [
  { name: "Advanced AI/ML Features", price: 3000, unit: "starting at" },
  { name: "Blockchain Integration", price: 5000, unit: "starting at" },
  { name: "AR/VR Features", price: 8000, unit: "starting at" },
  { name: "Custom API Development", price: 1500, unit: "starting at" },
];

export default function PricingPage() {
  return (
    <>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-text-200">
              Web Development Pricing Packages
            </h1>
            <p className="text-text-300 max-w-2xl mx-auto">
              Choose the perfect package for your web development needs. From
              small businesses to large enterprises, we have a solution for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Add-Ons</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-blue-300">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="bg-zinc-900 rounded-lg p-4 border border-zinc-800"
                >
                  <h3 className="font-medium">{addon.name}</h3>
                  <p className="text-zinc-400">
                    {addon.price ? `$${addon.price} ${addon.unit}` : addon.unit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-52">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">
            Mobile App Development Pricing Packages
          </h1>
          <p className="text-text-300 max-w-2xl mx-auto">
            From MVPs to enterprise-level applications, we offer tailored mobile
            app development solutions to meet your needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mobileAppPlans.map((plan) => (
            <MobileAppPricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Mobile App Add-Ons</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {mobileAppAddOns.map((addon) => (
              <div
                key={addon.name}
                className="bg-zinc-900 rounded-lg p-4 border text-blue-300 border-zinc-800"
              >
                <h3 className="font-medium">{addon.name}</h3>
                <p className="text-zinc-400">
                  ${addon.price}+ {addon.unit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
