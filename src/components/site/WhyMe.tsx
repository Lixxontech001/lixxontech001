import { motion } from "framer-motion";
import { Gauge, Sparkles, Layers, Target, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Gauge, title: "Fast Delivery", desc: "Quick turnaround without cutting corners on quality." },
  { icon: Sparkles, title: "Clean UI/UX", desc: "Modern, intuitive interfaces that feel premium and effortless." },
  { icon: Layers, title: "Scalable Solutions", desc: "Architecture built to grow with your business and users." },
  { icon: Target, title: "Business-Focused Results", desc: "Code that drives revenue, retention and real outcomes." },
  { icon: ShieldCheck, title: "Security Conscious", desc: "Best practices baked in — auth, data, and payments handled right." },
];

const WhyMe = () => {
  return (
    <section id="why" className="relative py-28 md:py-36">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Why Hire Me</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Built for <span className="text-gradient-primary">serious teams</span>.
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
              className={`glass rounded-3xl p-7 hover:border-primary/30 transition-all duration-500 ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
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
