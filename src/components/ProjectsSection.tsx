// src/components/ProjectsSection.tsx

import { projects } from "@/data/project"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        My Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="hover:shadow-lg transition-shadow flex flex-col"
          >
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-gray-600 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            {/* CardFooter removed entirely */}
          </Card>
        ))}
      </div>
    </section>
  )
}
