import { motion } from "framer-motion";
import { services } from "@/content/site";

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— What I Build</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Production-grade <span className="text-primary">software</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-white p-8 hover:bg-secondary/60 transition-colors duration-300"
            >
              <div className="mono text-xs text-primary/60 mb-4">0{i + 1}</div>
              <h3 className="font-display text-xl font-semibold tracking-tight mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
