import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog & <span className="text-primary glow-green">Insights</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Thoughts on development, automation, and AI
            </p>
          </motion.div>

          <div className="space-y-6">
            {[1, 2, 3].map((item, index) => (
              <motion.article
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <h2 className="text-2xl font-bold mb-2">Blog Post Title {item}</h2>
                <p className="text-muted-foreground mb-4">Posted on January {item}, 2024</p>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
