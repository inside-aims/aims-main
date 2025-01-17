import HeroSection from "@/components/hocs/Contact/HeroSection";
import InfoCards from "@/components/hocs/Contact/InfoCards";
import ContactForm from "@/components/hocs/Contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="text-white font-sans">
      <HeroSection />
      <InfoCards />
      <ContactForm />
    </div>
  );
}
