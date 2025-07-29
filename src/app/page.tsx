import About from "@/components/sections/about/page";
import Hero from "@/components/sections/hero/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="">
        <Hero />
        <About />
      </main>
    </div>
  );
}
