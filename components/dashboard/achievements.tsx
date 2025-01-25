import { Award, Code2, GitPullRequest, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const achievements = [
  {
    icon: Code2,
    name: "Code Warrior",
    description: "Completed 10 coding challenges",
    date: "2 days ago",
  },
  {
    icon: Users,
    name: "Team Player",
    description: "Participated in first group project",
    date: "1 week ago",
  },
  {
    icon: GitPullRequest,
    name: "Open Source Contributor",
    description: "First PR merged",
    date: "2 weeks ago",
  },
  {
    icon: Award,
    name: "Quick Learner",
    description: "Completed beginner track",
    date: "1 month ago",
  },
]

export function Achievements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Achievements</CardTitle>
        <CardDescription>Your latest milestones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.name} className="flex items-center gap-4 rounded-lg border p-3">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <achievement.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium leading-none">{achievement.name}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
              <p className="text-sm text-muted-foreground">{achievement.date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

