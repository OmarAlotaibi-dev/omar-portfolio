import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProfessionalOverview from "@/components/home/ProfessionalOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ResearchPreview from "@/components/home/ResearchPreview";
import TechnicalSkills from "@/components/home/TechnicalSkills";
import SelectedCredentials from "@/components/home/SelectedCredentials";
import ExperienceSnapshot from "@/components/home/ExperienceSnapshot";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProfessionalOverview/>
        <FeaturedProjects />
        <ResearchPreview />
        <TechnicalSkills />
        <SelectedCredentials />
        <ExperienceSnapshot />
        <CTA />
      </main>
      <Footer />
    </>
  );
}