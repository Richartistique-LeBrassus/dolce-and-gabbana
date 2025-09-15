import Hero from "@/components/Hero";
import ReadNext from "@/components/ReadNext";
import CollectionInfo from "@/components/CollectionInfo";
import CollectionVideo from "@/components/CollectionVideo";
import CreditsAndExpansion from "@/components/CreditsAndExpansion";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { FloatingNav } from "@/components/ui/FloatingNav";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen 
    bg-slate-950 flex flex-col items-center justify-center
    overflow-x-hidden">
      <FloatingNav />
      <Hero />
      <About />
      <CollectionInfo />
      <CollectionVideo />
      <CreditsAndExpansion />
      <ReadNext />
      <Banner />
      <Footer />
    </main>
  );
}
