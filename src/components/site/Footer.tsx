const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold text-xs">
              L
            </span>
            <span className="font-display font-semibold text-sm">
              Lixxon<span className="text-primary">.</span>Tech
            </span>
          </div>
          <p className="text-xs text-muted-foreground mono">
            Lixxon Tech © 2026 — Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
