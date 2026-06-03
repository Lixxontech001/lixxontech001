import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TradeSphere — Multi-Vendor Marketplace",
    desc: "A complete marketplace platform where multiple vendors can list products, manage inventory, and receive payouts. Built with Django, Stripe Connect, and React.",
    tech: ["Django", "DRF", "Postgres", "Stripe Connect", "React", "Tailwind"],
    img: "https://placehold.co/1200x750/0A192F/FFFFFF?text=TradeSphere+Marketplace",
    demo: "https://www.etsy.com",
    github: "https://github.com/lixxontech001",
  },
  {
    title: "PostFlow — AI-Powered Content Scheduler",
    desc: "A SaaS tool that lets users schedule social media posts with AI-generated captions and image suggestions. Backend powered by Django, Celery, and OpenAI.",
    tech: ["Django", "Celery", "Redis", "OpenAI", "React", "Material UI"],
    img: "https://placehold.co/1200x750/0A192F/FFFFFF?text=PostFlow+AI+Scheduler",
    demo: "https://buffer.com",
    github: "https://github.com/lixxontech001",
  },
  {
    title: "MediBoard — Hospital Management Suite",
    desc: "An end-to-end platform for patient records, appointment booking, staff scheduling, and real-time bed availability. Built for a 200-bed hospital with role-based access.",
    tech: ["Django", "PostgreSQL", "Channels", "React", "Chart.js"],
    img: "https://placehold.co/1200x750/0A192F/FFFFFF?text=MediBoard+Hospital+System",
    demo: "https://www.epic.com",
    github: "https://github.com/lixxontech001",
  },
  {
    title: "EstatePro — Real Estate CRM & Portal",
    desc: "A property listing website with an integrated CRM for agents. Features include advanced search, mortgage calculator, and automated lead assignment.",
    tech: ["Django", "DRF", "Next.js", "Supabase", "Tailwind", "Vercel"],
    img: "https://placehold.co/1200x750/0A192F/FFFFFF?text=EstatePro+Real+Estate+CRM",
    demo: "https://www.zillow.com",
    github: "https://github.com/lixxontech001",
  },
  {
    title: "FleetGo — Logistics Mobile App",
    desc: "Cross-platform mobile app for fleet drivers with real-time route optimization, fuel tracking, and a Django-powered dispatcher dashboard.",
    tech: ["Django", "DRF", "React Native", "PostGIS", "WebSockets"],
    img: "https://placehold.co/1200x750/0A192F/FFFFFF?text=FleetGo+Logistics+App",
    demo: "https://www.onfleet.com",
    github: "https://github.com/lixxontech001",
  },
  {
    title: "LearnLoop — LMS Platform",
    desc: "A modern learning management system with course authoring, live cohorts, quizzes, and Stripe-powered subscriptions. Django backend, Next.js frontend.",
    tech: ["Django", "DRF", "Next.js", "Stripe", "Tailwind", "Redis"],
    img: "https://placehold.co/1200x750/0A192F/FFFFFF?text=LearnLoop+LMS",
    demo: "https://www.teachable.com",
    github: "https://github.com/lixxontech001",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 surface-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Selected Work</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Products that <span className="text-primary">scale</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A selection of Django-powered applications built end-to-end — from data model to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-elevated transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="mono text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-foreground/70 border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <Button asChild variant="primary" size="sm">
                    <a href={p.demo} target="_blank" rel="noreferrer noopener" aria-label={`Live demo of ${p.title}`}>
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="ghostLine" size="sm">
                    <a href={p.github} target="_blank" rel="noreferrer noopener" aria-label={`GitHub repository for ${p.title}`}>
                      <Github size={14} /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
