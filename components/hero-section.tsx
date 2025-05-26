"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    console.log("Hero section mounted");
    if (bgRef.current && headingRef.current) {
      // Animate the grid background
      gsap.fromTo(
        bgRef.current,
        { opacity: 0 },
        { opacity: 0.3, duration: 2, ease: "power2.inOut" }
      );
      
      // Typing animation effect for the main heading
      const text = "Tech Enthusiast | Passionate About IT, AI & Computer Science";
      const typingElement = headingRef.current;
      let displayedText = "";
      let i = 0;
      
      const typeWriter = () => {
        if (i < text.length) {
          displayedText += text.charAt(i);
          if (typingElement) typingElement.textContent = displayedText;
          i++;
          setTimeout(typeWriter, 50);
        }
      };
      
      typeWriter();
    }
    
    // Parallax effect on scroll
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollPosition = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated grid background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 grid-bg opacity-10 z-0"
      />
      
      {/* Glowing orbs in background */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-electric-blue/20 blur-2xl animate-pulse-glow z-0"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-neon-purple/20 blur-2xl animate-pulse-glow z-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-electric-blue shadow-neon-blue">
              <img 
                src="https://assets.macaly-user-data.dev/bj7qnococpvz1dhdnpyzv9ng/l50aszhz45k2mn5ktl5i0lsy/_OinQBDcTkkpWMOBApwBT/whats-app-image-2024-12-23-at-7.28.04-pm.jpeg" 
                alt="Kabir Saini" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-3 text-gradient">
            Kabir Saini
          </h1>
          
          <h2 ref={headingRef} className="text-xl md:text-2xl font-medium text-light-text/80 mb-8 h-8 typing-animation">
            {/* Content will be filled with typewriter effect */}
          </h2>
          
          <div className="flex justify-center space-x-4 mb-10">
            <a 
              href="https://github.com/KABIR-SAINI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive-btn"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/kabirsaini/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive-btn"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/gamerkabir2009/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive-btn"
            >
              Instagram
            </a>
            <a 
              href="#contact" 
              className="interactive-btn"
            >
              Contact Me
            </a>
          </div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12"
          >
            <a 
              href="#about" 
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-electric-blue/30 text-electric-blue"
            >
              <ArrowDown size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
