import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import DeveloperSection from "@/components/DeveloperSection";
import LinksSection from "@/components/LinksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Brutalist grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 4% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 4% / 0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Reveal>
        <HeroSection />
      </Reveal>

      <Reveal delay={0.05}>
        <ExperienceSection />
      </Reveal>

      <Reveal delay={0.1}>
        <ServicesSection />
      </Reveal>

      <Reveal delay={0.15}>
        <SkillsSection />
      </Reveal>

      <Reveal delay={0.2}>
        <DeveloperSection />
      </Reveal>

      <Reveal delay={0.25}>
        <LinksSection />
      </Reveal>

      <Reveal delay={0.3}>
        <ContactSection />
      </Reveal>

      <Reveal delay={0.35}>
        <Footer />
      </Reveal>
    </main>
  );
};

export default Index;