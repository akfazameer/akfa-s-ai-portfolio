import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Lovable Team Task Management App",
    description: "Full task management app with user authentication, role-based access (Admin/Member), realtime database, task assignment, and team management. Fully responsive.",
    tools: ["Lovable", "React", "Firebase", "Supabase"],
    image: "/placeholder.svg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Android Weather App",
    description: "Functional Kotlin weather app fetching real-time data from OpenWeather API. Shows humidity, temperature, wind speed, and custom 'Outdoor Friendliness Score' algorithm.",
    tools: ["Kotlin", "Cursor AI", "Weather API"],
    image: "/placeholder.svg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Flappy Bird Game",
    description: "Short playable game built using React with Canvas/JS animation. Created with Cursor AI for rapid prototyping.",
    tools: ["React", "Cursor AI", "JavaScript", "Canvas"],
    image: "/placeholder.svg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Fitness Web App",
    description: "Real fitness analysis app using live AI API (OpenAI/Gemini/Groq). Environment variables stored securely. Deployed on Vercel with GitHub integration.",
    tools: ["Next.js", "AI API", "Vercel", "TypeScript"],
    image: "/placeholder.svg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    title: "N8N Pexels Image Automation",
    description: "Workflow that takes chat input, uses Pexels API to fetch images, and stores results in Google Drive and Google Sheets automatically.",
    tools: ["n8n", "Pexels API", "Google Sheets", "Google Drive"],
    image: "/placeholder.svg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "Chat-based Appointment Booking",
    description: "Automated booking system that checks Google Calendar availability, creates events if slots are free, and stores details in Google Sheets.",
    tools: ["n8n", "Google Calendar API", "Sheets API"],
    image: "/placeholder.svg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 7,
    title: "Automated AQI Monitor & Alert System",
    description: "Checks Air Quality Index automatically and triggers alerts when values exceed defined threshold levels.",
    tools: ["n8n", "API", "Alerts"],
    image: "/placeholder.svg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 8,
    title: "Certificate / Invoice Auto-Generation",
    description: "Uses Google Slides template, populates data from Google Sheets, and generates PDF certificates or invoices automatically.",
    tools: ["Make.com", "Google Slides", "Google Sheets"],
    image: "/placeholder.svg",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 9,
    title: "Brand-Supplier Research Automation",
    description: "Queries brand name, uses Epify Actors for Google Search and supplier extraction, saves data to Google Sheets, and sends automated emails to contacts.",
    tools: ["Make.com", "Epify Actors", "Google Sheets", "Email API"],
    image: "/placeholder.svg",
    demoUrl: "#",
    codeUrl: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary glow-green">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A collection of AI-powered applications and automation workflows
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;