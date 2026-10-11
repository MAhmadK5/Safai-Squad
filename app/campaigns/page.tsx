"use client";

import { motion, Variants } from "framer-motion"; // <-- Added Variants import
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpactAndBlogs() {
  // Mock data - You can easily swap this out with a Supabase fetch later!
  const posts = [
    {
      id: 1,
      title: "Margalla Hills Trail 3: 500kg of Plastic Removed",
      excerpt: "Our biggest operation yet. See how 40 volunteers restored one of Islamabad's most iconic hiking trails over a single weekend.",
      date: "Oct 10, 2026",
      category: "Field Report",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=1200&auto=format&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Why Campus Awareness is Our Secret Weapon",
      excerpt: "Cleaning is only half the battle. Here is how we are changing the mindset of university students across the capital.",
      date: "Sep 28, 2026",
      category: "Perspective",
      image: "https://cvyusdvemnxirrtehxoo.supabase.co/storage/v1/object/public/CAMPAIGNS/szabist-awareness.png",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "I-8 Markaz Cleanup: Partnering with Local Vendors",
      excerpt: "How we convinced local shop owners in I-8 to take responsibility for their storefronts and eliminate single-use plastics.",
      date: "Sep 15, 2026",
      category: "Community",
      image: "https://cvyusdvemnxirrtehxoo.supabase.co/storage/v1/object/public/CAMPAIGNS/I8-markaz.png",
      readTime: "5 min read"
    }
  ];

  // Added Variants typing here
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Added Variants typing and 'as const' here
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <main className="min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">
      <Header />

      <div className="flex-grow pt-32 lg:pt-48 pb-24 px-6 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Ground Zero
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-950 dark:text-white mb-6 leading-tight"
          >
            Impact & <span className="text-emerald-500 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-400">Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Field reports, environmental insights, and real-time updates from our operations across Islamabad.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              variants={itemVariants}
              className="group relative flex flex-col bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md rounded-3xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  {post.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-black text-neutral-900 dark:text-white mb-3 leading-snug group-hover:text-emerald-500 transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                
                {/* Simulated Link Button (Can wire to dynamic route later) */}
                <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-widest group/btn cursor-pointer">
                  Read Report
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-500 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}