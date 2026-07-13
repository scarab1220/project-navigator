import { Code2, Layers, Database, Server } from "lucide-react";

const technologies = [
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <linearGradient
          id="python-a"
          gradientUnits="userSpaceOnUse"
          x1="70.252"
          y1="1237.476"
          x2="170.659"
          y2="1151.089"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        >
          <stop offset="0" stopColor="#5A9FD4" />
          <stop offset="1" stopColor="#306998" />
        </linearGradient>
        <linearGradient
          id="python-b"
          gradientUnits="userSpaceOnUse"
          x1="209.474"
          y1="1098.811"
          x2="173.62"
          y2="1149.537"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        >
          <stop offset="0" stopColor="#FFD43B" />
          <stop offset="1" stopColor="#FFE873" />
        </linearGradient>
        <path
          fill="url(#python-a)"
          d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
        />
        <path
          fill="url(#python-b)"
          d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
        />
      </svg>
    ),
    category: "Backend",
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
        <path
          fill="#323330"
          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
        />
      </svg>
    ),
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#3178C6" d="M0 0h128v128H0z" />
        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
        <path
          fill="#3178C6"
          d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23.16 23.16 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
        />
      </svg>
    ),
    category: "Frontend",
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4" />
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
        </g>
      </svg>
    ),
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet" className="w-10 h-10 block" aria-hidden>
        <polygon points="64,6 118,34 118,94 64,122 10,94 10,34" fill="#83CD29" />
        <g transform="translate(0,4)">
          <text x="64" y="78" textAnchor="middle" fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" fontSize="36" fontWeight="700" fill="#ffffff">node</text>
          <text x="64" y="102" textAnchor="middle" fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" fontSize="12" fill="#ffffff">.js</text>
        </g>
      </svg>
    ),
    category: "Backend",
  },
  {
    name: "Flutter",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <g fill="#3FB6D3">
          <path d="M12.3 64.2L76.3 0h39.4L32.1 83.6z" />
          <path d="M76.3 128h39.4L81.6 93.9l34.1-34.1H76.3L42.2 93.9z" />
        </g>
        <path fill="#27AACD" d="M81.6 93.9l-20-20-19.5 19.6 19.5 19.6 20-19.2z" />
        <path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z" />
        <linearGradient id="flutter-a" gradientUnits="userSpaceOnUse" x1="59.365" y1="116.36" x2="86.825" y2="99.399">
          <stop offset="0" stopColor="#1b4e94" />
          <stop offset=".63" stopColor="#1a5497" />
          <stop offset="1" stopColor="#195a9b" />
        </linearGradient>
        <path fill="url(#flutter-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z" />
      </svg>
    ),
    category: "Mobile",
  },
  {
    name: "C++",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path
          fill="#00599C"
          d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"
        />
        <path fill="#00599C" d="M88 58h-6v-6h-4v6h-6v4h6v6h4v-6h6zM106 58h-6v-6h-4v6h-6v4h6v6h4v-6h6z" />
      </svg>
    ),
    category: "Systems",
  },
  {
    name: "PHP/Laravel",
    icon: (
      <svg viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet" className="w-10 h-10 block" aria-hidden>
        <rect x="18" y="18" width="92" height="92" rx="8" fill="#F05340" />
        <path d="M36 36h56v16H60v56H36z" fill="#fff" opacity="0.06" />
        <path d="M38 44h46v12H58v52H38z" fill="#fff" />
      </svg>
    ),
    category: "Backend",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path
          fill="#38BDF8"
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.748 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.749-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.749 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.748-12.207-8.66C55.128 71.371 47.868 64 32.004 64z"
        />
      </svg>
    ),
    category: "Frontend",
  },
  {
    name: "SQL/Databases",
    icon: <Database className="w-10 h-10 text-accent" />,
    category: "Backend",
  },
];

const categoryInfo = [
  {
    name: "Frontend",
    icon: Layers,
    description: "Modern web interfaces",
  },
  {
    name: "Backend",
    icon: Server,
    description: "Server-side development",
  },
  {
    name: "Mobile",
    icon: Code2,
    description: "Cross-platform apps",
  },
  {
    name: "Systems",
    icon: Code2,
    description: "Low-level programming",
  },
];

import { Reveal } from "./Reveal";

const DeveloperSection = () => {
  return (
    <section className="section-padding bg-background border-y-[3px] border-foreground">
      <div className="container-narrow">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block animate-fade-slide-up">
              Technical Background
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-left" style={{animationDelay: '100ms'}}>
              <span className="inline-block">Developer</span>{" "}
              <span className="relative inline-block text-gradient-gold">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-slide-up" style={{animationDelay: '200ms'}}>
              Beyond project management, I bring hands-on development experience that enables me to
              communicate effectively with engineering teams and understand technical complexities.
            </p>
          </div>
        </Reveal>

        {/* Technologies grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <Reveal key={`tech-${index}`} delay={index * 0.05}>
              <div
                className="group relative flex flex-col items-center p-4 rounded-none border-[3px] border-foreground bg-background
                transition-all duration-500 hover:-translate-y-2 hover:border-foreground hover:brutal-shadow animate-scale-in"
                style={{animationDelay: `${index * 50}ms`}}
              >
                {/* Elegant glow overlay */}
                <span className="pointer-events-none absolute inset-0 rounded-none opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="absolute -inset-px rounded-none bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-sm" />
                </span>

                <div className="mb-3 group-hover:scale-125 transition-transform duration-300 group-hover:animate-float">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {tech.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {tech.category}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Categories summary */}
        <div className="grid md:grid-cols-4 gap-4">
          {categoryInfo.map((category, index) => {
            const Icon = category.icon;
            const count = technologies.filter((t) => t.category === category.name).length;

            return (
              <Reveal key={`cat-${index}`} delay={index * 0.1}>
                <div
                  className="group relative flex items-center gap-3 p-4 rounded-none border-[3px] border-foreground bg-background
                  transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground hover:brutal-shadow hover:bg-background/80 animate-fade-slide-up"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {/* Elegant glow overlay */}
                  <span className="pointer-events-none absolute inset-0 rounded-none opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="absolute -inset-px rounded-none bg-gradient-to-r from-transparent via-accent/15 to-transparent blur-sm" />
                  </span>

                  <div className="w-10 h-10 rounded-none bg-accent/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20 group-hover:animate-float">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>

                  <div>
                    <p className="font-medium text-foreground">{category.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {count} {count === 1 ? "technology" : "technologies"}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Developer note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-primary/5 rounded-none border border-primary/10">
            <Code2 className="w-6 h-6 text-accent" />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Technical PM Advantage</p>
              <p className="text-xs text-muted-foreground">
                Hands-on coding experience means better sprint planning, accurate estimations, and effective
                developer communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;