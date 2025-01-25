import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"
import { Button } from "../ui/button"
import { BookOpen, Code2, Database, Globe, Server } from "lucide-react"

const paths = [
  {
    title: "Frontend Development",
    description: "Master modern web development with React and Next.js",
    icon: Globe,
    progress: 65,
    modules: 12,
    completedModules: 8,
    level: "Sprout",
  },
  {
    title: "Backend Development",
    description: "Learn server-side programming and API development",
    icon: Server,
    progress: 40,
    modules: 10,
    completedModules: 4,
    level: "Seedling",
  },
  {
    title: "Database Management",
    description: "Understand SQL, NoSQL, and database design",
    icon: Database,
    progress: 20,
    modules: 8,
    completedModules: 2,
    level: "Seedling",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Master fundamental computer science concepts",
    icon: Code2,
    progress: 30,
    modules: 15,
    completedModules: 5,
    level: "Sprout",
  },
]

export function LearningPaths() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {paths.map((path) => (
        <Card key={path.title}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <path.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{path.progress}%</span>
                </div>
                <Progress value={path.progress} className="h-2" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>
                    {path.completedModules}/{path.modules} modules
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  Continue
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

