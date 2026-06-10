import { motion } from "framer-motion";
import { Database, Layers, Zap, ShieldCheck, Code2, MessageSquare } from "lucide-react";

const reasons = [
  { icon: Database, title: "Django Expertise", desc: "Deep mastery of Django ORM, DRF, Channels, and deployment. Production backends that scale to millions of requests." },
  { icon: Layers, title: "Full Stack Delivery", desc: "One engineer, entire stack. Backend, frontend, APIs, databases, infra. I own the outcome." },
  { icon: Zap, title: "Rapid Prototyping", desc: "Django's batteries included philosophy lets me ship validated MVPs in weeks, not months." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "OWASP aligned auth, audit logs, and data protection, backed by cybersecurity coursework at LAUTECH." },
  { icon: Code2, title: "Clean Maintainable Code", desc: "PEP8 + type hints + pytest + CI. Your future team will thank you for the codebase you inherit." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Frequent demos, Loom updates, honest deadlines. You'll always know exactly where the project stands." },
];

const WhyMe = () => {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">// Why Work With Me</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Engineered for trust, <span className="text-gradient-primary">built to last</span>.
          </h2>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group glass rounded-2xl p-7 card-hover relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="absolute top-4 right-5 mono text-[10px] uppercase tracking-widest text-muted-foreground/70">0{i + 1}</span>
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-110">
                  <r.icon size={20} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{r.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700" />
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyMe;
