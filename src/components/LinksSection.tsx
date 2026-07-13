import { Linkedin, Github, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const LinksSection = () => {
  return (
    <section className="relative overflow-hidden section-padding bg-background">
      {/* Light aurora accents (subtle, consistent) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block animate-fade-slide-up">
              Connect
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-left" style={{animationDelay: '100ms'}}>
              <span className="inline-block">Professional</span>{" "}
              <span className="relative inline-block text-gradient-gold">
                Profiles
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-slide-up" style={{animationDelay: '200ms'}}>
              View my professional background and explore examples of my technical understanding
              and team collaboration.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* LinkedIn */}
          <Reveal delay={0.3}>
            <a
              href="https://www.linkedin.com/in/oscar-abarca-a1ba4a88/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-none border-[3px] border-foreground bg-background p-5
              flex items-center gap-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:brutal-shadow hover:border-blue-400/40 animate-scale-in"
            >
            {/* Elegant glow */}
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="absolute -inset-px rounded-none bg-gradient-to-r from-transparent via-[#0A66C2]/25 to-transparent blur-sm" />
            </span>

            {/* Subtle shimmer sweep */}
            <span className="pointer-events-none absolute inset-0">
              <span className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/6 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
            </span>

            <div className="relative flex-shrink-0 w-14 h-14 rounded-none bg-[#0A66C2] flex items-center justify-center shadow-sm">
              <Linkedin className="w-7 h-7 text-white" />
            </div>

            <div className="relative flex-grow">
              <h3 className="font-semibold text-foreground transition-colors flex items-center gap-2 group-hover:text-[#0A66C2]">
                LinkedIn Profile
                <ExternalLink className="w-4 h-4 opacity-0 -translate-y-0.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional experience & endorsements
              </p>
            </div>
          </a>
          </Reveal>

          {/* GitHub */}
          <Reveal delay={0.4}>
            <a
              href="https://github.com/scarab1220"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-none border-[3px] border-foreground bg-background p-5
              flex items-center gap-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:brutal-shadow hover:border-gray-600/40 animate-scale-in"
            >
            {/* Elegant glow */}
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="absolute -inset-px rounded-none bg-gradient-to-r from-transparent via-[#24292F]/15 to-transparent blur-sm" />
            </span>

            {/* Subtle shimmer sweep */}
            <span className="pointer-events-none absolute inset-0">
              <span className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/6 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
            </span>

            <div className="relative flex-shrink-0 w-14 h-14 rounded-none bg-[#24292F] flex items-center justify-center shadow-sm">
              <Github className="w-7 h-7 text-white" />
            </div>

            <div className="relative flex-grow">
              <h3 className="font-semibold text-foreground transition-colors flex items-center gap-2 group-hover:text-[#24292F]">
                GitHub Profile
                <ExternalLink className="w-4 h-4 opacity-0 -translate-y-0.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
              </h3>
              <p className="text-sm text-muted-foreground">
                Technical understanding & collaboration
              </p>
            </div>
          </a>
          </Reveal>
        </div>

        {/* Trust note */}
        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          These profiles demonstrate my ability to communicate with technical teams
          and understand solution architectures — not a developer portfolio.
        </p>
      </div>
    </section>
  );
};

export default LinksSection;