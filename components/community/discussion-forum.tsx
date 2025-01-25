import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { MessageSquare, ThumbsUp } from "lucide-react"

const discussions = [
  {
    id: 1,
    title: "Best practices for React Server Components",
    category: "React",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg",
      level: "Bloom",
    },
    replies: 23,
    likes: 45,
    lastActivity: "2 hours ago",
    preview: "I've been working with RSC and wanted to share some patterns I've found useful...",
  },
  {
    id: 2,
    title: "Getting started with TypeScript - Tips and Tricks",
    category: "TypeScript",
    author: {
      name: "Mike Johnson",
      avatar: "/placeholder.svg",
      level: "Sapling",
    },
    replies: 15,
    likes: 32,
    lastActivity: "5 hours ago",
    preview: "Here are some TypeScript tips that helped me level up my development game...",
  },
  {
    id: 3,
    title: "Database optimization techniques for scaling applications",
    category: "Databases",
    author: {
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg",
      level: "Cultivator",
    },
    replies: 38,
    likes: 67,
    lastActivity: "1 day ago",
    preview: "Let's discuss various techniques for optimizing database performance...",
  },
]

export function DiscussionForum() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Recent Discussions</h2>
        <Button>Start Discussion</Button>
      </div>
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <Card key={discussion.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{discussion.title}</CardTitle>
                  <CardDescription>{discussion.preview}</CardDescription>
                </div>
                <Badge variant="secondary">{discussion.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={discussion.author.avatar} />
                    <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{discussion.author.name}</p>
                    <p className="text-sm text-muted-foreground">{discussion.author.level}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{discussion.replies}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{discussion.likes}</span>
                  </div>
                  <span className="text-sm">{discussion.lastActivity}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

