"use client";

import type React from "react";

import { Send, Phone, Mail } from "lucide-react";
import Image from "next/image";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({
  formData,
  isSubmitting,
  submitStatus,
  onInputChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <section id="contacts" className="max-w-[1200px] mx-auto px-5 mb-20">
      <div className="bg-[#121212] rounded-xl p-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full"></div>
            <span className="text-[#057A55] font-mono">Entrer en contact</span>
          </div>
          <h2 className="text-2xl font-medium text-white font-mono max-w-2xl mx-auto">
            Travaillons ensemble sur votre prochain projet
          </h2>
          <p className="text-[#6B7280] text-sm font-mono mt-4 max-w-lg mx-auto">
            Vous avez un projet en tête ou souhaitez simplement discuter de
            technologie ? Laissez-moi un message et je vous répondrai
            rapidement.
          </p>
        </div>
        {/* Layout: Contact Info (à gauche) + Form (à droite) */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-auto lg:min-w-[300px] flex flex-col items-center lg:items-start gap-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-[120px] h-[120px] rounded-full border-2 border-[#2F343C] p-1 flex items-center justify-center">
                <Image
                  src="/profile/daima_muhiya.png"
                  alt="daima muhiya"
                  width={120}
                  height={120}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-3 right-3 w-[12px] h-[12px] bg-[#057A55] rounded-full border-2 border-[#121212]"></div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2 w-full">
              <a
                href="https://wa.me/243995825417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 text-[#6B7280] font-mono flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#057A55]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#6B7280] text-[10px] font-mono mb-0.5">
                    WhatsApp & Appel
                  </p>
                  <p className="text-[#F98080] text-sm font-mono truncate">
                    +243 995 825 417
                  </p>
                </div>
              </a>

              <a
                href="mailto:muhiyadaima@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 text-[#6B7280] font-mono flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#057A55]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#6B7280] text-[10px] font-mono mb-0.5">
                    Email
                  </p>
                  <p className="text-[#F98080] text-sm font-mono truncate">
                    muhiyadaima@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#057A55] bg-opacity-10 border border-[#057A55] rounded-lg">
              <div className="w-2 h-2 bg-[#057A55] rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-mono">
                Disponible pour freelance
              </span>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1 w-full">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-white text-sm font-mono mb-2 block"
                  >
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F2A37] rounded-lg text-white font-mono placeholder-[#6B7280] focus:border-[#057A55] focus:outline-none transition-colors"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-white text-sm font-mono mb-2 block"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F2A37] rounded-lg text-white font-mono placeholder-[#6B7280] focus:border-[#057A55] focus:outline-none transition-colors"
                    placeholder="email@exemple.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="text-white text-sm font-mono mb-2 block"
                >
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F2A37] rounded-lg text-white font-mono placeholder-[#6B7280] focus:border-[#057A55] focus:outline-none transition-colors"
                  placeholder="De quoi s'agit-il ?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-white text-sm font-mono mb-2 block"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#1F2A37] rounded-lg text-white font-mono placeholder-[#6B7280] focus:border-[#057A55] focus:outline-none transition-colors resize-vertical"
                  placeholder="Parlez-moi de votre projet ou dites simplement bonjour..."
                />
              </div>
              {submitStatus === "success" && (
                <div className="p-4 bg-[#057A55] bg-opacity-20 border border-[#057A55] rounded-lg">
                  <p className="text-[#84E1BC] text-sm font-mono">
                    ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
                  </p>
                </div>
              )}
              <div className="text-center md:text-left">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#057A55] hover:bg-[#046545] disabled:bg-[#057A55] disabled:opacity-50 text-white font-mono rounded-lg transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
