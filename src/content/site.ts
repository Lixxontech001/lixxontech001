// ============================================================
// Lixxon_Tech  Centralized editable site content
// ============================================================

import tradesphereImg from "@/assets/projects/tradesphere.jpg";
import postflowImg from "@/assets/projects/postflow.jpg";
import mediboardImg from "@/assets/projects/mediboard.jpg";
import estateproImg from "@/assets/projects/estatepro.jpg";
import fleetgoImg from "@/assets/projects/fleetgo.jpg";
import learnloopImg from "@/assets/projects/learnloop.jpg";
import finovaImg from "@/assets/projects/finova.jpg";
import lumenImg from "@/assets/projects/lumen.jpg";
import harvestiqImg from "@/assets/projects/harvestiq.jpg";
import pulsehrImg from "@/assets/projects/pulsehr.jpg";

export const site = {
  brand: "Lixxon_Tech",
  owner: "Olatoyosi Ridwan",
  role: "Django + React Developer",
  tagline: "Full stack Django and React applications, architected end to end.",
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
  tag?: string;
  metrics?: { label: string; value: string }[];
  isDemoPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "tradesphere",
    title: "TradeSphere · Multi Vendor Marketplace",
    tagline: "Stripe Connect powered marketplace with automated vendor payouts.",
    description: "A self directed marketplace build where vendors list products, manage inventory, and receive automated payouts.",
    longDescription: "A full marketplace platform I designed and built end to end as a portfolio project. Vendors onboard through Stripe Connect, manage inventory in a custom dashboard, and receive scheduled payouts. The buyer side covers faceted search, persistent carts, order tracking, and reviews with image uploads. The interesting engineering here is the payout ledger and the order lifecycle state machine, both modelled to stay consistent under retries and webhook replays.",
    highlights: [
      "Stripe Connect payout flow with idempotent webhook handling",
      "Faceted product search using PostgreSQL trigram indexes",
      "Vendor dashboard with inventory and sales aggregation queries",
      "Order lifecycle state machine driven by Celery tasks",
      "Mobile first responsive UI built with React and Tailwind",
    ],
    tech: ["Django", "DRF", "PostgreSQL", "Stripe Connect", "Celery", "React", "Tailwind"],
    role: "Architect & Developer",
    year: "2025",
    img: tradesphereImg,
    demo: "https://tradesphere.com",
    github: "https://github.com/lixxontech001",
    tag: "Personal Build",
    metrics: [
      { label: "Payments", value: "Stripe Connect" },
      { label: "Async", value: "Celery + Redis" },
      { label: "Search", value: "PG Trigram" },
    ],
    isDemoPlaceholder: true,
  },
  {
    slug: "postflow",
    title: "PostFlow · Social Publishing Suite",
    tagline: "Scheduling and multi channel posting for content teams.",
    description: "A SaaS style build that schedules social posts with per channel previews and a resilient job queue.",
    longDescription: "PostFlow is a portfolio SaaS build focused on scheduling reliability. A Django backend orchestrates draft creation, per channel formatting, and publishing through provider APIs. Background workers own scheduling, exponential retries, and a dead letter queue so a failed provider call never silently drops a post. Workspaces are multi tenant with role based permissions.",
    highlights: [
      "Celery Beat scheduler with retry and dead letter queue",
      "Multi channel publishing adapters behind one interface",
      "Multi tenant workspaces with role based permissions",
      "Analytics ingestion pipeline with periodic tasks",
      "Optimistic UI with React Query cache invalidation",
    ],
    tech: ["Django", "Celery", "Redis", "React", "PostgreSQL", "Tailwind"],
    role: "Solo Developer",
    year: "2025",
    img: postflowImg,
    demo: "https://postflow.app",
    github: "https://github.com/lixxontech001",
    tag: "Personal Build",
    metrics: [
      { label: "Queue", value: "Celery + DLQ" },
      { label: "Tenancy", value: "Multi tenant" },
      { label: "Access", value: "Role based" },
    ],
    isDemoPlaceholder: true,
  },
  {
    slug: "mediboard",
    title: "MediBoard · Hospital Management Suite",
    tagline: "Patient records, scheduling, and real time bed availability.",
    description: "A portfolio build covering patient records, appointment booking, staff scheduling, and bed availability.",
    longDescription: "MediBoard is an MVP simulation of a hospital operations suite, built to practise modelling sensitive data properly. Role based access separates doctors, nurses, admins, and patients. Django Channels keeps bed availability and triage queues in sync across departments in real time. Every read and write against patient data writes an append only audit record, which is the part of this project my cybersecurity coursework shaped most directly.",
    highlights: [
      "Role based access control across six staff personas",
      "Real time bed and triage updates over WebSockets",
      "Append only audit logging on every patient data access",
      "Appointment booking with reminder notifications",
      "Field level permissions on sensitive record fields",
    ],
    tech: ["Django", "PostgreSQL", "Channels", "React", "Chart.js"],
    role: "Architect & Developer",
    year: "2025",
    img: mediboardImg,
    demo: "https://epic.com",
    github: "https://github.com/lixxontech001",
    tag: "Portfolio Project",
    metrics: [
      { label: "Realtime", value: "WebSockets" },
      { label: "Access", value: "RBAC" },
      { label: "Trail", value: "Audit logging" },
    ],
    isDemoPlaceholder: true,
  },
  {
    slug: "estatepro",
    title: "EstatePro · Real Estate CRM and Portal",
    tagline: "Property listings plus an agent CRM with automated lead routing.",
    description: "A two sided build pairing a public listings portal with an internal agent CRM.",
    longDescription: "EstatePro combines a public property portal with an internal CRM. The listings side uses PostGIS spatial queries for radius and polygon search, saved search alerts, and a mortgage calculator. The CRM side runs a round robin lead assignment engine with escalation rules. The frontend is Next.js talking to a Django REST API, which made server rendered listing pages straightforward for SEO.",
    highlights: [
      "Geo search built on PostGIS spatial queries",
      "Round robin lead routing engine with escalation rules",
      "Saved search alerts driven by scheduled tasks",
      "Next.js frontend consuming a Django REST API",
      "Social login and session hardening",
    ],
    tech: ["Django", "DRF", "Next.js", "Supabase", "Tailwind", "Vercel"],
    role: "Solo Developer",
    year: "2025",
    img: estateproImg,
    demo: "https://zillow.com",
    github: "https://github.com/lixxontech001",
    tag: "Personal Build",
    metrics: [
      { label: "Geo", value: "PostGIS" },
      { label: "Routing", value: "Lead engine" },
      { label: "Frontend", value: "Next.js SSR" },
    ],
    isDemoPlaceholder: true,
  },
  {
    slug: "fleetgo",
    title: "FleetGo · Logistics Mobile App",
    tagline: "Route optimization and live telemetry for fleet drivers.",
    description: "A cross platform driver app with route optimization, trip logging, and a dispatcher dashboard.",
    longDescription: "FleetGo pairs a React Native driver app with a Django and PostGIS dispatcher dashboard. Routes are computed with OSRM, drivers log fuel and mileage offline first with a sync queue, and live positions stream to dispatchers over WebSockets. The offline sync layer and conflict resolution were the hardest and most instructive part of this build.",
    highlights: [
      "OSRM powered route optimization",
      "Live driver telemetry streamed over WebSockets",
      "Offline first logging with a sync and conflict queue",
      "Dispatcher heatmaps built on PostGIS aggregates",
      "Push notifications through Firebase Cloud Messaging",
    ],
    tech: ["Django", "DRF", "React Native", "PostGIS", "WebSockets"],
    role: "Solo Developer",
    year: "2025",
    img: fleetgoImg,
    demo: "https://onfleet.com",
    github: "https://github.com/lixxontech001",
    tag: "Personal Build",
    metrics: [
      { label: "Routing", value: "OSRM" },
      { label: "Sync", value: "Offline first" },
      { label: "Mobile", value: "React Native" },
    ],
    isDemoPlaceholder: true,
  },
  {
    slug: "learnloop",
    title: "LearnLoop · LMS Platform",
    tagline: "Course authoring, cohorts, and subscription billing.",
    description: "A learning platform build with course authoring, cohorts, quizzes, and Stripe subscriptions.",
    longDescription: "LearnLoop is a portfolio LMS for independent educators. Authors build courses with a block editor, run cohort sessions, and monetise through Stripe subscriptions. It includes auto graded quizzes, generated PDF certificates, and a threaded discussion forum. The subscription lifecycle, including proration, dunning, and access revocation, is the part I would walk a client through first.",
    highlights: [
      "Block based course editor with ordered content models",
      "Stripe subscriptions with proration and dunning handling",
      "Auto graded quizzes with attempt tracking",
      "Generated PDF certificates on completion",
      "Threaded discussion forum with moderation roles",
    ],
    tech: ["Django", "DRF", "Next.js", "Stripe", "Tailwind", "Redis"],
    role: "Architect & Developer",
    year: "2025",
    img: learnloopImg,
    demo: "https://teachable.com",
    github: "https://github.com/lixxontech001",
    tag: "Portfolio Project",
    metrics: [
      { label: "Billing", value: "Stripe subs" },
      { label: "Content", value: "Block editor" },
      { label: "Grading", value: "Automated" },
    ],
    isDemoPlaceholder: true,
  },

  // Additional shipped projects (lighter case studies)
  ...buildExtraProjects(),
];

