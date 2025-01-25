import { Plus, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const teams = [
  {
    name: "Innovation Squad",
    project: "AI-Powered Code Review",
    members: [
      { name: "Sarah Chen", avatar: "/placeholder.svg" },
      { name: "Mike Johnson", avatar: "/placeholder.svg" },
      { name: "Emma Rodriguez", avatar: "/placeholder.svg" },
    ],
    openRoles: ["Frontend Developer", "ML Engineer"],
    hackathon: "AI Innovation Challenge",
  },
  {
    name: "Green Tech Warriors",
    project: "Smart Energy Monitor",
    members: [
      { name: "Alex Kim", avatar: "/placeholder.svg" },
      { name: "Lisa Park", avatar: "/placeholder.svg" },
    ],
    openRoles: ["IoT Developer", "UI Designer"],
    hackathon: "Sustainable Tech Hackathon",
  },
]

export function HackathonTeams() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Teams</CardTitle>
            <CardDescription>Find or create a team</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Create Team
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {teams.map((team) => (
          <div key={team.name} className="space-y-4 rounded-lg border p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{team.name}</h3>
                <Badge variant="secondary">{team.hackathon}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{team.project}</p>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={team.members[0].avatar} />
                <AvatarFallback>{team.members[0].name[0]}</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8">
                <AvatarImage src={team.members[1].avatar} />
                <AvatarFallback>{team.members[1].name[0]}</AvatarFallback>
              </Avatar>
              {team.members.length > 2 && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm">
                  +{team.members.length - 2}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                Open Roles ({team.openRoles.length})
              </div>
              <div className="flex flex-wrap gap-2">
                {team.openRoles.map((role) => (
                  <Badge key={role} variant="outline">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
            <Button className="w-full" variant="outline">
              Join Team
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

