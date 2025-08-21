import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Linkedin, Github, Mail, MapPin } from "lucide-react"

const contacts = [
  {
    Icon: Linkedin,
    label: "LinkedIn",
    detail: "Ahmad Imtiyaz",
    href: "https://linkedin.com/in/ahmad-imtiyaz-002924246/",
  },
  {
    Icon: Github,
    label: "Github",
    detail: "ahmdimtyz",
  },
  {
    Icon: Mail,
    label: "Email Address",
    detail: "ahmadimyazzs@gmail.com",
  },
  {
    Icon: MapPin,
    label: "Location",
    detail: "Kuala Lumpur, Malaysia",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Let’s Connect
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {contacts.map(({ Icon, label, detail }) => (
          <Card
            key={label}
            className="bg-white text-gray-800 hover:bg-gray-200 transition-colors"
          >
            <CardHeader>
              <CardTitle className="text-lg">{label}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-3 pt-0">
              <div className="p-2 bg-gray-200 rounded-full">
                <Icon className="w-5 h-5 text-black" />
              </div>
              <span className="text-sm">{detail}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
