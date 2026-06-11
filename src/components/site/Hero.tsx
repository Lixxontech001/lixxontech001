import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stack = [
  { name: "Django", tag: "Backend Framework" },
  { name: "Django REST", tag: "API Layer" },
  { name: "PostgreSQL", tag: "Database" },
  { name: "Celery + Redis", tag: "Async Tasks" },
  { name: "React / Next.js", tag: "Frontend" },
  { name: "Tailwind CSS", tag: "Design System" },
  { name: "Stripe", tag: "Payments" },
  { name: "Docker / AWS", tag: "Deployment" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const Hero = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % stack.length), 1700);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-x-hidden">
      <div className="aurora" aria-hidden />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container px-4 sm:px-6">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center"
        >
          <div className="min-w-0">

            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs mono text-muted-foreground mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                <span className="relative rounded-full bg-primary h-2 w-2" />
              </span>
              Available for freelance · 2025
              <span className="opacity-40">·</span>
              {/* <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={10} className="fill-primary text-primary" />
                ))}
              </span> */}
              <span>100% job success</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] font-bold leading-[0.98] tracking-[-0.035em]"
            >
              <span className="text-gradient">I design &amp; ship</span><br />
              <span className="text-gradient-primary animate-gradient">Django products</span><br />
              <span className="text-gradient">that drive revenue.</span>
            </motion.h1>


            <motion.p
              variants={item}
              className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              I'm <span className="text-foreground font-medium">Olatoyosi Ridwan</span>. I build SaaS,
              marketplaces, dashboards and APIs end to end with Django, React and modern tooling. Honest scopes,
              twice weekly demos, code you actually own.
            </motion.p>

            <motion.div
              variants={item}
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

            <motion.dl
              variants={item}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-6"
            >
              {[
                { k: "Projects", v: "25+" },
                { k: "Years", v: "4+" },
                { k: "Uptime", v: "99.9%" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</dt>
                  <dd className="font-display text-2xl md:text-3xl font-bold mt-1 text-gradient">{s.v}</dd>
                </div>
              ))}
            </motion.dl>

          </div>

          {/* Right: animated code/architecture card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full min-w-0 max-w-full"

          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative glass-strong rounded-2xl overflow-hidden shimmer-border w-full max-w-full"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/60">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                <span className="mono text-[10px] sm:text-[11px] text-muted-foreground ml-2 truncate">views.py · Lixxon_Tech</span>
              </div>

              <pre className="mono text-[10.5px] sm:text-[12.5px] leading-relaxed p-4 sm:p-5 text-foreground/85 overflow-x-auto whitespace-pre">

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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-4 -bottom-6 hidden md:block glass rounded-xl px-4 py-3"
            >
              <div className="mono text-[10px] uppercase text-muted-foreground">Uptime</div>
              <div className="font-bold text-lg">99.9%</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15 }}
              className="absolute -right-4 -top-6 hidden md:block glass rounded-xl px-4 py-3"
            >
              <div className="mono text-[10px] uppercase text-muted-foreground">Apps shipped</div>
              <div className="font-bold text-lg">25+</div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
