import ContactForm from "@/components/hocs/Contact/ContactForm";
import HeroSection from "@/components/hocs/Contact/HeroSection";
import InfoCards from "@/components/hocs/Contact/InfoCards";

export default function ContactPage() {
  return (
    <div className="font-sans text-white min-h-screen">
      <HeroSection />
      <InfoCards />
      <ContactForm />
    </div>
  );
}
