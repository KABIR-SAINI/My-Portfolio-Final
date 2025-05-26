"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Skill {
  name: string;
  type: "technical" | "soft";
  level?: number;
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const technicalSkills: Skill[] = [
    { name: "Computer Ethics", type: "technical", level: 90 },
    { name: "Responsible AI", type: "technical", level: 85 },
    { name: "AI Productivity", type: "technical", level: 80 },
    { name: "Artificial Intelligence for Business", type: "technical", level: 75 },
    { name: "Search Engine Technology", type: "technical", level: 85 },
    { name: "Generative AI Tools", type: "technical", level: 90 },
    { name: "GitHub Copilot", type: "technical", level: 85 },
    { name: "Microsoft Office", type: "technical", level: 90 },
    { name: "GitHub", type: "technical", level: 80 },
    { name: "Office 365", type: "technical", level: 85 },
    { name: "Session Hijacking", type: "technical", level: 70 },
    { name: "Microsoft Copilot", type: "technical", level: 90 },
    { name: "Wordpress Development", type: "technical", level: 80 },
    { name: "WordPress", type: "technical", level: 85 },
    { name: "DOS Attacks", type: "technical", level: 70 },
    { name: "Python (Programming Language)", type: "technical", level: 75 },
    { name: "SQL Injection", type: "technical", level: 70 },
    { name: "System Hacking & Malware Usage", type: "technical", level: 65 },
    { name: "Trade Finance", type: "technical", level: 60 },
    { name: "Non-Fungible Tokens (NFTs)", type: "technical", level: 75 },
    { name: "Structured Query Language", type: "technical", level: 70 },
    { name: "Social Engineering", type: "technical", level: 75 },
    { name: "Search Engine Optimization (SEO)", type: "technical", level: 80 },
    { name: "Footprinting & Scanning", type: "technical", level: 70 },
    { name: "Data Science", type: "technical", level: 75 },
    { name: "Data Analysis", type: "technical", level: 75 },
    { name: "NumPy", type: "technical", level: 65 },
    { name: "Cryptography", type: "technical", level: 70 },
    { name: "Coding Experience", type: "technical", level: 80 },
    { name: "Stock Market", type: "technical", level: 70 },
    { name: "Initial Public Offerings (IPO)", type: "technical", level: 65 },
    { name: "User Experience (UX)", type: "technical", level: 75 },
    { name: "User Interface Design", type: "technical", level: 75 },
    { name: "Generative AI", type: "technical", level: 85 },
    { name: "Artificial Intelligence (AI)", type: "technical", level: 85 },
    { name: "Network Administration", type: "technical", level: 70 },
    { name: "System Administration", type: "technical", level: 70 },
    { name: "Network Security", type: "technical", level: 75 }
  ];
  
  const softSkills: Skill[] = [
    { name: "Problem Solving", type: "soft", level: 90 },
    { name: "Critical Thinking", type: "soft", level: 85 },
    { name: "Teamwork", type: "soft", level: 85 },
    { name: "Communication", type: "soft", level: 80 },
    { name: "Adaptability", type: "soft", level: 90 },
    { name: "Time Management", type: "soft", level: 85 }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };
  
  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        
        {/* Technical Skills */}
        <div className="mb-12">
          <motion.h3 
            className="text-xl font-medium mb-6 text-gradient inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technical Skills
          </motion.h3>
          
          <div className="glassmorphic p-6 rounded-lg">
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} variants={item} custom={index}>
                  <div className="skill-tag bg-electric-blue/10 border-electric-blue/40 text-electric-blue hover:bg-electric-blue/20 transition-colors">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Soft Skills */}
        <div>
          <motion.h3 
            className="text-xl font-medium mb-6 text-gradient inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Soft Skills
          </motion.h3>
          
          <div className="glassmorphic p-6 rounded-lg">
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {softSkills.map((skill, index) => (
                <motion.div key={index} variants={item} custom={index}>
                  <div className="skill-tag bg-neon-purple/10 border-neon-purple/40 text-neon-purple hover:bg-neon-purple/20 transition-colors">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
