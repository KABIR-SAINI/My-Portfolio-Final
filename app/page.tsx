import { NavBar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { CertificatesSection } from "@/components/certificates-section";
import { SkillsSection } from "@/components/skills-section";
import { AwardsSection } from "@/components/awards-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <NavBar />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Education Section */}
        <EducationSection />
        
        {/* Certificates Section */}
        <CertificatesSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Awards Section */}
        <AwardsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}