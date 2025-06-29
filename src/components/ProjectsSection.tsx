// src/components/ProjectsSection.tsx
import { projects } from "@/data/project"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-semibold text-emerald-800 mb-8 text-center">
        My Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{p.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild size="sm">
                <a href={p.link}>View Project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
