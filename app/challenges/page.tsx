import { ChallengesHeader } from "../../components/challenges/challenges-header"
import { ChallengeGrid } from "../../components/challenges/challenge-grid"
import { WeeklyChallenge } from "../../components/challenges/weekly-challenge"

export default function ChallengePage() {
  return (
    <div className="container py-6 space-y-8">
      <ChallengesHeader />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ChallengeGrid />
        </div>
        <div>
          <WeeklyChallenge />
        </div>
      </div>
    </div>
  )
}

