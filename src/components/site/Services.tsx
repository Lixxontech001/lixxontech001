import { motion } from "framer-motion";
import { Globe, ShoppingBag, Smartphone, LayoutDashboard, Rocket, Palette, Plug } from "lucide-react";

const services = [
  { icon: Globe, title: "Business Websites", desc: "High-converting marketing sites tailored to your brand and goals." },
  { icon: ShoppingBag, title: "E-commerce Stores", desc: "Modern shops with seamless checkout, payments and analytics." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform iOS & Android apps built with React Native." },
  { icon: LayoutDashboard, title: "Admin Dashboards", desc: "Powerful internal tools and data dashboards that actually work." },
  { icon: Rocket, title: "Landing Pages", desc: "Pixel-perfect launches engineered for speed and conversions." },
  { icon: Palette, title: "UI Redesign", desc: "Refresh outdated interfaces into modern, premium experiences." },
  { icon: Plug, title: "API Integrations", desc: "Stripe, Supabase, OpenAI, custom REST/GraphQL — wired in cleanly." },
];

const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Services</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Everything you need to <span className="text-gradient-primary">launch & scale</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative glass rounded-3xl p-7 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-3xl transition-all duration-700" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <s.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mono text-xs text-muted-foreground/50 mt-6">
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
