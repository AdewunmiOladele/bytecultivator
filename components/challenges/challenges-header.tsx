import { Code2, Target, Trophy, Zap } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Progress } from "../ui/progress"

export function ChallengesHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Coding Challenges</h1>
            <p className="text-muted-foreground">
              Test your skills, learn from real-world scenarios, and track your progress
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <p className="font-medium">Rank: 156</p>
              <p className="text-muted-foreground">Top 10%</p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Code2 className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">45</p>
              <p className="text-sm text-muted-foreground">Challenges Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Target className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">85%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Zap className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">5 Day</p>
              <p className="text-sm text-muted-foreground">Streak</p>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to next rank</span>
            <span>75/100 points</span>
          </div>
          <Progress value={75} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}

