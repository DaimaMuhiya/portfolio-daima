"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import GitJournalSection from "@/components/githubJournal-section";
import ServicesSection from "@/components/services-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  const handleResumeDownload = () => {
    window.open("/documents/Daima_Muhiya_CV.pdf", "_blank");
  };

  // const handleResumeDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/documents/Daima_Muhiya.pdf";
  //   link.download = "Daima_Muhiya.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleViewAllProjects = () => {
    window.location.href = "/projects";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar onScrollToSection={scrollToSection} />
      <main className="pt-24 pb-20">
        <HeroSection />
        <StatsSection />
        <GitJournalSection />
        <ServicesSection />
        <ExperienceSection onResumeDownload={handleResumeDownload} />
        <ProjectsSection onViewAllProjects={handleViewAllProjects} />
        <SkillsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
