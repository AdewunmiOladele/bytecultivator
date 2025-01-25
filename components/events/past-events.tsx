import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

import { Play } from "lucide-react"
import { Button } from "../ui/button"

const pastEvents = [
  {
    id: 1,
    title: "Advanced TypeScript Patterns",
    presenter: "Dr. Sarah Chen",
    date: "Dec 15, 2023",
    duration: "1h 45m",
    thumbnail: "/placeholder.svg?height=200&width=400",
    views: 234,
  },
  {
    id: 2,
    title: "Building Scalable APIs",
    presenter: "Mike Johnson",
    date: "Dec 10, 2023",
    duration: "2h 15m",
    thumbnail: "/placeholder.svg?height=200&width=400",
    views: 567,
  },
  {
    id: 3,
    title: "Web Performance Optimization",
    presenter: "Emma Rodriguez",
    date: "Dec 5, 2023",
    duration: "1h 30m",
    thumbnail: "/placeholder.svg?height=200&width=400",
    views: 432,
  },
]

export function PastEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Past Events</CardTitle>
        <CardDescription>Watch recordings of our previous events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map((event) => (
            <div key={event.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={event.thumbnail || "/placeholder.svg"}
                alt={event.title}
                className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-full items-center justify-center">
                  <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <div className="space-y-1 p-3">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {event.presenter} • {event.duration}
                </p>
                <p className="text-xs text-muted-foreground">
                  {event.views} views • {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

