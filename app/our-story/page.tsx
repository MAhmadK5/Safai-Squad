"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-500">
      <Header />
      
      <div className="flex-grow pt-32 lg:pt-48 pb-20 px-6 max-w-6xl mx-auto w-full relative">
        
        {/* Cinematic Ambient Backgrounds */}
        <div className="absolute top-20 left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-400/10 dark:bg-emerald-900/15 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Background Typography Watermark */}
          <div className="absolute top-10 right-0 text-[6rem] md:text-[14rem] font-black text-neutral-100 dark:text-neutral-900/40 pointer-events-none -z-10 select-none tracking-tighter overflow-hidden">
            ORIGINS
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-500/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Community Initiative
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-12 text-neutral-950 dark:text-white leading-[0.9]">
              Started by students. <br/>
              <span className="text-emerald-500 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-400">Built for the city.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
              <p>
                Safai Squad was initiated as a grassroots community service project by a dedicated group of students from <strong className="text-neutral-900 dark:text-white">SZABIST Islamabad</strong>. We looked at our city's streets, trails, and public spaces suffocating under a growing waste crisis, and decided that waiting for authorities to fix it was no longer an option.
              </p>
              <p>
                What started as a university project quickly evolved into a fully operational youth-led movement. We combined our diverse skill sets—from tech and development to field operations and community outreach—to build a system that empowers locals to take their environment back.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}