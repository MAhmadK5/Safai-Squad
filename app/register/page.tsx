"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase"; // Adjust path if you used utils/

export default function Register() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    
    // Insert into Supabase
    const { error } = await supabase
      .from('volunteers')
      .insert([
        { 
          name: formData.name, 
          phone: formData.phone, 
          email: formData.email 
        }
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("idle");
    } else {
      setStatus("success");
      setFormData({ name: "", phone: "", email: "" }); // Reset form
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      <Header />
      
      <div className="flex-grow pt-32 lg:pt-40 pb-20 px-6 max-w-3xl mx-auto w-full relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-900/15 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Join the <span className="text-emerald-500">Squad</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-lg mx-auto">
            Fill out the form below to register for the upcoming Islamabad Cleanup Drive.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-[1px] rounded-3xl bg-gradient-to-br from-emerald-500/30 to-neutral-800"
        >
          <div className="bg-neutral-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✨</span>
                </div>
                <h2 className="text-2xl font-black text-white mb-2">You're In!</h2>
                <p className="text-neutral-400 mb-8">
                  Thank you for stepping up for Islamabad. We will contact you soon with the exact location and timings.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-lg transition-colors"
                >
                  Register Another Person
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm font-medium text-center">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-neutral-300 uppercase tracking-wider">Full Name</label>
                    <input 
                      required
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      placeholder="Ali Khan"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-neutral-300 uppercase tracking-wider">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      placeholder="0300 1234567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-neutral-300 uppercase tracking-wider">Email Address</label>
                  <input 
                    required
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="ali@example.com"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 disabled:cursor-not-allowed text-white font-black rounded-xl text-center uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] mt-4 flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Registering...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}