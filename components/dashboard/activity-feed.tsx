import { MessageSquare, ThumbsUp, Trophy } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const activities = [
  {
    type: "comment",
    icon: MessageSquare,
    user: {
      name: "Sarah Chen",
      image: "/placeholder.svg",
      initials: "SC",
    },
    content: "Commented on your solution to Challenge #42",
    time: "5 minutes ago",
  },
  {
    type: "achievement",
    icon: Trophy,
    user: {
      name: "System",
      image: "/placeholder.svg",
      initials: "SY",
    },
    content: "You've earned the 'Early Bird' badge!",
    time: "2 hours ago",
  },
  {
    type: "like",
    icon: ThumbsUp,
    user: {
      name: "Mike Johnson",
      image: "/placeholder.svg",
      initials: "MJ",
    },
    content: "Liked your blog post about React hooks",
    time: "1 day ago",
  },
]

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
        <CardDescription>Stay updated with your community interactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={activity.user.image} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.user.name}</span>
                  <activity.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">{activity.content}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

