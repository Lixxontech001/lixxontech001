import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Check, Terminal, Database, Zap, Server } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

const ROTATING = ["resilient", "scalable", "battle-tested", "high-throughput"];

/* ------------- Count-up number ------------- */
const CountUp = ({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) => {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => {
    if (to % 1 !== 0) return v.toFixed(1) + suffix;
    return Math.round(v) + suffix;
  });
  useEffect(() => {
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1], delay: 0.6 });
    return controls.stop;
  }, [to, duration, mv]);
  return <motion.span>{rounded}</motion.span>;
};

/* ------------- Rotating word ------------- */
const RotatingWord = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block align-baseline">
      <span className="invisible">{ROTATING.reduce((a, b) => (a.length > b.length ? a : b))}</span>
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 text-primary italic font-normal"
      >
        {ROTATING[i]}
      </motion.span>
    </span>
  );
};

/* ------------- Live terminal ------------- */
const LINES = [
  { p: "$", t: "python manage.py runserver 0.0.0.0:8000", c: "text-foreground" },
  { p: ">", t: "System check identified no issues (0 silenced).", c: "text-muted-foreground" },
  { p: ">", t: "Starting ASGI/Daphne · workers=8 · pid=42871", c: "text-muted-foreground" },
  { p: "✓", t: "Django 5.0.2 · Postgres · Redis · Celery · Channels", c: "text-primary" },
  { p: "→", t: "POST /api/v1/checkout 201 · 84ms", c: "text-foreground/80" },
  { p: "→", t: "GET  /api/v1/orders   200 · 41ms", c: "text-foreground/80" },
  { p: "✓", t: "Deploy #4271 · main@a7f2d1c · shipped", c: "text-primary" },
];

