"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, MessageCircle, Share2, Image, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface Post {
  id: number;
  content: string;
  date: string;
  likes: number;
  comments: number;
  image?: string;
  liked: boolean;
}

export function PostsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      content: "Excited to share that I've qualified for the North/South Regional Semi-finals of the National Coding League '24! Even more thrilling, I'm among the top 100 out of 5,275 teams! 🚀 #CodingCompetition #TechJourney",
      date: "May 20, 2025",
      likes: 45,
      comments: 7,
      liked: false
    },
    {
      id: 2,
      content: "Just completed the Career Essentials in Generative AI by Microsoft and LinkedIn! Learning about the intersection of AI and business has been fascinating. Looking forward to applying these insights in my next project. #AI #LearningJourney",
      date: "Apr 15, 2025",
      likes: 32,
      comments: 5,
      image: "https://placehold.co/600x400/00A3FF/FFFFFF?text=AI+Certificate+Completion",
      liked: false
    },
    {
      id: 3,
      content: "Thrilled to have secured 1st position in the App Making competition at SUPERNOVA 2023! Creating innovative applications with my team was an incredible experience. #AppDevelopment #Innovation",
      date: "Feb 28, 2025",
      likes: 67,
      comments: 12,
      liked: false
    }
  ]);
  
  const [newPostContent, setNewPostContent] = useState("");
  
  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        };
      }
      return post;
    }));
    console.log(`Post ${postId} liked/unliked`);
  };
  
  const handleCreatePost = () => {
    if (newPostContent.trim() === "") return;
    
    const newPost: Post = {
      id: Date.now(),
      content: newPostContent,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      likes: 0,
      comments: 0,
      liked: false
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent("");
    console.log("New post created:", newPost);
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
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <section id="posts" ref={sectionRef} className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Posts & Activity
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {/* Create post area */}
          <motion.div 
            className="futuristic-card p-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Textarea
              placeholder="Share your thoughts, projects or achievements..."
              className="resize-none bg-space border-electric-blue/20 focus:border-electric-blue mb-3"
              rows={3}
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="text-electric-blue border-electric-blue/30 hover:bg-electric-blue/10">
                  <Image size={16} className="mr-1" /> Media
                </Button>
              </div>
              <Button 
                onClick={handleCreatePost}
                disabled={newPostContent.trim() === ""}
                className="bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 transition-opacity"
              >
                <Send size={16} className="mr-2" /> Post
              </Button>
            </div>
          </motion.div>
          
          {/* Posts feed */}
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {posts.map((post) => (
              <motion.div 
                key={post.id} 
                className="post-card"
                variants={item}
              >
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center text-white font-medium text-sm mr-3">
                    KS
                  </div>
                  <div>
                    <h4 className="font-medium">Kabir Saini</h4>
                    <p className="text-sm text-light-text/60">{post.date}</p>
                  </div>
                </div>
                
                <p className="mb-4 text-light-text/90">{post.content}</p>
                
                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img src={post.image} alt="Post attachment" className="w-full h-auto" />
                  </div>
                )}
                
                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <button 
                    className={`flex items-center space-x-1 ${post.liked ? 'text-red-500' : 'text-light-text/60 hover:text-light-text'} transition-colors`}
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart size={18} fill={post.liked ? "currentColor" : "none"} />
                    <span>{post.likes}</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-light-text/60 hover:text-light-text transition-colors">
                    <MessageCircle size={18} />
                    <span>{post.comments}</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-light-text/60 hover:text-light-text transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
