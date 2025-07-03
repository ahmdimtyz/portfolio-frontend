import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface Certificate {
  title: string
  issuer: string
  date: string
  link?: string
}

const certificates: Certificate[] = [
  {
    title: "B.Sc. in Computer Science",
    issuer: "International Islamic University Malaysia (IIUM)",
    date: "Expected September 2025",
  },
  {
    title: "Foundation in Engineering and Computer Science",
    issuer: "Centre for Foundation Studies IIUM",
    date: "Gambang, Pahang. 2021",
  },
  {
    title: "RunCloud Professional Certificate – Cloud Practitioner (Entry Level)",
    issuer: "RunCloud",
    date: "2022",
  },
  {
    title: "RunCloud Professional Certificate – Cloud Practitioner (Advanced Level)",
    issuer: "RunCloud",
    date: "2022",
  },
  {
    title: "British Council English Aptis Test – CEFR C overall level",
    issuer: "British Council",
    date: "2023",
  },
  {
    title: "Cisco Introduction to Networking",
    issuer: "Cisco",
    date: "2023",
  },
]

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Education & Certifications
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <Card key={c.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{c.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{c.issuer}</p>
              <p className="text-xs text-gray-500 mb-2">{c.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
