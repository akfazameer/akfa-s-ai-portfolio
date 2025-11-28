import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon } from "lucide-react";

const portfolioData = {
  name: "Akfa Zameer",
  role: "AI Developer • Automation Builder • Full-Stack App Creator",
  skills: [
    "React", "Next.js", "Tailwind", "Firebase", "Supabase", 
    "n8n", "Cursor AI", "Lovable", "APIs", "Android Development (Kotlin)", 
    "AI Models", "Workflow Automation", "Flutter basics", "Git & GitHub"
  ],
  tools: [
    "Cursor AI", "Lovable", "Firebase", "Supabase", "n8n", "Make.com",
    "Next.js", "React", "Tailwind CSS", "Vercel", "Google APIs"
  ],
  projects: [
    {
      name: "Lovable Team Task Management App",
      tools: ["Lovable", "React", "Firebase", "Supabase"],
      features: ["User Authentication", "Role-based Access", "Realtime Database", "Task Management"]
    },
    {
      name: "Android Weather App",
      tools: ["Kotlin", "Cursor AI", "Weather API"],
      features: ["Real-time Weather Data", "Custom Scoring Algorithm"]
    },
    {
      name: "Flappy Bird Game",
      tools: ["React", "Cursor AI", "JavaScript", "Canvas"],
      features: ["Interactive Game", "Canvas Animation"]
    },
    {
      name: "Fitness Web App",
      tools: ["Next.js", "AI API", "Vercel"],
      features: ["AI Integration", "Deployed on Vercel"]
    },
    {
      name: "N8N Pexels Image Automation",
      tools: ["n8n", "Pexels API", "Google Drive", "Google Sheets"],
      features: ["Automated Image Fetching", "Cloud Storage"]
    }
  ],
  deployments: ["Vercel", "Firebase Hosting", "GitHub Pages"]
};

const Download = () => {
  const handleDownload = () => {
    const jsonString = JSON.stringify(portfolioData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "akfa-zameer-portfolio-evidence.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 px-4 bg-tech-darker">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Portfolio <span className="text-primary glow-green">Evidence</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Download a comprehensive JSON file containing all my skills, tools, projects, 
            workflows, APIs used, and deployment details.
          </p>
          
          <Button 
            size="lg" 
            onClick={handleDownload}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <DownloadIcon className="w-5 h-5" />
            Download Portfolio Evidence (JSON)
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;