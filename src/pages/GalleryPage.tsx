import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const GalleryPage = () => {
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
              Project <span className="text-primary glow-green">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Visual showcase of work and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Gallery Item {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
