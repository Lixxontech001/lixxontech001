import { motion } from "framer-motion";
import { Sparkles, Gauge, Smartphone, Layers, ShieldCheck, MessageSquare } from "lucide-react";

const reasons = [
  { icon: Sparkles, title: "Clean Premium UI", desc: "Interfaces that build instant trust and feel high-end on every device." },
  { icon: Gauge, title: "Fast Websites", desc: "Optimized performance that keeps visitors engaged and converting." },
  { icon: Smartphone, title: "Apps Users Love", desc: "Mobile experiences crafted for daily use, retention and delight." },
  { icon: Layers, title: "Built To Scale", desc: "Architecture that grows with your business — no rebuilds needed." },
  { icon: ShieldCheck, title: "Security Conscious", desc: "Auth, data and payments handled with industry best practices." },
  { icon: MessageSquare, title: "Reliable Communication", desc: "Clear updates, on-time delivery, and honest expectations." },
];

const WhyMe = () => {
  return (
    <section id="why" className="relative py-28 md:py-36">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Why Hire Me</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Why businesses choose <span className="text-gradient-primary">Lixxon Tech</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-3xl p-7 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <r.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