const LiveTerminal = () => {
  const [n, setN] = useState(1);
  useEffect(() => {
    const id = setInterval(() => setN((v) => (v >= LINES.length ? 4 : v + 1)), 1400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="mono text-[11px] leading-relaxed space-y-1">
      {LINES.slice(0, n).map((l, i) => (
        <motion.div
          key={i + "-" + l.t}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex gap-2"
        >
          <span className="text-primary/70 w-3 shrink-0">{l.p}</span>
          <span className={l.c + " truncate"}>{l.t}</span>
        </motion.div>
      ))}
      <motion.span
        className="inline-block h-3 w-1.5 bg-primary translate-y-0.5"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </div>
  );
};

/* ------------- Sparkline ------------- */
const Sparkline = () => {
  const points = [22, 28, 18, 34, 26, 42, 30, 46, 38, 52, 44, 58, 50, 62, 55];
  const w = 200, h = 44;
  const max = Math.max(...points);
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * w} ${h - (p / max) * h}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-11 overflow-visible">
      <defs>
        <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${d} L ${w} ${h} L 0 ${h} Z`}
        fill="url(#spark-fill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        r="2.5"
        fill="hsl(var(--primary))"
        animate={{
          cx: points.map((_, i) => (i / (points.length - 1)) * w),
          cy: points.map((p) => h - (p / max) * h),
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2.4 }}
      />
    </svg>
  );
};

/* ------------- Orbital services ------------- */
const ORBIT = [
  { label: "API", icon: Zap, angle: 0 },
  { label: "PG", icon: Database, angle: 72 },
  { label: "REDIS", icon: Server, angle: 144 },
  { label: "CELERY", icon: Terminal, angle: 216 },
  { label: "AUTH", icon: Check, angle: 288 },
];

const OrbitalCore = () => {
  return (
    <div className="relative w-full aspect-square max-w-[240px] mx-auto">
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-6 rounded-full border border-dashed border-primary/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT.map((o) => {
          const Icon = o.icon;
          return (
            <div
              key={o.label}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `translate(-50%,-50%) rotate(${o.angle}deg) translateY(-108px)` }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="flex flex-col items-center gap-1"
              >
                <div className="h-8 w-8 rounded-full bg-background border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_20px_hsl(var(--primary)/0.25)]">
                  <Icon size={13} strokeWidth={2} />
                </div>
                <span className="mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{o.label}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* core */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/50 flex items-center justify-center backdrop-blur">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
          <span className="relative font-display text-2xl text-foreground tracking-tight">Lx</span>
        </div>
      </motion.div>
    </div>
  );
};

/* ============================================================== */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full border-b border-border overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 grid-pattern opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-radial" />

      {/* floating ambient blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/[0.08] blur-[120px] -z-10"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-primary/[0.06] blur-[120px] -z-10"
        animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] min-h-screen pt-24"
      >
        {/* LEFT — content */}
        <div className="flex flex-col justify-center gap-12 px-6 md:px-12 lg:px-20 py-14 lg:py-20 lg:border-r border-border">
          <div className="space-y-8">
            <motion.div variants={item} className="inline-flex items-center gap-3 self-start rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                <span className="relative rounded-full bg-primary h-1.5 w-1.5" />
              </span>
              <span className="mono text-[10px] uppercase tracking-[0.28em] text-primary">
                Senior Django Engineer · Booking Q1 2026
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="mono text-[10px] text-muted-foreground">Lagos → Remote</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-medium leading-[0.92] tracking-[-0.035em] text-foreground"
            >
              Architecting
              <br />
              <RotatingWord />
              <br />
              Django systems.
            </motion.h1>
          </div>

          <div className="max-w-xl space-y-10">
            <motion.p
              variants={item}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              I'm <span className="text-foreground">Olatoyosi Ridwan</span> — a Senior Django + React
              engineer building revenue-critical backends, payment rails, and async infrastructure for
              founders and product teams who ship for a living.
            </motion.p>

            {/* CTAs — actual buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 rounded-md bg-primary px-5 py-3 font-display text-sm font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:bg-primary-glow hover:-translate-y-0.5 hover:shadow-elevated overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">View the work</span>
                <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-md border border-border bg-card px-5 py-3 font-display text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-secondary hover:-translate-y-0.5"
              >
                <Mail size={15} className="text-primary" />
                Start a project
              </a>
              <a
                href="/Olatoyosi_Ridwan_Django_CV.pdf"
                download
                className="group inline-flex items-center gap-2.5 rounded-md border border-border/70 px-5 py-3 font-display text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-primary/40 hover:-translate-y-0.5"
              >
                <Download size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                Download CV
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {[
                { k: "Shipped", n: 10, s: "+" },
                { k: "Years", n: 4, s: "+" },
                { k: "Uptime", n: 99.9, s: "%" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {s.k}
                  </dt>
                  <dd className="font-display text-3xl md:text-4xl mt-2 text-foreground tabular-nums">
                    <CountUp to={s.n} suffix={s.s} />
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>

        {/* RIGHT — Django command console */}
        <div className="relative bg-card border-t lg:border-t-0 border-border overflow-hidden flex items-center justify-center p-6 md:p-10">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(hsl(199 89% 60% / 0.12) 0.6px, transparent 0.6px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* scan sweep */}
          <motion.div
            aria-hidden
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"
          />

          {/* console frame */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md rounded-lg border border-border bg-background/70 backdrop-blur-xl shadow-elevated overflow-hidden"
          >
            {/* header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-card/80">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              </div>
              <span className="mono text-[10px] text-muted-foreground truncate">
                lixxon@production ~ system
              </span>
              <motion.span
                className="mono text-[10px] text-primary"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ● LIVE
              </motion.span>
            </div>

            {/* tabs */}
            <div className="flex items-center gap-4 px-4 py-2 border-b border-border/60 mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-foreground border-b border-primary pb-1.5 -mb-2">runtime</span>
              <span className="text-muted-foreground">metrics</span>
              <span className="text-muted-foreground">queue</span>
              <span className="ml-auto text-primary/70">v4.2.0</span>
            </div>

            {/* terminal */}
            <div className="px-4 py-4 border-b border-border/60 min-h-[168px]">
              <LiveTerminal />
            </div>

            {/* metrics row */}
            <div className="grid grid-cols-2 divide-x divide-border/60 border-b border-border/60">
              <div className="p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">req/sec</span>
                  <span className="mono text-[10px] text-primary">+18%</span>
                </div>
                <div className="font-display text-2xl text-foreground tabular-nums">
                  <CountUp to={1284} />
                </div>
                <Sparkline />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">p95 latency</span>
                  <span className="mono text-[10px] text-primary">SLO ✓</span>
                </div>
                <div className="font-display text-2xl text-foreground tabular-nums">
                  <CountUp to={84} suffix="ms" />
                </div>
                <div className="mt-3 space-y-1">
                  {[
                    { k: "POST /checkout", v: "201" },
                    { k: "GET  /orders", v: "200" },
                    { k: "POST /webhook", v: "200" },
                  ].map((r, i) => (
                    <motion.div
                      key={r.k}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.15 }}
                      className="flex justify-between mono text-[10px]"
                    >
                      <span className="text-muted-foreground truncate">{r.k}</span>
                      <span className="text-primary">{r.v}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* orbital diagram */}
            <div className="px-4 py-6 border-b border-border/60">
              <OrbitalCore />
            </div>

            {/* footer status */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-card/60 mono text-[10px]">
              <span className="flex items-center gap-1.5 text-primary">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                OPERATIONAL
              </span>
              <span className="text-muted-foreground">main@a7f2d1c</span>
              <span className="text-muted-foreground">99.98% · 90d</span>
            </div>
          </motion.div>

          {/* floating chips */}
          <motion.div
            className="absolute top-16 right-8 hidden md:flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/80 backdrop-blur px-2.5 py-1 mono text-[10px] text-primary shadow-glow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{ opacity: { delay: 1.6 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Check size={11} /> deploy #4271
          </motion.div>
          <motion.div
            className="absolute bottom-16 left-8 hidden md:flex items-center gap-1.5 rounded-full border border-border bg-background/80 backdrop-blur px-2.5 py-1 mono text-[10px] text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            transition={{ opacity: { delay: 1.9 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Database size={11} className="text-primary" /> pg · 4 replicas
          </motion.div>

          {/* corner ticks */}
          <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-primary/40" />
          <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-primary/40" />
          <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-primary/40" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-primary/40" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
