"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Calendar, MapPin, ExternalLink, X, Image } from "lucide-react";
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "./ui/dialog";

interface Award {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  photoCount: number; // Number of photos for this award
  image?: string;
}

export function AwardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  
  const awards: Award[] = [
    {
      id: 1,
      title: "CHUDAMANI RATNAM AWARD",
      organization: "The Cambridge Schools",
      date: "Oct 2023",
      description: "Participated in the CHUDAMANI RATNAM AWARD, secured 2nd position in prelims at Cambridge School Greater Noida, ranked 4th in finals at Cambridge School Indirapuram. Won a cash prize for outstanding innovation in science exhibition.",
      photoCount: 5
    },
    {
      id: 2,
      title: "TECHNO TRIVIA SHOWDOWN - IT QUIZ",
      organization: "Khaitan School Noida",
      date: "Nov 2023",
      description: "I am thrilled to announce that I clinched the FIRST POSITION in the exhilarating TECHNO TRIVIA SHOWDOWN - IT QUIZ, part of the prestigious PANCHATATVAM '23 event at Khaitan Fest 2023-24. Competing in this intensive IT quiz at Khaitan School, Noida, was an incredible experience, challenging my knowledge and passion for technology. Grateful for the opportunity to showcase my skills and looking forward to continuing my journey of innovation and excellence in the dynamic field of IT.",
      photoCount: 3
    },
    {
      id: 3,
      title: "App Making - Code Wars",
      organization: "Vishwa Bharti School Greater Noida",
      date: "Oct 2023",
      description: "I'm excited to announce that I clinched the FIRST POSITION in the thrilling App Making - Code Wars competition at SUPERNOVA 2023, hosted at Vishwa Bharti School, Greater Noida. Collaborating with fellow innovators to create cutting-edge applications was an inspiring experience, showcasing our collective talent and dedication to technological advancement. Grateful for the opportunity to lead in this dynamic field and looking forward to continued growth and innovation in app development.",
      photoCount: 2
    },
    {
      id: 4,
      title: "IT Quiz, Part of TECHNOLYMPICS 23",
      organization: "Cambridge School Noida",
      date: "September 2023",
      description: "I'm proud to announce my achievement of securing the SECOND POSITION in the fiercely competitive Battle of Brains - a challenging IT quiz, part of TECHNOLYMPICS 23', held at Cambridge School, Noida. Engaging in this intellectual showdown was an exhilarating experience, testing my knowledge and strategic thinking in the realm of technology. Grateful for the opportunity to compete among brilliant minds and looking forward to continued growth and success in the IT domain.",
      photoCount: 3
    },
    {
      id: 5,
      title: "Innovate4Change (App Making Competition)",
      organization: "Lotus Valley International School, Greater Noida West",
      date: "August 2024",
      description: "Excited to share that I secured the Second Position in the Innovate4Change (App Making Competition) held by Lotus Valley International School, Greater Noida West! Competing in this event was a fantastic experience where we were challenged to develop AI prototypes addressing important Sustainable Development Goals (SDGs) such as Good Health and Well-being, Quality Education, and Climate Action.",
      photoCount: 4
    },
    {
      id: 6,
      title: "NARRATIVE PHOTOGRAPHY",
      organization: "Cambridge School Greater Noida",
      date: "Aug 2023",
      description: "I'm excited to share my participation in the captivating NARRATIVE PHOTOGRAPHY event hosted at Cambridge School, Greater Noida. It was an enriching experience to delve into the art of storytelling through photography, exploring narratives that captivate and inspire. Grateful for the opportunity to immerse myself in this creative journey and looking forward to continuing to explore the world through the lens of my camera.",
      photoCount: 1
    },
    {
      id: 7,
      title: "Appathon - Annual Science and Technology Fest",
      organization: "Cambridge School Srinivaspuri",
      date: "October 2024",
      description: "I'm thrilled to share that I participated and won in the Inter-school Innovation Annual Science and Technology Fest, held at Cambridge School Srinivaspuri. Competing in the Appathon event, I secured 1st position in both the prelims and final rounds! The Appathon challenged us to design and develop innovative applications aimed at enhancing digital health and well-being. It was an amazing experience to showcase my creativity, problem-solving abilities, and technical expertise in app development. This achievement has inspired me to keep exploring tech solutions for real-world problems.",
      photoCount: 4
    },
    {
      id: 8,
      title: "THE BOUT GSP's Annual Quiz on Climate Change",
      organization: "Centre for Science and Environment at the Indian Habitat Center",
      date: "January 2024",
      description: "I had the privilege of participating in the Green School Program hosted by the Centre for Science and Environment at the Indian Habitat Center. It was an enriching experience engaging with environmental issues and solutions. I also took part in 'THE BOUT GSP's Annual Quiz on Climate Change,' which further deepened my understanding of climate issues. Grateful for the opportunity to contribute to sustainability efforts and looking forward to continuing my journey towards a greener future.",
      photoCount: 3
    },
    {
      id: 9,
      title: "National Coding League '24",
      organization: "Scaler School of Technology",
      date: "May 2024",
      description: "I'm thrilled to announce that I've qualified for the North/South Regional Semi-finals of the National Coding League '24, organized by Scaler School of Technology - The Ultimate Tech Showdown for Young Coders! Even more exciting, I am among the top 100 out of 5,275 teams! This opportunity is a huge milestone in my coding journey, and I'm excited to compete alongside some of the brightest young minds in the field. The competition has been intense, and reaching this stage is a testament to my hard work and passion for technology.",
      photoCount: 2
    },
    {
      id: 10,
      title: "Verve'23 Technika QuizIT",
      organization: "Cambridge School Indirapuram",
      date: "August 2023",
      description: "I am thrilled to share that I emerged victorious at the prestigious Verve'23 Technika QuizIT, a highly competitive IT quiz held at Cambridge School, Indirapuram. It was an honor to showcase my knowledge and skills in the field of information technology, and I am grateful for the opportunity to excel in such a challenging environment. Looking forward to continuing my journey of learning and growth in the tech world!",
      photoCount: 2
    }
  ];
  
  const handleAwardClick = (award: Award) => {
    setSelectedAward(award);
    setOpenDialog(true);
    console.log("Award clicked:", award.title);
  };
  
  // Get award images from the public directory
  const getAwardImageUrl = (id: number) => {
    // Format the ID with leading zero for folder names
    const formattedId = id < 10 ? `0${id}` : id;
    
    // Try to return from the correct folder structure if it exists
    try {
      return `/images/awards/${formattedId}-${getAwardFolderName(id)}/award.jpg`;
    } catch (e) {
      // Fallback to placeholder
      return `https://placehold.co/800x600/00A3FF/FFFFFF?text=Award+${id}+Image`;
    }
  };
  
  // Helper function to get folder name based on award ID
  const getAwardFolderName = (id: number): string => {
    switch(id) {
      case 1: return 'chudamani-ratnam';
      case 2: return 'techno-trivia';
      case 3: return 'app-making-code-wars';
      case 4: return 'it-quiz-technolympics';
      case 5: return 'innovate4change';
      case 6: return 'narrative-photography';
      case 7: return 'appathon';
      case 8: return 'bout-gsp-climate';
      case 9: return 'national-coding-league';
      case 10: return 'verve-technika';
      default: return `award-${id}`;
    }
  };
  
  // Get additional award images
  const getAdditionalAwardImages = (id: number, index: number) => {
    // Format the ID with leading zero for folder names
    const formattedId = id < 10 ? `0${id}` : id;
    
    try {
      // For photo indices starting from 1
      return `/images/awards/${formattedId}-${getAwardFolderName(id)}/photo${index}.jpg`;
    } catch (e) {
      // Fallback to placeholder
      return `https://placehold.co/800x600/00A3FF/FFFFFF?text=Award+${id}+Photo+${index}`;
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="awards" ref={sectionRef} className="py-20 relative">
      <div className="absolute top-20 left-20 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Honors & Awards
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {awards.map((award) => (
            <motion.div 
              key={award.id} 
              variants={item}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <div 
                className="futuristic-card p-6 h-full flex flex-col cursor-pointer"
                onClick={() => handleAwardClick(award)}
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-md bg-space border border-neon-purple/30 mr-3">
                    <Trophy className="h-5 w-5 text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neon-purple">{award.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center text-xs text-light-text/60">
                        <MapPin className="h-3 w-3 mr-1" />
                        {award.organization}
                      </div>
                      <div className="flex items-center text-xs text-light-text/60">
                        <Calendar className="h-3 w-3 mr-1" />
                        {award.date}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-light-text/80 line-clamp-3">
                  {award.description}
                </p>
                
                <div className="mt-4 text-electric-blue text-sm flex justify-end mt-auto">
                  View Details
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Award Detail Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="glassmorphic max-w-4xl">
          {selectedAward && (
            <div className="p-4">
              <DialogTitle className="text-xl font-bold mb-2 text-gradient">{selectedAward.title}</DialogTitle>
              <DialogDescription className="mb-4 text-light-text/80">Award details from {selectedAward.organization}, {selectedAward.date}</DialogDescription>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-md bg-space border border-neon-purple/30 mr-3">
                    <Trophy className="h-6 w-6 text-neon-purple" />
                  </div>
                  <div>
                    <div className="flex items-center flex-wrap gap-3 mt-1">
                      <div className="flex items-center text-sm text-light-text/60">
                        <MapPin className="h-4 w-4 mr-1" />
                        {selectedAward.organization}
                      </div>
                      <div className="flex items-center text-sm text-light-text/60">
                        <Calendar className="h-4 w-4 mr-1" />
                        {selectedAward.date}
                      </div>
                    </div>
                  </div>
                </div>
                
                <DialogClose className="rounded-full p-1 hover:bg-white/10">
                  <X className="h-5 w-5" />
                </DialogClose>
              </div>
              
              <div className="mb-6 p-4 rounded-lg bg-space/50 border border-neon-purple/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="aspect-video rounded-md overflow-hidden flex items-center justify-center bg-gradient-to-br from-electric-blue/10 to-neon-purple/10">
                    <img 
                      src={getAwardImageUrl(selectedAward.id)} 
                      alt={selectedAward.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/800x600/00A3FF/FFFFFF?text=Award+${selectedAward.id}+Image`;
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-gradient">Achievement Details</h4>
                      <p className="text-light-text/80">{selectedAward.description}</p>
                    </div>
                    
                    {/* Additional images */}
                    <div className="mt-4">
                      <h5 className="text-sm font-medium mb-2 text-light-text/60">Additional Photos</h5>
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: selectedAward.photoCount }).map((_, index) => (
                          <div 
                            key={index + 1}
                            className="w-16 h-16 rounded-md overflow-hidden flex items-center justify-center bg-space border border-electric-blue/20"
                            onClick={() => window.open(getAdditionalAwardImages(selectedAward.id, index + 1), '_blank')}
                          >
                            <img 
                              src={getAdditionalAwardImages(selectedAward.id, index + 1)} 
                              alt={`${selectedAward.title} photo ${index + 1}`}
                              className="w-full h-full object-cover cursor-pointer"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://placehold.co/400x400/00A3FF/FFFFFF?text=Photo+${index + 1}`;
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-light-text/40 mt-2">
                        Add photos to <code>/public/images/awards/{selectedAward.id < 10 ? '0' + selectedAward.id : selectedAward.id}-{getAwardFolderName(selectedAward.id)}/</code> folder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  className="bg-gradient-to-r from-neon-purple to-electric-blue hover:opacity-90 text-white py-2 px-4 rounded-md inline-flex items-center"
                  onClick={() => setOpenDialog(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}