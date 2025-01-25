import { Award, Star } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Progress } from "../ui/progress"

export function RewardsHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Rewards & Recognition</h1>
            <p className="text-muted-foreground">Earn tokens and unlock rewards as you grow</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <Star className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <p className="font-medium">Level 3</p>
                <p className="text-muted-foreground">Sapling</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <Award className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <p className="font-medium">12 Badges</p>
                <p className="text-muted-foreground">Earned</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to next level</span>
            <span>750/1000 XP</span>
          </div>
          <Progress value={75} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}

