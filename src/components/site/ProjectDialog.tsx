import { motion } from "framer-motion";
import { ExternalLink, Github, Check, Calendar, Briefcase, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Project } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ProjectDialog = ({ project, open, onOpenChange }: Props) => {
  const reduced = useReducedMotion();

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto sm:rounded-2xl border-border">
        <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
          <motion.img
            initial={{ scale: reduced ? 1 : 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: reduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            src={project.img}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8">
          <DialogHeader className="text-left space-y-2">
            <div className="flex items-center gap-2 mono text-[10.5px] uppercase tracking-widest text-muted-foreground">
              <Calendar size={12} /> {project.year}
              <span className="opacity-40">·</span>
              <Briefcase size={12} /> {project.role}
            </div>
            <DialogTitle className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              {project.tagline}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            <p className="text-sm leading-relaxed text-foreground/80">{project.longDescription}</p>
          </div>

          <div className="mt-7">
            <div className="mono text-[10.5px] uppercase tracking-widest text-primary mb-3">// Highlights</div>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {project.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: reduced ? 0 : -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: reduced ? 0 : 0.35, delay: reduced ? 0 : i * 0.05 }}
                  className="flex items-start gap-2.5 text-sm"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-foreground/80">{h}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <div className="mono text-[10.5px] uppercase tracking-widest text-primary mb-3">// Tech Stack</div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="mono text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-foreground/70 border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.isDemoPlaceholder && (
            <div className="mt-7 flex items-start gap-2.5 rounded-xl border border-border bg-secondary/60 p-3.5 text-xs text-muted-foreground">
              <Info size={14} className="mt-0.5 text-primary shrink-0" />
              <span>
                Live demo is a placeholder that looks just like the project. The deployed client build is private. Request a walkthrough via the contact form.
              </span>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
            <Button asChild variant="primary" size="sm" aria-disabled={project.isDemoPlaceholder}>
              <a
                href={project.demo}
                target={project.isDemoPlaceholder ? undefined : "_blank"}
                rel="noreferrer noopener"
                onClick={(e) => {
                  if (project.isDemoPlaceholder) e.preventDefault();
                }}
                aria-label={`Live demo of ${project.title}`}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </Button>
            <Button asChild variant="ghostLine" size="sm">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github size={14} /> GitHub
              </a>
            </Button>
            <Button asChild variant="glass" size="sm" className="ml-auto">
              <a href="#contact" onClick={() => onOpenChange(false)}>
                Discuss a similar project
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
