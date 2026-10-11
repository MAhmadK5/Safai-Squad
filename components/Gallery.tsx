"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function Gallery() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch photos from Supabase
  useEffect(() => {
    async function fetchGallery() {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setPhotos(data);
      }
      setLoading(false);
    }

    fetchGallery();
  }, []);

  // Fallback mock photos if your database is currently empty
  const defaultPhotos = [
    { id: 1, title: "SZABIST Cafeteria Cleanup Drive", image_url: "https://cvyusdvemnxirrtehxoo.supabase.co/storage/v1/object/public/CAMPAIGNS/Cam1.png" },
    { id: 2, title: "I-8 Awarness Campaign", image_url: "https://cvyusdvemnxirrtehxoo.supabase.co/storage/v1/object/public/CAMPAIGNS/I8-markaz.png" },
    { id: 3, title: "SZABIST University Awareness Campaign", image_url: "https://cvyusdvemnxirrtehxoo.supabase.co/storage/v1/object/public/CAMPAIGNS/szabist-awareness.png" },
    { id: 4, title: "PLANTATION IMPACT ON environment ", image_url: "https://cvyusdvemnxirrtehxoo.supabase.co/storage/v1/object/public/CAMPAIGNS/plant.png" },
  ];

  const displayPhotos = photos.length > 0 ? photos : defaultPhotos;

  // Filter out any rows that have an empty or missing image_url
  const safePhotos = displayPhotos.filter(
    (photo) => photo && photo.image_url && photo.image_url.trim() !== ""
  );

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (loading || safePhotos.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % safePhotos.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [loading, safePhotos.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % safePhotos.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + safePhotos.length) % safePhotos.length);

  // Helper function to get correct relative position of a card
  const getCardStatus = (index: number) => {
    const total = safePhotos.length;
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + total) % total) return "left";
    if (index === (currentIndex + 1) % total) return "right";
    return "hidden";
  };

  return (
    <section className="py-24 overflow-hidden w-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 dark:bg-emerald-900/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-16 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4 border border-emerald-500/20">
          Impact Gallery
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white mb-4">
          See the <span className="text-emerald-500">Difference</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Witness the squad transforming local trails, parks, and public spaces on every drive.
        </p>
      </div>

      <div className="relative w-full min-h-[400px] md:min-h-[550px] flex items-center justify-center py-8">
        
        {loading ? (
          <div className="w-11/12 md:w-[50%] h-[400px] md:h-[500px] animate-pulse bg-neutral-200 dark:bg-neutral-900/50 rounded-3xl border border-neutral-300 dark:border-neutral-800 flex items-center justify-center">
            <span className="w-10 h-10 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></span>
          </div>
        ) : (
          <div className="relative w-full max-w-[1800px] mx-auto h-[400px] md:h-[500px] flex items-center justify-center">
            <AnimatePresence initial={false}>
              {safePhotos.map((photo, index) => {
                const status = getCardStatus(index);
                if (status === "hidden") return null;

                const config = {
                  center: { 
                    x: "0%", 
                    scale: 1, 
                    zIndex: 10, 
                    opacity: 1, 
                    filter: "blur(0px) brightness(1)",
                    pointerEvents: "auto" as const 
                  },
                  left: { 
                    x: "-70%", 
                    scale: 0.85, 
                    zIndex: 5, 
                    opacity: 0.6, 
                    filter: "blur(2px) brightness(0.6)",
                    pointerEvents: "none" as const 
                  },
                  right: { 
                    x: "70%", 
                    scale: 0.85, 
                    zIndex: 5, 
                    opacity: 0.6, 
                    filter: "blur(2px) brightness(0.6)",
                    pointerEvents: "none" as const 
                  }
                };

                return (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={config[status as keyof typeof config]}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-11/12 md:w-[55%] lg:w-[45%] h-full rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer bg-white dark:bg-neutral-900"
                    onClick={() => {
                      if (status === "left") prevSlide();
                      if (status === "right") nextSlide();
                    }}
                  >
                    <Image
                      src={photo.image_url}
                      alt={photo.title || "Safai Squad Drive"}
                      fill
                      className="object-cover pointer-events-none select-none"
                      priority={status === "center"}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent transition-opacity duration-300"></div>
                    
                    {status === "center" && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-left bg-gradient-to-t from-neutral-950/90 to-transparent pt-20"
                      >
                        <span className="text-xs md:text-sm font-bold text-emerald-400 uppercase tracking-widest block mb-3">Islamabad Drive</span>
                        <h3 className="text-2xl md:text-4xl font-black text-white leading-tight drop-shadow-lg">
                          {photo.title || "Community Action"}
                        </h3>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation Arrows pushed out to the edges */}
            <div className="absolute left-4 md:left-8 z-20">
              <button 
                onClick={prevSlide} 
                className="w-14 h-14 rounded-full bg-white/90 dark:bg-neutral-900/90 hover:bg-emerald-500 dark:hover:bg-emerald-500 border border-neutral-200 dark:border-neutral-700 hover:border-emerald-500 text-neutral-900 dark:text-white hover:text-white flex items-center justify-center transition-all shadow-xl backdrop-blur-md group"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute right-4 md:right-8 z-20">
              <button 
                onClick={nextSlide} 
                className="w-14 h-14 rounded-full bg-white/90 dark:bg-neutral-900/90 hover:bg-emerald-500 dark:hover:bg-emerald-500 border border-neutral-200 dark:border-neutral-700 hover:border-emerald-500 text-neutral-900 dark:text-white hover:text-white flex items-center justify-center transition-all shadow-xl backdrop-blur-md group"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {!loading && (
        <div className="flex justify-center gap-3 mt-10">
          {safePhotos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                idx === currentIndex 
                  ? "w-10 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                  : "w-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500"
              }`}
              aria-label={`Show slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}