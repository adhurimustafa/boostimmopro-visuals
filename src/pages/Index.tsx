import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ResultsSection from "@/components/ResultsSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import LocalSection from "@/components/LocalSection";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <BeforeAfterSection />
      <ResultsSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <BenefitsSection />
      <LocalSection />
      <FinalCTA />
      <ContactSection />
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default Index;
