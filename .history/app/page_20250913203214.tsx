import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import ReadNext from "@/components/ReadNext";
import CollectionInfo from "@/components/CollectionInfo";
import CollectionVideo from "@/components/CollectionVideo";
import CreditsAndExpansion from "@/components/CreditsAndExpansion";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="min-h-screen 
    bg-slate-950 flex flex-col items-center justify-center
    overflow-x-hidden">
      <FloatingNav />
      <Hero />
      <Explore />
      <CollectionInfo />
      <CollectionVideo />
      <CreditsAndExpansion />
      <ReadNext />
      <Banner />
      <Footer />
    </main>
  );
}
