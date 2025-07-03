import { AboutMe }   from "@/components/AboutMe"
import { SkillsSection } from "@/components/SkillsSection"
import { CertificatesSection } from "@/components/CertificatesSection"
//import { ExperienceTimeline } from "@/components/ExperienceTimeline" // next
//import { TestimonialsSection }  from "@/components/TestimonialsSection" // next
//import { BlogTeaserSection }    from "@/components/BlogTeaserSection"   // next
import { HobbiesSection }     from "@/components/HobbiesSection"
import { ProjectsSection } from "@/components/ProjectsSection"

export default function Home() {
  return (
    <section className="space-y-16">
      {/* Intro */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to my portfolio!
        </h2>
        <p className="text-lg text-gray-700">
          I build cool things with code, chamomile tea, and cakes.  🍵🍰
        </p>
      </div>

      <AboutMe />
      <HobbiesSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />

      
    </section>
  )
}

