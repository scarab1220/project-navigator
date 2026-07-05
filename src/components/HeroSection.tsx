import { ArrowRight, Calendar, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Aurora dark background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-gold/20 via-gold/10 to-transparent blur-3xl" />
        <div className="absolute top-48 -right-40 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-navy-light/30 via-navy-light/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
      </div>

      {/* Subtle dotted pattern */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.12) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="container-narrow section-padding relative z-10">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full
            border border-gold/30 bg-gold/10 backdrop-blur-sm shadow-sm mb-8
            transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold/60 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>

            <span className="text-gold-light text-sm font-medium">
              Available for Remote Project Management & Marketing Operations
            </span>

            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute -inset-px rounded-full bg-gradient-to-r from-transparent via-gold/30 to-transparent blur-sm" />
            </span>
          </div>

          {/* Identity */}
          <div className="mb-4">
            <p className="text-sm uppercase tracking-widest text-primary-foreground/60">
              Oscar Abarca
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Project Manager for{" "}
            <span className="text-gradient-gold">
              Operations, Marketing & Digital Teams
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl leading-relaxed">
            Delivering marketing campaigns, cross-functional projects, and operational improvements through agile leadership, strategic planning, and KPI-driven execution.
          </p>

          {/* Spanish tagline */}
          <p className="text-base text-gold-light/80 italic mb-10">
            Gerente de Proyectos Técnico — Disponible para clientes en USA, LATAM y global.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:oscarnoeabarca@outlook.com"
              className="group relative inline-flex items-center justify-center rounded-xl px-6 py-3
              bg-gold text-navy font-semibold shadow-lg
              transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              </span>

              <Mail className="w-5 h-5 mr-2" />
              Contact Me
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="group inline-flex items-center justify-center rounded-xl px-6 py-3
              border border-gold/40 bg-navy/40 backdrop-blur-sm text-primary-foreground
              transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
            >
              <Calendar className="w-5 h-5 mr-2 text-gold" />
              View Services
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Edge highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-full w-px
        bg-gradient-to-b from-transparent via-gold/30 to-transparent opacity-40"
      />
    </section>
  );
};

export default HeroSection;