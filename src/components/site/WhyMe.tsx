import { motion } from "framer-motion";
import { Database, Layers, Zap, ShieldCheck, Code2, MessageSquare } from "lucide-react";

const reasons = [
  { icon: Database, title: "Django Expertise", desc: "Deep knowledge of Django ORM, DRF, Channels, and deployment. I build production-ready backends that scale." },
  { icon: Layers, title: "Full-Stack Delivery", desc: "One developer, entire project. Backend, frontend, APIs, and databases — I own the full stack." },
  { icon: Zap, title: "Rapid Prototyping", desc: "Using Django's batteries-included philosophy, I deliver MVPs in weeks, not months." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Authentication, authorization, and data protection handled with industry best practices." },
  { icon: Code2, title: "Clean, Maintainable Code", desc: "I follow PEP8, write tests, and document my work so your team can pick it up." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Regular updates, clear milestones, and honest deadlines. You'll never be left in the dark." },
];

const WhyMe = () => {
  return (
    <section id="why" className="relative py-24 md:py-32 surface-muted">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Why Work With Me</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Engineered for trust, <span className="text-primary">built to last</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-white rounded-2xl p-7 border border-border hover:border-primary/40 hover:shadow-elevated transition-all duration-500"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <r.icon size={20} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
