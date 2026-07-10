import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full border-b border-border overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 grid-pattern opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-radial" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] min-h-screen pt-24"
      >
        {/* LEFT — content */}
        <div className="flex flex-col justify-center gap-12 px-6 md:px-12 lg:px-20 py-14 lg:py-20 lg:border-r border-border">
          <div className="space-y-8">
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                <span className="relative rounded-full bg-primary h-1.5 w-1.5" />
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.28em] text-primary">
                Django Developer available for - 2026
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-medium leading-[0.92] tracking-[-0.035em] text-foreground"
            >
              Architecting
              <br />
              <span className="text-muted-foreground">resilient</span> Django systems.
            </motion.h1>
          </div>

          <div className="max-w-xl space-y-10">
            <motion.p
              variants={item}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              I'm <span className="text-foreground">Olatoyosi Ridwan</span> — a Developer
              building Django &amp; React infrastructure for founders and product teams who care
              about revenue, reliability, and the finer details.
            </motion.p>

            {/* CTAs — actual buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-md bg-primary px-5 py-3 font-display text-sm font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:bg-primary-glow hover:-translate-y-0.5 hover:shadow-elevated"
              >
                View the work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-md border border-border bg-card px-5 py-3 font-display text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-secondary hover:-translate-y-0.5"
              >
                <Mail size={15} className="text-primary" />
                Start a project
              </a>
              <a
                href="/Olatoyosi_Ridwan_Django_CV.pdf"
                download
                className="group inline-flex items-center gap-2.5 rounded-md border border-border/70 px-5 py-3 font-display text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-primary/40 hover:-translate-y-0.5"
              >
                <Download size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                Download CV
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {[
                { k: "Shipped", v: "10+" },
                { k: "Years", v: "4+" },
                { k: "Uptime", v: "99.9%" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {s.k}
                  </dt>
                  <dd className="font-display text-3xl md:text-4xl mt-2 text-foreground">{s.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>

        {/* RIGHT — structural visual */}
        <div className="relative bg-card border-t lg:border-t-0 border-border overflow-hidden flex items-center justify-center p-8 md:p-12">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(hsl(199 89% 60% / 0.12) 0.6px, transparent 0.6px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* animated scan line */}
          <motion.div
            aria-hidden
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md aspect-square"
          >
            {/* rotating rings */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-primary/20 rotate-45 scale-[0.78]"
            />
            <motion.div
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-primary/10 rotate-12 scale-90"
            />
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-primary/15 rounded-full"
            />

            {/* pulsing glow */}
            <motion.div
              aria-hidden
              animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-40 h-40 bg-primary/25 blur-[100px] rounded-full" />
            </motion.div>

            {/* orbiting dots */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <span className="absolute top-1/2 left-0 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
              <span className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary/60" />
            </motion.div>
            <motion.div
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4"
            >
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary/70" />
            </motion.div>

            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-between items-start">
                <div className="mono text-[10px] uppercase tracking-[0.28em] text-primary/70">
                  01 / System
                </div>
                <motion.div
                  className="mono text-[10px] text-muted-foreground"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                >
                  v4.2
                </motion.div>
              </div>

              <motion.div
                className="text-center space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="font-display text-5xl md:text-6xl font-medium text-foreground tracking-tight">
                  Lixxon
                </div>
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Engineering Studio
                </div>
              </motion.div>

              <div className="mono text-[10px] text-primary/60 space-y-1">
                <p>LAT: 6.5244° N</p>
                <p>LNG: 3.3792° E</p>
                <p className="flex items-center gap-1.5 text-primary/90">
                  <motion.span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
                    animate={{ opacity: [1, 0.25, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  />
                  SYS_STATUS: OPERATIONAL
                </p>
              </div>
            </div>
          </motion.div>

          {/* corner ticks */}
          <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-primary/40" />
          <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-primary/40" />
          <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-primary/40" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-primary/40" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
