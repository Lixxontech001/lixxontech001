// ============================================================
// Lixxon_Tech — Centralized editable site content
// ============================================================

import tradesphereImg from "@/assets/projects/tradesphere.jpg";
import postflowImg from "@/assets/projects/postflow.jpg";
import mediboardImg from "@/assets/projects/mediboard.jpg";
import estateproImg from "@/assets/projects/estatepro.jpg";
import fleetgoImg from "@/assets/projects/fleetgo.jpg";
import learnloopImg from "@/assets/projects/learnloop.jpg";

export const site = {
  brand: "Lixxon_Tech",
  owner: "Olatoyosi Ridwan",
  role: "Senior Django Full-Stack Engineer",
  tagline: "Production-grade Django + React systems for ambitious teams.",
  email: "lixxontech@gmail.com",
  whatsapp: "https://wa.me/2349040057383?text=Hi%20Lixxon%20Tech%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  github: "https://github.com/lixxontech001",
  linkedin: "https://www.linkedin.com/",
  cv: "/Olatoyosi_Ridwan_Django_CV.pdf",
  location: "Nigeria · Remote worldwide",
  availability: "Available for freelance · 2026",
} as const;

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tech: string[];
  role: string;
  year: string;
  img: string;
  demo: string;
  github: string;
  metrics?: { label: string; value: string }[];
  isDemoPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "tradesphere",
    title: "TradeSphere — Multi-Vendor Marketplace",
    tagline: "Stripe-Connect powered marketplace with automated vendor payouts.",
    description:
      "A complete marketplace where vendors list products, manage inventory, and receive automated payouts.",
    longDescription:
      "A production-grade marketplace platform built end-to-end. Vendors onboard via Stripe Connect, manage inventory through a custom dashboard, and receive automated weekly payouts. The buyer experience features faceted search, persistent carts, real-time order tracking, and a review system with image uploads.",
    highlights: [
      "Stripe Connect payouts with multi-currency support",
      "Faceted product search powered by PostgreSQL trigrams",
      "Vendor analytics dashboard with sales & inventory KPIs",
      "Order lifecycle automation via Celery & webhooks",
      "Mobile-first responsive UI with 98 Lighthouse score",
    ],
    tech: ["Django", "DRF", "PostgreSQL", "Stripe Connect", "Celery", "React", "Tailwind"],
    role: "Full-Stack Developer",
    year: "2025",
    img: tradesphereImg,
    demo: "https://tradesphere.lixxontech.dev",
    github: "https://github.com/lixxontech001",
    metrics: [
      { label: "Vendors", value: "1.2K+" },
      { label: "GMV/mo", value: "$480K" },
      { label: "Lighthouse", value: "98" },
    ],
    isDemoPlaceholder: true,
  },
  {
    slug: "postflow",
    title: "PostFlow — AI Content Scheduler",
    tagline: "AI-generated captions, smart scheduling, multi-channel posting.",
    description:
      "A SaaS tool that schedules social posts with AI-generated captions and image suggestions.",
    longDescription:
      "PostFlow lets marketers schedule months of content in minutes. The Django backend orchestrates OpenAI for caption generation, Replicate for image suggestions, and per-channel publishing via official APIs. Background workers handle scheduling, retries, and analytics ingestion.",
    highlights: [
      "GPT-powered captions tuned per brand voice",
      "Multi-channel publishing: X, LinkedIn, Instagram",
      "Celery-based scheduler with retry & DLQ",
      "Real-time analytics dashboard",
      "Team workspaces with role-based permissions",
    ],
    tech: ["Django", "Celery", "Redis", "OpenAI", "React", "Material UI"],
    role: "Full-Stack Developer",
    year: "2025",
    img: postflowImg,
    demo: "https://postflow.lixxontech.dev",
    github: "https://github.com/lixxontech001",
    metrics: [
      { label: "Posts/mo", value: "210K" },
      { label: "Teams", value: "340" },
      { label: "Retention", value: "94%" },
    ],
    isDemoPlaceholder: true,
  },
  {
    slug: "mediboard",
    title: "MediBoard — Hospital Management Suite",
    tagline: "Patient records, scheduling and real-time bed availability.",
    description:
      "End-to-end platform for patient records, appointment booking, staff scheduling, and bed availability.",
    longDescription:
      "Deployed in a 200-bed teaching hospital. Role-based access for doctors, nurses, admins, and patients. Real-time updates via Django Channels keep bed availability and triage queues in sync across departments. HIPAA-aligned audit logging on every PHI access.",
    highlights: [
      "Role-based access for 6 staff personas",
      "Real-time bed & triage updates via WebSockets",
      "HIPAA-aligned audit logging on PHI access",
      "Appointment booking with SMS reminders",
      "Custom analytics with Chart.js",
    ],
    tech: ["Django", "PostgreSQL", "Channels", "React", "Chart.js"],
    role: "Lead Developer",
    year: "2024",
    img: mediboardImg,
    demo: "https://mediboard.lixxontech.dev",
    github: "https://github.com/lixxontech001",
    metrics: [
      { label: "Beds tracked", value: "200" },
      { label: "Staff users", value: "180" },
      { label: "Uptime", value: "99.98%" },
    ],
    isDemoPlaceholder: true,
  },
  {
    slug: "estatepro",
    title: "EstatePro — Real Estate CRM & Portal",
    tagline: "Property listings + agent CRM with automated lead routing.",
    description:
      "Property listing portal with an integrated CRM, advanced search, and automated lead assignment.",
    longDescription:
      "A two-sided real estate platform combining a public listings portal with an internal agent CRM. Features advanced geo-search, mortgage calculator, saved-search alerts, and a round-robin lead assignment engine that has cut response times by 62%.",
    highlights: [
      "Geo-search with PostGIS spatial queries",
      "Round-robin lead routing engine",
      "Mortgage calculator + saved-search alerts",
      "Vercel-hosted Next.js frontend, Django API",
      "Supabase auth with social login",
    ],
    tech: ["Django", "DRF", "Next.js", "Supabase", "Tailwind", "Vercel"],
    role: "Full-Stack Developer",
    year: "2024",
    img: estateproImg,
    demo: "https://estatepro.lixxontech.dev",
    github: "https://github.com/lixxontech001",
    metrics: [
      { label: "Listings", value: "8.4K" },
      { label: "Lead resp.", value: "−62%" },
      { label: "Agents", value: "120" },
    ],
    isDemoPlaceholder: true,
  },
  {
    slug: "fleetgo",
    title: "FleetGo — Logistics Mobile App",
    tagline: "Real-time route optimization for fleet drivers.",
    description:
      "Cross-platform driver app with route optimization, fuel tracking, and a dispatcher dashboard.",
    longDescription:
      "A React Native driver app paired with a Django + PostGIS dispatcher dashboard. Drivers receive optimized routes computed via OSRM, log fuel and mileage, and surface live ETAs to dispatchers through a WebSocket feed.",
    highlights: [
      "OSRM-powered route optimization",
      "Live driver telemetry via WebSockets",
      "Offline-first fuel & mileage logs",
      "Dispatcher heatmaps with PostGIS",
      "Push notifications via FCM",
    ],
    tech: ["Django", "DRF", "React Native", "PostGIS", "WebSockets"],
    role: "Full-Stack Developer",
    year: "2024",
    img: fleetgoImg,
    demo: "https://fleetgo.lixxontech.dev",
    github: "https://github.com/lixxontech001",
    metrics: [
      { label: "Drivers", value: "560" },
      { label: "Fuel saved", value: "18%" },
      { label: "ETA accuracy", value: "96%" },
    ],
    isDemoPlaceholder: true,
  },
  {
    slug: "learnloop",
    title: "LearnLoop — LMS Platform",
    tagline: "Course authoring, live cohorts, Stripe subscriptions.",
    description:
      "Modern learning management system with course authoring, live cohorts, quizzes, and subscriptions.",
    longDescription:
      "A modern LMS for indie educators. Authors build courses with a block editor, run live cohorts with video integration, and monetize via Stripe subscriptions. Includes adaptive quizzes, certificates, and a Discord-style discussion forum.",
    highlights: [
      "Block-based course editor",
      "Live cohort sessions with Zoom integration",
      "Stripe-powered subscriptions & one-off sales",
      "Adaptive quizzes with auto-grading",
      "Auto-generated PDF certificates",
    ],
    tech: ["Django", "DRF", "Next.js", "Stripe", "Tailwind", "Redis"],
    role: "Full-Stack Developer",
    year: "2025",
    img: learnloopImg,
    demo: "https://learnloop.lixxontech.dev",
    github: "https://github.com/lixxontech001",
    metrics: [
      { label: "Students", value: "12K+" },
      { label: "Courses", value: "240" },
      { label: "MRR", value: "$38K" },
    ],
    isDemoPlaceholder: true,
  },
];

