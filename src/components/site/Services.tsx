import { motion } from "framer-motion";
import {
  LayoutGrid, Code2, ShoppingBag, BarChart3, Globe2, Wrench, Check, ArrowUpRight,
} from "lucide-react";
import { services } from "@/content/site";
import { Button } from "@/components/ui/button";

const icons = [LayoutGrid, Code2, ShoppingBag, BarChart3, Globe2, Wrench];

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-radial)" }} />
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">// What I Build</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Production grade <span className="text-gradient-primary">software</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Ten service tracks, one engineer, end to end ownership. Pick a starting point and I'll scope the rest with you on a free 30 min call.
            Not a good fit if: you need a WordPress site, have a $500 budget for a full SaaS, or expect same-day delivery. I build serious software for serious founders.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative glass rounded-2xl p-7 card-hover overflow-hidden flex flex-col"
              >
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex items-start justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">0{i + 1}</span>
                </div>

                <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2.5">{s.desc}</p>

                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13px] text-foreground/80">
                      <span className="h-4 w-4 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {s.stack.map((t) => (
                    <span
                      key={t}
                      className="mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary text-foreground/70 border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <span className="mono text-[11px] text-primary">{s.starting}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs text-foreground/70 hover:text-primary transition-colors mono uppercase tracking-widest"
                  >
                    Discuss <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">Not sure what you need? Book a free 30-minute scoping call.</p>
          <Button asChild variant="primary" size="sm">
            <a href="#contact">Book a Free Call <ArrowUpRight size={14} /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
