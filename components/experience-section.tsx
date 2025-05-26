"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="absolute top-20 left-40 w-60 h-60 bg-electric-blue/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <motion.div
          className="max-w-3xl mx-auto futuristic-card p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-space border border-electric-blue/30 flex items-center justify-center">
              <BriefcaseBusiness className="h-8 w-8 text-electric-blue" />
            </div>
          </div>
          
          <h3 className="text-2xl font-medium mb-4 text-gradient">Coming Soon</h3>
          <p className="text-light-text/70 max-w-lg mx-auto">
            I'm currently focused on building my skills and knowledge through education and personal projects. 
            My professional experience journey is just beginning. Stay tuned for updates as I embark on new opportunities!
          </p>
          
          <div className="mt-6 inline-block">
            <div className="h-1 w-32 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
