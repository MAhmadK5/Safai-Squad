"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TeamPreview() {
  const teamMembers = [
   { id: 1, image: "/ahmad.png", name: "Member 1" },
    { id: 2, image: "/team-ms.png", name: "Member 2" },
    { id: 3, image: "/team-my.png", name: "Member 3" },
    { id: 4, image: "/team-ua.png", name: "Member 4" },
    { id: 5, image: "/faseeh.jpeg", name: "Member 5" },
    { id: 6, image: "/team-as.png", name: "Member 6" },
  ];

  return (
    <section  className="py-24 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            The Squad
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-900 dark:text-white">
            Meet the Minds
          </h2>
        </div>

        {/* Responsive Grid: 2 per row on mobile, 3 on tablet, all 6 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative aspect-square w-full rounded-2xl overflow-hidden group border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm"
            >
              <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse -z-10"></div>
              
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/20 transition-colors duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link href="/team">
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View Full Team
              </span>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}