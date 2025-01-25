import { Calendar, Clock, Rocket, Trophy, Users } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"

const hackathons = [
  {
    title: "AI Innovation Challenge",
    description: "Build innovative AI-powered applications",
    startDate: "Feb 1, 2024",
    endDate: "Feb 15, 2024",
    participants: 78,
    prizePool: "$3,000",
    tags: ["AI/ML", "Innovation", "Web3"],
    progress: 65,
    status: "In Progress",
  },
  {
    title: "Sustainable Tech Hackathon",
    description: "Create solutions for environmental challenges",
    startDate: "Feb 10, 2024",
    endDate: "Feb 25, 2024",
    participants: 45,
    prizePool: "$2,000",
    tags: ["Sustainability", "IoT", "Mobile"],
    progress: 25,
    status: "Registration Open",
  },
  {
    title: "Web3 DeFi Challenge",
    description: "Develop decentralized finance applications",
    startDate: "Mar 1, 2024",
    endDate: "Mar 15, 2024",
    participants: 33,
    prizePool: "$4,000",
    tags: ["Blockchain", "DeFi", "Smart Contracts"],
    progress: 0,
    status: "Coming Soon",
  },
]

export function ActiveHackathons() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Active Hackathons</h2>
        <Button variant="outline">Filter</Button>
      </div>
      <div className="grid gap-4">
        {hackathons.map((hackathon) => (
          <Card key={hackathon.title}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{hackathon.title}</CardTitle>
                  <CardDescription>{hackathon.description}</CardDescription>
                </div>
                <Badge variant={hackathon.status === "In Progress" ? "default" : "secondary"}>{hackathon.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {hackathon.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {hackathon.startDate} - {hackathon.endDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {hackathon.participants} participants
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    {hackathon.prizePool} in prizes
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Progress
                    </div>
                    <span>{hackathon.progress}%</span>
                  </div>
                  <Progress value={hackathon.progress} className="h-2" />
                </div>
                <div className="flex justify-end">
                  <Button>
                    <Rocket className="mr-2 h-4 w-4" />
                    {hackathon.status === "Coming Soon" ? "Register Interest" : "Join Hackathon"}
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

