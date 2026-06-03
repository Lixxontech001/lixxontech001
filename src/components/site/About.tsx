import { motion } from "framer-motion";
import portrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 surface-muted">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-border shadow-elevated">
              <img
                src={portrait}
                alt="Olatoyosi Ridwan, founder of Lixxon Tech"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white border border-border rounded-xl px-5 py-3 shadow-card hidden md:block">
              <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Based in</div>
              <div className="font-semibold">Nigeria · Remote</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— About Me</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Engineering systems that are <span className="text-primary">secure & scalable</span>.
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-medium">Olatoyosi Ridwan</span>, the
              developer behind <span className="text-foreground font-medium">Lixxon.Tech</span>.
              I specialize in building ambitious Django web applications for startups and
              growing businesses.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Currently pursuing a degree in Cybersecurity at LAUTECH, I combine academic
              knowledge with real-world engineering to deliver systems that are secure,
              scalable, and a joy to use. When I'm not coding, I'm probably contributing to
              open-source or experimenting with new AI tools. I'm open to freelance projects —
              let's talk about yours.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "Years", v: "4+" },
                { k: "Projects", v: "25+" },
                { k: "Stack", v: "Django" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</dt>
                  <dd className="font-display text-3xl font-bold mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
