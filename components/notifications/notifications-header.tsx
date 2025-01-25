import { AtSign, Bell, CheckCircle2, Megaphone } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

export function NotificationsHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with your growth journey and community interactions</p>
          </div>
          <Button variant="outline">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Mark All as Read
          </Button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Bell className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">12</p>
              <p className="text-sm text-muted-foreground">Unread</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <AtSign className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">5</p>
              <p className="text-sm text-muted-foreground">Mentions</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Megaphone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">3</p>
              <p className="text-sm text-muted-foreground">Announcements</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

