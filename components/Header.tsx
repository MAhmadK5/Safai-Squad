"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle"; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Centralized nav links so we don't repeat them
  const navLinks = [
    { name: "Mission", path: "/mission" },
    { name: "Our Story", path: "/our-story" },
    { name: "The Team", path: "/team" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Gallery", path: "/gallery" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-6 px-4 pointer-events-none">
      
      {/* Main Navigation Pill */}
      <nav
        className={`pointer-events-auto flex items-center justify-between w-full max-w-7xl transition-all duration-500 ease-out ${
          isScrolled || isMobileMenuOpen
            ? "px-6 py-3 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] rounded-full ring-1 ring-white/50 dark:ring-white/10"
            : "px-2 py-3 bg-transparent border border-transparent rounded-full"
        }`}
      >
        {/* Logo Section */}
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="flex items-center gap-3 cursor-pointer group hover:scale-105 active:scale-95 transition-transform duration-300">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-[0_0_20px_rgba(16,185,129,0.15)] dark:shadow-[0_0_25px_rgba(16,185,129,0.3)] border border-neutral-100 dark:border-neutral-800 group-hover:border-emerald-400/50 transition-colors duration-500 z-10">
              <Image 
                src="/logo.png" 
                alt="Safai Squad Logo" 
                width={56} 
                height={56}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                priority
              />
            </div>
            
            <div className="flex items-center -ml-1 md:ml-1">
              <span className="text-2xl md:text-3xl font-black tracking-[0.15em] text-neutral-900 dark:text-white drop-shadow-sm">
                SAFAI
              </span>
              <span className="text-2xl md:text-3xl font-light tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-300 drop-shadow-[0_0_10px_rgba(16,185,129,0.2)] ml-1">
                SQUAD
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-bold text-neutral-500 dark:text-neutral-400 tracking-[0.1em]">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.path}>
              <div className="relative group px-1 py-2 uppercase cursor-pointer hover:text-neutral-950 dark:hover:text-white transition-colors duration-300">
                {item.name}
                <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)] rounded-full"></span>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3 pl-4 md:pl-0 border-l border-transparent md:border-neutral-200/50 md:dark:border-neutral-800/50 md:ml-4 md:pl-6 transition-colors duration-500">
          <ThemeToggle />
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white active:scale-95 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-auto absolute top-28 left-4 right-4 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl rounded-3xl p-6 flex flex-col md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link 
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-black uppercase tracking-tighter text-neutral-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-4">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Connect</p>
              <a 
                href="https://instagram.com/safaisquad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white font-bold uppercase tracking-widest text-sm active:scale-95 transition-transform"
              >
                <span>Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </header>
  );
}