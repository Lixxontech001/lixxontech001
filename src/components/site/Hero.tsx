import { motion } from "framer-motion";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/about-portrait.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />

      <div className="container px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-14 lg:gap-20 items-center"
        >
          <div className="min-w-0">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2.5 mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-10"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                <span className="relative rounded-full bg-primary h-1.5 w-1.5" />
              </span>
              Available for select projects — 2025
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[3rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.02em] text-foreground"
            >
              Software that
              <br />
              <span className="italic text-primary">quietly</span> earns
              <br />
              its keep.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-10 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              I'm <span className="text-foreground font-medium">Olatoyosi Ridwan</span> — a senior
              engineer building Django &amp; React systems for founders who care about revenue,
              reliability, and the finer details.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap items-center gap-3"
            >
              <Button asChild variant="primary" size="lg">
                <a href="#contact">
                  Start a project <ArrowRight size={18} />
                </a>
              </Button>
              <Button asChild variant="ghostLine" size="lg">
                <a href="#projects">
                  See the work <ArrowUpRight size={18} />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="/Olatoyosi_Ridwan_Django_CV.pdf" download>
                  <Download size={16} /> CV
                </a>
              </Button>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-16 grid grid-cols-3 gap-8 max-w-lg border-t border-border pt-8"
            >
              {[
                { k: "Shipped", v: "25+" },
                { k: "Years", v: "4+" },
                { k: "Uptime", v: "99.9%" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.k}</dt>
                  <dd className="font-display text-3xl md:text-4xl mt-2 text-foreground">{s.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right: editorial portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border shadow-elevated bg-secondary">
              <img
                src={portrait}
                alt="Olatoyosi Ridwan — engineer at Lixxon Tech"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <div className="mono text-[10px] uppercase tracking-[0.25em] opacity-70">01 — Studio</div>
                <div className="font-display text-2xl mt-1">Lixxon Tech</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-4 -bottom-8 hidden md:block bg-card border border-border rounded-sm px-5 py-4 shadow-card"
            >
              <div className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Now</div>
              <div className="font-display text-lg text-foreground mt-0.5">Q1 · 2 slots open</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
