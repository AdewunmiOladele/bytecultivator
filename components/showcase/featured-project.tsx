import { ArrowRight, Star, Trophy } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const featuredProject = {
  title: "Sustainable Energy Monitor",
  description: "An IoT solution for tracking and optimizing energy consumption in real-time",
  image: "/placeholder.svg?height=400&width=600",
  author: {
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg",
    level: "Cultivator",
  },
  achievements: ["Winner - Green Tech Hackathon", "Most Innovative Project", "Community Choice Award"],
  impact: {
    users: "1,200+",
    energySaved: "45,000 kWh",
    sustainability: "32 tons CO₂",
  },
}

export function FeaturedProject() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <CardTitle>Featured Project</CardTitle>
            </div>
            <CardDescription>This month's standout</CardDescription>
          </div>
          <Trophy className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <img
          src={featuredProject.image || "/placeholder.svg"}
          alt={featuredProject.title}
          className="aspect-video w-full rounded-lg object-cover"
        />
        <div className="space-y-2">
          <h3 className="font-semibold">{featuredProject.title}</h3>
          <p className="text-sm text-muted-foreground">{featuredProject.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={featuredProject.author.avatar} />
            <AvatarFallback>{featuredProject.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{featuredProject.author.name}</span>
            <Badge variant="secondary">{featuredProject.author.level}</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Achievements</h4>
          <div className="space-y-2">
            {featuredProject.achievements.map((achievement) => (
              <div key={achievement} className="flex items-center gap-2 rounded-lg border p-2 text-sm">
                <Trophy className="h-4 w-4 text-primary" />
                {achievement}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Impact</h4>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg border p-2">
              <p className="font-medium">{featuredProject.impact.users}</p>
              <p className="text-xs text-muted-foreground">Active Users</p>
            </div>
            <div className="rounded-lg border p-2">
              <p className="font-medium">{featuredProject.impact.energySaved}</p>
              <p className="text-xs text-muted-foreground">Energy Saved</p>
            </div>
            <div className="rounded-lg border p-2">
              <p className="font-medium">{featuredProject.impact.sustainability}</p>
              <p className="text-xs text-muted-foreground">CO₂ Reduced</p>
            </div>
          </div>
        </div>
        <Button className="w-full">
          View Project Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

