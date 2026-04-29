import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, MessageCircle, ArrowRight, FileText } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  projectType: z.string().trim().min(1, "Project type is required").max(100),
  message: z.string().trim().min(5, "Tell me a bit more").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`New project inquiry — ${result.data.projectType}`);
    const body = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\nProject Type: ${result.data.projectType}\n\n${result.data.message}`
    );
    window.location.href = `mailto:lixxontech@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client…");
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative glass-strong rounded-[2rem] p-6 sm:p-10 md:p-16 overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

          <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Contact</div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Let's build something <span className="text-gradient-primary">valuable</span>.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Tell me about your project and I'll respond within 24 hours with next steps.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:lixxontech@gmail.com"
                  className="flex items-center gap-3 glass rounded-2xl p-4 hover:border-primary/30 transition-colors"
                >
                  <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Mail size={18} />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground mono">Email</div>
                    <div className="font-medium text-sm">lixxontech@gmail.com</div>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <Button asChild variant="glass" className="w-full">
                    <a href="https://github.com/lixxontech001" target="_blank" rel="noreferrer noopener">
                      <Github size={16} /> GitHub
                    </a>
                  </Button>
                  <Button asChild variant="glass" className="w-full">
                    <a href="#" download>
                      <FileText size={16} /> Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" action="https://formspree.io/f/xxxxx" method="POST">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs mono text-muted-foreground mb-2 block">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    maxLength={100}
                    className="bg-background/40 border-border/60 h-12"
                  />
                </div>
                <div>
                  <label className="text-xs mono text-muted-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    maxLength={255}
                    className="bg-background/40 border-border/60 h-12"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs mono text-muted-foreground mb-2 block">Project Type</label>
                <Input
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  placeholder="Website, Mobile App, Dashboard…"
                  maxLength={100}
                  className="bg-background/40 border-border/60 h-12"
                />
              </div>
              <div>
                <label className="text-xs mono text-muted-foreground mb-2 block">Message</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, goals, and timeline…"
                  maxLength={1000}
                  rows={5}
                  className="bg-background/40 border-border/60 resize-none"
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" variant="primary" size="lg" disabled={submitting}>
                  Start project <ArrowRight size={16} />
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a
                    href="https://wa.me/2349040057383?text=Hi%20Lixxon%20Tech%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
