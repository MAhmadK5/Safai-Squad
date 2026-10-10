"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Mission() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      <Header />
      
      <div className="flex-grow pt-32 lg:pt-40 pb-20 px-6 max-w-4xl mx-auto w-full relative">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
            Our Purpose
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
            Restoring the beauty of <span className="text-emerald-500">Islamabad.</span>
          </h1>
          
          <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              We are a community-driven initiative built on the foundational principle that <strong className="text-white">"Safai Nisf Imaan Hai"</strong> (Cleanliness is half of faith). Our core vision is to transform Islamabad through direct, grassroots action—one sector, one trail, and one street at a time.
            </p>
            <p>
              We don't just pick up trash; we aim to shift the culture. By empowering local residents and youth to take ownership of their environment, we are building a movement focused on zero waste and maximum sustainability.
            </p>
            
            <div className="pt-8 mt-8 border-t border-neutral-800">
              <Link href="/our-story" className="text-emerald-500 font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                See the team behind the movement &rarr;
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}