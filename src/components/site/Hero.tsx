import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

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

          <div className="max-w-lg space-y-10">

            <motion.p
              variants={item}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              I'm <span className="text-foreground">Olatoyosi Ridwan</span> — a Developer
              building Django &amp; React infrastructure for founders and product teams who care
              about revenue, reliability, and the finer details.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 font-display font-medium text-[15px] text-foreground"
              >
                View the work
                <span className="relative block h-px w-10 bg-primary transition-all duration-500 group-hover:w-16" />
                <ArrowRight size={16} className="text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500" />
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Start a project →
              </a>
              <a
                href="/Olatoyosi_Ridwan_Django_CV.pdf"
                download
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download size={14} /> CV
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md aspect-square"
          >
            <div className="absolute inset-0 border border-primary/20 rotate-45 scale-[0.78]" />
            <div className="absolute inset-0 border border-primary/10 rotate-12 scale-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-primary/20 blur-[100px] rounded-full" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-between items-start">
                <div className="mono text-[10px] uppercase tracking-[0.28em] text-primary/70">
                  01 / System
                </div>
                <div className="mono text-[10px] text-muted-foreground">v4.2</div>
              </div>

              <div className="text-center space-y-2">
                <div className="font-display text-5xl md:text-6xl font-medium text-foreground tracking-tight">
                  Lixxon
                </div>
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Engineering Studio
                </div>
              </div>

              <div className="mono text-[10px] text-primary/50 space-y-1">
                <p>LAT: 6.5244° N</p>
                <p>LNG: 3.3792° E</p>
                <p className="text-primary/80">SYS_STATUS: OPERATIONAL</p>
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
