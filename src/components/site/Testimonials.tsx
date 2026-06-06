import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Lixxon_Tech delivered a Django backend that handles 5× our previous load and shipped it two weeks early. He's the kind of engineer you build a company around.",
    name: "Arslan Conlan",
    role: "Founder, TradeSphere",
    initial: "AC",
  },
  {
    quote: "We hired Lixxon_Tech to rebuild our hospital management system. The result is faster, more secure, and our staff actually enjoys using it. Outstanding work.",
    name: "Dr. Scarlett Johansson",
    role: "Operations Director, MediBoard",
    initial: "SJ",
  },
  {
    quote: "Clear weekly updates, on-time delivery, and a polished final product. Easily the smoothest contractor experience we've had in 4 years.",
    name: "Edward Jones",
    role: "CEO, EstatePro",
    initial: "EJ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 surface-muted">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Client Stories</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Trusted by <span className="text-gradient-primary">founders & teams</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 card-hover relative overflow-hidden"
            >
              <Quote className="text-primary/30" size={32} strokeWidth={1.5} />
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed text-[15px] mt-4">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-border flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-display font-bold text-sm flex items-center justify-center">
                  {t.initial}
                </span>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground mono mt-0.5">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
