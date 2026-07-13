import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-hero section-padding"
    >
      {/* Subtle background pattern */}
      <div aria-hidden className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-narrow relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-gold animate-fade-slide-up">
              Let's Work Together
            </span>

            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl animate-slide-in-left" style={{animationDelay: '100ms'}}>
              <span className="inline-block">Ready to Discuss</span>{" "}
              <span className="relative inline-block text-gradient-gold">
                Your Project?
              </span>
            </h2>

            <p className="mb-8 text-lg text-primary-foreground/80 animate-fade-slide-up" style={{animationDelay: '200ms'}}>
            Whether you need end-to-end project leadership or strategic
            consulting, I’m here to help you deliver with confidence.
          </p>

          {/* CTA (same effect as Hero "Contact Me") */}
          <a
            href="mailto:oscarnoeabarca@outlook.com"
            className="group relative mb-12 inline-flex items-center justify-center rounded-none px-6 py-3
              bg-gold text-navy font-semibold brutal-shadow animate-bounce-in
              transition-all duration-500 hover:-translate-y-1 hover:brutal-shadow"
              style={{animationDelay: '300ms'}}
          >
            {/* Shimmer sweep */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-none">
              <span className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
            </span>

            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Contact info */}
            <div className="flex flex-col items-center justify-center gap-6 text-primary-foreground/70 sm:flex-row animate-fade-slide-up" style={{animationDelay: '400ms'}}>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              <span className="text-sm">oscarnoeabarca@outlook.com</span>
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-gold/50 sm:block" />

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="text-sm">San Salvador, El Salvador</span>
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-gold/50 sm:block" />

            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gold" />
              <span className="text-sm">USA / LATAM / Remote</span>
            </div>
          </div>

            <p className="mt-8 text-sm italic text-gold-light/80 animate-fade-slide-up" style={{animationDelay: '500ms'}}>
              ¿Prefiere comunicarse en español? No hay problema — hablo ambos
              idiomas con fluidez.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Decorative glows */}
      <div
        aria-hidden
        className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-gold/5 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-navy-light/10 blur-3xl"
      />
    </section>
  );
};

export default ContactSection;