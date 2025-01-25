"use client"

import * as React from "react"
import { Calendar } from "../ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export function EventCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  // Example dates with events
  const eventDates = [new Date(2024, 0, 15), new Date(2024, 0, 20), new Date(2024, 0, 25), new Date(2024, 1, 5)]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Calendar</CardTitle>
        <CardDescription>Browse and register for upcoming events</CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          modifiers={{
            event: eventDates,
          }}
          modifiersStyles={{
            event: {
              backgroundColor: "hsl(var(--primary))",
              color: "white",
              borderRadius: "50%",
            },
          }}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  )
}

