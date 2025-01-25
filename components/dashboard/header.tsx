import { Leaf } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"

export function DashboardHeader() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder.svg" alt="User avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle>Welcome back, Jane Doe!</CardTitle>
          <CardDescription>Current Level: Seedling</CardDescription>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
          <Leaf className="h-4 w-4" />
          <span>Level 2</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to Sprout</span>
            <span>75%</span>
          </div>
          <Progress value={75} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}