function buildExtraProjects(): Project[] {
  const pool = [tradesphereImg, postflowImg, mediboardImg, estateproImg, fleetgoImg, learnloopImg, finovaImg, lumenImg, harvestiqImg, pulsehrImg];
  const extras: Omit<Project, "img">[] = [
    // {
    //   slug: "vaultpay", title: "VaultPay · Crypto On Ramp", tagline: "Compliant fiat to crypto on ramp with KYC.",
    //   description: "Fiat to crypto on ramp with compliant KYC, custody and on chain settlement.",
    //   longDescription: "Django backend integrating KYC providers, custody APIs and on chain settlement with audit grade reporting. Processes 12K+ monthly transactions across 3 chains.",
    //   highlights: ["KYC/AML pipeline", "Multi chain settlement", "Real time price oracles", "Audit grade ledger"],
    //   tech: ["Django", "Celery", "PostgreSQL", "Web3.py"], role: "Backend Lead", year: "2025",
    //   demo: "https://vaultpay.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Txn/mo", value: "12K" }, { label: "Chains", value: "3" }, { label: "Uptime", value: "99.97%" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "stagepass", title: "StagePass · Event Ticketing", tagline: "QR ticketing with anti scalping rules.",
    //   description: "Event ticketing platform with QR validation, refund flows and dynamic pricing.",
    //   longDescription: "Built for an event promoter selling 40K+ tickets per month across festivals and concerts. Includes anti scalping rules, dynamic pricing tiers, and offline QR validation apps for gate staff.",
    //   highlights: ["Anti scalping & resale rules", "Offline QR scanner app", "Stripe + Paystack checkout", "Dynamic pricing tiers"],
    //   tech: ["Django", "DRF", "React Native", "Stripe", "Paystack"], role: "Full Stack Developer", year: "2024",
    //   demo: "https://stagepass.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Tickets/mo", value: "40K" }, { label: "Events", value: "180" }, { label: "Scan SLA", value: "<80ms" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "loopdesk", title: "LoopDesk · Customer Support Suite", tagline: "Omnichannel inbox with SLA automations.",
    //   description: "Omnichannel support inbox unifying email, WhatsApp, X DMs and live chat.",
    //   longDescription: "Replaced 3 vendor tools for a SaaS support team. Unified threads, SLA timers, macros, AI suggested replies and a customer satisfaction loop. Reduced first response time by 47%.",
    //   highlights: ["Unified omnichannel inbox", "SLA timers + escalations", "AI suggested replies", "CSAT + NPS loops"],
    //   tech: ["Django", "Channels", "Redis", "React", "Tailwind"], role: "Lead Engineer", year: "2025",
    //   demo: "https://loopdesk.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Agents", value: "85" }, { label: "FRT", value: "47% faster" }, { label: "CSAT", value: "4.8/5" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "scribely", title: "Scribely · Newsroom CMS", tagline: "Editorial CMS with workflow and live updates.",
    //   description: "Headless CMS purpose built for newsrooms with editorial workflows and live updates.",
    //   longDescription: "Powers 12 regional newsrooms with role based editorial workflows, scheduled publishing, live blog updates, and a JSON API consumed by Next.js sites.",
    //   highlights: ["Editorial workflow states", "Scheduled & embargoed publishing", "Live blog WebSocket updates", "Multi site JSON API"],
    //   tech: ["Django", "Wagtail", "Next.js", "Channels"], role: "Lead Developer", year: "2024",
    //   demo: "https://scribely.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Newsrooms", value: "12" }, { label: "Articles/mo", value: "4.6K" }, { label: "TTFB", value: "<120ms" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "bookwise", title: "BookWise · Salon Booking SaaS", tagline: "Booking, payments and SMS for salons.",
    //   description: "Multi tenant booking SaaS for salons and barbershops with payments and SMS reminders.",
    //   longDescription: "Multi tenant SaaS letting salons take online bookings, deposits, and run SMS reminders. Stripe Connect for owner payouts, calendar sync, and a customer loyalty engine.",
    //   highlights: ["Multi tenant architecture", "Stripe Connect payouts", "SMS reminders & no show fees", "Loyalty + referral engine"],
    //   tech: ["Django", "Stripe Connect", "Twilio", "React"], role: "Full Stack Developer", year: "2024",
    //   demo: "https://bookwise.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Tenants", value: "210" }, { label: "Bookings/mo", value: "18K" }, { label: "No shows", value: "31% less" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "grovestay", title: "GroveStay · Vacation Rentals", tagline: "Airbnb style rentals with iCal sync.",
    //   description: "Vacation rental marketplace with iCal sync, payments, and host onboarding.",
    //   longDescription: "Airbnb style marketplace for boutique vacation homes. Two way iCal sync with Airbnb/Booking, dynamic pricing suggestions, and an integrated messaging inbox.",
    //   highlights: ["Two way iCal sync", "Dynamic pricing suggestions", "Host onboarding KYC", "In app messaging"],
    //   tech: ["Django", "Next.js", "Stripe", "PostgreSQL"], role: "Full Stack Developer", year: "2024",
    //   demo: "https://grovestay.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Listings", value: "1.4K" }, { label: "Nights/mo", value: "5.2K" }, { label: "Host NPS", value: "62" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "trackly", title: "Trackly · Issue Tracker", tagline: "Linear style issue tracker for SMB teams.",
    //   description: "Lightweight issue tracker with Kanban, sprints and GitHub sync.",
    //   longDescription: "A Linear inspired issue tracker for product teams that find Jira heavy. Kanban, sprints, GitHub PR sync, and a snappy keyboard first UI.",
    //   highlights: ["Keyboard first UI", "GitHub PR + commit sync", "Sprints with burndown", "Webhook automations"],
    //   tech: ["Django", "DRF", "React", "TypeScript"], role: "Lead Engineer", year: "2025",
    //   demo: "https://trackly.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Teams", value: "120" }, { label: "Issues/mo", value: "62K" }, { label: "p95 latency", value: "180ms" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "billforge", title: "BillForge · Invoicing API", tagline: "Headless invoicing API for SaaS.",
    //   description: "Headless invoicing & subscription API white labeled into other SaaS products.",
    //   longDescription: "Invoicing engine offered as an embeddable API. Tax calculation, dunning, PDF generation, and webhook events. Used by 22 SaaS companies as their billing backbone.",
    //   highlights: ["Tax calc (VAT/GST/Sales)", "Dunning & retry logic", "PDF invoice templating", "Webhook event bus"],
    //   tech: ["Django", "DRF", "Celery", "Stripe", "WeasyPrint"], role: "Founding Engineer", year: "2025",
    //   demo: "https://billforge.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Tenants", value: "22" }, { label: "Invoices/mo", value: "78K" }, { label: "Webhook SLA", value: "99.99%" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "pingmesh", title: "PingMesh · Uptime Monitoring", tagline: "Synthetic monitoring with global probes.",
    //   description: "Uptime + synthetic monitoring with global probes and Slack/Discord alerting.",
    //   longDescription: "Distributed uptime monitor running synthetic checks from 7 regions. Latency budgets, SLO tracking, on call rotation and Slack/Discord alert routing.",
    //   highlights: ["7 region probes", "SLO + error budgets", "On call rotation", "Slack/Discord routing"],
    //   tech: ["Django", "Celery Beat", "Prometheus", "React"], role: "Solo Developer", year: "2024",
    //   demo: "https://pingmesh.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Monitors", value: "9K" }, { label: "Regions", value: "7" }, { label: "False positives", value: "<0.4%" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "atlascrm", title: "AtlasCRM · B2B Sales CRM", tagline: "Pipeline CRM with email sequences.",
    //   description: "B2B sales CRM with pipeline management, email sequences, and call logging.",
    //   longDescription: "Sales CRM tuned for outbound B2B teams. Pipeline stages, automated email sequences with reply detection, and a Chrome extension for one click contact enrichment.",
    //   highlights: ["Automated email sequences", "Chrome enrichment extension", "Pipeline forecasting", "Twilio call logging"],
    //   tech: ["Django", "DRF", "Next.js", "Twilio", "Postmark"], role: "Lead Engineer", year: "2025",
    //   demo: "https://atlascrm.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Reps", value: "340" }, { label: "Emails/mo", value: "1.1M" }, { label: "Reply rate", value: "+28%" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "fitloop", title: "FitLoop · Fitness Coaching App", tagline: "Coaching app with workout & macro plans.",
    //   description: "Mobile coaching app pairing trainers with clients via workout and macro plans.",
    //   longDescription: "React Native coaching app where trainers build programmed workouts, track client macros, and run video check ins. Django backend handles payments and content delivery.",
    //   highlights: ["Programmed workout builder", "Macro tracker with barcode scan", "Video check ins", "Trainer payouts"],
    //   tech: ["Django", "React Native", "Stripe Connect", "S3"], role: "Full Stack Developer", year: "2024",
    //   demo: "https://fitloop.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Trainers", value: "210" }, { label: "Clients", value: "9.4K" }, { label: "Retention", value: "78%" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "shelfly", title: "Shelfly · Inventory & POS", tagline: "Cloud POS + multi store inventory.",
    //   description: "Cloud POS and multi store inventory for retail chains.",
    //   longDescription: "Cloud POS used across 60+ stores. Real time inventory sync, supplier reorder rules, barcode receiving, and a Z report engine for daily reconciliation.",
    //   highlights: ["Real time multi store sync", "Supplier reorder automation", "Barcode receiving", "Daily Z reports"],
    //   tech: ["Django", "DRF", "React", "PostgreSQL", "Redis"], role: "Lead Developer", year: "2024",
    //   demo: "https://shelfly.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Stores", value: "62" }, { label: "SKUs", value: "84K" }, { label: "Sync lag", value: "<2s" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "voxpoll", title: "VoxPoll · Civic Polling Platform", tagline: "Verified civic polls with live dashboards.",
    //   description: "Verified citizen polling platform for NGOs and policy teams.",
    //   longDescription: "NGO grade polling platform with phone + ID verification, fraud detection, and live dashboards. Powered 4 nationwide civic polls reaching 220K verified voters.",
    //   highlights: ["Phone + ID verification", "Bot & duplicate detection", "Live dashboards", "Audit grade exports"],
    //   tech: ["Django", "Channels", "Twilio", "Mapbox"], role: "Lead Engineer", year: "2024",
    //   demo: "https://voxpoll.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Voters", value: "220K" }, { label: "Polls", value: "4" }, { label: "Fraud blocked", value: "11K" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "cratehub", title: "CrateHub · Subscription Box Engine", tagline: "Subscription box ops with smart packing.",
    //   description: "Subscription box management with smart packing and shipping automation.",
    //   longDescription: "Operations backbone for subscription box brands. Curates monthly crates, generates picklists, prints shipping labels via EasyPost, and surfaces churn KPIs.",
    //   highlights: ["Smart picklist generator", "EasyPost label printing", "Churn cohort analytics", "Skip / pause flows"],
    //   tech: ["Django", "Celery", "Stripe", "EasyPost"], role: "Solo Developer", year: "2024",
    //   demo: "https://cratehub.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Brands", value: "34" }, { label: "Boxes/mo", value: "26K" }, { label: "Churn", value: "5.1%" }],
    //   isDemoPlaceholder: true,
    // },
    // {
    //   slug: "ledgerly", title: "Ledgerly · SMB Accounting", tagline: "Double entry accounting for SMBs.",
    //   description: "Lightweight double entry accounting for small businesses.",
    //   longDescription: "QuickBooks alternative for African SMBs. Double entry ledger, bank feed imports, tax filing exports, and a clean mobile UI.",
    //   highlights: ["Double entry ledger", "Bank feed imports", "VAT / WHT exports", "Mobile first UI"],
    //   tech: ["Django", "DRF", "React", "PostgreSQL"], role: "Founding Engineer", year: "2025",
    //   demo: "https://ledgerly.lixxontech.dev", github: "https://github.com/lixxontech001",
    //   metrics: [{ label: "Businesses", value: "1.1K" }, { label: "Txn/mo", value: "320K" }, { label: "Reconcile time", value: "73% less" }],
    //   isDemoPlaceholder: true,
    // },
  ];
  return extras.map((p, i) => ({ ...p, img: pool[(i + 3) % pool.length] }));
}

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
    desc: "Complex SaaS products, marketplaces, and internal tools engineered end to end with Django + React.",
    features: ["Multi tenant architecture", "Background workers", "Stripe & subscriptions", "Role based access"],
    stack: ["Django", "DRF", "React", "PostgreSQL"],
    starting: "from $3,000",
  },
  {
    title: "API Development & Integration",
    desc: "Battle tested REST and webhook APIs with full OpenAPI docs and seamless third party integrations.",
    features: ["OpenAPI 3.1 docs", "OAuth2 & JWT", "Webhooks & retries", "Rate limiting"],
    stack: ["DRF", "Celery", "Redis", "Stripe", "OpenAI"],
    starting: "from $1,500",
  },
  {
    title: "eCommerce Platforms",
    desc: "Multi vendor stores with custom checkout, order management, analytics, and automated payouts.",
    features: ["Stripe Connect payouts", "Faceted search", "Cart recovery", "Vendor dashboards"],
    stack: ["Django", "PostgreSQL", "Stripe", "Next.js"],
    starting: "from $3,000",
  },
  {
    title: "Admin Dashboards",
    desc: "Real time, role based dashboards with rich visualizations, exports, and audit trails.",
    features: ["WebSockets live data", "Chart.js / Recharts", "CSV / PDF exports", "Audit logging"],
    stack: ["Django Channels", "React", "Recharts", "Postgres"],
    starting: "from $1,500",
  },
  {
    title: "AI Powered Features",
    desc: "Production RAG pipelines, agents, and GPT tuned workflows wired into your Django stack.",
    features: ["RAG with pgvector", "Function calling agents", "Usage metering & billing", "Prompt evaluation"],
    stack: ["OpenAI", "LangChain", "pgvector", "Celery"],
    starting: "from $2,000",
  },
  {
    title: "Landing Pages & Marketing Sites",
    desc: "High converting, SEO optimized marketing sites wired to a headless Django CMS or Sanity.",
    features: ["Lighthouse 95+", "JSON LD schema", "A/B testing ready", "CMS editing"],
    stack: ["Next.js", "Tailwind", "Wagtail", "Vercel"],
    starting: "from $700",
  },
  {
    title: "System Redesign & Optimization",
    desc: "Migrate legacy systems to Django, eliminate N+1s, ship CI/CD, and unlock 10x performance gains.",
    features: ["Performance audits", "Query optimization", "Docker + CI/CD", "Test coverage"],
    stack: ["Django", "Docker", "GitHub Actions", "Sentry"],
    starting: "from $1,500",
  },
  {
    title: "DevOps & Cloud Deployment",
    desc: "Containerize, deploy, monitor on AWS, Fly.io, or Railway with zero downtime releases and observability.",
    features: ["Docker + GH Actions", "Zero downtime deploys", "Sentry + logs", "Cost optimization"],
    stack: ["AWS", "Docker", "Terraform", "Sentry"],
    starting: "from $1,500",
  },
  {
    title: "Bug Fixing & Maintenance",
    desc: "Rapid triage for broken builds, silent 500s, and legacy Django apps nobody wants to touch. I ship fixes, not excuses.",
    features: ["Same day triage", "Root cause write ups", "Regression test coverage", "Monthly retainers"],
    stack: ["Django", "Sentry", "Pytest", "GitHub"],
    starting: "from $500",
  },
];

