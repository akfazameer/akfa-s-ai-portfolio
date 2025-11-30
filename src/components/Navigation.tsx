import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  // { name: "Gallery", path: "/gallery" },
  // { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="w-20"></div>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button - placeholder */}
          <button className="md:hidden text-foreground">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
