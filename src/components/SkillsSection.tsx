const skillCategories = [
  {
    title: "Project Leadership",
    titleEs: "Liderazgo de Proyectos",
    skills: [
      "Agile Project Management",
      "Sprint Planning",
      "Stakeholder Management",
      "Risk Management",
      "Resource Allocation",
      "Team Coordination",
      "Cross-functional Leadership",
      "Process Improvement",
    ],
  },
  {
    title: "Marketing Operations",
    titleEs: "Operaciones de Marketing",
    skills: [
      "Campaign Coordination",
      "Content Planning",
      "Email Marketing Support",
      "SEO Collaboration",
      "Social Media Operations",
      "KPI Reporting",
      "Performance Tracking",
    ],
  },
  {
    title: "Business Operations",
    titleEs: "Operaciones de Negocio",
    skills: [
      "Recruitment",
      "Interview Coordination",
      "Process Documentation",
      "Workflow Optimization",
      "SOP Creation",
      "Team Onboarding",
    ],
  },
  {
    title: "Technical Collaboration",
    titleEs: "Colaboración Técnica",
    skills: [
      "GitHub",
      "Vercel",
      "Netlify",
      "WordPress",
      "Odoo",
      "Google Workspace",
      "Microsoft Office",
      "Technical Documentation",
    ],
  },
];

import { Reveal } from "./Reveal";

const SkillsSection = () => {
  return (
    <section className="relative section-padding overflow-hidden bg-background">
      {/* Aurora background (light, elegant) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-accent/14 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute top-56 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-primary/14 via-accent/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-foreground/6 via-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="container-narrow relative">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block animate-fade-slide-up">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-left" style={{animationDelay: '100ms'}}>
              <span className="inline-block">Skills &</span>{" "}
              <span className="relative inline-block text-gradient-gold">
                Competencies
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-slide-up" style={{animationDelay: '200ms'}}>
              A comprehensive skill set developed through years of hands-on project delivery
              and team leadership across diverse industries.
            </p>
          </div>
        </Reveal>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Reveal key={`skill-${index}`} delay={index * 0.12}>
              <div
                className="group relative rounded-2xl border border-border/50 bg-background/70 backdrop-blur-sm p-6 shadow-sm
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/40 animate-scale-in"
                style={{animationDelay: `${index * 120}ms`}}
              >
                {/* Elegant glow */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-foreground/6 to-transparent blur-sm" />
                </span>

                {/* Soft shimmer sweep (flashy pero elegante) */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <span className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/6 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                </span>

                <div className="relative">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-accent italic mb-4">
                    {category.titleEs}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="group/skill relative inline-flex items-center justify-center rounded-full
                        border border-foreground/12 bg-foreground/[0.03]
                        px-3 py-1.5 text-xs font-semibold text-foreground
                        shadow-sm transition-all duration-300
                        hover:-translate-y-0.5 hover:shadow-md hover:border-foreground/20"
                      >
                        {/* Micro glow elegante (no neon) */}
                        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover/skill:opacity-100">
                          <span className="absolute -inset-px rounded-full bg-gradient-to-r from-transparent via-foreground/8 to-transparent blur-sm" />
                        </span>

                        {/* Mini shimmer */}
                        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                          <span className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/8 to-transparent opacity-0 transition-all duration-700 group-hover/skill:left-[120%] group-hover/skill:opacity-100" />
                        </span>

                        <span className="relative">{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional skills note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-border/50 bg-background/70 backdrop-blur-sm shadow-sm">
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">
                Remote Collaboration Expert
              </p>
              <p className="text-xs text-muted-foreground">
                Proficient with Jira, Confluence, Asana, Slack, MS Teams, and other collaboration tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;