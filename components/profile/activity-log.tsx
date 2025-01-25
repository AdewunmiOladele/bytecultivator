import { Award, BookOpen, Code2, GitPullRequest, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const activities = [
  {
    icon: Code2,
    title: "Completed Coding Challenge",
    description: "Solved 'Array Manipulation Master' challenge",
    date: "2 hours ago",
    category: "Challenge",
  },
  {
    icon: MessageSquare,
    title: "Forum Contribution",
    description: "Answered question about React Server Components",
    date: "5 hours ago",
    category: "Community",
  },
  {
    icon: BookOpen,
    title: "Learning Progress",
    description: "Completed Module 5 of Frontend Development Path",
    date: "1 day ago",
    category: "Learning",
  },
  {
    icon: GitPullRequest,
    title: "Project Contribution",
    description: "Submitted PR to Open Source Learning Platform",
    date: "2 days ago",
    category: "Project",
  },
  {
    icon: Award,
    title: "Achievement Unlocked",
    description: "Earned 'Problem Solver' badge",
    date: "3 days ago",
    category: "Achievement",
  },
]

export function ActivityLog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Log</CardTitle>
        <CardDescription>Your recent activities and contributions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 rounded-lg border p-4">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{activity.title}</p>
                  <span className="text-sm text-muted-foreground">{activity.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

