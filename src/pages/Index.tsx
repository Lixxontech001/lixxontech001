import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import WhyMe from "@/components/site/WhyMe";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import Testimonials from "@/components/site/Testimonials";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Olatoyosi Ridwan",
      jobTitle: "Django Full-Stack Web Developer",
      worksFor: { "@type": "Organization", name: "Lixxon_Tech" },
      email: "mailto:lixxontech@gmail.com",
      url: typeof window !== "undefined" ? window.location.origin : "",
      sameAs: ["https://github.com/lixxontech001"],
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <WhyMe />
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
