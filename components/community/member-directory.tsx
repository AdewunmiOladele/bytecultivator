import { Github, Globe, MapPin, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"

const members = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg",
    level: "Bloom",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js"],
    github: "sarahchen",
    website: "sarah.dev",
  },
  {
    id: 2,
    name: "Mike Johnson",
    avatar: "/placeholder.svg",
    level: "Sapling",
    location: "London, UK",
    skills: ["Python", "Django", "AWS"],
    github: "mikej",
    website: "mikejohnson.me",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg",
    level: "Cultivator",
    location: "Berlin, Germany",
    skills: ["Vue.js", "GraphQL", "Docker"],
    github: "emmar",
    website: "emmarodriguez.com",
  },
]

export function MemberDirectory() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search members..." className="pl-10" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {members.map((member) => (
          <Card key={member.id}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{member.name}</h3>
                    <Badge variant="secondary">{member.level}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {member.location}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

