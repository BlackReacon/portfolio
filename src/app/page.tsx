import About from "@/components/sections/about/page";
import Hero from "@/components/sections/hero/page";
import SkillsPage from "@/components/sections/skills/page";
import ProjectsPage from "@/components/sections/projects/page";
import ContactPage from "@/components/sections/contact/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="">
{/*         <Hero />
        <About />
        <SkillsPage />
        <ProjectsPage/> */}
        <ContactPage />
      </main>
    </div>
  );
}
