"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "./ui/dialog";

interface Certificate {
  id: number;
  name: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl: string;
}

export function CertificatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  
  const certificates: Certificate[] = [
    {
      id: 1,
      name: "Foundations of Stock Trading",
      organization: "PW Skills",
      issueDate: "December 2024",
      credentialId: "d78c43a0-7281-4ef6-9d30-43c27f735135",
      credentialUrl: "https://pwskills.com/learn/certificate/d78c43a0-7281-4ef6-9d30-43c27f735135"
    },
    {
      id: 2,
      name: "SQL (Structured Query Language)",
      organization: "Programming Hub",
      issueDate: "April 2024",
      credentialId: "1713956618750",
      credentialUrl: "https://programminghub.io/certificates"
    },
    {
      id: 3,
      name: "NFT (Non-Fungible Tokens)",
      organization: "Programming Hub",
      issueDate: "April 2024",
      credentialId: "1713597154436",
      credentialUrl: "https://programminghub.io/certificates"
    },
    {
      id: 4,
      name: "Basic Python",
      organization: "Programming Hub",
      issueDate: "April 2024",
      credentialId: "1713615736086",
      credentialUrl: "https://programminghub.io/certificates"
    },
    {
      id: 5,
      name: "Python for Data Science, AI & Development",
      organization: "IBM",
      issueDate: "May 2024",
      credentialId: "A64YMT6MAYCE",
      credentialUrl: "https://www.coursera.org/account/accomplishments/records/A64YMT6MAYCE"
    },
    {
      id: 6,
      name: "National Coding League (Regional Qualification)",
      organization: "Scaler School Of Technology",
      issueDate: "May 2024",
      credentialUrl: "https://moonshot.scaler.com/s/sl/zmwzmu_zpQ"
    },
    {
      id: 7,
      name: "Advanced Search Engine Optimization (SEO)",
      organization: "Programming Hub",
      issueDate: "May 2024",
      credentialId: "1715407174913",
      credentialUrl: "https://programminghub.io/certificates"
    },
    {
      id: 8,
      name: "Advance WordPress Development",
      organization: "Programming Hub",
      issueDate: "May 2024",
      credentialId: "1714657203565",
      credentialUrl: "https://programminghub.io/certificates"
    },
    {
      id: 9,
      name: "UI/UX",
      organization: "Programming Hub",
      issueDate: "July 2024",
      credentialId: "1720271443702",
      credentialUrl: "https://programminghub.io/certificates"
    },
    {
      id: 10,
      name: "Learning Microsoft 365 Copilot and Business Chat",
      organization: "LinkedIn",
      issueDate: "December 2024",
      credentialUrl: "https://www.linkedin.com/learning/certificates/aee08c821fc250e48450ecd343c46b95b93c1b77581e39808bdba6392ba84a04"
    },
    {
      id: 11,
      name: "Basics Of Cyber Securities",
      organization: "Udemy",
      issueDate: "December 2024",
      credentialUrl: "https://www.udemy.com/certificate/UC-2ba266a7-54b0-4645-b9ab-15377f955fdc/"
    },
    {
      id: 12,
      name: "What Is Generative AI?",
      organization: "LinkedIn",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/d94d3c456149126773c0cf7cdb045cbc4b6f709510a071cc381032bb2312622b"
    },
    {
      id: 13,
      name: "Streamlining Your Work with Microsoft Copilot",
      organization: "LinkedIn",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/e047cb37f21cbf78905ed3fb3099391a78c4fe4c473ecfebff65534017d8987f"
    },
    {
      id: 14,
      name: "Practical GitHub Project Management and Collaboration",
      organization: "LinkedIn",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/3892c111d06ee601c2d49657c30c196496e5ae962f9005898319fdc5a839e3ae"
    },
    {
      id: 15,
      name: "Practical GitHub Copilot",
      organization: "LinkedIn",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/93b02d8f7ed1088938baf1b26f3f4ffa917aee42e2ee4c2a0048f80169230ea8"
    }
  ];

  // Load more certificates
  const moreLinkedInCertificates: Certificate[] = [
    {
      id: 16,
      name: "Practical GitHub Code Search",
      organization: "LinkedIn",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/890bc703986c2cb209ed9ef9f529f2ab7151ed807eb7979242e64905b60103b0"
    },
    {
      id: 17,
      name: "Practical GitHub Actions",
      organization: "LinkedIn",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/b169c95f7d43d69c8861c2443554e929cd8480860beca6c709b1bee8cee87884"
    },
    {
      id: 18,
      name: "Introduction to Artificial Intelligence",
      organization: "LinkedIn",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/edda84fc6db746b27510b8f3e357184fb441fb44d2caa68fe2957be9a3f83edd"
    },
    {
      id: 19,
      name: "Generative AI: The Evolution of Thoughtful Online Search",
      organization: "LinkedIn",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/4bf1fb6ce2b82ef77880223bf8a14699c8530e8faa8986c51b9d633eb9dbbe82"
    },
    {
      id: 20,
      name: "Ethics in the Age of Generative AI",
      organization: "LinkedIn",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/fa5c8522f5292f7c10f1883557c1d7f5eff39e599eb6970a01caecc26376a26e"
    },
    {
      id: 21,
      name: "Certificate of Completion - Virtual Agents",
      organization: "BeMyApp",
      issueDate: "January 2025",
      credentialId: "c9b708e9-73f3-40d1-b004-ac844ef3d562",
      credentialUrl: "https://www.virtualbadge.io/certificate-validator?credential=c9b708e9-73f3-40d1-b004-ac844ef3d562"
    },
    {
      id: 22,
      name: "Career Essentials in GitHub Professional Certificate",
      organization: "GitHub",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/456e66ff1de8a830af817f991c83df0769d46b29f6d4dbf76bc60a3d0990f1af?trk=share_certificate"
    },
    {
      id: 23,
      name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      organization: "Microsoft",
      issueDate: "January 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/922a9ef309e606c5c621f4335a6e21c8d3a020a4d3169ea656bf989f6a6f1d34"
    },
    {
      id: 24,
      name: "Career Essentials in System Administration by Microsoft and LinkedIn",
      organization: "Microsoft",
      issueDate: "February 2025",
      credentialUrl: "https://www.linkedin.com/learning/certificates/54778a81e510a1cc0afc0825417ef4b3701cc3de05ec50ed264b1c96a928c76e?trk=share_certificate"
    },
    {
      id: 25,
      name: "AI in the classroom",
      organization: "Canva",
      issueDate: "April 2025",
      credentialId: "d3b7cb",
      credentialUrl: "https://canva.com/designschool/certification-award/d3b7cb4e-8605-4199-acfc-674b13a910dc"
    }
  ];
  
  // Combine all certificates
  const allCertificates = [...certificates, ...moreLinkedInCertificates];
  
  const handleCertificateClick = (cert: Certificate) => {
    setSelectedCertificate(cert);
    setOpenDialog(true);
    console.log("Certificate clicked:", cert.name);
  };
  
  // Get organization logos and certificate images
  const getOrganizationLogoUrl = (organization: string) => {
    // I've created individual folders for each certificate in the public directory:
    // public/certificates/1/ - For Certificate #1 photos
    // public/certificates/2/ - For Certificate #2 photos
    // ...
    // public/certificates/25/ - For Certificate #25 photos
    // public/certificates/logos/ - For organization logos
    
    // To add your organization logos:
    // 1. Upload your logos to the public/certificates/logos/ folder
    // 2. Name them like: linkedin.png, microsoft.png, etc.
    // 3. Uncomment and update the code below to use your logos
    
    // For example:
    // const orgMap: {[key: string]: string} = {
    //   "LinkedIn": "/certificates/logos/linkedin.png",
    //   "Microsoft": "/certificates/logos/microsoft.png",
    //   ...
    // };
    
    // Currently using placeholder images:
    const orgMap: {[key: string]: string} = {
      "LinkedIn": "https://placehold.co/100/00A3FF/FFFFFF?text=LinkedIn",
      "Microsoft": "https://placehold.co/100/00A3FF/FFFFFF?text=Microsoft",
      "GitHub": "https://placehold.co/100/00A3FF/FFFFFF?text=GitHub",
      "IBM": "https://placehold.co/100/00A3FF/FFFFFF?text=IBM",
      "Udemy": "https://placehold.co/100/00A3FF/FFFFFF?text=Udemy",
      "Programming Hub": "https://placehold.co/100/00A3FF/FFFFFF?text=ProgrammingHub",
      "PW Skills": "https://placehold.co/100/00A3FF/FFFFFF?text=PWSkills",
      "Scaler School Of Technology": "https://placehold.co/100/00A3FF/FFFFFF?text=Scaler",
      "BeMyApp": "https://placehold.co/100/00A3FF/FFFFFF?text=BeMyApp",
      "Canva": "https://placehold.co/100/00A3FF/FFFFFF?text=Canva"
    };
    
    return orgMap[organization] || "https://placehold.co/100/00A3FF/FFFFFF?text=Certificate";
  };
  

  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(allCertificates.length / itemsPerPage);
  const paginatedCertificates = allCertificates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <section id="certificates" ref={sectionRef} className="py-20 relative">
      <div className="absolute top-40 right-20 w-72 h-72 bg-cyan/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Licenses & Certifications
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {paginatedCertificates.map((cert) => (
            <motion.div key={cert.id} variants={item} whileHover={{ y: -5 }}>
              <div 
                className="certificate-card cursor-pointer h-full flex flex-col"
                onClick={() => handleCertificateClick(cert)}
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
                    <img 
                      src={getOrganizationLogoUrl(cert.organization)} 
                      alt={cert.organization} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-electric-blue truncate">{cert.name}</h3>
                    <p className="text-sm text-light-text/70">{cert.organization}</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <p className="text-sm text-light-text/60 mb-2">Issued {cert.issueDate}</p>
                  
                  <div className="flex justify-between items-center">
                    {cert.credentialId && (
                      <p className="text-xs text-light-text/50 truncate">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-electric-blue hover:underline text-sm flex items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} className="mr-1" /> View
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-md border border-electric-blue/30 text-electric-blue disabled:opacity-50"
              >
                <ChevronLeft size={18} />
              </button>
              
              <div className="text-light-text/80">
                Page {currentPage} of {totalPages}
              </div>
              
              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md border border-electric-blue/30 text-electric-blue disabled:opacity-50"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Certificate Detail Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="glassmorphic max-w-3xl">
          {selectedCertificate && (
            <div className="p-4">
              <DialogTitle className="sr-only">{selectedCertificate.name} Details</DialogTitle>
              <DialogDescription className="sr-only">Details about {selectedCertificate.name} certificate, including issue date, organization, and credential information.</DialogDescription>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-md bg-space border border-electric-blue/30 mr-3">
                    <Award className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-light-text/70">{selectedCertificate.organization}</p>
                  </div>
                </div>
                
                <DialogClose className="rounded-full p-1 hover:bg-white/10">
                  <X className="h-5 w-5" />
                </DialogClose>
              </div>
              

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-md bg-space/50 border border-electric-blue/20">
                  <p className="text-sm text-light-text/60 mb-1">Issued Date</p>
                  <p className="text-light-text">{selectedCertificate.issueDate}</p>
                </div>
                
                {selectedCertificate.credentialId && (
                  <div className="p-3 rounded-md bg-space/50 border border-electric-blue/20">
                    <p className="text-sm text-light-text/60 mb-1">Credential ID</p>
                    <p className="text-light-text">{selectedCertificate.credentialId}</p>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end">
                <a 
                  href={selectedCertificate.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 text-white py-2 px-4 rounded-md inline-flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" /> View Credential
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}