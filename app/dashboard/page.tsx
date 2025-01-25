

import { ActivityFeed } from "../../components/dashboard/activity-feed"
import { Achievements } from "../../components/dashboard/achievements"
import { DashboardHeader } from "../../components/dashboard/header"
import { GrowthTracker } from "../../components/dashboard/growth-tracker"

export default function DashboardPage() {
  return (
    <div className="container py-6 space-y-8">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2">
        <GrowthTracker />
        <Achievements />
      </div>
      <ActivityFeed />
    </div>
  )
}

