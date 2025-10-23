"use client";

import AboutSection from "@/components/about-section/about-section";
import ContactSection from "@/components/contact-section/contact-section";
import GallerySection from "@/components/gallery-section/gallery-section";
import HeroCarousel from "@/components/hero-section/hero-section";
import ImpactSection from "@/components/impact-section/impact-section";
import JourneySection from "@/components/journey-section/journey-section";
import VisionSection from "@/components/my-view-section/my-view-section";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <AboutSection />
      <JourneySection />
      <GallerySection />
      <ImpactSection />
      <VisionSection />
      <ContactSection />

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#FF7F5C] hover:bg-[#FF6B47] text-white rounded-full w-14 h-14 shadow-2xl z-40 transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </div>
  );
}
