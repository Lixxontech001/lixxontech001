import { motion } from "framer-motion";
import { process } from "@/content/site";

const Process = () => {
  return (
    <section id="process" className="relative py-24 md:py-32 surface-muted">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">// How We'll Work</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            A calm, predictable <span className="text-gradient-primary">delivery process</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            No surprises, no scope creep. Just clear milestones, frequent demos, and code you own from commit one.

          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {process.map((p, i) => (
            <motion.article
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative glass rounded-2xl p-6 card-hover"
            >
              <div className="relative flex items-center justify-between mb-5">
                <span className="font-display text-3xl font-bold text-gradient-primary">{p.step}</span>
                <span className="mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                  {p.days}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
