import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import profileImage from "@/assets/hero-photo.jpeg";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      {/* Full-width Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${profileImage})`,
            filter: 'brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary glow-green">My Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto">
            A collection of AI-powered applications and automation workflows
          </p>
        </motion.div>
      </section>

      <Projects />
    </div>
  );
};

export default ProjectsPage;
