import { techStack } from "@/content/site";

const Marquee = () => {
  const items = [...techStack, ...techStack];
  return (
    <section
      aria-label="Tech stack"
      className="relative py-10 border-y border-border surface-muted overflow-hidden"
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className="mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary mr-3">◆</span>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
