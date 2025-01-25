import { Award, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const spotlightMembers = [
  {
    name: "Dr. Sarah Chen",
    avatar: "/placeholder.svg",
    level: "Cultivator",
    achievement: "Most Helpful Member",
    contribution: "Published 5 technical guides this month",
    specialization: "System Architecture",
  },
  {
    name: "Mike Johnson",
    avatar: "/placeholder.svg",
    level: "Bloom",
    achievement: "Top Contributor",
    contribution: "Helped 50+ members in discussions",
    specialization: "Frontend Development",
  },
]

export function MemberSpotlight() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-primary" />
          Member Spotlight
        </CardTitle>
        <CardDescription>Community members making an impact</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {spotlightMembers.map((member) => (
          <div key={member.name} className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={member.avatar} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.level}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{member.achievement}</span>
              </div>
              <p className="text-sm text-muted-foreground">{member.contribution}</p>
              <Badge variant="outline">{member.specialization}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

