import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}