import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Lovable Team Task Management App",
    description: "Full task management app with user authentication, role-based access (Admin/Member), realtime database, task assignment, and team management. Fully responsive.",
    tools: ["Lovable", "React", "Firebase", "Supabase"],
    image: "/placeholder.svg",
    demoUrl: "https://classy-druid-ea2f17.netlify.app/",
    codeUrl: "https://github.com/akfazameer/agile-canvas-prime",
  },
  {
    id: 2,
    title: "Android Weather App",
    description: "Functional Kotlin weather app fetching real-time data from OpenWeather API. Shows humidity, temperature, wind speed, and custom 'Outdoor Friendliness Score' algorithm.",
    tools: ["Kotlin", "Cursor AI", "Weather API"],
    image: "/placeholder.svg",
    demoUrl: "https://drive.google.com/file/d/1dSLFdKuRz-gjHAtfkgUUvIJVfyLIbq6-/view?usp=sharing",
    codeUrl: "https://github.com/akfazameer/weather",
  },
  {
    id: 3,
    title: "Flappy Bird Game",
    description: "Short playable game built using React with Canvas/JS animation. Created with Cursor AI for rapid prototyping.",
    tools: ["React", "Cursor AI", "JavaScript", "Canvas"],
    image: "/placeholder.svg",
    demoUrl: "http://localhost:3000/",
    codeUrl: "https://github.com/akfazameer/flappy",
  },
  {
    id: 4,
    title: "Fitness Web App",
    description: "Real fitness analysis app using live AI API (OpenAI/Gemini/Groq). Environment variables stored securely. Deployed on Vercel with GitHub integration.",
    tools: ["Next.js", "AI API", "Vercel", "TypeScript"],
    image: "/placeholder.svg",
    demoUrl: "https://fitness-dg8z99xsz-aakifas-projects.vercel.app/",
    codeUrl: "https://github.com/akfazameer/fitness-app",
  },
  {
    id: 5,
    title: "N8N Pexels Image Automation",
    description: "Workflow that takes chat input, uses Pexels API to fetch images, and stores results in Google Drive and Google Sheets automatically.",
    tools: ["n8n", "Pexels API", "Google Sheets", "Google Drive"],
    image: "/placeholder.svg",
    demoUrl: "https://akfazameer.app.n8n.cloud/workflow/vP3XDKSy4lpflYtH",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "Chat-based Appointment Booking",
    description: "Automated booking system that checks Google Calendar availability, creates events if slots are free, and stores details in Google Sheets.",
    tools: ["n8n", "Google Calendar API", "Sheets API"],
    image: "/placeholder.svg",
    demoUrl: "https://akfazameer.app.n8n.cloud/workflow/YaHKu5mx1vPBxNBP",
    codeUrl: "https://github.com/akfazameer/fitness-app",
  },
  {
    id: 7,
    title: "Automated AQI Monitor & Alert System",
    description: "Checks Air Quality Index automatically and triggers alerts when values exceed defined threshold levels.",
    tools: ["n8n", "API", "Alerts"],
    image: "/placeholder.svg",
    demoUrl: "https://akifa.app.n8n.cloud/workflow/2at6wSYTWeppLrba",
    codeUrl: "https://github.com/akfazameer/fitness-app",
  },
  {
    id: 8,
    title: "Certificate / Invoice Auto-Generation",
    description: "Uses Google Slides template, populates data from Google Sheets, and generates PDF certificates or invoices automatically.",
    tools: ["Make.com", "Google Slides", "Google Sheets"],
    image: "/placeholder.svg",
    demoUrl: "https://eu1.make.com/527407/scenarios/3725575/edit",
    codeUrl: "#",
  },
  {
    id: 9,
    title: "Brand-Supplier Research Automation",
    description: "Queries brand name, uses Epify Actors for Google Search and supplier extraction, saves data to Google Sheets, and sends automated emails to contacts.",
    tools: ["Make.com", "Epify Actors", "Google Sheets", "Email API"],
    image: "/placeholder.svg",
    demoUrl: "https://eu1.make.com/527407/scenarios/3745998/edit",
    codeUrl: "https://github.com/akfazameer/fitness-app",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto max-w-7xl">
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
