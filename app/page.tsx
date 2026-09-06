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
    const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omar Adnan Alotaibi",
    alternateName: [
      "عمر العتيبي",
      "Omar Alotaibi",
      "عمر عدنان العتيبي"
    ],
    
    url: "https://omar-portfolio-black-theta.vercel.app",
    sameAs: [
      "https://github.com/OmarAlotaibi-dev",
      "https://www.credly.com/users/omar_alotaibi",
    ],
 alumniOf: [
  {
    "@type": "CollegeOrUniversity",
    name: "Fairleigh Dickinson University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Teaneck",
      addressRegion: "NJ",
      addressCountry: "US",
    },
  },
  {
    "@type": "CollegeOrUniversity",
    name: "King Saud University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
  },
],
    knowsAbout: [
      "Management Information Systems",
      "Business Analysis",
      "Systems Analysis",
      "Digital Transformation",
      "Data Analytics",
      "Software Development",
      "Cloud Computing",
      "نظم المعلومات الإدارية",
      "تحليل الأعمال",
      "تحليل النظم",
      "التحول الرقمي",
      "قواعد البيانات",
      "نظم المعلومات",
    ],
  };
  return (
    
    <>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      {/*bcakground color and text color are set to match the design*/}
      <main className="bg-[#F7F8FA] text-[#111827]">
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