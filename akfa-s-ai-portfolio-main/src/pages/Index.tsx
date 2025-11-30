import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Research from "@/components/Research";
import Download from "@/components/Download";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Research />
      <Download />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-tech-border">
        <p>© 2024 Akfa Zameer. Built with React, Tailwind CSS & Framer Motion.</p>
      </footer>
    </div>
  );
};

export default Index;