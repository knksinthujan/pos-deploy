import { useEffect, useState } from "react";
import type { ProductId } from "@/data/company";
import { HeroSection } from "@/components/sections/HeroSection";
import { BusinessDomainsSection } from "@/components/sections/BusinessDomainsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function HomePage() {
  const [interest, setInterest] = useState<ProductId | "">("");

  useEffect(() => {
    // Support opening or refreshing a direct section anchor.
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({ behavior: "instant", block: "start" });
  }, []);

  return (
    <>
      <HeroSection />
      <BusinessDomainsSection />
      <AboutSection />
      <ApproachSection />
      <SolutionsSection />
      <ProcessSection />
      <RoadmapSection onInterestChange={setInterest} />
      <VisionSection />
      <FaqSection />
      <ContactSection interest={interest} onInterestChange={setInterest} />
    </>
  );
}
