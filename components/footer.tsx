"use client";

import React from "react";
import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <div className="flex items-center">
              <span className="text-2xl font-outfit font-bold text-gradient mr-2">KS</span>
              <span className="text-light-text/70">| Kabir Saini</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-light-text/60 text-sm">
              © {year} Kabir Saini. All rights reserved.
            </p>

          </motion.div>
        </div>
      </div>
    </footer>
  );
}