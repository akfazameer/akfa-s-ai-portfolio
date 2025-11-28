import { motion } from "framer-motion";
import { Code2, Zap, Database, Cloud } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Flutter basics"] },
  { category: "Backend", items: ["Firebase", "Supabase", "APIs", "Node.js"] },
  { category: "Automation", items: ["n8n", "Make.com", "Workflow Design"] },
  { category: "AI & Tools", items: ["Cursor AI", "Lovable", "AI Models", "Android (Kotlin)"] },
];

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary glow-green">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 hover:card-glow transition-all"
            >
              <div className="mb-4">
                {index === 0 && <Code2 className="w-8 h-8 text-primary" />}
                {index === 1 && <Database className="w-8 h-8 text-primary" />}
                {index === 2 && <Zap className="w-8 h-8 text-primary" />}
                {index === 3 && <Cloud className="w-8 h-8 text-primary" />}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;