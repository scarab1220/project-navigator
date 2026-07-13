import {
  Megaphone,
  GitBranch,
  UserPlus,
  Workflow,
  BarChart3,
  MessagesSquare,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Megaphone,
    title: "Marketing Project Management",
    titleEs: "Gestión de Proyectos de Marketing",
    description:
      "Planning, coordinating, and delivering marketing initiatives while ensuring deadlines, quality, and stakeholder alignment.",
  },
  {
    icon: GitBranch,
    title: "Agile Delivery Coordination",
    titleEs: "Coordinación de Entregas Ágiles",
    description:
      "Managing sprint planning, task prioritization, workflow optimization, and cross-functional collaboration.",
  },
  {
    icon: UserPlus,
    title: "Recruitment & Team Coordination",
    titleEs: "Reclutamiento y Coordinación de Equipos",
    description:
      "Leading hiring processes, candidate screening, onboarding coordination, and team growth initiatives.",
  },
  {
    icon: Workflow,
    title: "Operations & Process Improvement",
    titleEs: "Operaciones y Mejora de Procesos",
    description:
      "Designing workflows that improve productivity, communication, and project visibility across departments.",
  },
  {
    icon: BarChart3,
    title: "KPI Tracking & Reporting",
    titleEs: "Seguimiento de KPI y Reportes",
    description:
      "Building dashboards and performance reports that help leadership make informed business decisions.",
  },
  {
    icon: MessagesSquare,
    title: "Client & Stakeholder Communication",
    titleEs: "Comunicación con Clientes y Stakeholders",
    description:
      "Serving as the bridge between leadership, internal teams, and clients to ensure expectations are met.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative section-padding overflow-hidden bg-background"
    >
      {/* Aurora background (light, elegant) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-accent/16 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute top-44 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-primary/14 via-accent/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-foreground/6 via-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="container-narrow relative">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block animate-fade-slide-up">
              What I Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-left" style={{animationDelay: '100ms'}}>
              <span className="inline-block">Services &</span>{" "}
              <span className="relative inline-block text-gradient-gold">
                Engagement Options
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-slide-up" style={{animationDelay: '200ms'}}>
              Flexible engagement models tailored to your project needs — from
              short-term consulting to long-term project leadership.
            </p>
          </div>
        </Reveal>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={`service-${index}`} delay={index * 0.1}>
              <div
                className="group relative rounded-none border-[3px] border-foreground bg-background p-6 shadow-sm
                transition-all duration-500 hover:-translate-y-2 hover:brutal-shadow hover:border-foreground animate-scale-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Elegant glow (no neon) */}
                <span className="pointer-events-none absolute inset-0 rounded-none opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="absolute -inset-px rounded-none bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-sm" />
                </span>

                <div
                  className="relative inline-flex items-center justify-center w-12 h-12 rounded-none bg-accent/10 text-accent mb-4
                transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110 group-hover:animate-float"
                >
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="relative text-lg font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="relative text-sm text-accent font-medium mb-3 italic">
                  {service.titleEs}
                </p>
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Engagement types */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Engagement options include:
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Project-Based Delivery",
              "Agile Sprint Leadership",
              "Consulting & Advisory",
              "Project Management Support",
            ].map((option, index) => (
              <span
                key={index}
                className="group relative inline-flex items-center justify-center rounded-full
                border border-foreground/12 bg-foreground/[0.03]
                px-4 py-2 text-xs font-semibold text-foreground
                shadow-sm transition-all duration-300
                hover:-translate-y-0.5 hover:brutal-shadow-accent hover:border-foreground/20"
              >
                {/* subtle highlight ring (elegant, not neon) */}
                <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute -inset-px rounded-full bg-gradient-to-r from-transparent via-foreground/8 to-transparent blur-sm" />
                </span>

                <span className="relative">{option}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;