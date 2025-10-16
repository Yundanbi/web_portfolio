import { Hero } from "@/components/hero"
import { Values } from "@/components/values"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <Values />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
