import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative glass-strong rounded-[2rem] p-8 md:p-16 overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="mono text-xs text-primary mb-4 tracking-widest uppercase">— Let's Talk</div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Have a project <br />
              <span className="text-gradient-primary">in mind?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Whether you're a startup, agency, or growing business — let's build
              something exceptional together.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="primary" size="lg">
                <a href="mailto:lixxontech@gmail.com">
                  <Mail size={18} /> lixxontech@gmail.com <ArrowRight size={16} />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="glass" size="default">
                <a href="https://github.com/" target="_blank" rel="noreferrer noopener">
                  <Github size={18} /> GitHub
                </a>
              </Button>
              <Button asChild variant="glass" size="default">
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="glass" size="default">
                <a href="https://wa.me/" target="_blank" rel="noreferrer noopener">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
