"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-space/80 shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl md:text-2xl font-outfit font-bold text-gradient"
          >
            Kabir Saini
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="relative px-3 py-2 text-light-text/80 hover:text-light-text transition-colors duration-200 font-medium group"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>{section.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-electric-blue to-neon-purple group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="ml-2 rounded-full w-9 h-9 hover:bg-muted"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-electric-blue" />
              ) : (
                <Moon className="h-5 w-5 text-neon-purple" />
              )}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="mr-2 rounded-full w-9 h-9 hover:bg-muted"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-electric-blue" />
              ) : (
                <Moon className="h-5 w-5 text-neon-purple" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="rounded-full w-9 h-9 hover:bg-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glassmorphic border-t border-border/50 py-4 px-4 shadow-lg animate-in fade-in slide-in-from-top-5">
          <nav className="flex flex-col space-y-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-3 py-2 text-light-text/80 hover:text-light-text hover:bg-white/5 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