export type Service = {
  title: string;
  desc: string;
  features: string[];
  stack: string[];
  starting: string;
};

export const services: Service[] = [
  {
    title: "Custom Web Applications",
    desc: "Complex SaaS products, marketplaces, and internal tools engineered end-to-end with Django + React.",
    features: ["Multi-tenant architecture", "Background workers", "Stripe & subscriptions", "Role-based access"],
    stack: ["Django", "DRF", "React", "PostgreSQL"],
    starting: "from $2,500",
  },
  {
    title: "API Development & Integration",
    desc: "Battle-tested REST and webhook APIs with full OpenAPI docs and seamless third-party integrations.",
    features: ["OpenAPI 3.1 docs", "OAuth2 & JWT", "Webhooks & retries", "Rate limiting"],
    stack: ["DRF", "Celery", "Redis", "Stripe", "OpenAI"],
    starting: "from $1,200",
  },
  {
    title: "eCommerce Platforms",
    desc: "Multi-vendor stores with custom checkout, order management, analytics, and automated payouts.",
    features: ["Stripe Connect payouts", "Faceted search", "Cart recovery", "Vendor dashboards"],
    stack: ["Django", "PostgreSQL", "Stripe", "Next.js"],
    starting: "from $3,500",
  },
  {
    title: "Admin Dashboards",
    desc: "Real-time, role-based dashboards with rich visualizations, exports, and audit trails.",
    features: ["WebSockets live data", "Chart.js / Recharts", "CSV / PDF exports", "Audit logging"],
    stack: ["Django Channels", "React", "Recharts", "Postgres"],
    starting: "from $1,800",
  },
  {
    title: "Landing Pages & Marketing Sites",
    desc: "High-converting, SEO-optimized marketing sites wired to a headless Django CMS or Sanity.",
    features: ["Lighthouse 95+", "JSON-LD schema", "A/B testing ready", "CMS editing"],
    stack: ["Next.js", "Tailwind", "Wagtail", "Vercel"],
    starting: "from $900",
  },
  {
    title: "System Redesign & Optimization",
    desc: "Migrate legacy systems to Django, eliminate N+1s, ship CI/CD, and unlock 10× performance gains.",
    features: ["Performance audits", "Query optimization", "Docker + CI/CD", "Test coverage"],
    stack: ["Django", "Docker", "GitHub Actions", "Sentry"],
    starting: "from $1,500",
  },
];

export const techStack = [
  "Django", "Django REST Framework", "Python", "PostgreSQL", "Redis", "Celery",
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Docker", "AWS",
  "Stripe", "OpenAI", "GraphQL", "WebSockets", "PostGIS", "Sentry",
];
