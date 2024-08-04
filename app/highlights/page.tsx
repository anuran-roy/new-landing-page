import Footer from "@/components/home/Footer";
import MediaAndCoverage from "@/components/home/MediaAndCoverage";
import Navbar from "@/components/home/Navbar";
import TalkToFounder from "@/components/home/TalkToFounder";
import Hero from "@/components/media/Hero";

export default function ProductPage() {
  return (
    <div className="relative flex flex-col min-h-screen max-w-screen overflow-x-hidden">
      <header className="sticky top-0 z-40 bg-[#0E0E0C] w-full flex justify-center items-center flex-col">
        <Navbar />
        <div className="h-0.5 w-full bg-gradient-to-r from-black via-[#ffffff42] to-black" />
      </header>

      <main className="flex-grow flex flex-col gap-8 justify-center items-center w-full">
        <Hero/>
        <MediaAndCoverage />
        <TalkToFounder/>
      </main>
      <Footer />
    </div>
  );
}
