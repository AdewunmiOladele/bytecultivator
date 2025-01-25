import { CheckCircle2, Timer, Trophy, Users } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const milestones = [
  {
    title: "Learn React Fundamentals",
    completed: true,
  },
  {
    title: "Build First Component",
    completed: true,
  },
  {
    title: "Master State Management",
    completed: false,
    current: true,
  },
  {
    title: "Advanced Patterns",
    completed: false,
  },
  {
    title: "Performance Optimization",
    completed: false,
  },
]

export function RecommendedPath() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Next Steps</CardTitle>
        <CardDescription>Based on your progress and interests</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 rounded-lg border p-3">
            <Trophy className="h-5 w-5 text-primary" />
            <div className="flex-1">
              <p className="font-medium">Next Achievement</p>
              <p className="text-sm text-muted-foreground">React Developer Level 2</p>
            </div>
            <Badge variant="secondary">500 XP</Badge>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 rounded-lg border p-3">
              <Timer className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <p>2.5 hours</p>
                <p className="text-muted-foreground">Today</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border p-3">
              <Users className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <p>1,234</p>
                <p className="text-muted-foreground">Learning</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Path Milestones</h3>
          <div className="space-y-2">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 rounded-lg border p-3 ${milestone.current ? "border-primary bg-primary/5" : ""
                  }`}
              >
                <CheckCircle2
                  className={`h-4 w-4 ${milestone.completed ? "text-primary" : "text-muted-foreground"}`}
                  fill={milestone.completed ? "currentColor" : "none"}
                />
                <span className={milestone.completed ? "line-through" : ""}>{milestone.title}</span>
              </div>
            ))}
          </div>
        </div>
        <Button className="w-full">View Full Path</Button>
      </CardContent>
    </Card>
  )
}

