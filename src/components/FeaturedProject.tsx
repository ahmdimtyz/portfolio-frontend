import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeaturedProject() {
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
