import { Trophy } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const leaderboardData = [
  {
    rank: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg",
    level: "Cultivator",
    points: 2500,
    badge: "🏆 This Month's Top Contributor",
  },
  {
    rank: 2,
    name: "Mike Johnson",
    avatar: "/placeholder.svg",
    level: "Bloom",
    points: 2350,
  },
  {
    rank: 3,
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg",
    level: "Bloom",
    points: 2200,
  },
  {
    rank: 4,
    name: "Alex Kim",
    avatar: "/placeholder.svg",
    level: "Sapling",
    points: 2050,
  },
  {
    rank: 5,
    name: "Chris Taylor",
    avatar: "/placeholder.svg",
    level: "Sapling",
    points: 1900,
  },
]

export function Leaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Contributors</CardTitle>
        <CardDescription>This month's most active community members</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {leaderboardData.map((user) => (
            <div key={user.name} className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-bold">
                {user.rank}
              </div>
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{user.name}</p>
                  <Badge variant="secondary">{user.level}</Badge>
                </div>
                {user.badge && (
                  <p className="text-sm text-primary flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    {user.badge}
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="font-bold">{user.points}</p>
                <p className="text-sm text-muted-foreground">points</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

