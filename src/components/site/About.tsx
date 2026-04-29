import { motion } from "framer-motion";
import { Code2, Zap, Globe2 } from "lucide-react";
import portrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative glass rounded-3xl overflow-hidden aspect-[4/5] shadow-elevated">
              <img
                src={portrait}
                alt="Olatoyosi Ridwan, founder of Lixxon Tech"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mono text-xs text-primary mb-2">// founder</div>
                <div className="font-display text-2xl font-semibold">Olatoyosi Ridwan</div>
                <div className="text-sm text-muted-foreground">Lixxon Tech</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— About</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Building products people <span className="text-gradient-primary">actually love</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-medium">Olatoyosi Ridwan</span>,
              founder of <span className="text-foreground font-medium">Lixxon Tech</span> _ a
              developer focused on shipping scalable, user-friendly, high-performance
              digital products for ambitious teams and founders.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From sleek landing pages to complex dashboards and cross-platform mobile
              apps, every project I touch is engineered for speed, clarity, and growth.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              {[
                { icon: Code2, label: "Clean Code" },
                { icon: Zap, label: "Fast Delivery" },
                { icon: Globe2, label: "Global Clients" },
              ].map((f) => (
                <div key={f.label} className="glass rounded-2xl p-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <f.icon size={18} />
                  </div>
                  <span className="text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
