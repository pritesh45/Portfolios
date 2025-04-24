import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Code, ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  {name: "Certification",href:"#certification"},
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get current active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "glass backdrop-blur-md bg-background/80 shadow-md border-b border-border/40 dark:bg-background/90"
          : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-serif font-semibold tracking-tight group relative overflow-hidden"
        >
          <span className="relative z-10 text-4xl font-extrabold">
            Pritesh
            <span className="text-4xl font-extrabold text-accent">.</span>
          </span>

          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    "nav-link relative px-4 py-2 rounded-md font-medium text-lg transition-all duration-200 hover:text-accent",
                    activeSection === link.href.substring(1)
                      ? "text-accent after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-accent after:rounded-full"
                      : "text-foreground hover:bg-accent/10"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Coding Profile Button */}
          <a
            href="https://codolio.com/profile/pritesh45"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-all transform hover:scale-105 shadow-sm"
          >
            <span>Coding Profile</span>
            <ExternalLink size={14} />
          </a>

          <div className="pl-2 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Coding Profile Button */}
          <a
            href="https://codolio.com/profile/Navneetsingh04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-all"
            aria-label="Coding Profile"
          >
            <Code size={18} />
          </a>

          <ThemeToggle />

          <button
            className={cn(
              "p-2 rounded-md transition-colors",
              isMenuOpen
                ? "bg-accent/10 text-accent"
                : "text-foreground hover:bg-secondary"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-background/95 dark:bg-background/95 border-t border-border/40 shadow-lg animate-fade-down">
          <ul className="flex flex-col p-4">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="border-b border-border/20 last:border-none"
              >
                <a
                  href={link.href}
                  className={cn(
                    "flex items-center py-3 px-4 rounded-md transition-colors",
                    activeSection === link.href.substring(1)
                      ? "text-accent font-medium bg-accent/10"
                      : "text-foreground hover:bg-secondary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Full Coding Profile Button in Mobile Menu */}
            <li className="py-4 px-4">
              <a
                href="https://codolio.com/profile/Navneetsingh04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Coding Profile</span>
                <ExternalLink size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
