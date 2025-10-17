"use client";

import type React from "react";
import { useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import GitJournalSection from "@/components/githubJournal-section";
import ServicesSection from "@/components/services-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  // const handleResumeDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/documents/Daima_Muhiya.pdf";
  //   link.download = "Daima_Muhiya.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleResumeDownload = () => {
  window.open("/documents/Daima_Muhiya.pdf", "_blank");
  };

  const handleViewProject = (projectId: string) => {
    // Fonction fictive permettant d'afficher tous les projets.
    // Cela pourrait permettre d'accéder à une page de projets ou d'afficher une galerie de projets.
    console.log(`Viewing project: ${projectId}`);
    alert(
      `Opening project: AI E-commerce Integration\n\nThis would normally open a detailed project view with:\n• Screenshots and demos\n• Technical documentation\n• Code repositories\n• Live application access`
    );
  };

  const handleViewAllProjects = () => {
    // Fonction fictive permettant d'afficher tous les projets.
    // Cela pourrait permettre d'accéder à une page de projets ou d'afficher une galerie de projets.
    console.log("Viewing all projects");
    alert(
      `Opening Projects Gallery\n\nThis would show all ${
        Math.floor(Math.random() * 20) + 15
      } projects including:\n• Web Applications\n• Mobile Apps\n• API Services\n• Machine Learning Projects\n• E-commerce Solutions\n• And more...`
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar
        onScrollToSection={scrollToSection}
        onResumeDownload={handleResumeDownload}
      />
      <main className="pt-24 pb-20">
        <HeroSection />
        <StatsSection />
        <GitJournalSection />
        <ServicesSection />
        <ExperienceSection onResumeDownload={handleResumeDownload} />
        <EducationSection />
        <ProjectsSection
          onViewProject={handleViewProject}
          onViewAllProjects={handleViewAllProjects}
        />
        <SkillsSection />
        <ContactForm
          formData={formData}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </main>
      <Footer />
    </div>
  );
}
