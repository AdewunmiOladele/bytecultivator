import { EventCalendar } from "../../components/events/calendar"
import { UpcomingEvents } from "../../components/events/upcoming-events"
import { PastEvents } from "../../components/events/past-events"


export default function EventsPage() {
  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Events & Workshops</h1>
        <p className="text-muted-foreground">
          Join our community events, workshops, and hackathons to level up your skills and connect with fellow
          developers.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <EventCalendar />
        <UpcomingEvents />
      </div>
      <PastEvents />
    </div>
  )
}

