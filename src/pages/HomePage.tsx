import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroPhoto from "@/assets/hero-photo.jpeg";

const slides = [
  {
    title: "Hello I'm Aakifa Zameer",
    subtitle: " Automation Builder • Full-Stack App Creator",
    description: "I build AI-powered apps, automation workflows, and full-stack projects using Cursor AI, Lovable, Firebase, n8n automations, Next.js, and other modern tools.",
  },
  {
    title: "Building Tomorrow's Solutions",
    subtitle: "Innovative Developer • Problem Solver",
    description: "Specializing in automation, AI integrations, real-time apps, and practical solutions that make a difference.",
  },
  {
    title: "Let's Create Together",
    subtitle: "Collaboration • Innovation • Excellence",
    description: "Ready to transform your ideas into reality with cutting-edge technologies and modern development practices.",
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroPhoto})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        
        {/* Slider Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-20 text-primary hover:text-primary/80 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-20 text-primary hover:text-primary/80 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-12 h-12" />
        </button>

        <div className="container mx-auto max-w-6xl relative z-10 px-4">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <div className="text-primary glow-green">{slides[currentSlide].title}</div>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              <p className="text-xl md:text-2xl text-foreground font-semibold">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-8"
            >
              <Link to="/projects">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-6 justify-center"
            >
              <a href="https://github.com/akfazameer/akfa-s-ai-portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/aakifa-zameer-55143b354/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </motion.div>

            {/* Slide Indicators */}
            <div className="flex gap-2 justify-center mt-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-primary w-8" : "bg-muted"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
