import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import WhyMe from "@/components/site/WhyMe";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    // JSON-LD person schema for SEO
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Olatoyosi Ridwan",
      jobTitle: "Full Stack Web & Mobile App Developer",
      worksFor: { "@type": "Organization", name: "Lixxon Tech" },
      email: "mailto:lixxontech@gmail.com",
      url: typeof window !== "undefined" ? window.location.origin : "",
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
