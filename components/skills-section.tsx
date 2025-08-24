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
    { name: "💻 Programming & Development", type: "technical" },
    { name: "🧰 Tools & Platforms", type: "technical" },
    { name: "📊 Data & Analytics", type: "technical" },
    { name: "🤖 AI, ML & Emerging Tech", type: "technical" },
    { name: "🛡️ Cybersecurity", type: "technical" },
    { name: "🌐 Digital & Marketing", type: "technical" },
    { name: "🎨 UI/UX & Design", type: "technical" },
    { name: "☁️ Cloud & DevOps", type: "technical" },
    { name: "📈 Finance & Trading", type: "technical" },
    { name: "🧠 Developer Mindset & Principles", type: "technical" },
    { name: "🎮 Game Development & Design", type: "technical" },
    { name: "🧬 Scientific & Research Computing", type: "technical" },
    { name: "🧪 Automation & Scripting", type: "technical" },
    { name: "⚙️ Hardware & IoT", type: "technical" },
    { name: "📱 Mobile App Development", type: "technical" },
    { name: "🧾 Documentation & Technical Writing", type: "technical" },
    { name: "🔗 Web3 & Blockchain", type: "technical" },
    { name: "📚 EdTech & E-Learning Tools", type: "technical" },
    { name: "🗃️ Database Management", type: "technical" },
    { name: "🛰️ Networking & System Administration", type: "technical" }
  ];

  const softSkills: Skill[] = [
    { name: "🗣️ Communication Skills", type: "soft" },
    { name: "👥 Teamwork & Collaboration", type: "soft" },
    { name: "🧠 Critical Thinking & Problem Solving", type: "soft" },
    { name: "⏱️ Time Management", type: "soft" },
    { name: "🎯 Goal Setting & Self-Motivation", type: "soft" },
    { name: "🎭 Emotional Intelligence", type: "soft" },
    { name: "🤝 Leadership & Responsibility", type: "soft" },
    { name: "🔄 Adaptability & Flexibility", type: "soft" },
    { name: "🧘 Stress Management", type: "soft" },
    { name: "💡 Creativity & Innovation", type: "soft" },
    { name: "👨‍🏫 Public Speaking & Presentation", type: "soft" },
    { name: "🧭 Decision-Making Skills", type: "soft" },
    { name: "📚 Continuous Learning Attitude", type: "soft" },
    { name: "🔍 Attention to Detail", type: "soft" },
    { name: "🤗 Empathy & Social Skills", type: "soft" },
    { name: "🧩 Conflict Resolution", type: "soft" },
    { name: "🧺 Organizational Skills", type: "soft" },
    { name: "💬 Active Listening", type: "soft" },
    { name: "🚀 Growth Mindset", type: "soft" }
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