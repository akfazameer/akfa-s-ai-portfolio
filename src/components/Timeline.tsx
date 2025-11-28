import { motion } from "framer-motion";

const timelineData = [
  {
    week: "Week 1",
    title: "Tools & Basics",
    items: ["Lovable", "Supabase", "Firebase Studio", "Authentication & CRUD", "Deployment on Netlify", "UI building, reusable components"],
  },
  {
    week: "Week 2",
    title: "Modern Dev Tools",
    items: ["Cursor AI", "Android Studio", "Deployment on Vercel", "Component automation & code generation"],
  },
  {
    week: "Week 3",
    title: "n8n.ai + Automation",
    items: ["n8n", "Pexels API", "Google APIs", "Appointment scheduling automations", "Data storage + workflows"],
  },
  {
    week: "Week 4",
    title: "make.ai + Advanced Automation",
    items: ["Make.com", "Google Slides + Sheets automation", "Certificate & Invoice auto-generation", "Complex workflow chaining"],
  },
];

const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-tech-darker" id="timeline">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="text-primary glow-green">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            4-week intensive learning roadmap
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1" />
                
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-tech-darker">
                    <span className="font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-card border border-border rounded-lg p-6 hover:card-glow transition-all">
                    <div className="text-sm text-primary font-semibold mb-2">{item.week}</div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <ul className="space-y-1">
                      {item.items.map((subItem) => (
                        <li key={subItem} className="text-muted-foreground">
                          • {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;