import { Eye, Github, Globe, Heart, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management app that uses AI to prioritize and categorize tasks",
    image: "/placeholder.svg?height=300&width=600",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg",
      level: "Bloom",
    },
    stats: {
      likes: 45,
      comments: 12,
      views: 230,
    },
    tags: ["React", "TypeScript", "AI", "Node.js"],
    links: {
      github: "https://github.com/example/project",
      demo: "https://demo.example.com",
    },
  },
  {
    title: "Real-time Collaboration Tool",
    description: "A collaborative workspace with real-time updates and team management features",
    image: "/placeholder.svg?height=300&width=600",
    author: {
      name: "Mike Johnson",
      avatar: "/placeholder.svg",
      level: "Sapling",
    },
    stats: {
      likes: 38,
      comments: 8,
      views: 185,
    },
    tags: ["WebSocket", "React", "MongoDB", "Express"],
    links: {
      github: "https://github.com/example/project",
      demo: "https://demo.example.com",
    },
  },
]

export function ProjectGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Recent Projects</h2>
        <Button variant="outline">Filter</Button>
      </div>
      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={project.author.avatar} />
                  <AvatarFallback>{project.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>by {project.author.name}</CardDescription>
                    </div>
                    <Badge variant="secondary">{project.author.level}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="aspect-video w-full rounded-lg object-cover"
              />
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Heart className="mr-1 h-4 w-4" />
                    {project.stats.likes}
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    {project.stats.comments}
                  </div>
                  <div className="flex items-center">
                    <Eye className="mr-1 h-4 w-4" />
                    {project.stats.views}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

