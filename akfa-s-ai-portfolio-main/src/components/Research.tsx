import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const Research = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Research & <span className="text-primary glow-green">Inspiration</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I studied modern developer portfolios focusing on clean UI, animations, 
            storytelling, and functional case studies. This portfolio reflects best 
            practices in web design, emphasizing user experience, visual hierarchy, 
            and seamless interactions to showcase technical work effectively.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;