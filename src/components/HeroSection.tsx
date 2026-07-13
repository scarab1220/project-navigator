import { ArrowRight, Calendar, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background border-b-[3px] border-foreground">
      {/* Hard grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 4% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 4% / 0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Sticker accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-24 hidden md:block"
      >
        <div className="brutal-border bg-accent px-4 py-2 font-semibold uppercase text-foreground rotate-6 shadow-[6px_6px_0_#0a0a0a]">
          Remote / USA · LATAM
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-24 bottom-16 hidden lg:block"
      >
        <div className="brutal-border bg-primary px-3 py-1 font-semibold uppercase text-foreground -rotate-3 shadow-[6px_6px_0_#0a0a0a]">
          Bilingüe
        </div>
      </div>

      <div className="container-narrow section-padding relative z-10">
        <div className="max-w-3xl">
          {/* Availability sticker */}
          <div className="brutal-border inline-flex items-center gap-3 bg-accent px-4 py-2 mb-8 -rotate-1 shadow-[6px_6px_0_#0a0a0a]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-foreground" />
            </span>
            <span className="text-foreground text-sm font-semibold uppercase tracking-wide">
              Available for Remote Project Management & Marketing Operations
            </span>
          </div>

          {/* Identity */}
          <div className="mb-4">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/70 font-semibold">
              Oscar Abarca
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6 uppercase">
            Project Manager for{" "}
            <span className="text-gradient-gold">
              Operations, Marketing & Digital Teams
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground mb-4 max-w-2xl leading-relaxed">
            Delivering marketing campaigns, cross-functional projects, and operational improvements through agile leadership, strategic planning, and KPI-driven execution.
          </p>

          {/* Spanish tagline */}
          <p className="text-base text-foreground/70 italic mb-10 border-l-4 border-primary pl-4">
            Gerente de Proyectos Técnico — Disponible para clientes en USA, LATAM y global.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="mailto:oscarnoeabarca@outlook.com"
              className="group inline-flex items-center justify-center px-6 py-3 bg-primary text-foreground font-semibold uppercase brutal-border shadow-[8px_8px_0_#0a0a0a] transition-transform duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#0a0a0a]"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="group inline-flex items-center justify-center px-6 py-3 bg-accent text-foreground font-semibold uppercase brutal-border shadow-[8px_8px_0_#0a0a0a] transition-transform duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#0a0a0a]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              View Services
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 border-t-[3px] border-b-[3px] border-foreground bg-foreground text-background overflow-hidden"
      >
        <div className="flex whitespace-nowrap animate-marquee py-2 text-sm font-semibold uppercase tracking-widest">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0">
              {["Agile Delivery", "★", "KPI Tracking", "★", "Marketing Ops", "★", "Recruitment", "★", "Stakeholder Management", "★", "Bilingual EN/ES", "★"].map((t, j) => (
                <span key={j} className="px-6">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;