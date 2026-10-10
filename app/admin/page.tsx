"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [fetching, setFetching] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchVolunteers();
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      fetchVolunteers();
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setVolunteers([]);
  };

  const fetchVolunteers = async () => {
    setFetching(true);
    const { data, error } = await supabase
      .from('volunteers')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setVolunteers(data);
    }
    setFetching(false);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      <Header />
      
      <div className="flex-grow pt-32 lg:pt-40 pb-20 px-6 max-w-6xl mx-auto w-full relative">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        {!session ? (
          // ================= LOGIN SCREEN =================
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-neutral-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl mt-10"
          >
            <h1 className="text-3xl font-black mb-2 text-white text-center">Admin Access</h1>
            <p className="text-neutral-400 text-center mb-8 text-sm">Log in to view Safai Squad registrations.</p>
            
            <form onSubmit={handleLogin} className="space-y-5">
              {errorMsg && (
                <div className="bg-red-500/10 text-red-400 border border-red-500/20 p-3 rounded-lg text-sm text-center">
                  {errorMsg}
                </div>
              )}
              <div>
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="admin@safaisquad.com"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-black rounded-xl uppercase tracking-widest transition-all mt-4"
              >
                {loading ? "Authenticating..." : "Login"}
              </button>
            </form>
          </motion.div>
        ) : (
          // ================= ADMIN DASHBOARD =================
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
              <div>
                <h1 className="text-4xl font-black tracking-tight mb-2">
                  Volunteer <span className="text-emerald-500">Database</span>
                </h1>
                <p className="text-neutral-400">Total Registered: <span className="text-white font-bold">{volunteers.length}</span></p>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={fetchVolunteers}
                  className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-lg transition-colors border border-neutral-700 text-sm"
                >
                  {fetching ? "Refreshing..." : "Refresh Data"}
                </button>
                <button 
                  onClick={handleLogout}
                  className="px-6 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 font-bold rounded-lg transition-colors border border-red-900/50 text-sm"
                >
                  Logout
                </button>
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-900 border-b border-neutral-800">
                      <th className="py-4 px-6 text-xs font-black text-neutral-400 uppercase tracking-widest">Name</th>
                      <th className="py-4 px-6 text-xs font-black text-neutral-400 uppercase tracking-widest">Phone</th>
                      <th className="py-4 px-6 text-xs font-black text-neutral-400 uppercase tracking-widest">Email</th>
                      <th className="py-4 px-6 text-xs font-black text-neutral-400 uppercase tracking-widest">Registered At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volunteers.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-10 text-center text-neutral-500 font-medium">
                          No volunteers registered yet.
                        </td>
                      </tr>
                    ) : (
                      volunteers.map((vol) => (
                        <tr key={vol.id} className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors">
                          <td className="py-4 px-6 font-bold text-white">{vol.name}</td>
                          <td className="py-4 px-6 text-neutral-300">{vol.phone}</td>
                          <td className="py-4 px-6 text-neutral-300">{vol.email}</td>
                          <td className="py-4 px-6 text-emerald-400 text-sm">
                            {new Date(vol.created_at).toLocaleDateString()} {new Date(vol.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}