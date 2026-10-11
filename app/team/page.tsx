"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Team() {
  const team = [
    { 
      name: "Muhammad Ahmad Khalid", 
      role: "Lead Developer & Tech Head", 
      image: "/ahmad.png",
      description: "Architecting the digital platform, managing our web infrastructure, and streamlining operational systems."
    },
    { 
      name: "Umer Azeem", 
      role: "Operations & Field Commander", 
      image: "/team-ua.png",
      description: "Coordinating on-ground logistics, mapping cleanup zones, and ensuring the safety and efficiency of all field drives."
    },
    { 
      name: "Faseeh Ur Rehman", 
      role: "Community Outreach Director", 
      image: "/faseeh.jpeg",
      description: "Building partnerships with local organizations, mobilizing youth, and spreading environmental awareness across Islamabad."
    },
    { 
      name: "Manahil Saheem", 
      role: "Head of Planning", 
      image: "/team-ms.png",
      description: "Structuring project timelines, managing resources, and ensuring every cleanup drive is meticulously organized."
    },
    { 
      name: "Abdul Moeed Sajjad", 
      role: "Marketing Coordinator", 
      image: "/team-as.png",
      description: "Leading digital campaigns, managing our social media presence, and amplifying the movement's voice online."
    },
    { 
      name: "Muhammad Yahya", 
      role: "Media Head", 
      image: "/team-my.png",
      description: "Capturing the movement through photography and videography, producing high-impact visual content for our campaigns."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % team.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [team.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % team.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col transition-colors duration-500">
      <Header />
      
      <div className="flex-grow pt-32 lg:pt-48 pb-20 px-6 max-w-6xl mx-auto w-full relative flex flex-col justify-center">
        
        {/* Cinematic Ambient Backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-emerald-400/10 dark:bg-emerald-900/15 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
                The Vanguard
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 text-neutral-950 dark:text-white">
              Meet the <span className="text-emerald-500 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-400">Heads.</span>
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 font-medium">
              The founding architects driving the Safai Squad initiative.
            </p>
          </div>

          {/* Premium Glass Carousel Container */}
          <div className="max-w-5xl mx-auto relative">
            <div className="relative bg-neutral-50/80 dark:bg-neutral-900/40 backdrop-blur-2xl border border-neutral-200/80 dark:border-white/5 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-h-[400px] flex items-center">
              
              <div className="absolute -bottom-10 -right-4 text-[12rem] font-black text-neutral-200/50 dark:text-white/5 select-none pointer-events-none tracking-tighter">
                0{currentIndex + 1}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full relative z-10"
                >
                  <div className="relative w-40 h-40 md:w-64 md:h-64 shrink-0 rounded-[2rem] bg-neutral-200 dark:bg-neutral-800 p-1.5 shadow-2xl">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-50 blur-lg -z-10"></div>
                    <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-neutral-300 dark:bg-neutral-900 border-2 border-white dark:border-neutral-800">
                      <Image 
                        src={team[currentIndex].image} 
                        alt={team[currentIndex].name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-black text-neutral-950 dark:text-white mb-3 tracking-tight">
                      {team[currentIndex].name}
                    </h2>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
                      {team[currentIndex].role}
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed max-w-lg">
                      {team[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sleek UI Controls */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 px-6 py-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl z-20">
              <button 
                onClick={prevSlide}
                className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400 transition-colors"
                aria-label="Previous Head"
              >
                &#8592;
              </button>
              
              <div className="flex gap-2">
                {team.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-6 bg-emerald-500" : "w-1.5 bg-neutral-300 dark:bg-neutral-700"
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400 transition-colors"
                aria-label="Next Head"
              >
                &#8594;
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}