"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const educationData = [
    {
      id: 1,
      school: "Cambridge School Greater Noida",
      degree: "Class VI-XI",
      years: "5 years+",
      description: "Currently pursuing my education with a focus on technology and computer science."
    }
  ];
  
  return (
    <section id="education" ref={sectionRef} className="py-20 relative">
      <div className="absolute bottom-20 right-40 w-60 h-60 bg-neon-purple/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="futuristic-card p-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-md bg-space border border-electric-blue/30 mr-3">
                    <GraduationCap className="h-5 w-5 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{edu.school}</h3>
                    <p className="text-light-text/70">{edu.degree}</p>
                  </div>
                </div>
                
                <div className="flex items-center mt-3 md:mt-0">
                  <Calendar className="h-4 w-4 text-cyan mr-1" />
                  <span className="text-sm text-light-text/70">{edu.years}</span>
                </div>
              </div>
              
              <p className="text-light-text/80">{edu.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-tag">
                  <span className="inline-block w-2 h-2 rounded-full bg-electric-blue mr-1"></span>
                  Physics
                </span>
                <span className="skill-tag">
                  <span className="inline-block w-2 h-2 rounded-full bg-neon-purple mr-1"></span>
                  Chemistry
                </span>
                <span className="skill-tag">
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan mr-1"></span>
                  Mathematics
                </span>
                <span className="skill-tag">
                  <span className="inline-block w-2 h-2 rounded-full bg-electric-blue mr-1"></span>
                  Computer Science
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
