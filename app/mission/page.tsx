"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

// Cinematic staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function Mission() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-500">
      <Header />
      
      <div className="flex-grow pt-32 lg:pt-48 pb-20 px-6 max-w-6xl mx-auto w-full relative flex flex-col justify-center">
        
        {/* Dynamic Ambient Background Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-400/10 dark:bg-emerald-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-emerald-500/5 dark:bg-emerald-800/10 rounded-full blur-[120px] -z-10 pointer-events-none"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column: The Manifesto Text */}
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
                The Directive
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              <span className="block text-neutral-950 dark:text-white">Beyond</span>
              <span className="block text-neutral-400 dark:text-neutral-600">The Surface.</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="space-y-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed max-w-2xl">
              <p>
                We are not a campaign. We are a continuous operation. Our objective is to execute targeted environmental restorations across Islamabad, reclaiming our public spaces from neglect.
              </p>
              <p>
                We don't just pick up trash; we shift the culture. By setting an unapologetic standard for zero waste, we are building a legacy of action, ownership, and environmental integrity on every trail and street we touch.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="pt-10 mt-10 border-t border-neutral-200 dark:border-neutral-800/50">
              <Link href="/our-story" className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-widest text-neutral-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                <span>Discover the Squad</span>
                <span className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors border border-neutral-200 dark:border-neutral-800 group-hover:border-emerald-500/30 group-hover:translate-x-2 duration-300">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Floating Core Value Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-emerald-500/30 via-transparent to-neutral-200 dark:to-neutral-800 overflow-hidden shadow-2xl"
            >
              <div className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-2xl p-10 md:p-14 rounded-[2.5rem] flex flex-col justify-center items-center text-center relative border border-white/50 dark:border-white/5">
                
                {/* Decorative Quote Mark */}
                <div className="absolute top-6 left-6 text-6xl text-emerald-500/20 dark:text-emerald-500/10 font-serif leading-none select-none">
                  "
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-neutral-950 dark:text-white tracking-tight mb-4 z-10">
                  Safai Nisf <br/>
                  <span className="text-emerald-500 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-400">
                    Imaan Hai
                  </span>
                </h2>
                
                <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold z-10">
                  ( Cleanliness is half of faith )
                </p>

                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none rounded-[2.5rem]"></div>
              </div>
            </motion.div>

            {/* Decorative background typography for the right column */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[10rem] font-black text-neutral-100 dark:text-neutral-900/50 pointer-events-none -z-10 select-none tracking-tighter">
              01
            </div>
          </motion.div>
          
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}