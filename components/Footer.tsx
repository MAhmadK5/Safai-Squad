
"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  // Using 'as const' forces TypeScript to accept the specific ease string
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" as const, staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <footer className="relative w-full border-t border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-950 pt-24 pb-8 overflow-hidden mt-auto z-10 transition-colors duration-500">
      
      {/* Ambient Glowing Orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-400/10 dark:bg-emerald-900/10 rounded-[100%] blur-[120px] pointer-events-none -z-10"></div>

      {/* Massive Background Watermark */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center text-[10vw] font-black text-neutral-200/40 dark:text-neutral-900/50 pointer-events-none -z-20 select-none tracking-tighter whitespace-nowrap">
        SAFAI SQUAD
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg group-hover:border-emerald-400/50 transition-colors duration-500">
                <Image 
                  src="/logo.png" 
                  alt="Safai Squad" 
                  width={48} 
                  height={48} 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="flex items-center">
                <span className="text-xl font-black tracking-[0.15em] text-neutral-900 dark:text-white">SAFAI</span>
                <span className="text-xl font-light tracking-[0.15em] text-emerald-500 ml-1">SQUAD</span>
              </div>
            </Link>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              A dedicated team committed to eradicating Islamabad's waste crisis. Action over words. Zero waste. Maximum impact.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-start-7 flex flex-col">
            <h3 className="text-neutral-900 dark:text-white font-black uppercase tracking-[0.2em] mb-6 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Explore
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-neutral-500 dark:text-neutral-400 font-bold tracking-wide">
              {[
                { name: "Mission", path: "/mission" },
                { name: "Our Story", path: "/our-story" },
                { name: "The Team", path: "/team" },
                { name: "Campaigns", path: "/campaigns" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group inline-flex items-center hover:text-neutral-950 dark:hover:text-white transition-colors duration-300">
                    <span className="w-0 group-hover:w-3 h-[2px] bg-emerald-500 mr-0 group-hover:mr-3 transition-all duration-300 ease-out"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social / Instagram Column */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-3 flex flex-col md:items-end text-left md:text-right">
            <h3 className="text-neutral-900 dark:text-white font-black uppercase tracking-[0.2em] mb-6 text-xs flex items-center justify-start md:justify-end gap-2 w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 md:hidden"></span>
              Follow the Mission
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6 leading-relaxed font-medium">
              See real-time ground operations and transformations on our Instagram.
            </p>
            
            <a 
              href="https://instagram.com/safaisquad.isb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-300"></span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-500 transition-colors duration-300 relative z-10"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span className="text-sm font-bold text-neutral-900 dark:text-white tracking-widest uppercase relative z-10">
                Instagram
              </span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants} 
          className="border-t border-neutral-200 dark:border-neutral-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase"
        >
          <p>&copy; {year} SAFAI SQUAD.</p>
          <p className="flex items-center gap-1.5 flex-wrap justify-center">
            BUILT BY
            <a 
              href= "https://www.linkedin.com/in/m-ahmad-khalid-bb0514377/?isSelfProfile=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300"
            >
              AHMAD KHALID
            </a>
            <span className="text-emerald-500/30 mx-1">|</span> 
            <span className="text-[10px] text-neutral-500 tracking-[0.2em]">TECH HEAD</span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}