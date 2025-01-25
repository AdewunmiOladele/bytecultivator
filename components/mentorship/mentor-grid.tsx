import { Calendar, Clock, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const mentors = [
  {
    name: "Dr. Sarah Chen",
    avatar: "/placeholder.svg",
    role: "Senior Software Architect",
    company: "Tech Giants Inc.",
    specialties: ["System Design", "Cloud Architecture", "React"],
    rating: 4.9,
    reviews: 56,
    availability: "Next available: Tomorrow",
    sessionLength: "45 min",
    level: "Cultivator",
  },
  {
    name: "Mike Johnson",
    avatar: "/placeholder.svg",
    role: "Frontend Lead",
    company: "Creative Solutions",
    specialties: ["React", "TypeScript", "Performance"],
    rating: 4.8,
    reviews: 42,
    availability: "Next available: Today",
    sessionLength: "30 min",
    level: "Bloom",
  },
  {
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg",
    role: "Backend Developer",
    company: "Data Systems Co.",
    specialties: ["Node.js", "Python", "Databases"],
    rating: 4.7,
    reviews: 38,
    availability: "Next available: This week",
    sessionLength: "60 min",
    level: "Bloom",
  },
]

export function MentorGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Available Mentors</h2>
        <Button variant="outline">Filter</Button>
      </div>
      <div className="grid gap-4">
        {mentors.map((mentor) => (
          <Card key={mentor.name}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mentor.avatar} />
                  <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{mentor.name}</CardTitle>
                      <CardDescription>
                        {mentor.role} at {mentor.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{mentor.level}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span>{mentor.rating}</span>
                    <span className="text-muted-foreground">({mentor.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {mentor.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {mentor.availability}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {mentor.sessionLength}
                    </div>
                  </div>
                  <Button>Book Session</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

