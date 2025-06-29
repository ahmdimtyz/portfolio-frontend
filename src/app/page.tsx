import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FeaturedProject } from "@/components/FeaturedProject"
import { ProjectsSection } from "@/components/ProjectsSection"

export default function Home() {
  return (
    <section className="space-y-16">
      {/* Intro */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-emerald-800 mb-4">
          Welcome to my portfolio!
        </h2>
        <p className="text-lg text-gray-700">
          I build cool things with code, coffee, and chaotic good energy ☕💻
        </p>
      </div>

      {/* Featured */}
      <FeaturedProject />

      {/* Projects Grid */}
      <ProjectsSection />
    </section>
  )
}

export function FeaturedProjects() {
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>🚀 Portfolio Redesign</CardTitle>
      </CardHeader>
      <CardContent>
        Redesigned my portfolio with Next.js, Tailwind, and shadcn/ui for modular style.
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href="#projects">See all projects</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
