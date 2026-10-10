"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Impact() {
  const stats = [
    { label: "Volunteers Joined", value: "50+", icon: "🤝" },
    { label: "Bags of Waste Collected", value: "120+", icon: "🗑️" },
    { label: "Sectors Cleaned", value: "3", icon: "🏙️" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      <Header />
      
      <div className="flex-grow pt-32 lg:pt-40 pb-20 px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Our <span className="text-emerald-500">Impact</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Numbers that represent real change. Every piece of trash removed is a step toward a sustainable city.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 text-center hover:border-emerald-500/50 transition-colors"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-emerald-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-emerald-900/20 border border-emerald-500/20 rounded-3xl p-10 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Help us grow these numbers.</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            The work doesn't stop here. We are constantly expanding our reach across Islamabad. Your hands can make the difference.
          </p>
          <a href="/events" className="inline-block px-8 py-3 bg-white text-neutral-950 font-black rounded-lg hover:bg-neutral-200 transition-colors uppercase tracking-wider text-sm">
            View Next Drive
          </a>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}