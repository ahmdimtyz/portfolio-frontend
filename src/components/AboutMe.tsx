import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutMe() {
  return (
    <section className="flex flex-col items-center text-center space-y-4 py-12 bg-white rounded-lg shadow">
      <Image
        src="/avatar.jpeg"
        width={120}
        height={120}
        alt="Ahmad Imtiyaz"
        className="rounded-full"
      />
      <h1 className="text-4xl font-bold text-gray-800">Ahmad Imtiyaz</h1>
      <p className="max-w-xl text-gray-700">
        Learning new things as we go.
      </p>
      <Button asChild>
        <a href="/resume.pdf" download className="px-4">
          Download Résumé
        </a>
      </Button>
    </section>
  )
}
