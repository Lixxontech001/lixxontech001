import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-10 surface-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-display font-bold text-xs">
              L
            </span>
            <span className="font-display font-semibold text-sm tracking-tight">
              Lixxon<span className="text-primary">_</span>Tech
            </span>
          </div>
          <p className="text-xs text-muted-foreground mono text-center">
            Lixxon_Tech © 2026 — Crafted with Django & Precision.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs mono text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowUp size={14} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
