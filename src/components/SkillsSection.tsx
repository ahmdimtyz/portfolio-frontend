// src/components/SkillsSection.tsx
import Image from "next/image"

interface Skill {
  name: string
  logo?: string
}

const skillCategories: Record<string, Skill[]> = {
  "Front-end": [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JS" },
    { name: "Vue.js", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
    { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  ],
  "Back-end": [
    { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "PHP" },
    { name: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
    { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "C" },
    { name: "C++" },
  ],
  "Cloud/DevOps": [
    { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg" },
    { name: "EC2" },
    { name: "Lightsail" },
    { name: "HashiCorp" },
    { name: "Terraform" },
    { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
    { name: "CI/CD" },
    { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "GitHub Actions" },
    { name: "GitLab", logo: "https://cdn.worldvectorlogo.com/logos/gitlab.svg" },
    { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
    { name: "DigitalOcean", logo: "https://cdn.worldvectorlogo.com/logos/digitalocean.svg" },
    { name: "DNS & Hosting" },
  ],
  Testing: [
    { name: "Selenium" },
    { name: "Katalon" },
    { name: "JMeter" },
  ],
}

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Skills & Tech Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) =>
                skill.logo ? (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 p-1 rounded hover:bg-white transition"
                  >
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ) : (
                  <span
                    key={skill.name}
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}
