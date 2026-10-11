"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // <-- Added Variants import
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

export default function GalleryPage() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

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

  // Expanded fallback photos for a rich grid
  const defaultPhotos = [
    { id: 2, title: "I-8 Awareness Drive", image_url: "https://cvyusdvemnxirrtehxoo.supabase.co/storage/v1/object/public/CAMPAIGNS/I8-markaz.png" },
    { id: 3, title: "Campus Campaign", image_url: "https://cvyusdvemnxirrtehxoo.supabase.co/storage/v1/object/public/CAMPAIGNS/szabist-awareness.png" },
    { id: 4, title: "Plantation Drive", image_url: "https://cvyusdvemnxirrtehxoo.supabase.co/storage/v1/object/public/CAMPAIGNS/plant.png" },
    { id: 6, title: "Community Briefing", image_url: "https://cvyusdvemnxirrtehxoo.supabase.co/storage/v1/object/public/CAMPAIGNS/Cam1.png" },
  ];

  const displayPhotos = photos.length > 0 ? photos : defaultPhotos;
  const safePhotos = displayPhotos.filter((p) => p && p.image_url && p.image_url.trim() !== "");

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  // Explicitly typed as Variants to fix the Vercel build error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">
      <Header />

      <div className="flex-grow pt-32 lg:pt-48 pb-24 px-6 max-w-[1600px] mx-auto w-full relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            The Frontline
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-950 dark:text-white mb-6 leading-tight"
          >
            Visuals of <span className="text-emerald-500 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-400">Change</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Browse our complete archive of operations, cleanups, and community interventions across Islamabad.
          </motion.p>
        </div>

        {/* The Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></span>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {safePhotos.map((photo) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                onClick={() => setSelectedImage(photo)}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer border border-neutral-200/50 dark:border-neutral-800/50 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm"
              >
                <Image
                  src={photo.image_url}
                  alt={photo.title || "Gallery Image"}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                    {photo.title || "Safai Squad Drive"}
                  </h3>
                  <div className="w-8 h-1 bg-emerald-500 mt-2 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <Footer />

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors duration-300 z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing the modal
            >
              <Image
                src={selectedImage.image_url}
                alt={selectedImage.title || "Expanded Gallery Image"}
                fill
                className="object-contain md:object-cover bg-neutral-900"
                priority
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs md:text-sm block mb-2">
                  Ground Operations
                </span>
                <h2 className="text-white text-2xl md:text-4xl font-black drop-shadow-lg">
                  {selectedImage.title || "Community Action"}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}