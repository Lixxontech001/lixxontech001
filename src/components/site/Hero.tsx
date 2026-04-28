import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs mono text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              <span className="relative rounded-full bg-primary h-2 w-2" />
            </span>
            Available for new projects · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient">Full Stack</span>
            <br />
            <span className="text-foreground">Web &</span>{" "}
            <span className="text-gradient-primary">Mobile App</span>
            <br />
            <span className="text-gradient">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            I build modern websites, mobile apps, dashboards, and digital solutions
            that help businesses grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild variant="primary" size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#contact">
                <Sparkles size={18} /> Hire Me
              </a>
            </Button>
            <Button asChild variant="ghostLine" size="lg">
              <a href="#" download>
                <Download size={18} /> Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 grid grid-cols-3 gap-4 max-w-xl mx-auto"
          >
            {[
              { k: "30+", v: "Projects shipped" },
              { k: "5★", v: "Client rating" },
              { k: "4yr+", v: "Experience" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl py-4 px-2">
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient-primary">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
