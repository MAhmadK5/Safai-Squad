"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import Link from "next/link";

export default function Events() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      <Header />

      <div className="flex-grow pt-32 lg:pt-40 pb-20 px-6 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Upcoming <span className="text-emerald-500">Drives</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Gear up and step out. Find our next community cleanup location and secure your spot in the squad.
          </p>
        </motion.div>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-[1px] rounded-3xl bg-gradient-to-br from-emerald-500/40 to-neutral-800 max-w-4xl mx-auto"
        >
          <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Next Target
              </div>
              <h2 className="text-3xl font-black text-white mb-2">Islamabad Sector Drive</h2>
              <p className="text-neutral-400 mb-6">
                Join our massive community cleanup to tackle the recent drainage and waste overflow issues. Trash bags, gloves, and sanitizers will be provided.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">📍</span> TBD (Islamabad)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">🗓️</span> Coming Soon
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto">

              <Link href="/register"
                className="block w-full md:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-center uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105"
              >
                Register Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}