import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import WhyMe from "@/components/site/WhyMe";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import Testimonials from "@/components/site/Testimonials";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import SEO from "@/components/site/SEO";

const Index = () => {
  return (
    <>
      <SEO />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:text-sm focus:shadow-elevated"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative min-h-screen overflow-x-hidden bg-background">
        <Hero />
        <WhyMe />
        <Services />
        <Projects />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
