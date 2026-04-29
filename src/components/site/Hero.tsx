import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, ShieldCheck, Zap, Smartphone, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/about-portrait.jpg";

const trustBadges = [
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: ShieldCheck, label: "Secure Build" },
  { icon: TrendingUp, label: "Growth Focused" },
];

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
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
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
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-gradient">Full Stack Web &</span>{" "}
              <span className="text-gradient-primary">Mobile App Developer</span>{" "}
              <span className="text-gradient">Who Builds Fast, Scalable & Revenue-Focused Digital Products</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I help businesses, startups, and brands grow through modern websites,
              mobile apps, dashboards, eCommerce platforms, and custom digital systems
              built for performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Button asChild variant="primary" size="lg">
                <a href="#contact">
                  <Sparkles size={18} /> Hire Me
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-1" size={18} />
                </a>
              </Button>
              <Button asChild variant="ghostLine" size="lg">
                <a href="/Olatoyosi_Ridwan_Premium_C.pdf" download="Olatoyosi_Ridwan_Premium_C.pdf">
                  <Download size={18} /> Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-3"
            >
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <b.icon size={13} />
                  </span>
                  <span className="font-medium text-foreground/80">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative glass-strong rounded-[2rem] overflow-hidden aspect-[4/5] shadow-elevated">
              <img
                src={portrait}
                alt="Olatoyosi Ridwan, Lixxon Tech founder"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mono text-xs text-primary mb-1">// founder</div>
                <div className="font-display text-xl font-semibold">Olatoyosi Ridwan</div>
                <div className="text-xs text-muted-foreground">Lixxon Tech</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 shadow-card">
              <div className="text-xs text-muted-foreground mono">Currently</div>
              <div className="text-sm font-semibold text-primary">Open to clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
