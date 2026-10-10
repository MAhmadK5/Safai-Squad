"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="w-full relative border-t border-white/10 bg-neutral-950 pt-20 pb-10 overflow-hidden mt-auto z-10">
      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border border-neutral-800">
                <Image src="/logo.png" alt="Safai Squad" width={40} height={40} className="object-cover" />
              </div>
              <span className="text-xl font-black tracking-widest uppercase text-white drop-shadow-md">
                SAFAI SQUAD
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
              A youth-led, community-driven initiative dedicated to eradicating Islamabad's waste crisis. Zero waste. Maximum impact.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {["IG", "FB", "X"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(16,185,129,0.4)]"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h3 className="text-white font-black uppercase tracking-wider mb-6 text-sm">Explore</h3>
            <ul className="flex flex-col gap-4 text-sm text-neutral-400 font-medium">
              {["Our Mission", "Upcoming Events", "Impact & Results", "Gallery"].map((link) => (
                <li key={link}>
                  <a href={`#${link.split(' ')[0].toLowerCase()}`} className="hover:text-emerald-400 transition-colors inline-flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Action Column */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-black uppercase tracking-wider mb-6 text-sm">Join the Movement</h3>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Ready to step out and make a difference? The city needs you. Sign up for our next drive.
            </p>
            <Link 
              href="/register" 
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-neutral-950 font-black rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 w-full sm:w-auto text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            >
              Volunteer Now
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-500">
          <p>&copy; {year} Safai Squad. Built with 💚 in Islamabad. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}