import { motion } from "framer-motion";
import { Globe2, Users, Zap, Sparkles, ShieldCheck } from "lucide-react";

const results = [
  { icon: Globe2, title: "Better Online Presence", desc: "Stand out with a polished digital identity that earns attention." },
  { icon: Users, title: "More Leads & Customers", desc: "Conversion-focused design that turns visitors into buyers." },
  { icon: Zap, title: "Faster Operations", desc: "Automated workflows that save your team hours every week." },
  { icon: Sparkles, title: "Better User Experience", desc: "Intuitive interfaces that customers genuinely enjoy using." },
  { icon: ShieldCheck, title: "Stronger Brand Trust", desc: "Premium quality that signals you're a serious player." },
];

const Results = () => {
  return (
    <section id="results" className="relative py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Results</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            What I bring to <span className="text-gradient-primary">your business</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative glass rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex items-start gap-5">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow">
                  <r.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
