
import { Leaf, Sprout, TreesIcon as Tree, Award, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const levels = [
  {
    name: "Seedling",
    icon: Leaf,
    description: "Building a strong foundation in programming fundamentals",
    skills: ["Basic programming", "Git/GitHub", "Problem solving"],
  },
  {
    name: "Sprout",
    icon: Sprout,
    description: "Applying knowledge to real-world problems",
    skills: ["Web development", "Databases", "Testing"],
  },
  {
    name: "Sapling",
    icon: Tree,
    description: "Mastering complex concepts and specialized fields",
    skills: ["Advanced algorithms", "Cloud computing", "System design"],
  },
  {
    name: "Bloom",
    icon: Award,
    description: "Innovating and contributing to the community",
    skills: ["Technical leadership", "Mentoring", "Architecture"],
  },
  {
    name: "Cultivator",
    icon: Star,
    description: "Becoming a thought leader and innovator",
    skills: ["Vision & strategy", "Industry influence", "Legacy building"],
  },
]

export function LevelProgression() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {levels.map((level, index) => (
        <Card key={level.name} className="relative">
          {index > 0 && <div className="absolute -left-8 top-1/2 h-0.5 w-16 bg-muted-foreground/20 hidden xl:block" />}
          <CardHeader>
            <div className="flex items-center space-x-2">
              <level.icon className="h-6 w-6 text-primary" />
              <CardTitle>{level.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{level.description}</p>
            <ul className="text-sm space-y-2">
              {level.skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

