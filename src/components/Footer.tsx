import { Linkedin, Github, Link } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-foreground py-10 px-6 border-t-[3px] border-foreground">

      <div className="container-narrow relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-background/70 uppercase tracking-wider font-semibold">
            © {currentYear} Oscar Noe Abarca Navas. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/oscar-abarca-a1ba4a88/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center p-2 border-[2px] border-background bg-foreground text-background transition-all duration-150 hover:bg-accent hover:text-foreground hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="relative w-5 h-5" />
            </a>

            <a
              href="https://github.com/scarab1220"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center p-2 border-[2px] border-background bg-foreground text-background transition-all duration-150 hover:bg-primary hover:text-foreground hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github className="relative w-5 h-5" />
            </a>

            <a
              href="https://lanceofgod.carrd.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center p-2 border-[2px] border-background bg-foreground text-background transition-all duration-150 hover:bg-accent hover:text-foreground hover:-translate-y-0.5"
              aria-label="Carrd"
            >
              <Link className="relative w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-background/50 uppercase tracking-widest">
          Built with React + Vite • Designed for clarity and outcomes
        </p>
      </div>
    </footer>
  );
};

export default Footer;