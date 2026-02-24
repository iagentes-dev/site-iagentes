import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PillarCards from "@/components/PillarCards";
import CaseStudies from "@/components/CaseStudies";
import ProcessTimeline from "@/components/ProcessTimeline";
import { Cta4 } from "@/components/Cta4";
import TechStack from "@/components/TechStack";
import ICPSection from "@/components/ICPSection";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <PillarCards />
      <CaseStudies />
      <ProcessTimeline />
      <Cta4 />
      <TechStack />
      <ICPSection />
      <FAQAccordion />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
