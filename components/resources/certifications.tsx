import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Award, CheckCircle2, Clock } from "lucide-react"
import { Button } from "../ui/button"

const certifications = [
  {
    title: "Frontend Developer Certification",
    description: "Master modern frontend development with React and Next.js",
    duration: "3 months",
    modules: 12,
    price: "$299",
    features: ["React fundamentals", "State management", "Server-side rendering", "Performance optimization"],
  },
  {
    title: "Backend Developer Certification",
    description: "Become proficient in server-side development and APIs",
    duration: "4 months",
    modules: 15,
    price: "$399",
    features: ["Node.js essentials", "Database design", "API development", "Security best practices"],
  },
]

export function Certifications() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {certifications.map((cert) => (
        <Card key={cert.title}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>{cert.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {cert.duration}
                </div>
                <div className="flex items-center">
                  <Award className="mr-1 h-4 w-4" />
                  {cert.modules} modules
                </div>
              </div>
              <ul className="space-y-2">
                {cert.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4">
                <div className="text-2xl font-bold">{cert.price}</div>
                <Button>Enroll Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

