import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocalSection from "@/components/LocalSection";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <BeforeAfterSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <BenefitsSection />
      <TestimonialsSection />
      <LocalSection />
      <BlogSection />
      <FinalCTA />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
