"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 transition-all"
    >
      <motion.nav
        layout
        className={`flex items-center justify-between w-full max-w-7xl transition-all duration-300 ${
          isScrolled
            ? "px-6 py-3 bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "px-2 py-2 bg-transparent"
        }`}
      >
        {/* Animated Logo Section - Now links to Home */}
        <Link href="/">
          <motion.div 
            className="flex items-center gap-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Static, perfect circle logo container */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-[0_0_15px_rgba(16,185,129,0.4)] border-2 border-transparent hover:border-emerald-500/50 transition-colors duration-300">
              <Image 
                src="/logo.png" 
                alt="Safai Squad Logo" 
                width={56} 
                height={56}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            {/* Maximum Font Styling */}
            <span className="text-2xl md:text-3xl font-black tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-100 to-neutral-400 drop-shadow-lg">
              SAFAI SQUAD
            </span>
          </motion.div>
        </Link>

{/* Hover-animated Nav Links (Visible on desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-neutral-300 tracking-wide">
          {[
            { name: "Mission", path: "/mission" },
            { name: "Our Story", path: "/our-story" },
            { name: "Events", path: "/events" },
            { name: "Impact", path: "/impact" }
          ].map((item) => (
            <Link key={item.name} href={item.path}>
              <motion.div
                className="relative group px-1 py-2 uppercase cursor-pointer"
                whileHover={{ y: -2, color: "#fff" }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Pulsing CTA Button - Now links to Events page */}
        <Link href="/events">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0px 0px 0px 0px rgba(16,185,129,0)", 
                "0px 0px 20px 4px rgba(16,185,129,0.5)", 
                "0px 0px 0px 0px rgba(16,185,129,0)"
              ] 
            }}
            transition={{ 
              boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.2 }
            }}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 transition-colors rounded-full font-black uppercase tracking-wider text-sm text-white shadow-lg cursor-pointer inline-block"
          >
            Join the Force
          </motion.div>
        </Link>
      </motion.nav>
    </motion.header>
  );
}