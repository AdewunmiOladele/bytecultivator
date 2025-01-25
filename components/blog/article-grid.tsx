import { BookOpen, Clock, Heart, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const articles = [
  {
    title: "Understanding React Server Components",
    description:
      "A deep dive into the next evolution of React components and how they can improve your application's performance.",
    image: "/placeholder.svg?height=300&width=600",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg",
      level: "Bloom",
    },
    stats: {
      likes: 145,
      comments: 32,
      readTime: "8 min",
    },
    tags: ["React", "Performance", "Server Components"],
    publishedAt: "2 days ago",
  },
  {
    title: "Building Scalable APIs with GraphQL",
    description: "Learn how to design and implement scalable GraphQL APIs that can handle complex data requirements.",
    image: "/placeholder.svg?height=300&width=600",
    author: {
      name: "Mike Johnson",
      avatar: "/placeholder.svg",
      level: "Sapling",
    },
    stats: {
      likes: 98,
      comments: 24,
      readTime: "12 min",
    },
    tags: ["GraphQL", "API", "Backend"],
    publishedAt: "5 days ago",
  },
]

export function ArticleGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Latest Articles</h2>
        <Button variant="outline">Filter</Button>
      </div>
      <div className="grid gap-4">
        {articles.map((article) => (
          <Card key={article.title}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="aspect-video w-full rounded-lg object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={article.author.avatar} />
                    <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{article.author.name}</span>
                    <Badge variant="secondary">{article.author.level}</Badge>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{article.publishedAt}</span>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Heart className="mr-1 h-4 w-4" />
                    {article.stats.likes}
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    {article.stats.comments}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {article.stats.readTime}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Article
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

