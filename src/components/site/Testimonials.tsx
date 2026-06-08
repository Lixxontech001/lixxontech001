import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import avatarFounder1 from "@/assets/avatars/founder-1.jpg";
import avatarDoctor1 from "@/assets/avatars/doctor-1.jpg";
import avatarCeo1 from "@/assets/avatars/ceo-1.jpg";
import avatarPm1 from "@/assets/avatars/pm-1.jpg";
import avatarCto1 from "@/assets/avatars/cto-1.jpg";
import avatarFounder2 from "@/assets/avatars/founder-2.jpg";

const testimonials = [
  {
    quote: "Lixxon_Tech delivered a Django backend that handles 5x our previous load and shipped it ahead of schedule. He's the kind of engineer you build a company around.",
    name: "Arslan Conlan",
    role: "Founder, TradeSphere",
    avatar: avatarFounder1,
  },
  {
    quote: "We hired Lixxon_Tech to rebuild our hospital management system. The result is faster, more secure, and our staff actually enjoys using it. Outstanding work.",
    name: "Dr. Amara Johnson",
    role: "Operations Director, MediBoard",
    avatar: avatarDoctor1,
  },
  {
    quote: "Clear updates, on time delivery, and a polished final product. Easily the smoothest contractor experience we've had in 4 years of building.",
    name: "Edward Jones",
    role: "CEO, EstatePro",
    avatar: avatarCeo1,
  },
  {
    quote: "Our internal tool used to take 8 seconds per query. After his rewrite it's under 200ms. The team morale lift alone was worth the contract.",
    name: "Mei Tanaka",
    role: "Product Lead, LoopDesk",
    avatar: avatarPm1,
  },
  {
    quote: "He thinks like a founder. Pushed back on scope twice and saved us months of wasted work. We extended his contract by another quarter.",
    name: "Marcus Bello",
    role: "CTO, Finova",
    avatar: avatarCto1,
  },
  {
    quote: "Senior level engineering at a freelance price point. Code is clean, documented, tested. I'd hire him again tomorrow.",
    name: "Sofia Marquez",
    role: "Founder, LearnLoop",
    avatar: avatarFounder2,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 surface-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14"
        >
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">// Client Stories</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Trusted by <span className="text-gradient-primary">founders & teams</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-7 card-hover relative overflow-hidden"
            >
              <Quote className="text-primary/30" size={30} strokeWidth={1.5} />
              <div className="flex gap-0.5 mt-3">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={13} className="fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed text-[14.5px] mt-4">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30"
                />
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
