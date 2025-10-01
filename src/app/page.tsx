"use client";

import type React from "react";
import { useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import CooperationSection from "@/components/cooperation-section";
import ServicesSection from "@/components/services-section";
import ExperienceSection from "@/components/experience-section";
import EducationResearchSection from "@/components/education-research-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ContactForm from "@/components/contact-form";

export default function App() {
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

  const handleResumeDownload = () => {
    // Create a mock PDF download
    const resumeContent = `
John Smith - Senior Full Stack Web & App Developer

EXPERIENCE:
• Google (2017-Present) - Senior Software Engineer
• X(Twitter) (2019-2022) - Senior Software Engineer  
• Amazon (2015-2020) - Software Engineer
• PayPal (2014-Present) - Software Engineer

EDUCATION:
• PhD in Computer Science (2016-2020)
• Harvard University - React & Redux Certificate (2018-2022)
• Oxford University - Full Stack Web Development (2010-2012)

SKILLS:
• Front-End: HTML, CSS, JavaScript, React, Angular
• Back-End: Node.js, Express, Python, Django
• Databases: MySQL, PostgreSQL, MongoDB
• Tools: Git, Docker, AWS, Heroku
• Technologies: Python, TensorFlow, Angular, Kubernetes, GCP

CONTACT:
• Email: johndev@gmail.com
• Phone: +1-6-379-925
• Skype: john.dev
    `;

    // Create and download the file
    const blob = new Blob([resumeContent], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "John_Smith_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
        <CooperationSection />
        <ServicesSection />
        <ExperienceSection onResumeDownload={handleResumeDownload} />
        <EducationResearchSection />
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
    </div>
  );
}
