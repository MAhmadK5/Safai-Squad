import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import TeamPreview from "@/components/TeamPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="py-24 transition-colors duration-500 relative overflow-hidden">
<Header/>
      <div className="flex-grow flex items-center justify-center">
<Hero/>
      </div>
<Gallery/>
<TeamPreview />
<Footer/>
    </main>
  );
}