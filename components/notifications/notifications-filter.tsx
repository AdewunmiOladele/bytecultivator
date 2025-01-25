import { GitPullRequest, Heart, Megaphone, MessageSquare, Trophy } from "lucide-react"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

const notificationTypes = [
  {
    id: "achievements",
    label: "Achievements",
    description: "Progress and milestones",
    icon: Trophy,
    count: 3,
  },
  {
    id: "mentions",
    label: "Mentions",
    description: "When you're mentioned",
    icon: MessageSquare,
    count: 5,
  },
  {
    id: "likes",
    label: "Likes",
    description: "Reactions to your content",
    icon: Heart,
    count: 12,
  },
  {
    id: "contributions",
    label: "Contributions",
    description: "Updates on your PRs",
    icon: GitPullRequest,
    count: 2,
  },
  {
    id: "announcements",
    label: "Announcements",
    description: "Platform updates",
    icon: Megaphone,
    count: 1,
  },
]

export function NotificationsFilter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notificationTypes.map((type) => (
          <div key={type.id} className="flex items-center justify-between space-x-2 rounded-lg border p-3">
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <type.icon className="h-4 w-4 text-primary" />
                <Label htmlFor={type.id} className="font-medium">
                  {type.label}
                </Label>
                <Badge variant="secondary" className="ml-auto">
                  {type.count}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground pl-6">{type.description}</p>
            </div>
            <Switch id={type.id} defaultChecked />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