export const techStack = [
  "Django", "Django REST Framework", "Python", "PostgreSQL", "Redis", "Celery",
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Docker", "AWS",
  "Stripe", "OpenAI", "GraphQL", "WebSockets", "PostGIS", "Sentry",
  "pgvector", "LangChain", "React Native", "Mapbox", "Supabase", "Vercel",
];

export const stats = [
  { value: "6", label: "Full stack Django builds documented as case studies" },
  { value: "2025", label: "B.Tech Cybersecurity, LAUTECH (in progress)" },
  { value: "Django + React", label: "Primary stack, end to end" },
];


export const process = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "A free 30 min call or conversation to understand the problem, users, and success metrics. You leave with a written scope.",
    days: "Day 0",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "Data models, API contracts, and UI flows agreed before a single line of production code is written.",
    days: "Days 1 to 3",
  },
  {
    step: "03",
    title: "Iterative Build",
    desc: "Twice weekly demos on a staging URL. You see progress every few days and steer the build as it ships.",
    days: "Weeks 1 to 3",
  },
  {
    step: "04",
    title: "Launch & Handover",
    desc: "Zero downtime deploy, runbooks, Loom walkthroughs, and 30 days of free post launch support.",
    days: "Launch + 30",
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A focused MVP usually takes 2 to 3 weeks. A larger multi module platform runs 4 to 8 weeks. I scope in writing first so the timeline is realistic rather than optimistic.",
  },
  {
    q: "Are the projects on this site client work?",
    a: "Most of them are self directed builds and freelance work rather than enterprise deployments. They exist so you can inspect real architecture decisions, data models, and code instead of taking claims on trust.",
  },
  {
    q: "Do you use AI coding tools?",
    a: "Yes, deliberately and openly. AI assistants speed up boilerplate, tests, and refactors. I still design the data model, choose the architecture, review every line, and own the result. You get the speed without handing your codebase to autocomplete.",
  },
  {
    q: "What does pricing look like?",
    a: "Fixed price by milestone for scoped projects, or a weekly rate for ongoing work. You know the cost before I start, and revisions inside the agreed spec are not billed extra.",
  },
  {
    q: "Will I own the code?",
    a: "Yes. Every commit is yours from day one, pushed to your repository. No vendor lock in and no recurring licence fees to me.",
  },
  {
    q: "You are still a student. Why hire you?",
    a: "Because you get senior level care at an honest rate. I am studying Cybersecurity at LAUTECH, which shapes how I handle auth, permissions, and audit trails. What I have not done before, I say so upfront rather than learning on your budget quietly.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every project includes 30 days of post launch support. After that I offer a simple monthly retainer or fixed price change orders.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Always. I will sign your NDA before the first call, or send you a mutual one.",
  },
];

