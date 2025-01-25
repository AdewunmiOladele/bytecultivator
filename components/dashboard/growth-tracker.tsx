import { Brain, Code, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const traits = [
  {
    name: "Problem Solver",
    icon: Brain,
    level: 4,
    description: "Ability to tackle complex coding challenges",
  },
  {
    name: "Team Player",
    icon: Users,
    level: 3,
    description: "Collaboration and communication skills",
  },
  {
    name: "Technical Skills",
    icon: Code,
    level: 3,
    description: "Programming languages and tools proficiency",
  },
]

export function GrowthTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Growth Traits</CardTitle>
        <CardDescription>Your developer DNA profile</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {traits.map((trait) => (
            <div key={trait.name} className="space-y-2">
              <div className="flex items-center gap-2">
                <trait.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{trait.name}</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={`h-2 w-full rounded-full ${i < trait.level ? "bg-primary" : "bg-muted"}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{trait.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

