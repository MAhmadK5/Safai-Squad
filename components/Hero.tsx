"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden w-full">
      
      {/* Background ambient glow effect */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Left Column: Text & Event Card */}
      <motion.div 
        className="w-full lg:w-1/2 flex flex-col items-start text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          A cleaner, greener <br />
          <span className="text-emerald-500 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            tomorrow.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-lg mb-10">
          Youth in action. Zero waste. Maximum impact. We are a community-led force dedicated to tackling Islamabad's waste crisis head-on.
        </p>

        {/* Glassmorphism Highlight Card */}
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-emerald-500/30 to-neutral-800 w-full max-w-md">
          <div className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 flex flex-col items-start border border-white/5 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Upcoming Event
            </div>
            <h2 className="text-2xl font-black mb-2 text-white">Islamabad Cleanup Drive</h2>
            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
              Gear up and step out. It's time to reclaim our streets. No more overflowing trash—just community power in action.
            </p>
            <Link
              href="/register" 
              className="w-full py-3.5 bg-white text-neutral-950 hover:bg-neutral-200 transition-colors rounded-xl font-bold text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Volunteer Now
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Hero Image & Badges */}
      <motion.div 
        className="w-full lg:w-1/2 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* Glow behind image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent blur-3xl rounded-full transform translate-x-10 translate-y-10"></div>
        
        {/* Main Image Container */}
        <div className="relative w-full aspect-[4/5] md:aspect-[1/1] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
          {/* Replace '/hero.jpg' with your actual image file in the public folder */}
          <Image 
            src="/hero.jpg" 
            alt="Safai Squad cleaning in action"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700 ease-out opacity-80 hover:opacity-100"
            priority
          />
          {/* Gradient overlay to ensure image blends well with dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Floating Badge 1 - Top Left */}
        <motion.div 
          className="absolute -top-6 -left-6 md:top-10 md:-left-10 bg-neutral-800/90 backdrop-blur-md border border-neutral-700 p-4 rounded-2xl shadow-xl flex items-center gap-3"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            🌱
          </div>
          <div>
            <p className="text-xs text-neutral-400 font-medium">Community Impact</p>
            <p className="text-white font-black">Zero Waste Goal</p>
          </div>
        </motion.div>

        {/* Floating Badge 2 - Bottom Right */}
        <motion.div 
          className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-neutral-800/90 backdrop-blur-md border border-neutral-700 p-4 rounded-2xl shadow-xl flex items-center gap-3"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-neutral-600 border-2 border-neutral-800"></div>
            <div className="w-8 h-8 rounded-full bg-neutral-500 border-2 border-neutral-800"></div>
            <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-neutral-800 flex items-center justify-center text-[10px] font-bold text-white">+50</div>
          </div>
          <div>
            <p className="text-white font-black text-sm">Volunteers</p>
            <p className="text-xs text-emerald-400 font-medium">Already joined</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}