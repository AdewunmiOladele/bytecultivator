import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Calendar, Users, Video } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    date: "Jan 15, 2024",
    time: "2:00 PM EST",
    type: "Workshop",
    icon: Video,
    attendees: 45,
  },
  {
    id: 2,
    title: "Code Cultivation Hackathon",
    date: "Jan 20, 2024",
    time: "10:00 AM EST",
    type: "Hackathon",
    icon: Calendar,
    attendees: 120,
  },
  {
    id: 3,
    title: "System Design Deep Dive",
    date: "Jan 25, 2024",
    time: "3:00 PM EST",
    type: "Workshop",
    icon: Video,
    attendees: 67,
  },
]

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Register for upcoming workshops and hackathons</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex flex-col gap-4 rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <event.icon className="h-4 w-4" />
                    <span>{event.type}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {event.date} at {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{event.attendees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

