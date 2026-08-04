import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Sparkles } from "lucide-react";
import portrait from "@/assets/about-portrait.jpg";

const timeline = [
  { year: "2025", title: "Founding Lixxon_Tech", desc: "Productized engineering for startups: SaaS, marketplaces, and internal tools shipped end to end." },
  { year: "2025", title: "Lead Engineer · Fintech & SaaS", desc: "Led builds for a neobank admin console, a legal research platform, and a multi vendor marketplace." },
  { year: "2024", title: "Full Stack Engineer", desc: "Shipped MediBoard (hospital suite), EstatePro CRM and FleetGo logistics platform across 3 industries." },
  { year: "2025", title: "BSc Cybersecurity · LAUTECH", desc: "Pursuing a degree in Cybersecurity, sharpening the security mindset I bring to every system." },
];


const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 surface-muted overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-border shadow-elevated shimmer-border">
              <img
                src={portrait}
                alt="Olatoyosi Ridwan, founder of Lixxon Tech"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-5 -right-5 glass-strong rounded-xl px-5 py-3 hidden md:block"
            >
              <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Based in</div>
              <div className="font-semibold">Nigeria · Remote worldwide</div>
            </motion.div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="glass rounded-xl p-3 flex items-center gap-2.5">
                <MapPin size={16} className="text-primary" />
                <span className="text-xs">Remote · Global</span>
              </div>
              <div className="glass rounded-xl p-3 flex items-center gap-2.5">
                <GraduationCap size={16} className="text-primary" />
                <span className="text-xs">LAUTECH · Cybersecurity</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">// About Me</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              A developer who tells you <span className="text-gradient-primary">how it actually works</span>.
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-medium">Olatoyosi Ridwan</span>, a Django and React
              developer working under the name <span className="text-foreground font-medium">Lixxon_Tech</span>,
              and a B.Tech Cybersecurity student at LAUTECH. I build full stack web applications: the data model,
              the API, the background jobs, the interface, and the deploy.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The work in my portfolio is self directed and freelance. These are real, working systems I designed
              and wrote, not enterprise products with millions of users, and I would rather say that plainly than
              inflate it. What they do show is how I think: clean schemas, predictable APIs, permissions modelled
              properly, and interfaces that are pleasant to actually use.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I use AI coding tools heavily and I am open about it. They accelerate boilerplate, tests and refactors.
              Every architectural decision, data model and security boundary is still mine, and I review every line
              that ships. That combination is why I can move quickly without leaving you a codebase nobody understands.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My Cybersecurity coursework shows up in how I handle authentication, role based access, secrets and
              audit logging. If you want to see the reasoning behind any of it, ask and I will walk you through the code.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { k: "Focus", v: "Django" },
                { k: "Frontend", v: "React" },
                { k: "Studying", v: "LAUTECH" },
                { k: "Based", v: "Nigeria" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-xl p-4 text-center">
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</div>
                  <div className="font-display text-xl md:text-2xl font-bold mt-1 text-gradient-primary">{s.v}</div>
                </div>
              ))}
            </div>



             {/* Timeline */}
            {/* <div className="mt-14">
              <div className="mono text-xs text-primary mb-6 tracking-widest uppercase flex items-center gap-2">
                <Briefcase size={12} /> Journey
              </div>
              <ol className="relative border-l-2 border-border space-y-7 pl-6">
                {timeline.map((t, i) => (
                  <motion.li
                    key={t.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full bg-primary shadow-glow border-2 border-background" />
                    <div className="mono text-[10px] uppercase tracking-widest text-primary mb-1">{t.year}</div>
                    <div className="font-display font-semibold">{t.title}</div>
                    <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{t.desc}</div>
                  </motion.li>
                ))}
              </ol>
            </div>  */}

            <div className="mt-10 glass rounded-2xl p-5 flex items-start gap-3">
              <Sparkles size={18} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Currently accepting 2 projects for Q1 2025.</span>{" "}
                If you've got a real problem and a real budget, I'd love to hear about it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
