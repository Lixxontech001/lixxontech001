import { motion } from "framer-motion";
import { stats } from "@/content/site";

const Stats = () => {
  return (
    <section className="relative py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative text-center md:text-left ${i > 0 ? "md:border-l md:border-border/60 md:pl-8" : ""}`}
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-primary tracking-tight">
                {s.value}
              </div>
              <div className="mono text-[11px] uppercase tracking-widest text-muted-foreground mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
