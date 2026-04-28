import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ecommerce from "@/assets/project-ecommerce.jpg";
import hospital from "@/assets/project-hospital.jpg";
import food from "@/assets/project-food.jpg";

const projects = [
  {
    title: "E-commerce Platform",
    tag: "Web · Stripe · Next.js",
    desc: "A full-featured online store with cart, checkout, admin panel and analytics.",
    img: ecommerce,
  },
  {
    title: "Hospital Management Dashboard",
    tag: "Dashboard · React · Charts",
    desc: "Patient management, appointments and real-time analytics for healthcare teams.",
    img: hospital,
  },
  {
    title: "Food Delivery Mobile App",
    tag: "Mobile · React Native",
    desc: "Cross-platform ordering app with live tracking, payments and reviews.",
    img: food,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Selected Work</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Projects that <span className="text-gradient-primary">ship & scale</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A glimpse of recent products built end-to-end — from architecture to launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass-strong flex items-center justify-center text-foreground opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-6">
                <div className="mono text-xs text-primary mb-2">{p.tag}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
