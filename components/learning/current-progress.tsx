import { BookOpen, CheckCircle2, Clock, Globe } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"

export function CurrentProgress() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Frontend Development Path</CardTitle>
            <CardDescription>Currently on Module 5: Advanced React Patterns</CardDescription>
          </div>
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Globe className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Overall Progress</span>
            <span>42%</span>
          </div>
          <Progress value={42} className="h-2" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm">
              <p>5/12</p>
              <p className="text-muted-foreground">Modules</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm">
              <p>25/60</p>
              <p className="text-muted-foreground">Tasks</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm">
              <p>15h 30m</p>
              <p className="text-muted-foreground">Time Spent</p>
            </div>
          </div>
        </div>
        <Button className="w-full">Continue Learning</Button>
      </CardContent>
    </Card>
  )
}

