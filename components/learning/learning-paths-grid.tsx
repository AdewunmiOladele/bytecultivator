import { Brain, Code2, Database, Globe, Lock, Server } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const paths = [
  {
    title: "Frontend Development",
    description: "Master modern web development with React and Next.js",
    icon: Globe,
    modules: 12,
    hours: 40,
    level: "Beginner",
    inProgress: true,
  },
  {
    title: "Backend Development",
    description: "Learn server-side programming and API development",
    icon: Server,
    modules: 10,
    hours: 35,
    level: "Intermediate",
  },
  {
    title: "Database Management",
    description: "Understand SQL, NoSQL, and database design",
    icon: Database,
    modules: 8,
    hours: 30,
    level: "Intermediate",
    locked: true,
  },
  {
    title: "Data Structures & Algorithms",
    description: "Master fundamental computer science concepts",
    icon: Code2,
    modules: 15,
    hours: 50,
    level: "Advanced",
  },
  {
    title: "Machine Learning Basics",
    description: "Introduction to AI and machine learning concepts",
    icon: Brain,
    modules: 10,
    hours: 45,
    level: "Advanced",
    locked: true,
  },
]

export function LearningPathsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {paths.map((path) => (
        <Card key={path.title} className={path.locked ? "opacity-75" : ""}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <path.icon className="h-5 w-5 text-primary" />
                  {path.title}
                </CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </div>
              {path.locked && (
                <div className="rounded-full bg-muted p-2">
                  <Lock className="h-4 w-4" />
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{path.modules} modules</Badge>
                <Badge variant="secondary">{path.hours} hours</Badge>
                <Badge variant="secondary">{path.level}</Badge>
              </div>
              <Button className="w-full" variant={path.inProgress ? "default" : "outline"} disabled={path.locked}>
                {path.inProgress ? "Continue" : path.locked ? "Locked" : "Start Learning"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

