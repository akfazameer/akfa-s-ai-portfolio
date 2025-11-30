import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-card border border-primary/20 rounded-lg overflow-hidden hover:card-glow transition-all"
    >
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-b border-primary/20">
        <img
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tool}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </a>
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Github className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;