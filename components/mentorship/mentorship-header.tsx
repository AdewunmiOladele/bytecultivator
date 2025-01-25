import { Calendar, MessageSquare, Users } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

export function MentorshipHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Mentorship Program</h1>
            <p className="text-muted-foreground">Connect with experienced developers and accelerate your growth</p>
          </div>
          <Button>Become a Mentor</Button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">45+</p>
              <p className="text-sm text-muted-foreground">Active Mentors</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">200+</p>
              <p className="text-sm text-muted-foreground">Sessions Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">4.8/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

