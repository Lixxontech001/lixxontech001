import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/content/site";
import ProjectDialog from "./ProjectDialog";
import { useReducedMotion, useRevealVariants } from "@/hooks/use-reduced-motion";

const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const reveal = useRevealVariants(30);

  const openProject = (p: Project) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 surface-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.5 }}
              className="mono text-xs text-primary mb-4 tracking-widest uppercase"
            >
              — Selected Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.7 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            >
              Products that <span className="text-gradient-primary">scale</span>.
            </motion.h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Real Django-powered applications shipped end-to-end — from data model to deployment. Tap any card for the full case study.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={reveal}
              className="group relative glass rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              <button
                type="button"
                onClick={() => openProject(p)}
                className="relative aspect-[16/10] overflow-hidden bg-secondary text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`Open case study for ${p.title}`}
              >
                <motion.img
                  src={p.img}
                  alt={`${p.title} preview`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={reduced ? undefined : { scale: 1.06 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 mono text-[10px] uppercase tracking-widest border border-border">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  {p.year}
                </div>
                <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-2.5 py-1 mono text-[10px] uppercase tracking-widest font-semibold">
                  Case study <ArrowUpRight size={11} />
                </div>
                {p.metrics && (
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                    {p.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex-1 rounded-lg bg-background/70 backdrop-blur px-2.5 py-1.5 border border-border"
                      >
                        <div className="font-display text-sm font-bold text-foreground leading-none">{m.value}</div>
                        <div className="mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </button>

              <div className="p-7 flex-1 flex flex-col">
                <div className="mono text-[10.5px] uppercase tracking-widest text-muted-foreground mb-2">
                  {p.role}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-2">
                  <button
                    type="button"
                    onClick={() => openProject(p)}
                    className="text-left hover:text-primary transition-colors focus:outline-none focus-visible:underline"
                  >
                    {p.title}
                  </button>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="mono text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-foreground/70 border border-border"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 5 && (
                    <span className="mono text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded-full text-muted-foreground">
                      +{p.tech.length - 5}
                    </span>
                  )}
                </div>
                <div className="mt-6 flex gap-2 pt-5 border-t border-border">
                  <Button variant="primary" size="sm" onClick={() => openProject(p)}>
                    Case Study <ArrowUpRight size={14} />
                  </Button>
                  <Button asChild variant="glass" size="sm">
                    <a
                      href={p.demo}
                      target={p.isDemoPlaceholder ? undefined : "_blank"}
                      rel="noreferrer noopener"
                      onClick={(e) => {
                        if (p.isDemoPlaceholder) {
                          e.preventDefault();
                          openProject(p);
                        }
                      }}
                      aria-label={`Live demo of ${p.title}`}
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  </Button>
                  <Button asChild variant="ghostLine" size="sm" className="ml-auto">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`GitHub repository for ${p.title}`}
                    >
                      <Github size={14} />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectDialog project={active} open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default Projects;
