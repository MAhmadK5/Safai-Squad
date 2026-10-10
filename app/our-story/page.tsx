"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  const team = [
    { 
      name: "Muhammad Ahmad Khalid", 
      role: "Lead Developer & Tech Head", 
      initials: "MK",
      image: "/team-mk.png",
      description: "Architecting the digital platform, managing our web infrastructure, and streamlining volunteer registration systems."
    },
    { 
      name: "Umer Azeem", 
      role: "Operations & Field Commander", 
      initials: "UA",
      image: "/team-ua.png",
      description: "Coordinating on-ground logistics, mapping cleanup zones, and ensuring the safety and efficiency of all field drives."
    },
    { 
      name: "Faseeh Ur Rehman", 
      role: "Community Outreach Director", 
      initials: "FR",
      image: "/team-fr.png",
      description: "Building partnerships with local organizations, mobilizing youth, and spreading awareness across Islamabad."
    },
    { 
      name: "Manahil Saheem", 
      role: "Head of Planning", 
      initials: "MS",
      image: "/team-ms.png",
      description: "Structuring project timelines, managing resources, and ensuring every cleanup drive is meticulously organized."
    },
    { 
      name: "Abdul Moeed Sajjad", 
      role: "Marketing & Volunteer Coordinator", 
      initials: "AS",
      image: "/team-as.png",
      description: "Leading digital campaigns, managing social media presence, and keeping our growing volunteer base engaged."
    },
    { 
      name: "Muhammad Yahya", 
      role: "Media Head", 
      initials: "MY",
      image: "/team-my.png",
      description: "Capturing the movement through photography and videography, producing high-impact visual content for our campaigns."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % team.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [team.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % team.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      <Header />
      
      <div className="flex-grow pt-32 lg:pt-40 pb-20 px-6 max-w-5xl mx-auto w-full relative">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        {/* TOP: Team Heads Image Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Meet the <span className="text-emerald-500">Heads</span>
            </h1>
            <p className="text-neutral-400">The founding members driving the Safai Squad initiative.</p>
          </div>

          {/* Wrapper for Card and Buttons */}
          <div className="max-w-3xl mx-auto">
            {/* The Card */}
            <div className="relative bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-3xl p-6 md:p-10 overflow-hidden shadow-2xl min-h-[320px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left w-full"
                >
                  {/* Image Container - Square with rounded edges */}
                  <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl bg-emerald-900/30 border-4 border-emerald-500/20 flex items-center justify-center overflow-hidden relative shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <Image 
                      src={team[currentIndex].image} 
                      alt={team[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Head Details */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-500/20">
                      {team[currentIndex].role}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                      {team[currentIndex].name}
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                      {team[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls - NOW OUTSIDE THE CARD */}
            <div className="flex justify-center md:justify-end gap-4 mt-6">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-neutral-900 hover:bg-emerald-600 border border-neutral-800 hover:border-emerald-500 flex items-center justify-center transition-colors text-white shadow-lg"
                aria-label="Previous Head"
              >
                &#8592;
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-neutral-900 hover:bg-emerald-600 border border-neutral-800 hover:border-emerald-500 flex items-center justify-center transition-colors text-white shadow-lg"
                aria-label="Next Head"
              >
                &#8594;
              </button>
            </div>
          </div>
        </motion.div>

        {/* MIDDLE: Our Story / Origins Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-t border-neutral-800 pt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
            Community Service Project
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
            Started by students. <br/>
            <span className="text-emerald-500">Built for the city.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-neutral-400 leading-relaxed max-w-3xl">
            <p>
              Safai Squad was initiated as a grassroots community service project by a dedicated group of students from <strong className="text-white">SZABIST Islamabad</strong>. We looked at our city's streets, trails, and public spaces suffocating under a growing waste crisis, and decided that waiting for authorities to fix it was no longer an option.
            </p>
            <p>
              What started as a university project quickly evolved into a fully operational youth-led movement. We combined our diverse skill sets—from tech and development to field operations and community outreach—to build a system that empowers locals to take their environment back.
            </p>
          </div>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
}