"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, MapPin, Mail, Phone } from "lucide-react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const aboutText = `Hey there! I'm Kabir Saini, a 16-year-old student currently navigating the exciting world of 11th grade. With a deep-rooted passion for technology, I'm fascinated by the dynamic realms of IT, artificial intelligence (AI), and computer science. Whether I'm participating in national-level coding competitions or diving into certification courses, I'm constantly expanding my expertise and honing my skills.

From delving into AI algorithms to mastering programming languages, every challenge fuels my relentless pursuit of innovation. I'm driven by the belief that technology has the power to transform lives and solve complex problems. Despite my age, I'm eager to contribute to meaningful advancements in technology's ever-evolving landscape.

As I continue my journey through high school, my goal is to inspire others to explore the endless possibilities of technology and join me in shaping the future. Let's connect and collaborate to make a positive impact in the world through technology!`;
  
  const contactInfo = [
    { icon: <Mail className="h-5 w-5 text-electric-blue" />, label: "Email", value: "gamerkabir2009@gmail.com" },
    { icon: <MapPin className="h-5 w-5 text-electric-blue" />, label: "Location", value: "Noida, Uttar Pradesh, India" },
    { icon: <Phone className="h-5 w-5 text-electric-blue" />, label: "Phone", value: "8076574###" },
  ];
  
  const paragraphs = aboutText.split('\n\n');
  
  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="futuristic-card p-6">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-electric-blue mr-2" />
                <h3 className="text-xl font-medium">Personal Info</h3>
              </div>
              
              <div className="space-y-4">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-light-text/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="futuristic-card p-6 h-full">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 rounded-md bg-space border border-electric-blue/30 mr-3">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-light-text/60">{item.label}</p>
                      <p className="text-light-text">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Connect With Me</h3>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/KABIR-SAINI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-space border border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kabirsaini/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-space border border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/gamerkabir2009/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-space border border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
