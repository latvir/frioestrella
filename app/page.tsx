import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CalculatorSection from "@/components/CalculatorSection";
import AboutSection from "@/components/AboutSection";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import SalesAgentWidget from "@/components/SalesAgentWidget";

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <CalculatorSection />
          <AboutSection />
          <BrandsSection />
          <TestimonialsSection />
          <FaqSection />
        </main>
        <ContactSection />
        <SalesAgentWidget />
      </div>
    </LanguageProvider>
  );
}
