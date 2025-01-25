import { Brain, Code2, GitPullRequest, MessageSquare, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"

const achievements = [
  {
    icon: Brain,
    title: "Problem Solver",
    description: "Complete 50 coding challenges",
    progress: 80,
    current: 40,
    total: 50,
    unlocked: false,
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborate on 5 community projects",
    progress: 60,
    current: 3,
    total: 5,
    unlocked: false,
  },
  {
    icon: MessageSquare,
    title: "Mentor",
    description: "Help 20 community members",
    progress: 100,
    current: 20,
    total: 20,
    unlocked: true,
  },
  {
    icon: GitPullRequest,
    title: "Open Source Contributor",
    description: "Get 10 PRs merged",
    progress: 40,
    current: 4,
    total: 10,
    unlocked: false,
  },
  {
    icon: Code2,
    title: "Code Master",
    description: "Complete all learning paths",
    progress: 30,
    current: 3,
    total: 10,
    unlocked: false,
  },
]

export function Achievements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
        <CardDescription>Track your progress and unlock achievements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="rounded-lg border p-4 space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-full p-2 ${achievement.unlocked ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                >
                  <achievement.icon className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>
                    {achievement.current}/{achievement.total}
                  </span>
                </div>
                <Progress value={achievement.progress} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

