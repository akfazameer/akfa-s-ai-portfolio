import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Research from "@/components/Research";
import Download from "@/components/Download";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Contact />
      <Research />
      <Download />
    </div>
  );
};

export default ContactPage;
