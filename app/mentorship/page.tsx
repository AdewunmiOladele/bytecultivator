import { MentorshipHeader } from "../../components/mentorship/mentorship-header"
import { MentorGrid } from "../../components/mentorship/mentor-grid"
import { MentorshipSchedule } from "../../components/mentorship/mentorship-schedule"

export default function MentorshipPage() {
  return (
    <div className="container py-6 space-y-8">
      <MentorshipHeader />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <MentorGrid />
        </div>
        <div>
          <MentorshipSchedule />
        </div>
      </div>
    </div>
  )
}

