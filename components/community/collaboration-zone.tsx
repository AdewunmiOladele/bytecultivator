import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Users, Calendar, GitBranch } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Open Source Learning Platform",
    description: "Building a platform for sharing educational resources",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    teamSize: 4,
    duration: "3 months",
    difficulty: "Medium",
    status: "Recruiting",
  },
  {
    id: 2,
    title: "Developer Portfolio Generator",
    description: "Create beautiful portfolios with a simple CLI tool",
    tech: ["React", "Node.js", "GraphQL"],
    teamSize: 3,
    duration: "2 months",
    difficulty: "Easy",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Code Review Assistant",
    description: "AI-powered code review automation tool",
    tech: ["Python", "Machine Learning", "GitHub API"],
    teamSize: 5,
    duration: "6 months",
    difficulty: "Hard",
    status: "Recruiting",
  },
]

const difficultyColors = {
  Easy: "bg-green-500/10 text-green-500",
  Medium: "bg-yellow-500/10 text-yellow-500",
  Hard: "bg-red-500/10 text-red-500",
}

export function CollaborationZone() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Open Projects</h2>
        <Button>Create Project</Button>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <Badge
                  variant="secondary"
                  className={difficultyColors[project.difficulty as keyof typeof difficultyColors]}
                >
                  {project.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {project.teamSize} members
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <GitBranch className="mr-1 h-4 w-4" />
                      {project.status}
                    </div>
                  </div>
                  <Button variant="outline">Join Project</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

