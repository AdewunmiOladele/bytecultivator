import { HackathonHeader } from "../../components/hackathons/hackathon-header"
import { ActiveHackathons } from "../../components/hackathons/active-hackathons"
import { HackathonTeams } from "../../components/hackathons/hackathon-teams"

export default function HackathonsPage() {
  return (
    <div className="container py-6 space-y-8">
      <HackathonHeader />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ActiveHackathons />
        </div>
        <div>
          <HackathonTeams />
        </div>
      </div>
    </div>
  )
}

