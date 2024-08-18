import Image from "next/image";
import { ClientFunction } from 'next';
import CustomNav from "./CustomNav";
import HeroSection from "./HeroSection";
import About from "./About"
import Skills from "./Skills";
import Portfolio from "./Portfolio";
export default function Home() {
  return (
    <main className="bg-[#111827]">
    <CustomNav />
    <HeroSection />
    <About />
    <Skills />
    <Portfolio />
    </main>
  );
}
