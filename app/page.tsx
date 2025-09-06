import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141B41]">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}