"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function Hero() {
  const [transformation, setTransformation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(50); // Slider split percentage
  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch the latest comparison from Supabase
  useEffect(() => {
    async function fetchTransformation() {
      const { data, error } = await supabase
        .from("hero_transformation")
        .select("*")
        .order("updated_at", { ascending: false })
        .limit(1)
        .single();

      if (!error && data) {
        setTransformation(data);
      }
      setLoading(false);
    }

    fetchTransformation();
  }, []);

  // Fallback defaults in case Supabase table is not populated yet
  const activeTransform = transformation || {
    location_name: "Margalla Hills (Trail 3)",
    before_image_url: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=1200&auto=format&fit=crop",
    after_image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    impact_desc: "Cleared dozens of trash bags from high-frequency paths to restore natural beauty."
  };

  // Drag and hover calculations for before/after slider
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) handleMove(e.clientX); // Left click & drag
  };

  return (
    <section className="relative min-h-[90vh] pt-32 lg:pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 overflow-hidden w-full transition-colors duration-300">
      
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-emerald-400/10 dark:bg-emerald-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-800/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* Left Column: Mission Overview & Statistics */}
      <motion.div 
        className="w-full lg:w-5/12 flex flex-col items-start text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Pulsing Team Active Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-sm mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-300">
            Active on the Ground
          </span>
        </div>

        {/* Dynamic Title Overlay */}
        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-6 leading-[0.95] text-neutral-950 dark:text-white">
          <span className="block">Restore.</span>
          <span className="block text-neutral-400 dark:text-neutral-600">Reclaim.</span>
          <span className="block text-emerald-500 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700 dark:from-emerald-400 dark:to-emerald-600">
            Rebuild.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-md mb-10 font-medium leading-relaxed">
          Action over words. Zero waste. Maximum impact. We are a dedicated squad tackling Islamabad's waste crisis head-on, transforming spaces one location at a time.
        </p>

        {/* Location Badge & Short Impact Highlight Card */}
        <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800/80 shadow-md w-full max-w-md">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
            Featured Target Location
          </span>
          <h2 className="text-2xl font-black text-neutral-950 dark:text-white mb-2">
            {activeTransform.location_name}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-0">
            {activeTransform.impact_desc}
          </p>
        </div>
      </motion.div>

      {/* Right Column: Interactive Slide before/after Comparison Carousel */}
      <motion.div 
        className="w-full lg:w-7/12 flex items-center justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {loading ? (
          <div className="w-full max-w-[550px] aspect-[4/5] rounded-[2.5rem] bg-neutral-200 dark:bg-neutral-900 animate-pulse flex items-center justify-center border border-neutral-300 dark:border-neutral-800">
            <span className="w-10 h-10 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></span>
          </div>
        ) : (
          <div 
            ref={containerRef}
            className="relative w-full max-w-[550px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-2xl bg-neutral-100 dark:bg-neutral-900 select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={(e) => handleMove(e.clientX)}
          >
            {/* 1. After Image (Background) */}
            <div className="absolute inset-0">
              <Image 
                src={activeTransform.after_image_url} 
                alt="Restored location (After)"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 right-6 bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md z-10">
                After
              </div>
            </div>

            {/* 2. Before Image (Foregorund/Slide Overlay) */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden" 
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Outer box holds the exact width as the parent so sliding is smooth */}
              <div className="absolute inset-y-0 left-0 w-[550px] aspect-[4/5]" style={{ width: containerRef.current?.offsetWidth || "550px" }}>
                <Image 
                  src={activeTransform.before_image_url} 
                  alt="Damaged area (Before)"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-6 left-6 bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md z-10">
                  Before
                </div>
              </div>
            </div>

            {/* 3. Slider Drag Handle line */}
            <div 
              className="absolute inset-y-0 w-1 bg-white hover:bg-emerald-400 cursor-ew-resize transition-colors shadow-2xl flex items-center justify-center z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Central handle knob */}
              <div className="w-8 h-8 rounded-full bg-white text-emerald-600 shadow-xl border-2 border-emerald-500 hover:scale-115 transition-transform flex items-center justify-center font-bold text-sm pointer-events-none">
                ↔
              </div>
            </div>

            {/* Dynamic UI Label Instructions */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-neutral-950/80 backdrop-blur-md rounded-full shadow-lg border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
              Drag Knob to Compare
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}