"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; 

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      {/* 
        The nav container itself is pointer-events-auto so we can click it, 
        but the invisible header wrapper doesn't block clicks on the page below. 
      */}
      <nav
        className={`pointer-events-auto flex items-center justify-between w-full max-w-7xl transition-all duration-500 ease-out ${
          isScrolled
            ? "px-6 py-3 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] rounded-full ring-1 ring-white/50 dark:ring-white/10"
            : "px-2 py-3 bg-transparent border border-transparent rounded-full"
        }`}
      >
        {/* Logo Section */}
        <Link href="/">
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

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-bold text-neutral-500 dark:text-neutral-400 tracking-[0.1em]">
          {[
            { name: "Mission", path: "/mission" },
            { name: "Our Story", path: "/our-story" },
            { name: "The Team", path: "/team" },
           { name: "BLOGS", path: "/campaigns" },
            { name: "Gallery", path: "/gallery" }
          ].map((item) => (
            <Link key={item.name} href={item.path}>
              <div className="relative group px-1 py-2 uppercase cursor-pointer hover:text-neutral-950 dark:hover:text-white transition-colors duration-300">
                {item.name}
                {/* Sleek expanding underline instead of a dot */}
                <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)] rounded-full"></span>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Buttons Wrapper */}
        <div className="flex items-center gap-4 pl-4 md:pl-0 border-l border-transparent md:border-neutral-200/50 md:dark:border-neutral-800/50 md:ml-4 md:pl-6 transition-colors duration-500">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}