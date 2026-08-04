import { motion } from "framer-motion";
import { Database, Layers, Zap, ShieldCheck, Code2, MessageSquare, Cpu, Search } from "lucide-react";

const reasons = [
  { icon: Database, title: "Django Depth", desc: "The ORM, DRF, Celery, Channels and migrations are where I spend most of my time. I model data first and let the API follow." },
  { icon: Layers, title: "Full Stack Delivery", desc: "One developer for the backend, the React frontend, the database and the deploy. Nothing gets lost between handoffs." },
  { icon: Cpu, title: "AI Augmented Development", desc: "I use AI coding tools heavily to move fast on boilerplate, tests and refactors. Architecture, data modelling and code review stay mine. You get the speed and still get a codebase someone thought about." },
  { icon: Zap, title: "Fast, Scoped Iteration", desc: "Small slices shipped to a staging URL every few days, so you steer the build while it is still cheap to change direction." },
  { icon: ShieldCheck, title: "Security Minded", desc: "Studying Cybersecurity at LAUTECH shapes how I handle auth, permissions, secrets and audit trails. Secure defaults, not afterthoughts." },
  { icon: Code2, title: "Readable Code", desc: "PEP8, type hints, tests on the logic that matters, and a README that lets the next developer start on day one." },
  { icon: Search, title: "Honest Scoping", desc: "If something is outside what I have done before, I tell you before we start rather than learning quietly on your budget." },
  { icon: MessageSquare, title: "Clear Communication", desc: "Written updates, short recorded walkthroughs, and deadlines I actually believe in when I give them." },
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
              <span className="absolute top-4 right-5 mono text-[10px] uppercase tracking-widest text-muted-foreground/70">{String(i + 1).padStart(2, "0")}</span>
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
