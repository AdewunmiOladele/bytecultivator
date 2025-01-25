import { Clock, Star, Trophy } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"

const topParticipants = [
  {
    name: "Sarah Chen",
    avatar: "/placeholder.svg",
    score: 95,
    position: 1,
  },
  {
    name: "Mike Johnson",
    avatar: "/placeholder.svg",
    score: 88,
    position: 2,
  },
  {
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg",
    score: 82,
    position: 3,
  },
]

export function WeeklyChallenge() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Weekly Challenge</CardTitle>
            <CardDescription>Ends in 3 days</CardDescription>
          </div>
          <Trophy className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold">Build a Responsive Dashboard</h3>
          <p className="text-sm text-muted-foreground">
            Create a responsive admin dashboard using React and Tailwind CSS
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Tailwind</Badge>
            <Badge variant="outline">UI/UX</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>Time Remaining</span>
            </div>
            <span>3d 4h 12m</span>
          </div>
          <Progress value={65} className="h-2" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Top Participants</h4>
            <Star className="h-4 w-4 text-primary" />
          </div>
          {topParticipants.map((participant) => (
            <div key={participant.name} className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">#{participant.position}</span>
                <Avatar>
                  <AvatarImage src={participant.avatar} />
                  <AvatarFallback>{participant.name[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{participant.name}</span>
              </div>
              <Badge variant="secondary">{participant.score}</Badge>
            </div>
          ))}
        </div>
        <Button className="w-full">Join Challenge</Button>
      </CardContent>
    </Card>
  )
}

