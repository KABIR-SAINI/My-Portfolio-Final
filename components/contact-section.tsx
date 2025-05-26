"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, Linkedin, Github, Instagram } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: "loading", message: "" });
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus({
        status: "success",
        message: "Message sent successfully! Thank you for reaching out."
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };
  
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />, 
      url: "https://www.linkedin.com/in/kabirsaini/",
      color: "bg-[#0A66C2] hover:bg-[#0A66C2]/80"
    },
    { 
      name: "GitHub", 
      icon: <Github className="h-5 w-5" />, 
      url: "https://github.com/KABIR-SAINI",
      color: "bg-[#24292F] hover:bg-[#24292F]/80"
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="h-5 w-5" />, 
      url: "https://www.instagram.com/gamerkabir2009/",
      color: "bg-[#E4405F] hover:bg-[#E4405F]/80"
    },
    { 
      name: "Email", 
      icon: <Mail className="h-5 w-5" />, 
      url: "mailto:gamerkabir2009@gmail.com",
      color: "bg-[#EA4335] hover:bg-[#EA4335]/80"
    }
  ];
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="absolute bottom-0 right-0 w-full h-80 bg-gradient-to-t from-electric-blue/10 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="futuristic-card p-6">
              <h3 className="text-xl font-medium mb-6 text-gradient">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="bg-space border-electric-blue/20 focus:border-electric-blue"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-space border-electric-blue/20 focus:border-electric-blue"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Hello, I'd like to connect with you about..."
                      className="resize-none bg-space border-electric-blue/20 focus:border-electric-blue min-h-[150px]"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 transition-opacity flex items-center justify-center"
                    disabled={formStatus.status === "loading"}
                  >
                    {formStatus.status === "loading" ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                  
                  {formStatus.status === "success" && (
                    <div className="p-3 rounded-md bg-green-500/10 border border-green-500/30 text-green-500 text-sm">
                      {formStatus.message}
                    </div>
                  )}
                  
                  {formStatus.status === "error" && (
                    <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
                      {formStatus.message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:pl-6"
          >
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-gradient">Connect With Me</h3>
              <p className="text-light-text/70 mb-6">
                Feel free to reach out through any of the platforms below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.              
              </p>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} text-white px-4 py-2 rounded-md flex items-center transition-all duration-300`}
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="futuristic-card p-6">
              <h3 className="text-xl font-medium mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-light-text/60 mb-1">Email</p>
                  <p className="text-light-text font-medium">gamerkabir2009@gmail.com</p>
                </div>
                
                <div>
                  <p className="text-sm text-light-text/60 mb-1">Location</p>
                  <p className="text-light-text font-medium">Noida, Uttar Pradesh, India</p>
                </div>
                
                <div>
                  <p className="text-sm text-light-text/60 mb-1">Response Time</p>
                  <p className="text-light-text">I typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
