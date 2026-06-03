import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Lixxon Tech delivered a website that exceeded our expectations. Fast, beautiful, and built to convert from day one.",
    name: "Arslan Conlan",
    role: "Founder",
  },
  {
    quote: "The mobile app he built for us is exactly what our customers needed. Smooth, premium and reliable.",
    name: "Scarlett Johansson",
    role: "Operations Lead",
  },
  {
    quote: "Clear communication, on-time delivery, and a polished final product. We'd hire him again in a heartbeat.",
    name: "Edward Jones",
    role: "CEO",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Testimonials</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Trusted by <span className="text-primary">founders & teams</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border hover:border-primary/40 transition-colors"
            >
              <Quote className="text-primary/30" size={32} strokeWidth={1.5} />
              <blockquote className="text-foreground/90 leading-relaxed text-[15px] mt-5">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground mono mt-1">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
