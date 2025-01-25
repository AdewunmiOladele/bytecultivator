import { NotificationsHeader } from "../../components/notifications/notifications-header"
import { NotificationsList } from "../../components/notifications/notifications-list"
import { NotificationsFilter } from "../../components/notifications/notifications-filter"

export default function NotificationsPage() {
  return (
    <div className="container py-6 space-y-8">
      <NotificationsHeader />
      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-3">
          <NotificationsList />
        </div>
        <div>
          <NotificationsFilter />
        </div>
      </div>
    </div>
  )
}

