import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lixxon Tech delivered a website that exceeded our expectations. Fast, beautiful, and built to convert from day one.",
    name: "Future Client",
    role: "Founder, SaaS Startup",
  },
  {
    quote:
      "The mobile app he built for us is exactly what our customers needed. Smooth, premium and reliable.",
    name: "Future Client",
    role: "Operations Lead, eCommerce",
  },
  {
    quote:
      "Clear communication, on-time delivery, and a polished final product. We'd hire him again in a heartbeat.",
    name: "Future Client",
    role: "CEO, Agency",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-28 md:py-36">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Testimonials</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Trusted by <span className="text-gradient-primary">ambitious teams</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass rounded-3xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <Quote className="text-primary/30 mb-4" size={36} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed text-base">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="font-display font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground mono mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
