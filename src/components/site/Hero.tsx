import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stack = [
  { name: "Django", tag: "Backend Framework" },
  { name: "Django REST", tag: "API Layer" },
  { name: "PostgreSQL", tag: "Database" },
  { name: "Celery + Redis", tag: "Async Tasks" },
  { name: "React / Next.js", tag: "Frontend" },
  { name: "Tailwind CSS", tag: "Design System" },
  { name: "Stripe", tag: "Payments" },
  { name: "Docker", tag: "Deployment" },
];

const Hero = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % stack.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 dot-pattern opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs mono text-muted-foreground mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                <span className="relative rounded-full bg-primary h-2 w-2" />
              </span>
              Available for freelance · 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
            >
              <span className="text-gradient">Django Web Developer</span><br />
              Who Ships <span className="text-gradient-primary">Fast, Scalable</span><br />
              Revenue-Driving Products
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              I help startups and businesses launch complete web applications from
              complex backends to pixel-perfect frontends using Django, React, and
              modern tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button asChild variant="primary" size="lg">
                <a href="#contact">
                  <Sparkles size={18} /> Hire Me
                </a>
              </Button>
              <Button asChild variant="ghostLine" size="lg">
                <a href="#projects">
                  View My Work <ArrowRight size={18} />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="/Olatoyosi_Ridwan_Django_CV.pdf" download>
                  <Download size={18} /> CV
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right: animated code/architecture card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass rounded-2xl overflow-hidden shadow-elevated">
              {/* terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/60">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                <span className="mono text-[11px] text-muted-foreground ml-2">views.py — Lixxon_Tech</span>
              </div>

              <pre className="mono text-[12.5px] leading-relaxed p-5 text-foreground/85 overflow-hidden">
{`from rest_framework import viewsets
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    """Production-ready Django API."""
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)`}
              </pre>

              {/* live cycling stack badge */}
              <div className="border-t border-border bg-secondary/40 px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Now deploying</div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={stack[i].name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="font-semibold text-sm">{stack[i].name}</div>
                      <div className="text-[11px] text-muted-foreground">{stack[i].tag}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex gap-1">
                  {stack.map((_, k) => (
                    <span
                      key={k}
                      className={`h-1.5 rounded-full transition-all ${
                        k === i ? "w-5 bg-primary" : "w-1.5 bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-4 -bottom-6 hidden md:block glass rounded-xl px-4 py-3"
            >
              <div className="mono text-[10px] uppercase text-muted-foreground">Uptime</div>
              <div className="font-bold text-lg">99.9%</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95 }}
              className="absolute -right-4 -top-6 hidden md:block glass rounded-xl px-4 py-3"
            >
              <div className="mono text-[10px] uppercase text-muted-foreground">Apps shipped</div>
              <div className="font-bold text-lg">25+</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
