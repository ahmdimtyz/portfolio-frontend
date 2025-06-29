// src/data/projects.ts
export interface Project {
  title: string
  description: string
  link: string
}

export const projects: Project[] = [
  {
    title: "Portfolio Redesign",
    description: "Next.js + Tailwind + shadcn/ui for a modular, sleek portfolio.",
    link: "#",
  },
  {
    title: "API + Docker",
    description: "Express API, MySQL, Dockerized and deployed to DigitalOcean.",
    link: "#",
  },
  {
    title: "CI/CD Pipeline",
    description: "GitHub Actions → DockerHub → Droplet auto-deploy.",
    link: "#",
  },
  // add more projects here…
]
