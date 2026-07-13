import { TrendingUp, Globe, Users, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const metrics = [
  {
    number: "11+",
    label: "Years of Leadership",
    sublabel: "Años de Experiencia",
    icon: TrendingUp,
  },
  {
    number: "5+",
    label: "Countries Served",
    sublabel: "Paises Atendidos",
    icon: Globe,
  },
  {
    number: "8+",
    label: "Cross-Functional teams",
    sublabel: "Equipos Gestionados",
    icon: Users,
  },
  {
    number: "20+",
    label: "Projects Delivered",
    sublabel: "Proyectos Entregados",
    icon: Award,
  },
];

const ExperienceSection = () => {
  return (
    <section className="relative section-padding overflow-hidden bg-background">
      {/* Aurora background (light, elegant) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-accent/18 via-primary/12 to-transparent blur-3xl" />
        <div className="absolute top-40 -right-28 h-80 w-80 rounded-full bg-gradient-to-br from-primary/14 via-accent/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-foreground/6 via-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="container-narrow relative">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-left">
              <span className="inline-block">Results that drive</span>{" "}
              <span className="relative inline-block text-gradient-gold">
                Growth
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-slide-up" style={{animationDelay: '100ms'}}>
              Project management focused on improving collaboration, optimizing workflows, and ensuring successful delivery of marketing initiatives and digital projects.
            </p>
          </div>
        </Reveal>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Reveal key={`metric-${index}`} delay={index * 0.1}>
              <div
                className="group relative rounded-none border-[3px] border-foreground bg-background p-6 text-center
                transition-all duration-500 hover:-translate-y-2 hover:brutal-shadow hover:border-foreground animate-bounce-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Elegant glow */}
                <span className="pointer-events-none absolute inset-0 rounded-none opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="absolute -inset-px rounded-none bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-sm" />
                </span>

                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4
                transition-all duration-300 group-hover:bg-accent/25 group-hover:scale-110 group-hover:animate-float">
                  <metric.icon className="w-6 h-6" />
                </div>

                <div className="relative metric-number mb-2 animate-fade-slide-up">
                  {metric.number}
                </div>
                <div className="relative text-sm font-medium text-foreground">
                  {metric.label}
                </div>
                <div className="relative text-xs text-muted-foreground italic mt-1">
                  {metric.sublabel}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Executive summary */}
        <div className="group relative max-w-3xl mx-auto rounded-none border-[3px] border-foreground bg-background p-8
        transition-all duration-300 hover:brutal-shadow">
          {/* Elegant glow */}
          <span className="pointer-events-none absolute inset-0 rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="absolute -inset-px rounded-none bg-gradient-to-r from-transparent via-foreground/6 to-transparent blur-sm" />
          </span>

          <div className="relative flex items-start gap-4">
            <div className="hidden sm:block w-1 h-full min-h-[120px] bg-accent/70 rounded-full" />

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Executive Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I specialize in managing marketing and digital projects from planning through execution while keeping teams aligned, stakeholders informed, and deadlines on track. My experience includes campaign coordination, recruitment, process optimization, and agile project management within fast-paced remote environments.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Bilingüe (English/Español) — Comunicación ejecutiva para equipos globales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;